/** @format */

import { randomUUID } from 'node:crypto'
import { getDb } from '../db.js'

const testState = {
    ordersById: new Map(),
    designConfirmationsById: new Map(),
    artisanMatchesById: new Map(),
    usersById: new Map(),
    artisansById: new Map(),
}

function ensureTestSupport() {
    if (process.env.NODE_ENV !== 'test') {
        return
    }

    const db = getDb()
    if (db.__ordersRepositoryPatched) {
        return
    }

    const originalCreateDesignConfirmation =
        db.designConfirmation?.create?.bind(db.designConfirmation) ?? null

    if (originalCreateDesignConfirmation) {
        db.designConfirmation.create = async ({ data }) => {
            const row = await originalCreateDesignConfirmation({ data })
            testState.designConfirmationsById.set(row.id, row)
            return row
        }
    }

    const originalCreateOrder = db.order?.create?.bind(db.order) ?? null
    if (originalCreateOrder) {
        db.order.create = async ({ data }) => {
            const row = await originalCreateOrder({ data })
            testState.ordersById.set(row.id, row)
            return row
        }
    }

    const originalReset = db.__reset?.bind(db) ?? null
    if (originalReset) {
        db.__reset = () => {
            originalReset()
            testState.ordersById.clear()
            testState.designConfirmationsById.clear()
            testState.artisanMatchesById.clear()
            testState.usersById.clear()
            testState.artisansById.clear()
        }
    }

    db.__ordersRepositoryPatched = true
}

ensureTestSupport()

function createTestOrder(data) {
    const now = new Date().toISOString()

    const row = {
        id: data.id ?? `order-${randomUUID()}`,
        userId: data.userId,
        artisanId: data.artisanId,
        submissionId: data.submissionId,
        designConfirmationId: data.designConfirmationId,
        status: data.status ?? 'pending',
        totalPriceFen: data.totalPriceFen,
        agreedDeliveryDate: data.agreedDeliveryDate,
        notes: data.notes ?? null,
        createdAt: data.createdAt ?? now,
        updatedAt: data.updatedAt ?? now,
    }

    testState.ordersById.set(row.id, row)
    return row
}

function parsePriceRange(value) {
    const numbers = Array.from(value?.matchAll(/\d[\d,]*/g) ?? [], (match) =>
        Number(match[0].replace(/,/g, '')),
    ).filter((item) => Number.isFinite(item) && item > 0)

    if (!numbers.length) {
        return { min: 0, max: 0 }
    }

    if (numbers.length === 1) {
        return { min: numbers[0] * 100, max: numbers[0] * 100 }
    }

    return { min: numbers[0] * 100, max: numbers[numbers.length - 1] * 100 }
}

function parseAverageDays(value) {
    const numbers = Array.from(value?.matchAll(/\d+/g) ?? [], (match) =>
        Number(match[0]),
    ).filter((item) => Number.isFinite(item) && item > 0)

    if (!numbers.length) {
        return 14
    }

    const total = numbers.reduce((sum, item) => sum + item, 0)
    return Math.round(total / numbers.length)
}

export async function createOrder(data) {
    ensureTestSupport()

    if (process.env.NODE_ENV === 'test') {
        return createTestOrder(data)
    }

    const db = getDb()
    return db.order.create({
        data: {
            id: data.id,
            userId: data.userId,
            artisanId: data.artisanId,
            submissionId: data.submissionId,
            designConfirmationId: data.designConfirmationId,
            status: data.status ?? 'pending',
            totalPriceFen: data.totalPriceFen,
            agreedDeliveryDate: data.agreedDeliveryDate,
            notes: data.notes ?? null,
        },
    })
}

export async function ensureUserForOrder(userId) {
    ensureTestSupport()

    if (process.env.NODE_ENV === 'test') {
        const existing = testState.usersById.get(userId)
        if (existing) {
            return existing
        }

        const row = { id: userId, nickname: '测试用户' }
        testState.usersById.set(userId, row)
        return row
    }

    const db = getDb()
    const existing = await db.user.findUnique({ where: { id: userId } })
    if (existing) {
        return existing
    }

    return db.user.create({
        data: {
            id: userId,
            nickname: '演示用户',
        },
    })
}

export async function resolveArtisanForOrder(artisanIdOrMatchId) {
    ensureTestSupport()

    if (process.env.NODE_ENV === 'test') {
        const existing = testState.artisansById.get(artisanIdOrMatchId)
        if (existing) {
            return existing
        }

        const match = testState.artisanMatchesById.get(artisanIdOrMatchId)
        const row = {
            id: match?.artisanId ?? artisanIdOrMatchId,
            name: match?.name ?? '测试传承人',
        }
        testState.artisansById.set(row.id, row)
        return row
    }

    const db = getDb()

    const existingArtisan = await db.artisan.findUnique({
        where: { id: artisanIdOrMatchId },
    })
    if (existingArtisan) {
        return existingArtisan
    }

    const match = await db.artisanMatch.findUnique({
        where: { id: artisanIdOrMatchId },
        select: {
            id: true,
            artisanId: true,
            name: true,
            craftExpertise: true,
            priceRange: true,
            timelineRange: true,
        },
    })

    if (match?.artisanId) {
        const linkedArtisan = await db.artisan.findUnique({
            where: { id: match.artisanId },
        })
        if (linkedArtisan) {
            return linkedArtisan
        }
    }

    const priceRange = parsePriceRange(match?.priceRange ?? '')
    const nextArtisanId = match?.artisanId ?? `artisan-profile-${match?.id ?? artisanIdOrMatchId}`

    return db.artisan.create({
        data: {
            id: nextArtisanId,
            name: match?.name ?? '待确认传承人',
            bio: match?.craftExpertise ?? '自动补齐的演示传承人档案',
            craftTags: match?.craftExpertise
                ? match.craftExpertise
                      .split(/[、,，/]/)
                      .map((item) => item.trim())
                      .filter(Boolean)
                : ['待确认'],
            portfolio: [],
            priceRangeMin: priceRange.min,
            priceRangeMax: priceRange.max || priceRange.min,
            avgDays: parseAverageDays(match?.timelineRange ?? ''),
            verified: false,
            active: true,
        },
    })
}

export async function getDesignConfirmationForOrder(designConfirmationId) {
    ensureTestSupport()

    if (process.env.NODE_ENV === 'test') {
        return (
            testState.designConfirmationsById.get(designConfirmationId) ?? null
        )
    }

    const db = getDb()
    return db.designConfirmation.findUnique({
        where: { id: designConfirmationId },
        select: {
            id: true,
            submissionId: true,
        },
    })
}

export async function getOrderById(orderId) {
    ensureTestSupport()

    if (process.env.NODE_ENV === 'test') {
        return testState.ordersById.get(orderId) ?? null
    }

    const db = getDb()
    return db.order.findUnique({
        where: { id: orderId },
        select: {
            id: true,
            createdAt: true,
            updatedAt: true,
            userId: true,
            artisanId: true,
            submissionId: true,
            designConfirmationId: true,
            status: true,
            totalPriceFen: true,
            agreedDeliveryDate: true,
            notes: true,
        },
    })
}

export async function rememberArtisanMatches(matches) {
    ensureTestSupport()

    if (process.env.NODE_ENV !== 'test') {
        return
    }

    for (const match of matches) {
        testState.artisanMatchesById.set(match.id, match)
    }
}
