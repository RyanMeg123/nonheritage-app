import { Pressable, StyleSheet, Text, View } from 'react-native';

import { BodyText, CardTitle, SectionCard } from '../../../components/common';
import { colors, radii, typography } from '../../../theme/tokens';
import type { PublishEntryMode } from '../../../types';
import { publishEntryModes } from '../config';

export function PublishModeSwitcher({
  selectedMode,
  onSelect,
}: {
  selectedMode: PublishEntryMode;
  onSelect: (mode: PublishEntryMode) => void;
}) {
  const activeMode = publishEntryModes.find((mode) => mode.id === selectedMode) ?? publishEntryModes[0];

  return (
    <SectionCard tone="paper" style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.eyebrow}>步骤 1</Text>
        <CardTitle>先选一种发布方式</CardTitle>
        <BodyText>切到最适合你的入口，下面要补的信息会跟着变。</BodyText>
      </View>

      <View style={styles.tabRow}>
        {publishEntryModes.map((mode) => {
          const active = mode.id === selectedMode;

          return (
            <Pressable
              key={mode.id}
              onPress={() => onSelect(mode.id)}
              style={({ pressed }) => [
                styles.tabChip,
                active ? styles.tabChipActive : styles.tabChipIdle,
                pressed ? styles.pressed : null,
              ]}
            >
              <Text style={[styles.tabChipText, active ? styles.tabChipTextActive : null]}>
                {mode.title}
              </Text>
            </Pressable>
          );
        })}
      </View>

      <View style={styles.detailCard}>
        <View style={styles.detailTop}>
          <View style={styles.detailCopy}>
            <Text style={styles.detailTitle}>{activeMode.title}</Text>
            <BodyText style={styles.detailDescription}>{activeMode.description}</BodyText>
          </View>
          <View style={styles.indicatorWrap}>
            <View style={styles.indicatorDot} />
          </View>
        </View>

        <View style={styles.helperTag}>
          <Text style={styles.helper}>{activeMode.helper}</Text>
        </View>
      </View>
    </SectionCard>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFCF9',
    borderColor: 'rgba(241,223,210,0.9)',
    gap: 14,
  },
  header: {
    gap: 4,
  },
  eyebrow: {
    color: colors.textSecondary,
    fontFamily: typography.body,
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  tabRow: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    backgroundColor: colors.surfaceCream,
    borderRadius: radii.pill,
    padding: 6,
    borderWidth: 1,
    borderColor: colors.lineSoft,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.5,
    shadowRadius: 16,
    elevation: 4,
  },
  tabChip: {
    flex: 1,
    borderRadius: radii.pill,
    paddingHorizontal: 12,
    paddingVertical: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabChipIdle: {
    backgroundColor: 'transparent',
  },
  tabChipActive: {
    backgroundColor: colors.accentBurgundy,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.35,
    shadowRadius: 12,
    elevation: 3,
  },
  tabChipText: {
    color: colors.textSecondary,
    fontFamily: typography.body,
    fontSize: 13,
    fontWeight: '700',
    textAlign: 'center',
  },
  tabChipTextActive: {
    color: colors.textInverse,
  },
  detailCard: {
    borderRadius: 22,
    borderWidth: 1,
    borderColor: 'rgba(228,200,190,0.9)',
    backgroundColor: '#FFF8F2',
    padding: 16,
    gap: 12,
  },
  detailTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: 12,
  },
  detailCopy: {
    flex: 1,
  },
  detailTitle: {
    color: colors.textPrimary,
    fontFamily: typography.body,
    fontSize: 16,
    fontWeight: '700',
  },
  detailDescription: {
    marginTop: 4,
  },
  indicatorWrap: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: '#FFF3EC',
    alignItems: 'center',
    justifyContent: 'center',
  },
  indicatorDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: colors.accentBurgundy,
  },
  helperTag: {
    alignSelf: 'flex-start',
    borderRadius: 999,
    backgroundColor: '#FFF0E8',
    paddingHorizontal: 12,
    paddingVertical: 7,
  },
  helper: {
    color: colors.accentBurgundy,
    fontFamily: typography.body,
    fontSize: 12,
    fontWeight: '600',
  },
  pressed: {
    opacity: 0.92,
  },
});
