import { type ReactNode } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { BodyText, CardTitle, SectionCard } from '../../../components/common';
import { colors, typography } from '../../../theme/tokens';

export function PublishPrimarySection({
  badgeLabel,
  title,
  description,
  statusLabel,
  statusHint,
  accentColor,
  accentTint,
  accentBorder,
  children,
}: {
  badgeLabel: string;
  title: string;
  description: string;
  statusLabel: string;
  statusHint: string;
  accentColor: string;
  accentTint: string;
  accentBorder: string;
  children: ReactNode;
}) {
  return (
    <SectionCard tone="paper" style={[styles.card, { backgroundColor: accentTint, borderColor: accentBorder }]}>
      <View style={styles.header}>
        <View style={styles.topRow}>
          <View style={[styles.badge, { backgroundColor: accentColor }]}>
            <Text style={styles.badgeText}>{badgeLabel}</Text>
          </View>
          <View style={[styles.rule, { backgroundColor: accentColor + '33' }]} />
        </View>
        <CardTitle>{title}</CardTitle>
        <BodyText>{description}</BodyText>
        <View style={styles.statusRow}>
          <View style={[styles.statusPill, { backgroundColor: '#FFFFFFC9', borderColor: accentColor + '33' }]}>
            <View style={[styles.statusDot, { backgroundColor: accentColor }]} />
            <Text style={[styles.statusLabel, { color: accentColor }]}>{statusLabel}</Text>
          </View>
          <BodyText style={styles.statusHint}>{statusHint}</BodyText>
        </View>
      </View>
      {children}
    </SectionCard>
  );
}

const styles = StyleSheet.create({
  card: {
    shadowOpacity: 0.95,
    elevation: 9,
  },
  header: {
    gap: 8,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  badge: {
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  badgeText: {
    color: colors.textInverse,
    fontFamily: typography.body,
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 0.6,
  },
  rule: {
    flex: 1,
    height: 1,
  },
  statusRow: {
    gap: 8,
  },
  statusPill: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    borderRadius: 999,
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 7,
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 999,
  },
  statusLabel: {
    fontFamily: typography.body,
    fontSize: 12,
    fontWeight: '700',
  },
  statusHint: {
    fontSize: 12,
  },
});
