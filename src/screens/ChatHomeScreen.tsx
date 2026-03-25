import { StyleSheet, Text, View } from 'react-native';

import { BodyText, DisplayText, MainTabBar, ScreenShell, SectionCard } from '../components/common';
import { colors, radii, typography } from '../theme/tokens';
import type { ConversationScreenData, HomeData, MainTabId } from '../types';

export function ChatHomeScreen({
  data,
  tabs,
  onTabPress,
  onOpenProgress,
}: {
  data: ConversationScreenData;
  tabs: HomeData['bottomTabs'];
  onTabPress: (tabId: MainTabId) => void;
  onOpenProgress: () => void;
}) {
  return (
    <ScreenShell footer={<MainTabBar tabs={tabs} activeTab="chat" onTabPress={onTabPress} />}>
      <View style={styles.header}>
        <View style={styles.headerCopy}>
          <BodyText style={styles.headerEyebrow}>conversation</BodyText>
          <DisplayText style={styles.headerTitle}>{data.headerTitle}</DisplayText>
          <BodyText>{data.headerSubtitle}</BodyText>
        </View>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{data.badgeLabel}</Text>
        </View>
      </View>

      <SectionCard tone="paper" style={styles.quoteCard}>
        <Text style={styles.quoteLabel}>{data.quoteLabel}</Text>
        <Text style={styles.quoteText}>{data.quoteText}</Text>
      </SectionCard>

      <SectionCard tone="deep" bordered={false}>
        <Text style={styles.introTitle}>{data.introTitle}</Text>
        <Text style={styles.introText}>{data.introText}</Text>
        <BodyText inverse>{data.introNote}</BodyText>
      </SectionCard>

      <View style={styles.messageList}>
        {data.messages.map((message) => (
          <SectionCard key={message.id} bordered={false} style={[styles.messageCard, message.tone === 'artisan' ? styles.messageWarm : null]}>
            <Text style={styles.messageSpeaker}>{message.speaker}</Text>
            <BodyText style={styles.messageText}>{message.text}</BodyText>
          </SectionCard>
        ))}
      </View>

      <SectionCard style={styles.progressCard}>
        <Text style={styles.progressTitle}>继续推进</Text>
        <BodyText>新的讨论结果会先沉淀进版本，再继续往后推进。</BodyText>
        <Text onPress={onOpenProgress} style={styles.progressLink}>
          去看订单进度
        </Text>
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
  headerCopy: {
    flex: 1,
    gap: 2,
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
  introTitle: {
    color: colors.textInverse,
    fontFamily: typography.body,
    fontSize: 15,
    fontWeight: '700',
  },
  introText: {
    color: colors.textInverse,
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
  progressCard: {
    backgroundColor: colors.surfaceCream,
  },
  progressTitle: {
    color: colors.textPrimary,
    fontFamily: typography.body,
    fontSize: 16,
    fontWeight: '700',
  },
  progressLink: {
    color: colors.accentBurgundy,
    fontFamily: typography.body,
    fontSize: 14,
    fontWeight: '700',
    marginTop: 4,
  },
});
