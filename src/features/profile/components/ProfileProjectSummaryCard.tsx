import { StyleSheet, Text, View } from 'react-native';

import { BodyText, SectionCard } from '../../../components/common';
import { colors, typography } from '../../../theme/tokens';

export function ProfileProjectSummaryCard({
  label,
  title,
  summary,
  checklist,
  outcome,
}: {
  label: string;
  title: string;
  summary: string;
  checklist: string[];
  outcome: string;
}) {
  return (
    <SectionCard bordered={false} style={styles.card}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.title}>{title}</Text>
      <BodyText>{summary}</BodyText>
      <View style={styles.list}>
        {checklist.map((item) => (
          <View key={item} style={styles.row}>
            <View style={styles.dot} />
            <Text style={styles.itemText}>{item}</Text>
          </View>
        ))}
      </View>
      <View style={styles.outcomeWrap}>
        <Text style={styles.outcomeLabel}>完成后</Text>
        <Text style={styles.outcomeText}>{outcome}</Text>
      </View>
    </SectionCard>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFF9F4',
    gap: 10,
  },
  label: {
    color: colors.accentBurgundy,
    fontFamily: typography.body,
    fontSize: 12,
    fontWeight: '700',
  },
  title: {
    color: colors.textPrimary,
    fontFamily: typography.body,
    fontSize: 16,
    fontWeight: '700',
  },
  list: {
    gap: 8,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 10,
  },
  dot: {
    width: 7,
    height: 7,
    borderRadius: 999,
    marginTop: 7,
    backgroundColor: colors.accentBurgundy,
  },
  itemText: {
    flex: 1,
    color: colors.textSecondary,
    fontFamily: typography.body,
    fontSize: 14,
    lineHeight: 22,
  },
  outcomeWrap: {
    borderTopWidth: 1,
    borderTopColor: 'rgba(199, 120, 120, 0.16)',
    paddingTop: 10,
    gap: 2,
  },
  outcomeLabel: {
    color: colors.accentBurgundy,
    fontFamily: typography.body,
    fontSize: 12,
    fontWeight: '700',
  },
  outcomeText: {
    color: colors.textPrimary,
    fontFamily: typography.body,
    fontSize: 14,
    lineHeight: 21,
    fontWeight: '600',
  },
});
