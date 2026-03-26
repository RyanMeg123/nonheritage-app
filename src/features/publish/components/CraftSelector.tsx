import { Pressable, StyleSheet, Text, View } from 'react-native';

import { BodyText, CardTitle, ToggleChip } from '../../../components/common';
import { colors, typography } from '../../../theme/tokens';
import type { CraftOption } from '../../../types';

const craftCardTints = {
  'tie-dye': colors.sky,
  'su-embroidery': colors.blush,
  silver: colors.butter,
} as const;

export function CraftSelector({
  title,
  hint,
  options,
  selectedId,
  styleVariant,
  onSelect,
}: {
  title: string;
  hint: string;
  options: CraftOption[];
  selectedId: string;
  styleVariant: 'chips' | 'cards';
  onSelect: (craftId: string) => void;
}) {
  return (
    <View style={styles.block}>
      <View style={styles.header}>
        <CardTitle>{title}</CardTitle>
        <BodyText>{hint}</BodyText>
      </View>

      {styleVariant === 'cards' ? (
        <View style={styles.cardGrid}>
          {options.map((option) => {
            const active = option.id === selectedId;

            return (
              <Pressable
                key={option.id}
                onPress={() => onSelect(option.id)}
                style={[
                  styles.cardOption,
                  { backgroundColor: craftCardTints[option.id as keyof typeof craftCardTints] },
                  active ? styles.cardOptionActive : null,
                ]}
              >
                <View style={styles.cardOrb} />
                <Text style={styles.cardLabel}>{option.label}</Text>
              </Pressable>
            );
          })}
        </View>
      ) : (
        <View style={styles.chipRow}>
          {options.map((option) => (
            <ToggleChip
              key={option.id}
              label={option.label}
              active={option.id === selectedId}
              onPress={() => onSelect(option.id)}
            />
          ))}
        </View>
      )}

      {selectedId ? (
        <View style={styles.feedbackPill}>
          <Text style={styles.feedbackText}>
            当前优先方向：
            {options.find((option) => option.id === selectedId)?.label ?? ''}
          </Text>
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    gap: 12,
  },
  header: {
    gap: 4,
  },
  cardGrid: {
    flexDirection: 'row',
    gap: 12,
  },
  cardOption: {
    flex: 1,
    minHeight: 120,
    borderRadius: 24,
    padding: 14,
    justifyContent: 'flex-end',
    overflow: 'hidden',
  },
  cardOptionActive: {
    borderWidth: 2,
    borderColor: 'rgba(255,255,255,0.85)',
  },
  cardOrb: {
    position: 'absolute',
    top: 14,
    right: 14,
    width: 54,
    height: 54,
    borderRadius: 27,
    backgroundColor: 'rgba(255,255,255,0.4)',
  },
  cardLabel: {
    color: colors.textPrimary,
    fontFamily: typography.display,
    fontSize: 20,
    fontWeight: '600',
  },
  chipRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  feedbackPill: {
    alignSelf: 'flex-start',
    borderRadius: 999,
    backgroundColor: '#FFF4EB',
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  feedbackText: {
    color: colors.textPrimary,
    fontFamily: typography.body,
    fontSize: 12,
    fontWeight: '600',
  },
});
