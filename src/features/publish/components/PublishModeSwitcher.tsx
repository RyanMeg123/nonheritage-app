import { Pressable, StyleSheet, Text, View } from 'react-native';

import { BodyText, CardTitle, SectionCard } from '../../../components/common';
import { colors, typography } from '../../../theme/tokens';
import type { PublishEntryMode } from '../../../types';
import { publishEntryModes } from '../config';

export function PublishModeSwitcher({
  selectedMode,
  onSelect,
}: {
  selectedMode: PublishEntryMode;
  onSelect: (mode: PublishEntryMode) => void;
}) {
  return (
    <SectionCard tone="paper" style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.eyebrow}>步骤 1</Text>
        <CardTitle>先选一种发布方式</CardTitle>
        <BodyText>不同入口会切换任务结构，决定这页“先做什么”。</BodyText>
      </View>

      <View style={styles.list}>
        {publishEntryModes.map((mode) => {
          const active = mode.id === selectedMode;

          return (
            <Pressable
              key={mode.id}
              onPress={() => onSelect(mode.id)}
              style={({ pressed }) => [
                styles.item,
                active ? styles.itemActive : null,
                pressed ? styles.pressed : null,
              ]}
            >
              <View style={styles.topRow}>
                <Text style={styles.title}>{mode.title}</Text>
                <View style={[styles.indicator, active ? styles.indicatorActive : null]} />
              </View>
              <BodyText>{mode.description}</BodyText>
              <Text style={styles.helper}>{mode.helper}</Text>
            </Pressable>
          );
        })}
      </View>
    </SectionCard>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFCF9',
    borderColor: 'rgba(241,223,210,0.9)',
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
  list: {
    gap: 10,
  },
  item: {
    borderRadius: 22,
    padding: 16,
    gap: 8,
    borderWidth: 1,
    borderColor: colors.lineSoft,
    backgroundColor: '#FFF9F4',
  },
  itemActive: {
    backgroundColor: '#FFF3EC',
    borderColor: '#E4C8BE',
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.45,
    shadowRadius: 18,
    elevation: 4,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 12,
  },
  title: {
    color: colors.textPrimary,
    fontFamily: typography.body,
    fontSize: 16,
    fontWeight: '600',
  },
  indicator: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#E6D5C8',
  },
  indicatorActive: {
    backgroundColor: colors.accentBurgundy,
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
