/** @format */

import test from 'node:test'
import assert from 'node:assert/strict'

import { repository } from '../src/repository.js'
import { createOrder } from '../src/repositories/orders.js'
import { startTestServer } from '../support/http-server.js'

test.beforeEach(() => {
    repository.reset()
})

test('可以取回刚创建的订单详情', async (t) => {
    const { server, baseUrl } = await startTestServer()
    t.after(() => server.close())

    const order = await createOrder({
        id: 'order-001',
        createdAt: '2026-03-27T10:00:00.000Z',
        updatedAt: '2026-03-27T10:00:00.000Z',
        userId: 'user-001',
        artisanId: 'artisan-001',
        submissionId: 'submission-001',
        designConfirmationId: 'design-confirmation-001',
        status: 'pending',
        totalPriceFen: 128000,
        agreedDeliveryDate: '2026-05-01',
        notes: '领口想再收一点。',
    })

    const response = await fetch(baseUrl + '/v1/orders/' + order.id)

    assert.equal(response.status, 200)
    const payload = await response.json()

    assert.deepEqual(Object.keys(payload).sort(), ['data', 'traceId'])
    assert.deepEqual(payload.data, {
        id: 'order-001',
        createdAt: '2026-03-27T10:00:00.000Z',
        updatedAt: '2026-03-27T10:00:00.000Z',
        userId: 'user-001',
        artisanId: 'artisan-001',
        submissionId: 'submission-001',
        designConfirmationId: 'design-confirmation-001',
        status: 'pending',
        totalPriceFen: 128000,
        agreedDeliveryDate: '2026-05-01',
        notes: '领口想再收一点。',
    })
    assert.equal(typeof payload.traceId, 'string')
    assert.equal('messages' in payload.data, false)
    assert.equal('stages' in payload.data, false)
    assert.equal('attachments' in payload.data, false)
    assert.equal('artisan' in payload.data, false)
    assert.equal('user' in payload.data, false)
    assert.equal('stageCount' in payload.data, false)
})

test('订单不存在时返回 404', async (t) => {
    const { server, baseUrl } = await startTestServer()
    t.after(() => server.close())

    const response = await fetch(baseUrl + '/v1/orders/order-missing')

    assert.equal(response.status, 404)
    const payload = await response.json()
    assert.deepEqual(payload.error, {
        code: 'NOT_FOUND',
        message: '订单不存在。',
        details: { orderId: 'order-missing' },
        traceId: payload.error.traceId,
    })
    assert.equal(typeof payload.error.traceId, 'string')
})
