import { StyleSheet, Text, View } from 'react-native';

import { BackChip, BodyText, DisplayText, PillButton, ScreenShell, SectionCard } from '../components/common';
import { colors, radii, typography } from '../theme/tokens';
import type { DesignConfirmScreenData } from '../types';

export function DesignConfirmScreen({
  data,
  onBack,
  onNext,
}: {
  data: DesignConfirmScreenData;
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
            <BodyText style={styles.headerEyebrow}>design version</BodyText>
            <DisplayText style={styles.headerTitle}>{data.headerTitle}</DisplayText>
            <BodyText>{data.headerSubtitle}</BodyText>
          </View>
        </View>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{data.badgeLabel}</Text>
        </View>
      </View>

      <SectionCard tone="deep" bordered={false} style={styles.leadCard}>
        <Text style={styles.leadTitle}>{data.leadTitle}</Text>
        <BodyText inverse>{data.leadSummary}</BodyText>
      </SectionCard>

      <SectionCard style={styles.confirmCard}>
        <Text style={styles.sectionTitle}>{data.confirmTitle}</Text>
        <View style={styles.confirmList}>
          {data.confirmItems.map((item) => (
            <View key={item} style={styles.confirmItem}>
              <Text style={styles.confirmDot}>•</Text>
              <BodyText style={styles.confirmCopy}>{item}</BodyText>
            </View>
          ))}
        </View>
      </SectionCard>

      <SectionCard tone="paper" style={styles.detailCard}>
        <Text style={styles.sectionTitle}>{data.detailTitle}</Text>
        <View style={styles.detailList}>
          {data.details.map((item) => (
            <View key={item.id} style={styles.detailItem}>
              <BodyText style={styles.detailLabel}>{item.label}</BodyText>
              <Text style={styles.detailValue}>{item.value}</Text>
            </View>
          ))}
        </View>
      </SectionCard>

      <View style={styles.actionRow}>
        {data.actions.map((action, index) => (
          <SectionCard key={action.id} bordered={false} style={[styles.actionCard, index === 1 ? styles.actionWarm : null]}>
            <Text style={styles.actionTitle}>{action.title}</Text>
            <BodyText>{action.description}</BodyText>
          </SectionCard>
        ))}
      </View>

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
  leadTitle: {
    color: colors.textInverse,
    fontFamily: typography.display,
    fontSize: 28,
    lineHeight: 34,
    fontWeight: '600',
  },
  sectionTitle: {
    color: colors.textPrimary,
    fontFamily: typography.body,
    fontSize: 16,
    fontWeight: '600',
  },
  confirmCard: {
    backgroundColor: '#FFF7F1',
  },
  confirmList: {
    gap: 10,
  },
  confirmItem: {
    flexDirection: 'row',
    gap: 8,
  },
  confirmDot: {
    color: colors.accentBurgundy,
    fontSize: 18,
    lineHeight: 20,
  },
  confirmCopy: {
    flex: 1,
  },
  detailCard: {
    backgroundColor: colors.mutedPaper,
  },
  detailList: {
    gap: 10,
  },
  detailItem: {
    borderRadius: 20,
    backgroundColor: colors.surfaceCream,
    padding: 14,
    gap: 4,
  },
  detailLabel: {
    fontSize: 12,
  },
  detailValue: {
    color: colors.textPrimary,
    fontFamily: typography.body,
    fontSize: 17,
    fontWeight: '700',
  },
  actionRow: {
    flexDirection: 'row',
    gap: 10,
  },
  actionCard: {
    flex: 1,
    backgroundColor: colors.surfaceCream,
  },
  actionWarm: {
    backgroundColor: '#FBEFEA',
  },
  actionTitle: {
    color: colors.textPrimary,
    fontFamily: typography.body,
    fontSize: 15,
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
