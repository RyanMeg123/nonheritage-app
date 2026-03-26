import { StyleSheet, Text, View } from 'react-native';

import { BodyText, SectionCard } from '../../../components/common';
import { colors, radii, typography } from '../../../theme/tokens';

export function ProfileVersionHistorySection({
  title,
  summary,
  items,
}: {
  title: string;
  summary: string;
  items: Array<{
    id: string;
    version: string;
    title: string;
    summary: string;
    state: 'current' | 'done';
  }>;
}) {
  return (
    <SectionCard tone="paper" style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.eyebrow}>历史沉淀</Text>
        <Text style={styles.title}>{title}</Text>
        <BodyText style={styles.summary}>{summary}</BodyText>
      </View>
      <View style={styles.list}>
        {items.map((item) => (
          <View key={item.id} style={styles.row}>
            <View style={[styles.badge, item.state === 'current' ? styles.badgeCurrent : styles.badgeDone]}>
              <Text style={[styles.badgeText, item.state === 'current' ? styles.badgeTextCurrent : null]}>
                {item.version}
              </Text>
            </View>
            <View style={styles.copy}>
              <Text style={styles.itemTitle}>{item.title}</Text>
              <BodyText>{item.summary}</BodyText>
            </View>
          </View>
        ))}
      </View>
    </SectionCard>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.mutedPaper,
  },
  title: {
    color: colors.textPrimary,
    fontFamily: typography.body,
    fontSize: 16,
    fontWeight: '700',
  },
  header: {
    gap: 4,
  },
  eyebrow: {
    color: colors.accentBurgundy,
    fontFamily: typography.body,
    fontSize: 12,
    fontWeight: '700',
  },
  summary: {
    fontSize: 12,
  },
  list: {
    gap: 12,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 10,
  },
  badge: {
    minWidth: 48,
    borderRadius: radii.pill,
    paddingHorizontal: 10,
    paddingVertical: 7,
    alignItems: 'center',
  },
  badgeCurrent: {
    backgroundColor: '#FBEFEA',
  },
  badgeDone: {
    backgroundColor: '#FFF8F1',
  },
  badgeText: {
    color: colors.textPrimary,
    fontFamily: typography.body,
    fontSize: 12,
    fontWeight: '700',
  },
  badgeTextCurrent: {
    color: colors.accentBurgundy,
  },
  copy: {
    flex: 1,
    gap: 2,
  },
  itemTitle: {
    color: colors.textPrimary,
    fontFamily: typography.body,
    fontSize: 15,
    fontWeight: '700',
  },
});
