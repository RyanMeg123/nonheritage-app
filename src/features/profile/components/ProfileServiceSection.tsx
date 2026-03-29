import { Pressable, StyleSheet, Text, View } from 'react-native';

import { BodyText, SectionCard } from '../../../components/common';
import { colors, typography } from '../../../theme/tokens';
import type { ActionCard } from '../../../types';

export function ProfileServiceSection({
  title,
  summary,
  items,
  onOpenOnboarding,
}: {
  title: string;
  summary: string;
  items: ActionCard[];
  onOpenOnboarding: () => void;
}) {
  return (
    <SectionCard bordered={false} style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.eyebrow}>辅助入口</Text>
        <Text style={styles.title}>{title}</Text>
        <BodyText style={styles.summary}>{summary}</BodyText>
      </View>
      <View style={styles.list}>
        {items.map((item, index) => (
          <Pressable
            key={item.id}
            onPress={item.id === 'account-3' ? onOpenOnboarding : undefined}
            style={({ pressed }) => [
              styles.item,
              index === 2 ? styles.itemWarm : null,
              pressed && item.id === 'account-3' ? styles.pressed : null,
            ]}
          >
            <Text style={styles.itemTitle}>{item.title}</Text>
            <BodyText>{item.description}</BodyText>
          </Pressable>
        ))}
      </View>
    </SectionCard>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFCF9',
  },
  header: {
    gap: 4,
  },
  eyebrow: {
    color: colors.textSecondary,
    fontFamily: typography.body,
    fontSize: 12,
    fontWeight: '700',
  },
  title: {
    color: colors.textSecondary,
    fontFamily: typography.body,
    fontSize: 15,
    fontWeight: '700',
  },
  summary: {
    fontSize: 12,
  },
  list: {
    gap: 10,
  },
  item: {
    borderRadius: 18,
    backgroundColor: '#FFF7F1',
    padding: 14,
    gap: 4,
  },
  itemWarm: {
    backgroundColor: '#FCF1EA',
  },
  itemTitle: {
    color: colors.textPrimary,
    fontFamily: typography.body,
    fontSize: 15,
    fontWeight: '700',
  },
  pressed: {
    opacity: 0.92,
  },
});
