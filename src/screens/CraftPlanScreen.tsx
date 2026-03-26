import { StyleSheet, Text, View } from 'react-native';

import { BodyText, PageHeaderCard, PillButton, ScreenShell, SectionCard } from '../components/common';
import { colors, radii, typography } from '../theme/tokens';
import type { CraftPlanData } from '../types';

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
          <PillButton label={plan.ctaLabel} onPress={onNext} inverse trailing />
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
        <View style={styles.heroSun} />
        <View style={styles.heroCloud} />
        <View style={styles.heroTop}>
          <View style={styles.heroCopy}>
            <View style={styles.planPill}>
              <Text style={styles.planPillText}>{plan.craftLabel}</Text>
            </View>
            <Text style={styles.planTitle}>{plan.title}</Text>
            <Text style={styles.planSummary}>{plan.summary}</Text>
          </View>
          <View style={styles.heroMood}>
            <View style={styles.heroMoodFace}>
              <Text style={styles.heroMoodText}>☺</Text>
            </View>
          </View>
        </View>
        <View style={styles.planPills}>
          <View style={styles.softTag}>
            <Text style={styles.softTagText}>{plan.craftLabel}</Text>
          </View>
          <View style={[styles.softTag, styles.softTagWarm]}>
            <Text style={styles.softTagText}>{plan.supportLabel}</Text>
          </View>
        </View>
      </SectionCard>

      <View style={styles.resultRow}>
        <SectionCard bordered={false} style={styles.resultCard}>
          <BodyText style={styles.resultLabel}>{plan.priceLabel}</BodyText>
          <Text style={styles.resultValue}>{plan.priceValue}</Text>
        </SectionCard>
        <SectionCard bordered={false} style={[styles.resultCard, styles.resultCardSky]}>
          <BodyText style={styles.resultLabel}>{plan.durationLabel}</BodyText>
          <Text style={styles.resultValue}>{plan.durationValue}</Text>
        </SectionCard>
      </View>

      <SectionCard style={styles.reasonCard}>
        <View style={styles.sectionHead}>
          <CardTitleLike>{plan.reasonsTitle}</CardTitleLike>
          <BodyText>像给你拆开的说明卡，一条条看更轻松</BodyText>
        </View>
        <View style={styles.reasonList}>
          {plan.reasons.map((reason, index) => (
            <View key={reason.id} style={styles.reasonRow}>
              <View style={[styles.reasonIndexWrap, index === 1 ? styles.reasonIndexWarm : null]}>
                <Text style={styles.reasonIndex}>{reason.index}</Text>
              </View>
              <View style={styles.reasonCopy}>
                <Text style={styles.reasonTitle}>{reason.title}</Text>
                <BodyText>{reason.description}</BodyText>
              </View>
            </View>
          ))}
        </View>
      </SectionCard>

      <SectionCard tone="warn" bordered={false} style={styles.riskCard}>
        <Text style={styles.riskTitle}>{plan.riskTitle}</Text>
        <Text style={styles.riskCopy}>{plan.risks.join('；')}</Text>
      </SectionCard>
    </ScreenShell>
  );
}

function CardTitleLike({ children }: { children: string }) {
  return <Text style={styles.cardTitleLike}>{children}</Text>;
}

const styles = StyleSheet.create({
  heroCard: {
    overflow: 'hidden',
    backgroundColor: '#FFFDF9',
    gap: 16,
  },
  heroSky: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: colors.sky,
    opacity: 0.36,
  },
  heroSun: {
    position: 'absolute',
    top: 18,
    right: 20,
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: 'rgba(255,228,163,0.45)',
  },
  heroCloud: {
    position: 'absolute',
    left: -20,
    top: 100,
    width: 140,
    height: 48,
    borderRadius: 30,
    backgroundColor: 'rgba(255,255,255,0.82)',
  },
  heroTop: {
    flexDirection: 'row',
    gap: 14,
  },
  heroCopy: {
    flex: 1,
    gap: 10,
  },
  planPill: {
    alignSelf: 'flex-start',
    borderRadius: radii.pill,
    backgroundColor: '#FFF5EF',
    paddingHorizontal: 12,
    paddingVertical: 7,
  },
  planPillText: {
    color: colors.accentBurgundy,
    fontFamily: typography.body,
    fontSize: 12,
    fontWeight: '700',
  },
  planTitle: {
    color: colors.textPrimary,
    fontFamily: typography.display,
    fontSize: 30,
    lineHeight: 36,
    fontWeight: '600',
  },
  planSummary: {
    color: colors.textSecondary,
    fontFamily: typography.body,
    fontSize: 15,
    lineHeight: 23,
  },
  heroMood: {
    width: 108,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heroMoodFace: {
    width: 92,
    height: 112,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.9)',
  },
  heroMoodText: {
    fontSize: 44,
  },
  planPills: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  softTag: {
    borderRadius: radii.pill,
    paddingHorizontal: 14,
    paddingVertical: 8,
    backgroundColor: '#FFF5EF',
  },
  softTagWarm: {
    backgroundColor: '#FCEAD7',
  },
  softTagText: {
    color: colors.textPrimary,
    fontFamily: typography.body,
    fontSize: 12,
    fontWeight: '600',
  },
  resultRow: {
    flexDirection: 'row',
    gap: 12,
  },
  resultCard: {
    flex: 1,
    backgroundColor: '#FFF7F1',
    borderRadius: 26,
    gap: 6,
  },
  resultCardSky: {
    backgroundColor: '#EFF9FF',
  },
  resultLabel: {
    fontSize: 12,
    color: colors.textSecondary,
  },
  resultValue: {
    color: colors.textPrimary,
    fontFamily: typography.body,
    fontSize: 22,
    fontWeight: '700',
  },
  reasonCard: {
    backgroundColor: '#FFF9F4',
  },
  sectionHead: {
    gap: 4,
  },
  cardTitleLike: {
    color: colors.textPrimary,
    fontFamily: typography.body,
    fontSize: 16,
    fontWeight: '600',
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
  },
  reasonIndexWrap: {
    width: 34,
    height: 34,
    borderRadius: 17,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.sky,
  },
  reasonIndexWarm: {
    backgroundColor: colors.blush,
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
    fontSize: 15,
    fontWeight: '600',
  },
  riskCard: {
    gap: 10,
  },
  riskTitle: {
    color: colors.warnText,
    fontFamily: typography.body,
    fontSize: 15,
    fontWeight: '700',
  },
  riskCopy: {
    color: colors.warnText,
    fontFamily: typography.body,
    fontSize: 13,
    lineHeight: 21,
  },
  footerContent: {
    gap: 10,
  },
  footerNote: {
    fontSize: 12,
  },
});
