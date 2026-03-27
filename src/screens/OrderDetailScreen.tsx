import { StyleSheet, Text, View } from 'react-native';

import { BodyText, PageHeaderCard, PillButton, ScreenShell, SectionCard } from '../components/common';
import { colors, typography } from '../theme/tokens';
import type { OrderDetailScreenData } from '../types';

export function OrderDetailScreen({
  data,
  onBack,
  onDone,
}: {
  data: OrderDetailScreenData;
  onBack: () => void;
  onDone: () => void;
}) {
  return (
    <ScreenShell
      footer={
        <View style={styles.footerContent}>
          <PillButton label={data.ctaLabel} onPress={onDone} inverse trailing />
          <BodyText style={styles.footerNote}>{data.footerNote}</BodyText>
        </View>
      }
    >
      <PageHeaderCard
        eyebrow="订单信息"
        title={data.headerTitle}
        subtitle={data.headerSubtitle}
        badge={data.badgeLabel}
        onBack={onBack}
      />

      <SectionCard bordered={false} style={styles.leadCard}>
        <Text style={styles.leadTitle}>{data.leadTitle}</Text>
        <BodyText>{data.leadSummary}</BodyText>
      </SectionCard>

      <SectionCard style={styles.summaryCard}>
        <Text style={styles.sectionTitle}>{data.summaryTitle}</Text>
        <BodyText style={styles.sectionNote}>{data.primaryNote}</BodyText>
        <View style={styles.detailList}>
          {data.summaryItems.map((item) => (
            <View key={item.id} style={styles.detailItem}>
              <BodyText style={styles.detailLabel}>{item.label}</BodyText>
              <Text style={styles.detailValue}>{item.value}</Text>
            </View>
          ))}
        </View>
      </SectionCard>

      <SectionCard tone="paper" style={styles.contextCard}>
        <Text style={styles.sectionTitle}>{data.contextTitle}</Text>
        <BodyText style={styles.sectionNote}>{data.secondaryNote}</BodyText>
        <View style={styles.contextList}>
          {data.contextItems.map((item) => (
            <View key={item.id} style={styles.contextItem}>
              <BodyText style={styles.contextLabel}>{item.label}</BodyText>
              <Text style={styles.contextValue}>{item.value}</Text>
            </View>
          ))}
        </View>
      </SectionCard>

      <SectionCard tone="warn" bordered={false}>
        <Text style={styles.noticeTitle}>{data.noteTitle}</Text>
        <Text style={styles.noticeText}>{data.noteText}</Text>
      </SectionCard>
    </ScreenShell>
  );
}

const styles = StyleSheet.create({
  leadCard: {
    backgroundColor: '#F7EEE7',
  },
  leadTitle: {
    color: colors.textPrimary,
    fontFamily: typography.display,
    fontSize: 28,
    lineHeight: 34,
    fontWeight: '600',
  },
  summaryCard: {
    backgroundColor: '#FFF7F1',
  },
  contextCard: {
    backgroundColor: colors.mutedPaper,
  },
  sectionTitle: {
    color: colors.textPrimary,
    fontFamily: typography.body,
    fontSize: 16,
    fontWeight: '600',
  },
  sectionNote: {
    fontSize: 12,
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
    fontSize: 18,
    fontWeight: '700',
  },
  contextList: {
    gap: 10,
  },
  contextItem: {
    borderRadius: 20,
    backgroundColor: '#FFFDFB',
    padding: 14,
    gap: 4,
  },
  contextLabel: {
    fontSize: 12,
  },
  contextValue: {
    color: colors.textPrimary,
    fontFamily: typography.body,
    fontSize: 15,
    fontWeight: '700',
    lineHeight: 22,
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
