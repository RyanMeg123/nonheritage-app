import { StyleSheet, Text, View } from 'react-native';

import { BodyText, SectionCard } from '../../../components/common';
import { colors, typography } from '../../../theme/tokens';
import type { InfoPair } from '../../../types';

export function ChatFocusPanel({
  eyebrow,
  title,
  summary,
  note,
  responsibilityTitle,
  responsibilityValue,
  closureTitle,
  closureValue,
  statusTitle,
  statusItems,
}: {
  eyebrow: string;
  title: string;
  summary: string;
  note: string;
  responsibilityTitle: string;
  responsibilityValue: string;
  closureTitle: string;
  closureValue: string;
  statusTitle: string;
  statusItems: InfoPair[];
}) {
  return (
    <SectionCard bordered={false} style={styles.card}>
      <View style={styles.copy}>
        <Text style={styles.eyebrow}>{eyebrow}</Text>
        <Text style={styles.title}>{title}</Text>
        <BodyText>{summary}</BodyText>
      </View>

      <View style={styles.responsibilityWrap}>
        <View style={styles.responsibilityCard}>
          <Text style={styles.responsibilityLabel}>{responsibilityTitle}</Text>
          <Text style={styles.responsibilityValue}>{responsibilityValue}</Text>
        </View>
        <View style={styles.responsibilityCard}>
          <Text style={styles.responsibilityLabel}>{closureTitle}</Text>
          <Text style={styles.responsibilityValue}>{closureValue}</Text>
        </View>
      </View>

      <View style={styles.statusBlock}>
        <Text style={styles.statusTitle}>{statusTitle}</Text>
        <View style={styles.statusGrid}>
          {statusItems.map((item, index) => (
            <View key={item.id} style={[styles.statusItem, index === 0 ? styles.statusItemLead : null]}>
              <BodyText style={styles.statusLabel}>{item.label}</BodyText>
              <Text style={styles.statusValue}>{item.value}</Text>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.noteWrap}>
        <Text style={styles.noteLabel}>推进规则</Text>
        <BodyText>{note}</BodyText>
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
    fontSize: 24,
    lineHeight: 31,
    fontWeight: '600',
  },
  statusBlock: {
    gap: 10,
  },
  responsibilityWrap: {
    gap: 10,
  },
  responsibilityCard: {
    borderRadius: 18,
    backgroundColor: '#FFF8F1',
    padding: 14,
    gap: 4,
  },
  responsibilityLabel: {
    color: colors.accentBurgundy,
    fontFamily: typography.body,
    fontSize: 12,
    fontWeight: '700',
  },
  responsibilityValue: {
    color: colors.textPrimary,
    fontFamily: typography.body,
    fontSize: 16,
    lineHeight: 23,
    fontWeight: '700',
  },
  statusTitle: {
    color: colors.textPrimary,
    fontFamily: typography.body,
    fontSize: 15,
    fontWeight: '700',
  },
  statusGrid: {
    gap: 10,
  },
  statusItem: {
    borderRadius: 18,
    backgroundColor: 'rgba(255,255,255,0.78)',
    padding: 14,
    gap: 4,
  },
  statusItemLead: {
    backgroundColor: '#FFF8F1',
  },
  statusLabel: {
    fontSize: 12,
  },
  statusValue: {
    color: colors.textPrimary,
    fontFamily: typography.body,
    fontSize: 17,
    fontWeight: '700',
  },
  noteWrap: {
    gap: 4,
  },
  noteLabel: {
    color: colors.accentBurgundy,
    fontFamily: typography.body,
    fontSize: 12,
    fontWeight: '700',
  },
});
