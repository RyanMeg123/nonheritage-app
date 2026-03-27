import { Feather } from '@expo/vector-icons';
import type { ComponentProps } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { BodyText, PageHeaderCard, ScreenShell, SectionCard } from '../components/common';
import { colors, radii, typography } from '../theme/tokens';
import type { InfoPair, StructuredResultData } from '../types';

function getInfoIcon(index: number): ComponentProps<typeof Feather>['name'] {
  if (index === 0) return 'layers';
  if (index === 1) return 'droplet';
  if (index === 2) return 'credit-card';
  if (index === 3) return 'clock';
  return 'shield';
}

export function StructuredResultScreen({
  data,
  onBack,
  onNext,
}: {
  data: StructuredResultData;
  onBack: () => void;
  onNext: () => void;
}) {
  return (
    <ScreenShell
      footer={
        <View style={styles.footerContent}>
          <View style={styles.footerIntro}>
            <View style={styles.footerChip}>
              <Feather name="navigation" size={13} color={colors.accentBurgundy} />
              <Text style={styles.footerChipText}>下一步</Text>
            </View>
            <Text style={styles.footerTitle}>{data.ctaLabel}</Text>
            <BodyText style={styles.footerHint}>这一步确认系统理解没有偏，再进入工艺方案会更稳。</BodyText>
          </View>

          <Pressable style={({ pressed }) => [styles.footerButton, pressed && styles.footerButtonPressed]} onPress={onNext}>
            <View style={styles.footerButtonInner}>
              <View style={styles.footerButtonCopy}>
                <BodyText inverse style={styles.footerEyebrow}>
                  当前状态
                </BodyText>
                <Text style={styles.footerButtonTitle}>{data.badgeLabel}</Text>
              </View>
              <Feather name="arrow-right" size={20} color={colors.textInverse} />
            </View>
          </Pressable>

          <BodyText style={styles.footerNote}>{data.footerNote}</BodyText>
        </View>
      }
    >
      <PageHeaderCard
        eyebrow="需求整理"
        title={data.headerTitle}
        subtitle={data.headerSubtitle}
        badge={data.badgeLabel}
        onBack={onBack}
      />

      <SectionCard tone="paper" style={styles.heroCard}>
        <View style={styles.heroSky} />
        <View style={styles.heroMist} />
        <SummaryBadge />

        <View style={styles.heroTop}>
          <View style={styles.heroCopy}>
            <View style={styles.heroLead}>
              <View style={styles.heroPills}>
                <View style={styles.heroPill}>
                  <Text style={styles.heroPillText}>整理后的结论</Text>
                </View>
                <View style={[styles.heroPill, styles.heroPillSoft]}>
                  <Text style={styles.heroPillText}>{data.badgeLabel}</Text>
                </View>
              </View>
              <Text style={styles.summaryText}>{data.summary}</Text>
            </View>
            <Text style={styles.summaryNote}>{data.summaryNote}</Text>
          </View>
        </View>

        <View style={styles.heroDecisionCard}>
          <View style={styles.heroDecisionIcon}>
            <Feather name="check-circle" size={16} color={colors.accentBurgundy} />
          </View>
          <View style={styles.heroDecisionCopy}>
            <BodyText style={styles.heroDecisionLabel}>当前可继续推进</BodyText>
            <Text style={styles.heroDecisionTitle}>系统已经把原始输入收成可判断方向</Text>
            <BodyText>接下来重点不是重写需求，而是确认这份整理结果有没有偏差。</BodyText>
          </View>
        </View>
      </SectionCard>

      <SectionCard style={styles.infoCard}>
        <View style={styles.sectionHead}>
          <Text style={styles.sectionTitle}>{data.keyInfoTitle}</Text>
          <BodyText style={styles.sectionCopy}>这些参数会直接影响后面生成的工艺方案、价格和节奏判断。</BodyText>
        </View>

        <View style={styles.infoList}>
          {data.keyInfo.map((item, index) => (
            <KeyInfoRow key={item.id} item={item} index={index} />
          ))}
        </View>
      </SectionCard>

      <SectionCard bordered={false} style={styles.focusCard}>
        <View style={styles.sectionHead}>
          <View style={styles.sectionChip}>
            <Text style={styles.sectionChipText}>当前建议</Text>
          </View>
          <Text style={styles.focusTitle}>{data.focusTitle}</Text>
          <BodyText style={styles.sectionCopy}>先抓住这几件最影响后续结果的事，不要一开始就把方向摊太散。</BodyText>
        </View>

        <View style={styles.focusList}>
          {data.focusItems.map((item, index) => (
            <View key={item} style={[styles.focusItem, index === 0 ? styles.focusItemLead : null]}>
              <View style={[styles.focusDotWrap, index === 0 ? styles.focusDotWrapLead : null]}>
                <Feather name="arrow-up-right" size={14} color={colors.accentBurgundy} />
              </View>
              <BodyText style={styles.focusCopy}>{item}</BodyText>
            </View>
          ))}
        </View>
      </SectionCard>

      <SectionCard tone="warn" bordered={false} style={styles.confirmCard}>
        <View style={styles.confirmTop}>
          <View style={styles.confirmIconWrap}>
            <Feather name="help-circle" size={15} color={colors.warnText} />
          </View>
          <View style={styles.confirmCopyWrap}>
            <Text style={styles.confirmTitle}>{data.confirmTitle}</Text>
            <Text style={styles.confirmText}>{data.confirmText}</Text>
          </View>
        </View>
      </SectionCard>
    </ScreenShell>
  );
}

