import { useEffect, useRef, useState } from 'react';
import {
  Animated,
  Easing,
  LayoutAnimation,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  UIManager,
  View,
} from 'react-native';

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
  isLoading = false,
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
  isLoading?: boolean;
  onContinue: () => void;
  onTabPress: (tabId: MainTabId) => void;
}) {
  const [detailsExpanded, setDetailsExpanded] = useState(false);
  const chevronRotation = useRef(new Animated.Value(0)).current;
  const attentionMotion = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }, []);

  useEffect(() => {
    Animated.timing(chevronRotation, {
      toValue: detailsExpanded ? 1 : 0,
      duration: 180,
      easing: Easing.out(Easing.quad),
      useNativeDriver: true,
    }).start();
  }, [chevronRotation, detailsExpanded]);

  useEffect(() => {
    if (detailsExpanded) {
      attentionMotion.stopAnimation();
      attentionMotion.setValue(0);
      return;
    }

    const attentionLoop = Animated.loop(
      Animated.sequence([
        Animated.delay(900),
        Animated.timing(attentionMotion, {
          toValue: 1,
          duration: 240,
          easing: Easing.out(Easing.quad),
          useNativeDriver: true,
        }),
        Animated.timing(attentionMotion, {
          toValue: 0,
          duration: 380,
          easing: Easing.inOut(Easing.quad),
          useNativeDriver: true,
        }),
        Animated.delay(1400),
      ]),
    );

    attentionLoop.start();

    return () => attentionLoop.stop();
  }, [attentionMotion, detailsExpanded]);

  const toggleDetails = () => {
    LayoutAnimation.configureNext({
      duration: 180,
      update: {
        type: LayoutAnimation.Types.easeInEaseOut,
      },
      create: {
        type: LayoutAnimation.Types.easeInEaseOut,
        property: LayoutAnimation.Properties.opacity,
      },
      delete: {
        type: LayoutAnimation.Types.easeInEaseOut,
        property: LayoutAnimation.Properties.opacity,
      },
    });

    setDetailsExpanded((current) => !current);
  };

  const chevronStyle = {
    transform: [
      {
        rotate: chevronRotation.interpolate({
          inputRange: [0, 1],
          outputRange: ['0deg', '180deg'],
        }),
      },
    ],
  };

  const toggleMotionStyle = detailsExpanded
    ? undefined
    : {
        transform: [
          {
            translateY: attentionMotion.interpolate({
              inputRange: [0, 1],
              outputRange: [0, -3],
            }),
          },
        ],
      };

  return (
    <View style={styles.content}>
      <PillButton
        label={ctaLabel}
        onPress={onContinue}
        inverse
        trailing
        isLoading={isLoading}
      />

      <Animated.View style={toggleMotionStyle}>
        <Pressable
          disabled={isLoading}
          onPress={toggleDetails}
          style={({ pressed }) => [
            styles.detailToggle,
            { backgroundColor: accentSoft, borderColor: accentColor + '2E' },
            pressed || isLoading ? styles.togglePressed : null,
          ]}
        >
          <Text style={[styles.detailToggleText, { color: accentColor }]}>
            {detailsExpanded ? '收起其他内容' : '展开其他内容'}
          </Text>
          <Animated.View style={[styles.detailToggleIcon, { backgroundColor: '#FFFFFFCC' }, chevronStyle]}>
            <Text style={[styles.detailToggleArrow, { color: accentColor }]}>⌄</Text>
          </Animated.View>
        </Pressable>
      </Animated.View>

      {detailsExpanded ? (
        <View style={styles.expandedPanel}>
          <View style={styles.summaryBlock}>
            <View style={styles.summaryHeader}>
              <Text style={styles.summaryLabel}>主任务摘要</Text>
              <View style={[styles.modeBadge, { backgroundColor: accentSoft }]}>
                <Text style={[styles.modeBadgeText, { color: accentColor }]}>{modeLabel}</Text>
              </View>
            </View>
            <Text style={styles.statusTitle}>{primaryStatus}</Text>
          </View>

          <View style={styles.selectionBlock}>
            <Text style={styles.selectionLabel}>已选信息</Text>
            <View style={styles.badgeRow}>
              {summaryBadges.map((badge) => (
                <View key={badge} style={styles.summaryPill}>
                  <Text style={styles.summaryPillText}>{badge}</Text>
                </View>
              ))}
            </View>
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
            <BodyText style={styles.note}>现在不会直接下单，会先进入需求整理和方案确认。</BodyText>
          </View>

          <View style={styles.tabDivider} />
          <MainTabBar tabs={tabs} activeTab="custom" onTabPress={onTabPress} compact />
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    gap: 6,
  },
  expandedPanel: {
    gap: 10,
    paddingTop: 2,
  },
  summaryBlock: {
    gap: 6,
  },
  summaryHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 12,
  },
  summaryLabel: {
    color: colors.textSecondary,
    fontFamily: typography.body,
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 0.45,
  },
  statusTitle: {
    color: colors.textPrimary,
    fontFamily: typography.body,
    fontSize: 15,
    lineHeight: 20,
    fontWeight: '700',
  },
  modeBadge: {
    borderRadius: radii.pill,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#F7EEE7',
  },
  modeBadgeText: {
    color: colors.accentBurgundy,
    fontFamily: typography.body,
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  selectionBlock: {
    gap: 6,
  },
  selectionLabel: {
    color: colors.textSecondary,
    fontFamily: typography.body,
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 0.45,
  },
  badgeRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
  },
  feedbackBlock: {
    gap: 8,
    paddingTop: 2,
    paddingHorizontal: 2,
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
    paddingVertical: 6,
    backgroundColor: '#FFF4EB',
  },
  summaryPillText: {
    color: colors.textPrimary,
    fontFamily: typography.body,
    fontSize: 11,
    fontWeight: '600',
  },
  detailToggle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    minHeight: 36,
    paddingLeft: 12,
    paddingRight: 6,
    borderRadius: radii.pill,
    borderWidth: 1,
    alignSelf: 'center',
    minWidth: 132,
  },
  togglePressed: {
    opacity: 0.86,
  },
  detailToggleText: {
    fontFamily: typography.body,
    fontSize: 12,
    fontWeight: '700',
  },
  detailToggleIcon: {
    width: 24,
    height: 24,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  detailToggleArrow: {
    fontSize: 15,
    lineHeight: 15,
    fontWeight: '700',
    textAlign: 'center',
    includeFontPadding: false,
  },
  note: {
    fontSize: 12,
    color: colors.textSecondary,
  },
  tabDivider: {
    height: 1,
    backgroundColor: colors.lineSoft,
  },
});
