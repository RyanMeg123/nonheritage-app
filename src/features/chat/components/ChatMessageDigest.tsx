import { StyleSheet, Text, View } from 'react-native';

import { BodyText, SectionCard } from '../../../components/common';
import { colors, typography } from '../../../theme/tokens';
import type { ConversationMessage } from '../../../types';

export function ChatMessageDigest({
  messages,
}: {
  messages: ConversationMessage[];
}) {
  return (
    <SectionCard style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.title}>最近沟通摘录</Text>
        <BodyText>只保留当前版本里最重要的两条讨论，避免信息太散。</BodyText>
      </View>

      <View style={styles.list}>
        {messages.map((message) => (
          <View
            key={message.id}
            style={[styles.messageCard, message.tone === 'artisan' ? styles.messageWarm : styles.messagePlain]}
          >
            <Text style={styles.speaker}>{message.speaker}</Text>
            <BodyText style={styles.text}>{message.text}</BodyText>
          </View>
        ))}
      </View>
    </SectionCard>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFDF9',
  },
  header: {
    gap: 4,
  },
  title: {
    color: colors.textPrimary,
    fontFamily: typography.body,
    fontSize: 16,
    fontWeight: '700',
  },
  list: {
    gap: 10,
  },
  messageCard: {
    borderRadius: 18,
    padding: 14,
    gap: 6,
  },
  messagePlain: {
    backgroundColor: '#FFF8F1',
  },
  messageWarm: {
    backgroundColor: '#FBEFEA',
  },
  speaker: {
    color: colors.accentBurgundy,
    fontFamily: typography.body,
    fontSize: 12,
    fontWeight: '700',
  },
  text: {
    fontSize: 14,
    lineHeight: 21,
  },
});
