import { Feather } from '@expo/vector-icons';
import type { ComponentProps } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { BodyText, PageHeaderCard, ScreenShell, SectionCard } from '../components/common';
import { colors, radii, typography } from '../theme/tokens';
import type { CraftPlanData, PlanReason } from '../types';

export function CraftPlanScreen({
  plan,
  onBack,
  onNext,
}: {
  plan: CraftPlanData;
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
            <Text style={styles.footerTitle}>{plan.ctaLabel}</Text>
            <BodyText style={styles.footerHint}>先看方向预览，再决定要不要继续往下推进。</BodyText>
          </View>

          <Pressable style={({ pressed }) => [styles.footerButton, pressed && styles.footerButtonPressed]} onPress={onNext}>
            <View style={styles.footerButtonInner}>
              <View style={styles.footerButtonCopy}>
                <BodyText inverse style={styles.footerEyebrow}>
                  当前方案
                </BodyText>
                <Text style={styles.footerButtonTitle}>{plan.craftLabel}</Text>
              </View>
              <Feather name="arrow-right" size={20} color={colors.textInverse} />
            </View>
          </Pressable>

          <BodyText style={styles.footerNote}>{plan.footerNote}</BodyText>
        </View>
      }
    >
      <PageHeaderCard
        eyebrow="方案判断"
        title={plan.headerTitle}
        subtitle={plan.headerSubtitle}
        badge={plan.badgeLabel}
        onBack={onBack}
      />

      <SectionCard tone="paper" style={styles.heroCard}>
        <View style={styles.heroSky} />
        <View style={styles.heroMist} />
        <PlanVisual supportLabel={plan.supportLabel} />

        <View style={styles.heroTop}>
          <View style={styles.heroCopy}>
            <View style={styles.heroLead}>
              <View style={styles.heroPills}>
                <View style={styles.heroPill}>
                  <Text style={styles.heroPillText}>{plan.craftLabel}</Text>
                </View>
                <View style={[styles.heroPill, styles.heroPillSoft]}>
                  <Text style={styles.heroPillText}>{plan.badgeLabel}</Text>
                </View>
              </View>
              <Text style={styles.planTitle}>{plan.title}</Text>
            </View>
            <Text style={styles.planSummary}>{plan.summary}</Text>
          </View>
        </View>

        <View style={styles.heroDecisionCard}>
          <View style={styles.heroDecisionIcon}>
            <Feather name="check-circle" size={16} color={colors.accentBurgundy} />
          </View>
          <View style={styles.heroDecisionCopy}>
            <BodyText style={styles.heroDecisionLabel}>当前建议方向</BodyText>
            <Text style={styles.heroDecisionTitle}>{plan.supportLabel}</Text>
            <BodyText>先把工艺方向和落地边界定下来，再进入效果预览更稳。</BodyText>
          </View>
        </View>
      </SectionCard>

      <SectionCard bordered={false} style={styles.metricShell}>
        <View style={styles.sectionHead}>
          <Text style={styles.sectionTitle}>这轮先帮你算清两件事</Text>
          <BodyText style={styles.sectionCopy}>先把时间和价格边界看明白，后面判断会更轻松。</BodyText>
        </View>

        <View style={styles.resultRow}>
          <ResultCard
            icon="clock"
            label={plan.durationLabel}
            value={plan.durationValue}
            tone="sky"
            note="这是首轮判断建议的推进节奏"
          />
          <ResultCard
            icon="credit-card"
            label={plan.priceLabel}
            value={plan.priceValue}
            tone="warm"
            note="先用这个区间判断是否值得继续"
          />
        </View>
      </SectionCard>

      <SectionCard style={styles.reasonCard}>
        <View style={styles.sectionHead}>
          <View style={styles.sectionChip}>
            <Text style={styles.sectionChipText}>推荐逻辑</Text>
          </View>
          <Text style={styles.reasonTitleMain}>{plan.reasonsTitle}</Text>
          <BodyText style={styles.sectionCopy}>把推荐依据拆开看，你会更容易判断这个方向是不是你要的。</BodyText>
        </View>

        <View style={styles.reasonList}>
          {plan.reasons.map((reason, index) => (
            <ReasonRow key={reason.id} reason={reason} lead={index === 0} />
          ))}
        </View>
      </SectionCard>

      <SectionCard tone="warn" bordered={false} style={styles.riskCard}>
        <View style={styles.riskTop}>
          <View style={styles.riskIconWrap}>
            <Feather name="alert-triangle" size={15} color={colors.warnText} />
          </View>
          <View style={styles.riskHeadCopy}>
            <Text style={styles.riskTitle}>{plan.riskTitle}</Text>
            <BodyText style={styles.riskLead}>不是拦你继续，而是先把容易产生误差的地方说清楚。</BodyText>
          </View>
        </View>

        <View style={styles.riskList}>
          {plan.risks.map((risk, index) => (
            <View key={`${risk}-${index}`} style={styles.riskItem}>
              <View style={styles.riskDot} />
              <Text style={styles.riskCopy}>{risk}</Text>
            </View>
          ))}
        </View>
      </SectionCard>
    </ScreenShell>
  );
}