function SummaryBadge() {
  return (
    <View style={styles.summaryBadgeWrap}>
      <View style={[styles.summarySheet, styles.summarySheetBack]} />
      <View style={styles.summarySheetFront}>
        <View style={styles.summaryStamp} />
        <View style={styles.summaryLineStrong} />
        <View style={styles.summaryLineSoft} />
        <View style={styles.summaryTag}>
          <Text style={styles.summaryTagText}>已整理</Text>
        </View>
      </View>
    </View>
  );
}

function KeyInfoRow({ item, index }: { item: InfoPair; index: number }) {
  return (
    <View style={[styles.infoRow, index === 0 ? styles.infoRowLead : null]}>
      <View style={[styles.infoIconWrap, index === 0 ? styles.infoIconWrapLead : null]}>
        <Feather name={getInfoIcon(index)} size={15} color={colors.accentBurgundy} />
      </View>
      <View style={styles.infoCopy}>
        <BodyText style={styles.infoLabel}>{item.label}</BodyText>
        <Text style={styles.infoValue}>{item.value}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  heroCard: {
    backgroundColor: '#FFFDF9',
    overflow: 'hidden',
    gap: 18,
  },
  heroSky: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: colors.sky,
    opacity: 0.28,
  },
  heroMist: {
    position: 'absolute',
    left: -18,
    bottom: 16,
    width: 162,
    height: 54,
    borderRadius: 27,
    backgroundColor: 'rgba(255,255,255,0.72)',
  },
  heroTop: {
    alignItems: 'stretch',
    gap: 14,
  },
  heroCopy: {
    gap: 12,
  },
  heroLead: {
    gap: 12,
    paddingRight: 120,
  },
  heroPills: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  heroPill: {
    borderRadius: radii.pill,
    backgroundColor: '#FFF5EF',
    paddingHorizontal: 12,
    paddingVertical: 7,
  },
  heroPillSoft: {
    backgroundColor: 'rgba(255,255,255,0.76)',
  },
  heroPillText: {
    color: colors.accentBurgundy,
    fontFamily: typography.body,
    fontSize: 12,
    fontWeight: '700',
  },
  summaryText: {
    color: colors.textPrimary,
    fontFamily: typography.display,
    fontSize: 28,
    lineHeight: 36,
    fontWeight: '600',
  },
  summaryNote: {
    color: colors.textSecondary,
    fontFamily: typography.body,
    fontSize: 15,
    lineHeight: 24,
  },
  summaryBadgeWrap: {
    position: 'absolute',
    right: 26,
    top: 30,
    width: 112,
    height: 120,
    alignItems: 'center',
    justifyContent: 'center',
  },
  summarySheet: {
    position: 'absolute',
    width: 82,
    height: 102,
    borderRadius: 24,
    backgroundColor: 'rgba(255,255,255,0.48)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.58)',
  },
  summarySheetBack: {
    transform: [{ translateX: 12 }, { translateY: -8 }, { rotate: '10deg' }],
  },
  summarySheetFront: {
    width: 86,
    height: 108,
    borderRadius: 26,
    backgroundColor: '#FFF8F2',
    borderWidth: 1,
    borderColor: 'rgba(228,200,190,0.72)',
    paddingHorizontal: 14,
    paddingVertical: 16,
    gap: 10,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 1,
    shadowRadius: 18,
    elevation: 6,
    transform: [{ rotate: '-8deg' }],
  },
  summaryStamp: {
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: 'rgba(201,120,120,0.2)',
    borderWidth: 1,
    borderColor: 'rgba(201,120,120,0.3)',
  },
  summaryLineStrong: {
    width: '100%',
    height: 8,
    borderRadius: 999,
    backgroundColor: 'rgba(217,152,131,0.18)',
  },
  summaryLineSoft: {
    width: '72%',
    height: 8,
    borderRadius: 999,
    backgroundColor: 'rgba(223,244,255,0.86)',
  },
  summaryTag: {
    marginTop: 'auto',
    alignSelf: 'flex-start',
    borderRadius: 14,
    backgroundColor: '#FBEFEA',
    paddingHorizontal: 10,
    paddingVertical: 7,
  },
  summaryTagText: {
    color: colors.accentBurgundy,
    fontFamily: typography.body,
    fontSize: 10,
    fontWeight: '700',
  },
  heroDecisionCard: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
    borderRadius: 24,
    backgroundColor: 'rgba(255,253,251,0.86)',
    borderWidth: 1,
    borderColor: 'rgba(228,200,190,0.54)',
    padding: 14,
  },
  heroDecisionIcon: {
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF5EF',
  },
  heroDecisionCopy: {
    flex: 1,
    gap: 2,
  },
  heroDecisionLabel: {
    fontSize: 12,
    color: colors.accentBurgundy,
    fontWeight: '700',
  },
  heroDecisionTitle: {
    color: colors.textPrimary,
    fontFamily: typography.body,
    fontSize: 16,
    fontWeight: '700',
  },
  infoCard: {
    backgroundColor: '#FFF7F1',
    gap: 14,
  },
  sectionHead: {
    gap: 6,
  },
  sectionTitle: {
    color: colors.textPrimary,
    fontFamily: typography.body,
    fontSize: 16,
    fontWeight: '700',
  },
  sectionCopy: {
    paddingRight: 8,
  },
  infoList: {
    gap: 10,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
    borderRadius: 22,
    backgroundColor: colors.surfaceCream,
    borderWidth: 1,
    borderColor: 'rgba(241,223,210,0.74)',
    padding: 14,
  },
  infoRowLead: {
    backgroundColor: '#FFFDFC',
    borderColor: 'rgba(201,120,120,0.18)',
  },
  infoIconWrap: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EEF8FF',
  },
  infoIconWrapLead: {
    backgroundColor: '#FBEFEA',
  },
  infoCopy: {
    flex: 1,
    gap: 4,
  },
  infoLabel: {
    fontSize: 12,
  },
  infoValue: {
    color: colors.textPrimary,
    fontFamily: typography.body,
    fontSize: 17,
    fontWeight: '700',
  },
  focusCard: {
    backgroundColor: '#F7EEE7',
    gap: 14,
  },
  sectionChip: {
    alignSelf: 'flex-start',
    borderRadius: radii.pill,
    backgroundColor: '#FFF2EA',
    paddingHorizontal: 11,
    paddingVertical: 6,
  },
  sectionChipText: {
    color: colors.accentBurgundy,
    fontFamily: typography.body,
    fontSize: 11,
    fontWeight: '700',
  },
  focusTitle: {
    color: colors.textPrimary,
    fontFamily: typography.body,
    fontSize: 18,
    fontWeight: '700',
  },
  focusList: {
    gap: 10,
  },
  focusItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 10,
    borderRadius: 22,
    backgroundColor: 'rgba(255,253,251,0.74)',
    padding: 14,
  },
  focusItemLead: {
    backgroundColor: '#FFF8F2',
  },
  focusDotWrap: {
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF5EF',
  },
  focusDotWrapLead: {
    backgroundColor: '#FBEFEA',
  },
  focusCopy: {
    flex: 1,
  },
  confirmCard: {
    backgroundColor: '#FFF6E3',
  },
  confirmTop: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
  },
  confirmIconWrap: {
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.56)',
  },
  confirmCopyWrap: {
    flex: 1,
    gap: 4,
  },
  confirmTitle: {
    color: colors.warnText,
    fontFamily: typography.body,
    fontSize: 15,
    fontWeight: '700',
  },
  confirmText: {
    color: colors.warnText,
    fontFamily: typography.body,
    fontSize: 14,
    lineHeight: 22,
  },
  footerContent: {
    gap: 10,
  },
  footerIntro: {
    gap: 4,
  },
  footerChip: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    borderRadius: radii.pill,
    backgroundColor: '#FFF5EF',
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  footerChipText: {
    color: colors.accentBurgundy,
    fontFamily: typography.body,
    fontSize: 11,
    fontWeight: '700',
  },
  footerTitle: {
    color: colors.textPrimary,
    fontFamily: typography.body,
    fontSize: 18,
    fontWeight: '700',
  },
  footerHint: {
    fontSize: 12,
  },
  footerButton: {
    borderRadius: radii.xl,
    backgroundColor: colors.accentBurgundy,
    paddingHorizontal: 18,
    paddingVertical: 16,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 1,
    shadowRadius: 20,
    elevation: 8,
  },
  footerButtonPressed: {
    opacity: 0.92,
  },
  footerButtonInner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 12,
  },
  footerButtonCopy: {
    flex: 1,
    gap: 3,
  },
  footerEyebrow: {
    fontSize: 11,
    opacity: 0.78,
  },
  footerButtonTitle: {
    color: colors.textInverse,
    fontFamily: typography.body,
    fontSize: 18,
    fontWeight: '700',
  },
  footerNote: {
    fontSize: 12,
  },
});
