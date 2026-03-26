import { StyleSheet, Text, View } from 'react-native';

import { BodyText, SectionCard } from '../../../components/common';
import { colors, radii, typography } from '../../../theme/tokens';

export function ProfileVersionUpdateCard({
  title,
  tag,
  summary,
  note,
}: {
  title: string;
  tag: string;
  summary: string;
  note: string;
}) {
  return (
    <SectionCard bordered={false} style={styles.card}>
      <Text style={styles.eyebrow}>最近进展</Text>
      <View style={styles.topRow}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.tag}>
          <Text style={styles.tagText}>{tag}</Text>
        </View>
      </View>
      <BodyText>{summary}</BodyText>
      <BodyText style={styles.note}>{note}</BodyText>
    </SectionCard>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFDF9',
    gap: 8,
  },
  eyebrow: {
    color: colors.accentBurgundy,
    fontFamily: typography.body,
    fontSize: 12,
    fontWeight: '700',
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
    fontWeight: '700',
  },
  tag: {
    borderRadius: radii.pill,
    backgroundColor: '#FBEFEA',
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  tagText: {
    color: colors.accentBurgundy,
    fontFamily: typography.body,
    fontSize: 12,
    fontWeight: '700',
  },
  note: {
    fontSize: 12,
  },
});
