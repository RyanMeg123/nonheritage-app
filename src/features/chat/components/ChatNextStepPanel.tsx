import { Pressable, StyleSheet, Text, View } from 'react-native';

import { BodyText, SectionCard } from '../../../components/common';
import { colors, radii, typography } from '../../../theme/tokens';
import type { ActionCard } from '../../../types';

export function ChatNextStepPanel({
  actions,
  ctaLabel,
  note,
  closureTitle,
  closureHint,
  onOpenProgress,
}: {
  actions: ActionCard[];
  ctaLabel: string;
  note: string;
  closureTitle: string;
  closureHint: string;
  onOpenProgress: () => void;
}) {
  return (
    <SectionCard style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.title}>继续推进</Text>
        <BodyText>本轮沟通会先沉淀进版本，再决定进入下一步还是保持当前方向。</BodyText>
      </View>

      <View style={styles.actionList}>
        {actions.map((action, index) => (
          <View key={action.id} style={[styles.actionCard, index === 0 ? styles.actionLead : null]}>
            <Text style={styles.actionTitle}>{action.title}</Text>
            <BodyText>{action.description}</BodyText>
          </View>
        ))}
      </View>

      <View style={styles.closureCard}>
        <Text style={styles.closureLabel}>本轮收口点</Text>
        <Text style={styles.closureTitle}>{closureTitle}</Text>
        <BodyText>{closureHint}</BodyText>
      </View>

      <Pressable style={({ pressed }) => [styles.linkWrap, pressed && styles.pressed]} onPress={onOpenProgress}>
        <Text style={styles.linkLabel}>{ctaLabel}</Text>
        <Text style={styles.linkArrow}>→</Text>
      </Pressable>

      <BodyText style={styles.note}>{note}</BodyText>
    </SectionCard>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surfaceCream,
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
  actionList: {
    gap: 10,
  },
  actionCard: {
    borderRadius: 18,
    padding: 14,
    gap: 4,
    backgroundColor: '#FFF8F1',
  },
  actionLead: {
    backgroundColor: '#FBEFEA',
  },
  actionTitle: {
    color: colors.textPrimary,
    fontFamily: typography.body,
    fontSize: 15,
    fontWeight: '700',
  },
  closureCard: {
    borderRadius: 18,
    padding: 14,
    gap: 4,
    backgroundColor: '#F7EEE7',
  },
  closureLabel: {
    color: colors.accentBurgundy,
    fontFamily: typography.body,
    fontSize: 12,
    fontWeight: '700',
  },
  closureTitle: {
    color: colors.textPrimary,
    fontFamily: typography.body,
    fontSize: 16,
    lineHeight: 23,
    fontWeight: '700',
  },
  linkWrap: {
    marginTop: 2,
    borderRadius: radii.pill,
    backgroundColor: '#F7EEE7',
    paddingHorizontal: 14,
    paddingVertical: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  linkLabel: {
    color: colors.accentBurgundy,
    fontFamily: typography.body,
    fontSize: 14,
    fontWeight: '700',
  },
  linkArrow: {
    color: colors.accentBurgundy,
    fontSize: 18,
    fontWeight: '700',
  },
  pressed: {
    opacity: 0.92,
  },
  note: {
    fontSize: 12,
  },
});
