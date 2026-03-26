import { StyleSheet, Text, View } from 'react-native';

import { BodyText, PageHeaderCard, PillButton, ScreenShell, SectionCard } from '../../../components/common';
import { colors, typography } from '../../../theme/tokens';

export function PublishFlowStateScreen({
  badge,
  title,
  message,
  primaryLabel,
  onPrimaryPress,
  secondaryLabel,
  onSecondaryPress,
}: {
  badge: string;
  title: string;
  message: string;
  primaryLabel: string;
  onPrimaryPress: () => void;
  secondaryLabel?: string;
  onSecondaryPress?: () => void;
}) {
  return (
    <ScreenShell
      footer={
        <View style={styles.footer}>
          <PillButton label={primaryLabel} onPress={onPrimaryPress} inverse trailing />
          {secondaryLabel && onSecondaryPress ? (
            <PillButton label={secondaryLabel} onPress={onSecondaryPress} />
          ) : null}
        </View>
      }
    >
      <PageHeaderCard
        eyebrow="结果状态"
        title="发布结果"
        subtitle="这一段只展示当前已经拿到的真实结果。"
        badge={badge}
      />

      <SectionCard tone="paper" style={styles.card}>
        <Text style={styles.title}>{title}</Text>
        <BodyText style={styles.message}>{message}</BodyText>
      </SectionCard>
    </ScreenShell>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFDF9',
    gap: 10,
  },
  title: {
    color: colors.textPrimary,
    fontFamily: typography.display,
    fontSize: 28,
    lineHeight: 34,
    fontWeight: '600',
  },
  message: {
    fontSize: 14,
    lineHeight: 22,
  },
  footer: {
    gap: 10,
  },
});
