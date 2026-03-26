import { StyleSheet, Text, View } from 'react-native';

import { BodyText, MainTabBar, PageHeaderCard, ScreenShell, SectionCard } from '../components/common';
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
      <PageHeaderCard eyebrow="沟通空间" title={data.headerTitle} subtitle={data.headerSubtitle} badge={data.badgeLabel} />

      <SectionCard tone="paper" style={styles.quoteCard}>
        <Text style={styles.quoteLabel}>{data.quoteLabel}</Text>
        <Text style={styles.quoteText}>{data.quoteText}</Text>
      </SectionCard>

      <SectionCard bordered={false} style={styles.introCard}>
        <Text style={styles.introTitle}>{data.introTitle}</Text>
        <Text style={styles.introText}>{data.introText}</Text>
        <BodyText>{data.introNote}</BodyText>
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
  introCard: {
    backgroundColor: '#F7EEE7',
  },
  introTitle: {
    color: colors.accentBurgundy,
    fontFamily: typography.body,
    fontSize: 13,
    fontWeight: '600',
  },
  introText: {
    color: colors.textPrimary,
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