function PlanVisual({ supportLabel }: { supportLabel: string }) {
  return (
    <View style={styles.planVisualWrap}>
      <View style={[styles.planSheet, styles.planSheetBack]} />
      <View style={[styles.planSheet, styles.planSheetMiddle]} />
      <View style={styles.planSheetFront}>
        <View style={styles.planSheetTop}>
          <View style={styles.planStamp} />
          <Text style={styles.planSheetLabel}>方案单</Text>
        </View>
        <View style={styles.planLineLong} />
        <View style={styles.planLineMedium} />
        <View style={styles.planTag}>
          <Text style={styles.planTagText}>{supportLabel}</Text>
        </View>
      </View>
    </View>
  );
}

function ResultCard({
  icon,
  label,
  value,
  tone,
  note,
}: {
  icon: ComponentProps<typeof Feather>['name'];
  label: string;
  value: string;
  tone: 'warm' | 'sky';
  note: string;
}) {
  return (
    <View style={[styles.resultCard, tone === 'sky' ? styles.resultCardSky : styles.resultCardWarm]}>
      <View style={[styles.resultIconWrap, tone === 'sky' ? styles.resultIconWrapSky : styles.resultIconWrapWarm]}>
        <Feather name={icon} size={16} color={colors.accentBurgundy} />
      </View>
      <BodyText style={styles.resultLabel}>{label}</BodyText>
      <Text style={styles.resultValue} numberOfLines={1} adjustsFontSizeToFit minimumFontScale={0.72}>
        {value}
      </Text>
      <BodyText style={styles.resultNote}>{note}</BodyText>
    </View>
  );
}

