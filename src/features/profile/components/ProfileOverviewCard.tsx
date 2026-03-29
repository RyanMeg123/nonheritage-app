import { Pressable, StyleSheet, Text, View } from 'react-native';

import { BodyText, SectionCard } from '../../../components/common';
import { colors, typography } from '../../../theme/tokens';

export function ProfileOverviewCard({
  label,
  title,
  summary,
  tag,
  note,
  actionLabel,
  onPress,
  subdued = false,
}: {
  label?: string;
  title: string;
  summary: string;
  tag?: string;
  note?: string;
  actionLabel?: string;
  onPress?: () => void;
  subdued?: boolean;
}) {
  return (
    <SectionCard bordered={false} style={[styles.card, subdued ? styles.cardSubdued : null]}>
      <View style={styles.topRow}>
        <View style={styles.titleWrap}>
          {label ? <Text style={styles.label}>{label}</Text> : null}
          <Text style={styles.title}>{title}</Text>
        </View>
        {tag ? (
          <View style={[styles.tag, subdued ? styles.tagSubdued : null]}>
            <Text style={styles.tagText}>{tag}</Text>
          </View>
        ) : null}
      </View>
      <BodyText>{summary}</BodyText>
      {note ? <Text style={styles.note}>{note}</Text> : null}
      {onPress && actionLabel ? (
        <Pressable style={({ pressed }) => [styles.linkWrap, pressed && styles.pressed]} onPress={onPress}>
          <Text style={styles.link}>{actionLabel}</Text>
        </Pressable>
      ) : null}
    </SectionCard>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFF7F1',
    gap: 8,
  },
  cardSubdued: {
    backgroundColor: '#FFFBF7',
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: 12,
  },
  titleWrap: {
    flex: 1,
    gap: 3,
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
    fontSize: 15,
    fontWeight: '700',
  },
  tag: {
    borderRadius: 999,
    backgroundColor: '#FBEFEA',
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  tagSubdued: {
    backgroundColor: '#F7EEE7',
  },
  tagText: {
    color: colors.accentBurgundy,
    fontFamily: typography.body,
    fontSize: 12,
    fontWeight: '700',
  },
  note: {
    color: colors.textSecondary,
    fontFamily: typography.body,
    fontSize: 12,
    lineHeight: 19,
  },
  linkWrap: {
    marginTop: 2,
  },
  link: {
    color: colors.accentBurgundy,
    fontFamily: typography.body,
    fontSize: 14,
    fontWeight: '700',
  },
  pressed: {
    opacity: 0.92,
  },
});
