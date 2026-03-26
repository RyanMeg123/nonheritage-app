import { StyleSheet, Text, View } from 'react-native';

import { BodyText, PageHeaderCard, PillButton, ScreenShell, SectionCard } from '../components/common';
import { colors, radii, typography } from '../theme/tokens';
import type { OrderProgressScreenData } from '../types';

export function OrderProgressScreen({
  data,
  onBack,
  onNext,
}: {
  data: OrderProgressScreenData;
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
        eyebrow="订单进度"
        title={data.headerTitle}
        subtitle={data.headerSubtitle}
        badge={data.badgeLabel}
        onBack={onBack}
      />

      <SectionCard bordered={false} style={styles.leadCard}>
        <Text style={styles.leadTitle}>{data.leadTitle}</Text>
        <BodyText>{data.leadSummary}</BodyText>
      </SectionCard>

      <SectionCard style={styles.statusCard}>
        <Text style={styles.sectionTitle}>{data.statusTitle}</Text>
        <View style={styles.stageList}>
          {data.stages.map((stage) => (
            <View key={stage.id} style={styles.stageRow}>
              <View
                style={[
                  styles.stageDot,
                  stage.state === 'done' ? styles.stageDone : null,
                  stage.state === 'current' ? styles.stageCurrent : null,
                ]}
              />
              <View style={styles.stageCopy}>
                <Text style={styles.stageTitle}>{stage.title}</Text>
                <BodyText>{stage.detail}</BodyText>
              </View>
            </View>
          ))}
        </View>
      </SectionCard>

      <SectionCard tone="paper" style={styles.timelineCard}>
        <Text style={styles.sectionTitle}>{data.timelineTitle}</Text>
        <View style={styles.timelineList}>
          {data.timeline.map((item) => (
            <View key={item.id} style={styles.timelineItem}>
              <Text style={styles.timelineLabel}>{item.label}</Text>
              <BodyText>{item.value}</BodyText>
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
  statusCard: {
    backgroundColor: colors.surfaceCream,
  },
  sectionTitle: {
    color: colors.textPrimary,
    fontFamily: typography.body,
    fontSize: 16,
    fontWeight: '600',
  },
  stageList: {
    gap: 12,
  },
  stageRow: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'flex-start',
  },
  stageDot: {
    width: 14,
    height: 14,
    borderRadius: 7,
    marginTop: 4,
    backgroundColor: '#E2D5CB',
  },
  stageDone: {
    backgroundColor: colors.accentBurgundy,
  },
  stageCurrent: {
    backgroundColor: colors.butter,
  },
  stageCopy: {
    flex: 1,
    gap: 2,
  },
  stageTitle: {
    color: colors.textPrimary,
    fontFamily: typography.body,
    fontSize: 15,
    fontWeight: '700',
  },
  timelineCard: {
    backgroundColor: colors.mutedPaper,
  },
  timelineList: {
    gap: 10,
  },
  timelineItem: {
    borderRadius: 18,
    backgroundColor: '#FFF7F1',
    padding: 14,
    gap: 4,
  },
  timelineLabel: {
    color: colors.textPrimary,
    fontFamily: typography.body,
    fontSize: 14,
    fontWeight: '700',
  },
  actionRow: {
    gap: 10,
  },
  actionCard: {
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
