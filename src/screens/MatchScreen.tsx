import { StyleSheet, Text, View } from 'react-native';

import { BackChip, BodyText, DisplayText, PillButton, ScreenShell, SectionCard } from '../components/common';
import { colors, radii, typography } from '../theme/tokens';
import type { MatchScreenData } from '../types';

export function MatchScreen({
  data,
  onBack,
  onNext,
}: {
  data: MatchScreenData;
  onBack: () => void;
  onNext: () => void;
}) {
  return (
    <ScreenShell
      footer={
        <View style={styles.footerContent}>
          <PillButton label={data.ctaLabel} onPress={onNext} inverse trailing />
          <BodyText style={styles.footerNote}>{data.footerNote}</BodyText>
        </View>
      }
    >
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <BackChip onPress={onBack} />
          <View style={styles.headerCopy}>
            <BodyText style={styles.headerEyebrow}>best match</BodyText>
            <DisplayText style={styles.headerTitle}>{data.headerTitle}</DisplayText>
            <BodyText>{data.headerSubtitle}</BodyText>
          </View>
        </View>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{data.badgeLabel}</Text>
        </View>
      </View>

      <SectionCard tone="deep" bordered={false} style={styles.leadCard}>
        <Text style={styles.leadName}>{data.leadTitle}</Text>
        <BodyText inverse>{data.leadSummary}</BodyText>
        <BodyText inverse style={styles.leadReason}>
          {data.reasonText}
        </BodyText>
      </SectionCard>

      <SectionCard style={styles.logicCard}>
        <Text style={styles.sectionTitle}>{data.logicTitle}</Text>
        <View style={styles.logicList}>
          {data.logicItems.map((item, index) => (
            <View key={item.id} style={[styles.logicItem, index === 1 ? styles.logicItemWarm : null]}>
              <BodyText style={styles.logicLabel}>{item.label}</BodyText>
              <Text style={styles.logicValue}>{item.value}</Text>
            </View>
          ))}
        </View>
      </SectionCard>

      <SectionCard tone="paper" style={styles.altCard}>
        <Text style={styles.sectionTitle}>{data.alternativesTitle}</Text>
        <View style={styles.altList}>
          {data.alternatives.map((item) => (
            <View key={item.id} style={styles.altItem}>
              <Text style={styles.altName}>{item.name}</Text>
              <BodyText style={styles.altRole}>{item.role}</BodyText>
              <Text style={styles.altHighlight}>{item.highlight}</Text>
              <BodyText>{item.note}</BodyText>
            </View>
          ))}
        </View>
      </SectionCard>

      <SectionCard tone="warn" bordered={false}>
        <Text style={styles.noticeTitle}>{data.noticeTitle}</Text>
        <Text style={styles.noticeText}>{data.noticeText}</Text>
      </SectionCard>
    </ScreenShell>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: 12,
  },
  headerLeft: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'flex-start',
    flex: 1,
  },
  headerCopy: {
    flex: 1,
    gap: 2,
    paddingTop: 2,
  },
  headerEyebrow: {
    color: colors.accentBurgundy,
    fontSize: 12,
    fontWeight: '600',
  },
  headerTitle: {
    fontSize: 30,
  },
  badge: {
    borderRadius: radii.pill,
    backgroundColor: colors.sky,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  badgeText: {
    color: colors.textPrimary,
    fontFamily: typography.body,
    fontSize: 12,
    fontWeight: '700',
  },
  leadCard: {
    backgroundColor: colors.accentBurgundy,
  },
  leadName: {
    color: colors.textInverse,
    fontFamily: typography.display,
    fontSize: 30,
    fontWeight: '600',
  },
  leadReason: {
    color: 'rgba(255,253,250,0.78)',
  },
  logicCard: {
    backgroundColor: '#FFF7F1',
  },
  sectionTitle: {
    color: colors.textPrimary,
    fontFamily: typography.body,
    fontSize: 16,
    fontWeight: '600',
  },
  logicList: {
    gap: 10,
  },
  logicItem: {
    borderRadius: 20,
    backgroundColor: colors.surfaceCream,
    padding: 14,
    gap: 4,
  },
  logicItemWarm: {
    backgroundColor: '#EFF8FF',
  },
  logicLabel: {
    fontSize: 12,
  },
  logicValue: {
    color: colors.textPrimary,
    fontFamily: typography.body,
    fontSize: 17,
    fontWeight: '700',
  },
  altCard: {
    backgroundColor: colors.mutedPaper,
  },
  altList: {
    gap: 10,
  },
  altItem: {
    borderRadius: 22,
    backgroundColor: colors.surfaceCream,
    padding: 14,
    gap: 4,
  },
  altName: {
    color: colors.textPrimary,
    fontFamily: typography.display,
    fontSize: 22,
    fontWeight: '600',
  },
  altRole: {
    color: colors.accentBurgundy,
    fontSize: 12,
  },
  altHighlight: {
    color: colors.textPrimary,
    fontFamily: typography.body,
    fontSize: 14,
    fontWeight: '700',
  },
  noticeTitle: {
    color: colors.warnText,
    fontFamily: typography.body,
    fontSize: 15,
    fontWeight: '700',
  },
  noticeText: {
    color: colors.warnText,
    fontFamily: typography.body,
    fontSize: 14,
    lineHeight: 21,
  },
  footerContent: {
    gap: 10,
  },
  footerNote: {
    fontSize: 12,
  },
});
