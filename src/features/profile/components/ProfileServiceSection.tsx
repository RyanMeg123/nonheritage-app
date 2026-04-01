import { Pressable, StyleSheet, Text, View } from 'react-native';

import { BodyText, SectionCard } from '../../../components/common';
import { colors, typography } from '../../../theme/tokens';
import type { ActionCard } from '../../../types';

export function ProfileServiceSection({
  title,
  summary,
  items,
  onOpenOnboarding,
  onDeleteAccount,
  deleteAccountDisabled,
}: {
  title: string;
  summary: string;
  items: ActionCard[];
  onOpenOnboarding: () => void;
  onDeleteAccount: () => void;
  deleteAccountDisabled: boolean;
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

      <Pressable
        onPress={deleteAccountDisabled ? undefined : onDeleteAccount}
        style={({ pressed }) => [
          styles.deleteCard,
          deleteAccountDisabled && styles.deleteCardDisabled,
          pressed && !deleteAccountDisabled ? styles.pressed : null,
        ]}
      >
        <Text style={styles.deleteTitle}>{deleteAccountDisabled ? '正在删除账号' : '删除账号'}</Text>
        <BodyText style={styles.deleteText}>
          删除后会清空当前账号和相关记录。这个操作不可恢复。
        </BodyText>
      </Pressable>
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
  deleteCard: {
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#F2C8C2',
    backgroundColor: '#FFF4F2',
    padding: 14,
    gap: 4,
  },
  deleteCardDisabled: {
    opacity: 0.7,
  },
  deleteTitle: {
    color: '#A13D31',
    fontFamily: typography.body,
    fontSize: 15,
    fontWeight: '700',
  },
  deleteText: {
    fontSize: 12,
    color: '#80554D',
  },
});