function ReasonRow({ reason, lead }: { reason: PlanReason; lead: boolean }) {
  return (
    <View style={[styles.reasonRow, lead ? styles.reasonRowLead : null]}>
      <View style={[styles.reasonIndexWrap, lead ? styles.reasonIndexWrapLead : null]}>
        <Text style={styles.reasonIndex}>{reason.index}</Text>
      </View>
      <View style={styles.reasonCopy}>
        <Text style={styles.reasonTitle}>{reason.title}</Text>
        <BodyText>{reason.description}</BodyText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  heroCard: {
    overflow: 'hidden',
    backgroundColor: '#FFFDF9',
    gap: 18,
  },
  heroSky: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: colors.sky,
    opacity: 0.32,
  },
  heroMist: {
    position: 'absolute',
    left: -18,
    bottom: 16,
    width: 168,
    height: 56,
    borderRadius: 28,
    backgroundColor: 'rgba(255,255,255,0.76)',
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
    paddingRight: 128,
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
  planTitle: {
    color: colors.textPrimary,
    fontFamily: typography.display,
    fontSize: 24,
    lineHeight: 31,
    fontWeight: '600',
  },
  planSummary: {
    color: colors.textSecondary,
    fontFamily: typography.body,
    fontSize: 14,
    lineHeight: 20,
  },
  planVisualWrap: {
    position: 'absolute',
    right: 26,
    top: 30,
    width: 118,
    height: 132,
    alignItems: 'center',
    justifyContent: 'center',
  },
  planSheet: {
    position: 'absolute',
    width: 88,
    height: 112,
    borderRadius: 24,
    backgroundColor: 'rgba(255,255,255,0.54)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.6)',
  },
  planSheetBack: {
    transform: [{ translateX: 12 }, { translateY: -8 }, { rotate: '10deg' }],
  },
  planSheetMiddle: {
    transform: [{ translateX: 2 }, { translateY: -2 }, { rotate: '4deg' }],
  },
  planSheetFront: {
    width: 92,
    height: 118,
    borderRadius: 28,
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
  planSheetTop: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  planStamp: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: 'rgba(201,120,120,0.2)',
    borderWidth: 1,
    borderColor: 'rgba(201,120,120,0.3)',
  },
  planSheetLabel: {
    color: colors.textSecondary,
    fontFamily: typography.body,
    fontSize: 11,
    fontWeight: '600',
  },
  planLineLong: {
    width: '100%',
    height: 7,
    borderRadius: 999,
    backgroundColor: 'rgba(217,152,131,0.18)',
  },
  planLineMedium: {
    width: '70%',
    height: 7,
    borderRadius: 999,
    backgroundColor: 'rgba(223,244,255,0.78)',
  },
  planTag: {
    marginTop: 'auto',
    borderRadius: 14,
    backgroundColor: '#FBEFEA',
    paddingHorizontal: 10,
    paddingVertical: 7,
  },
  planTagText: {
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
    fontSize: 15,
    fontWeight: '700',
  },
  metricShell: {
    backgroundColor: '#FFF8F2',
    gap: 14,
  },
  sectionHead: {
    gap: 6,
  },
  sectionTitle: {
    color: colors.textPrimary,
    fontFamily: typography.body,
    fontSize: 15,
    fontWeight: '700',
  },
  sectionCopy: {
    paddingRight: 8,
  },
  resultRow: {
    flexDirection: 'row',
    gap: 12,
  },
  resultCard: {
    flex: 1,
    borderRadius: 24,
    padding: 16,
    gap: 8,
  },
  resultCardWarm: {
    backgroundColor: '#FFF4EC',
  },
  resultCardSky: {
    backgroundColor: '#EEF8FF',
  },
  resultIconWrap: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  resultIconWrapWarm: {
    backgroundColor: 'rgba(255,255,255,0.74)',
  },
  resultIconWrapSky: {
    backgroundColor: 'rgba(255,255,255,0.72)',
  },
  resultLabel: {
    fontSize: 12,
    color: colors.textSecondary,
  },
  resultValue: {
    color: colors.textPrimary,
    fontFamily: typography.body,
    fontSize: 19,
    lineHeight: 26,
    fontWeight: '700',
  },
  resultNote: {
    fontSize: 12,
    lineHeight: 18,
  },
  reasonCard: {
    backgroundColor: '#FFF9F4',
    gap: 16,
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
  reasonTitleMain: {
    color: colors.textPrimary,
    fontFamily: typography.body,
    fontSize: 16,
    fontWeight: '700',
  },
  reasonList: {
    gap: 12,
  },
  reasonRow: {
    flexDirection: 'row',
    gap: 12,
    padding: 14,
    borderRadius: 22,
    backgroundColor: colors.surfaceCream,
    borderWidth: 1,
    borderColor: 'rgba(241,223,210,0.74)',
  },
  reasonRowLead: {
    backgroundColor: '#FFFDFC',
    borderColor: 'rgba(201,120,120,0.18)',
  },
  reasonIndexWrap: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EEF8FF',
  },
  reasonIndexWrapLead: {
    backgroundColor: '#FBEFEA',
  },
  reasonIndex: {
    color: colors.textPrimary,
    fontFamily: typography.body,
    fontSize: 13,
    fontWeight: '700',
  },
  reasonCopy: {
    flex: 1,
    gap: 4,
  },
  reasonTitle: {
    color: colors.textPrimary,
    fontFamily: typography.body,
    fontSize: 14,
    fontWeight: '700',
  },
  riskCard: {
    gap: 14,
    backgroundColor: '#FFF6E3',
  },
  riskTop: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
  },
  riskIconWrap: {
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.56)',
  },
  riskHeadCopy: {
    flex: 1,
    gap: 2,
  },
  riskTitle: {
    color: colors.warnText,
    fontFamily: typography.body,
    fontSize: 14,
    fontWeight: '700',
  },
  riskLead: {
    color: colors.warnText,
  },
  riskList: {
    gap: 10,
  },
  riskItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 10,
  },
  riskDot: {
    width: 7,
    height: 7,
    borderRadius: 3.5,
    marginTop: 7,
    backgroundColor: 'rgba(144,109,42,0.72)',
  },
  riskCopy: {
    flex: 1,
    color: colors.warnText,
    fontFamily: typography.body,
    fontSize: 13,
    lineHeight: 21,
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
    fontSize: 16,
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
    fontSize: 16,
    fontWeight: '700',
  },
  footerNote: {
    fontSize: 12,
  },
});
