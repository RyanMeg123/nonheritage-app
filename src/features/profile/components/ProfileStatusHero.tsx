import { StyleSheet, Text, View } from 'react-native';

import { BodyText, SectionCard } from '../../../components/common';
import { colors, radii, typography } from '../../../theme/tokens';

export function ProfileStatusHero({
  title,
  summary,
  stageLabel,
  stageValue,
  nextNodeLabel,
  nextNodeValue,
}: {
  title: string;
  summary: string;
  stageLabel: string;
  stageValue: string;
  nextNodeLabel: string;
  nextNodeValue: string;
}) {
  return (
    <SectionCard bordered={false} style={styles.card}>
      <View style={styles.copy}>
        <Text style={styles.eyebrow}>当前项目状态</Text>
        <Text style={styles.title}>{title}</Text>
        <BodyText>{summary}</BodyText>
        <View style={styles.focusPill}>
          <Text style={styles.focusPillText}>当前先看版本确认，再决定是否直接进入打样</Text>
        </View>
      </View>

      <View style={styles.statusGrid}>
        <View style={styles.statusItem}>
          <Text style={styles.statusLabel}>{stageLabel}</Text>
          <Text style={styles.statusValue}>{stageValue}</Text>
        </View>
        <View style={[styles.statusItem, styles.statusItemWarm]}>
          <Text style={styles.statusLabel}>{nextNodeLabel}</Text>
          <Text style={styles.statusValue}>{nextNodeValue}</Text>
        </View>
      </View>
    </SectionCard>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#F7EEE7',
    gap: 16,
  },
  copy: {
    gap: 6,
  },
  eyebrow: {
    color: colors.accentBurgundy,
    fontFamily: typography.body,
    fontSize: 13,
    fontWeight: '600',
  },
  title: {
    color: colors.textPrimary,
    fontFamily: typography.display,
    fontSize: 28,
    lineHeight: 34,
    fontWeight: '600',
  },
  statusGrid: {
    gap: 10,
  },
  focusPill: {
    alignSelf: 'flex-start',
    marginTop: 4,
    borderRadius: 999,
    backgroundColor: 'rgba(255,255,255,0.82)',
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  focusPillText: {
    color: colors.textPrimary,
    fontFamily: typography.body,
    fontSize: 13,
    fontWeight: '600',
  },
  statusItem: {
    borderRadius: 20,
    backgroundColor: 'rgba(255,255,255,0.76)',
    padding: 14,
    gap: 4,
  },
  statusItemWarm: {
    backgroundColor: '#FFF8F1',
  },
  statusLabel: {
    color: colors.accentBurgundy,
    fontFamily: typography.body,
    fontSize: 12,
    fontWeight: '700',
  },
  statusValue: {
    color: colors.textPrimary,
    fontFamily: typography.body,
    fontSize: 16,
    lineHeight: 23,
    fontWeight: '700',
  },
});
