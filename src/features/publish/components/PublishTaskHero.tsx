import { StyleSheet, Text, View } from 'react-native';

import { BodyText, SectionCard } from '../../../components/common';
import { colors, typography } from '../../../theme/tokens';

export function PublishTaskHero({
  modeLabel,
  title,
  description,
  helperBullets,
  accentColor,
  accentSoft,
}: {
  modeLabel: string;
  title: string;
  description: string;
  helperBullets: string[];
  accentColor: string;
  accentSoft: string;
}) {
  return (
    <SectionCard style={[styles.card, { backgroundColor: accentSoft, borderColor: accentColor + '26' }]}>
      <View style={styles.top}>
        <View style={[styles.badge, { backgroundColor: '#FFFFFFCC' }]}>
          <Text style={[styles.badgeText, { color: accentColor }]}>{modeLabel}</Text>
        </View>
        <View style={[styles.signal, { backgroundColor: accentColor }]} />
      </View>

      <View style={styles.copy}>
        <Text style={styles.title}>{title}</Text>
        <BodyText style={styles.description}>{description}</BodyText>
      </View>

      <View style={styles.list}>
        {helperBullets.map((item) => (
          <View key={item} style={styles.item}>
            <View style={[styles.dot, { backgroundColor: accentColor }]} />
            <BodyText style={styles.itemCopy}>{item}</BodyText>
          </View>
        ))}
      </View>
    </SectionCard>
  );
}

const styles = StyleSheet.create({
  card: {
    gap: 16,
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  badge: {
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  badgeText: {
    fontFamily: typography.body,
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 0.6,
  },
  signal: {
    width: 42,
    height: 6,
    borderRadius: 999,
  },
  copy: {
    gap: 6,
  },
  title: {
    color: colors.textPrimary,
    fontFamily: typography.display,
    fontSize: 22,
    lineHeight: 28,
    fontWeight: '600',
  },
  description: {
    maxWidth: 300,
  },
  list: {
    gap: 10,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 10,
    paddingVertical: 2,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 999,
    marginTop: 6,
  },
  itemCopy: {
    flex: 1,
  },
});
