import { StyleSheet, Text, View } from 'react-native';

import { BodyText, PageHeaderCard, PillButton, ScreenShell, SectionCard } from '../components/common';
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
      <PageHeaderCard
        eyebrow="匹配推荐"
        title={data.headerTitle}
        subtitle={data.headerSubtitle}
        badge={data.badgeLabel}
        onBack={onBack}
      />

      <SectionCard bordered={false} style={styles.leadCard}>
        <Text style={styles.leadName}>{data.leadTitle}</Text>
        <BodyText>{data.leadSummary}</BodyText>
        <BodyText style={styles.leadReason}>
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
  leadCard: {
    backgroundColor: '#F7EEE7',
  },
  leadName: {
    color: colors.textPrimary,
    fontFamily: typography.display,
    fontSize: 28,
    lineHeight: 34,
    fontWeight: '600',
  },
  leadReason: {
    color: colors.accentBurgundy,
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
