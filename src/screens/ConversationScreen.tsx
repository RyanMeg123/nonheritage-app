import { StyleSheet, Text, View } from 'react-native';

import { BackChip, BodyText, DisplayText, PillButton, ScreenShell, SectionCard } from '../components/common';
import { colors, radii, typography } from '../theme/tokens';
import type { ConversationScreenData } from '../types';

export function ConversationScreen({
  data,
  onBack,
  onNext,
}: {
  data: ConversationScreenData;
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
            <BodyText style={styles.headerEyebrow}>version conversation</BodyText>
            <DisplayText style={styles.headerTitle}>{data.headerTitle}</DisplayText>
            <BodyText>{data.headerSubtitle}</BodyText>
          </View>
        </View>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{data.badgeLabel}</Text>
        </View>
      </View>

      <SectionCard tone="paper" style={styles.quoteCard}>
        <Text style={styles.quoteLabel}>{data.quoteLabel}</Text>
        <Text style={styles.quoteText}>{data.quoteText}</Text>
      </SectionCard>

      <SectionCard style={styles.statusCard}>
        <Text style={styles.sectionTitle}>{data.statusTitle}</Text>
        <View style={styles.statusList}>
          {data.statusItems.map((item) => (
            <View key={item.id} style={styles.statusItem}>
              <BodyText style={styles.statusLabel}>{item.label}</BodyText>
              <Text style={styles.statusValue}>{item.value}</Text>
            </View>
          ))}
        </View>
      </SectionCard>

      <SectionCard tone="deep" bordered={false}>
        <Text style={styles.introTitle}>{data.introTitle}</Text>
        <Text style={styles.introText}>{data.introText}</Text>
        <BodyText inverse>{data.introNote}</BodyText>
      </SectionCard>

      <View style={styles.messageList}>
        {data.messages.map((message) => (
          <SectionCard
            key={message.id}
            bordered={message.tone === 'user'}
            tone={message.tone === 'user' ? 'cream' : 'paper'}
            style={[styles.messageCard, message.tone === 'artisan' ? styles.messageWarm : null]}
          >
            <Text style={styles.messageSpeaker}>{message.speaker}</Text>
            <BodyText style={styles.messageText}>{message.text}</BodyText>
          </SectionCard>
        ))}
      </View>

      <View style={styles.actionRow}>
        {data.actions.map((action, index) => (
          <SectionCard key={action.id} bordered={false} style={[styles.actionCard, index === 1 ? styles.actionWarm : null]}>
            <Text style={styles.actionTitle}>{action.title}</Text>
            <BodyText>{action.description}</BodyText>
          </SectionCard>
        ))}
      </View>
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
  quoteCard: {
    backgroundColor: colors.mutedPaper,
  },
  quoteLabel: {
    color: colors.accentBurgundy,
    fontFamily: typography.body,
    fontSize: 12,
    fontWeight: '700',
  },
  quoteText: {
    color: colors.textPrimary,
    fontFamily: typography.body,
    fontSize: 15,
    lineHeight: 22,
  },
  sectionTitle: {
    color: colors.textPrimary,
    fontFamily: typography.body,
    fontSize: 16,
    fontWeight: '600',
  },
  statusCard: {
    backgroundColor: '#FFF7F1',
  },
  statusList: {
    gap: 10,
  },
  statusItem: {
    borderRadius: 18,
    backgroundColor: colors.surfaceCream,
    padding: 14,
    gap: 4,
  },
  statusLabel: {
    fontSize: 12,
  },
  statusValue: {
    color: colors.textPrimary,
    fontFamily: typography.body,
    fontSize: 17,
    fontWeight: '700',
  },
  introTitle: {
    color: '#FFF8F1',
    fontFamily: typography.body,
    fontSize: 15,
    fontWeight: '700',
  },
  introText: {
    color: '#FFF8F1',
    fontFamily: typography.display,
    fontSize: 24,
    lineHeight: 31,
    fontWeight: '600',
  },
  messageList: {
    gap: 12,
  },
  messageCard: {
    backgroundColor: '#FFF8F1',
  },
  messageWarm: {
    backgroundColor: '#FBEFEA',
  },
  messageSpeaker: {
    color: colors.accentBurgundy,
    fontFamily: typography.body,
    fontSize: 12,
    fontWeight: '700',
  },
  messageText: {
    fontSize: 14,
    lineHeight: 21,
  },
  actionRow: {
    flexDirection: 'row',
    gap: 10,
  },
  actionCard: {
    flex: 1,
    backgroundColor: '#FFF7F1',
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
  footerContent: {
    gap: 10,
  },
  footerNote: {
    fontSize: 12,
  },
});
