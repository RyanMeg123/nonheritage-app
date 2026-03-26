import { StyleSheet, Text, View } from 'react-native';

import { BodyText, MainTabBar, PillButton } from '../../../components/common';
import { colors, radii, typography } from '../../../theme/tokens';
import type { HomeData, MainTabId } from '../../../types';

export function PublishFooterBar({
  modeLabel,
  ctaLabel,
  primaryStatus,
  suggestionText,
  summaryBadges,
  nextStepText,
  accentColor,
  accentSoft,
  tabs,
  onContinue,
  onTabPress,
}: {
  modeLabel: string;
  ctaLabel: string;
  primaryStatus: string;
  suggestionText: string;
  summaryBadges: string[];
  nextStepText: string;
  accentColor: string;
  accentSoft: string;
  tabs: HomeData['bottomTabs'];
  onContinue: () => void;
  onTabPress: (tabId: MainTabId) => void;
}) {
  return (
    <View style={styles.content}>
      <View style={styles.topRow}>
        <View style={[styles.modeBadge, { backgroundColor: accentSoft }]}>
          <Text style={[styles.modeBadgeText, { color: accentColor }]}>{modeLabel}</Text>
        </View>
        <BodyText style={styles.statusText}>{primaryStatus}</BodyText>
      </View>

      <View style={styles.feedbackBlock}>
        <View style={styles.feedbackRow}>
          <Text style={styles.feedbackLabel}>建议补充</Text>
          <BodyText style={styles.feedbackCopy}>{suggestionText}</BodyText>
        </View>
        <View style={styles.feedbackRow}>
          <Text style={styles.feedbackLabel}>点击后</Text>
          <BodyText style={styles.feedbackCopy}>{nextStepText}</BodyText>
        </View>
      </View>

      <View style={styles.badgeRow}>
        {summaryBadges.map((badge) => (
          <View key={badge} style={styles.summaryPill}>
            <Text style={styles.summaryPillText}>{badge}</Text>
          </View>
        ))}
      </View>

      <PillButton label={ctaLabel} onPress={onContinue} inverse trailing />
      <BodyText style={styles.note}>现在不会直接下单，会先进入需求整理和方案确认。</BodyText>
      <View style={styles.divider} />
      <MainTabBar tabs={tabs} activeTab="custom" onTabPress={onTabPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    gap: 12,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 12,
  },
  modeBadge: {
    borderRadius: radii.pill,
    paddingHorizontal: 10,
    paddingVertical: 6,
    backgroundColor: '#F7EEE7',
  },
  modeBadgeText: {
    color: colors.accentBurgundy,
    fontFamily: typography.body,
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  statusText: {
    flex: 1,
    textAlign: 'right',
    fontSize: 12,
  },
  badgeRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  feedbackBlock: {
    gap: 8,
    paddingTop: 2,
  },
  feedbackRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 10,
  },
  feedbackLabel: {
    minWidth: 48,
    color: colors.textSecondary,
    fontFamily: typography.body,
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 0.4,
  },
  feedbackCopy: {
    flex: 1,
    fontSize: 12,
  },
  summaryPill: {
    borderRadius: radii.pill,
    paddingHorizontal: 10,
    paddingVertical: 7,
    backgroundColor: '#FFF4EB',
  },
  summaryPillText: {
    color: colors.textPrimary,
    fontFamily: typography.body,
    fontSize: 12,
    fontWeight: '600',
  },
  note: {
    fontSize: 12,
    color: colors.textSecondary,
  },
  divider: {
    height: 1,
    backgroundColor: colors.lineSoft,
  },
});
