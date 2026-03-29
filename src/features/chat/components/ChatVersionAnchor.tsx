import { StyleSheet, Text, View } from 'react-native';

import { BodyText, SectionCard } from '../../../components/common';
import { colors, radii, typography } from '../../../theme/tokens';

export function ChatVersionAnchor({
  label,
  text,
  statusLabel,
  statusHint,
}: {
  label: string;
  text: string;
  statusLabel: string;
  statusHint: string;
}) {
  return (
    <SectionCard tone="paper" style={styles.card}>
      <View style={styles.topRow}>
        <Text style={styles.label}>{label}</Text>
        <View style={styles.versionPill}>
          <Text style={styles.versionPillText}>版本沟通中</Text>
        </View>
      </View>
      <Text style={styles.text}>{text}</Text>
      <View style={styles.statusRow}>
        <View style={styles.statusPill}>
          <Text style={styles.statusPillText}>{statusLabel}</Text>
        </View>
        <BodyText style={styles.note}>{statusHint}</BodyText>
      </View>
    </SectionCard>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.mutedPaper,
    gap: 10,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 12,
  },
  label: {
    color: colors.accentBurgundy,
    fontFamily: typography.body,
    fontSize: 12,
    fontWeight: '700',
  },
  versionPill: {
    borderRadius: radii.pill,
    backgroundColor: '#FFF5EF',
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  versionPillText: {
    color: colors.accentBurgundy,
    fontFamily: typography.body,
    fontSize: 11,
    fontWeight: '700',
  },
  text: {
    color: colors.textPrimary,
    fontFamily: typography.body,
    fontSize: 15,
    lineHeight: 22,
  },
  statusRow: {
    gap: 8,
  },
  statusPill: {
    alignSelf: 'flex-start',
    borderRadius: radii.pill,
    backgroundColor: '#FBEFEA',
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  statusPillText: {
    color: colors.accentBurgundy,
    fontFamily: typography.body,
    fontSize: 12,
    fontWeight: '700',
  },
  note: {
    fontSize: 12,
  },
});
