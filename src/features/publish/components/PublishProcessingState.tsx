import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { useEffect, useMemo, useState } from 'react';

import { BodyText, SectionCard } from '../../../components/common';
import { publishPreset } from '../../../data/mockData';
import { colors, radii, typography } from '../../../theme/tokens';
import type { PublishFormState } from '../../../types';
import { publishModeConfig } from '../config';

const processingSteps = [
  '已收到你的需求',
  '正在整理需求重点',
  '正在生成工艺方案',
  '正在匹配合适的传承人',
  '即将进入下一步页面',
];

export function PublishProcessingState({
  formState,
}: {
  formState: PublishFormState;
}) {
  const [activeStep, setActiveStep] = useState(0);
  const currentMode = publishModeConfig[formState.entryMode];

  const selectedCraft = publishPreset.craftOptions.find((item) => item.id === formState.preferredCraftId);
  const selectedBudget = publishPreset.budgetOptions.find((item) => item.id === formState.budgetId);
  const selectedTimeline = publishPreset.timelineOptions.find((item) => item.id === formState.timelineId);

  const summaryBadges = useMemo(
    () =>
      [
        currentMode.modeLabel,
        selectedCraft ? `工艺 ${selectedCraft.label}` : null,
        selectedBudget ? `预算 ${selectedBudget.value}` : null,
        selectedTimeline ? `时间 ${selectedTimeline.value}` : null,
      ].filter(Boolean) as string[],
    [currentMode.modeLabel, selectedBudget, selectedCraft, selectedTimeline],
  );

  useEffect(() => {
    setActiveStep(0);

    const interval = setInterval(() => {
      setActiveStep((current) => {
        if (current >= processingSteps.length - 1) {
          clearInterval(interval);
          return current;
        }
        return current + 1;
      });
    }, 760);

    return () => clearInterval(interval);
  }, [formState.entryMode]);

  return (
    <View style={styles.screen}>
      <View style={styles.glow} />

      <View style={styles.content}>
        <View style={styles.hero}>
          <View style={[styles.heroBadge, { backgroundColor: currentMode.accentSoft }]}>
            <Text style={[styles.heroBadgeText, { color: currentMode.accentColor }]}>系统处理中</Text>
          </View>
          <Text style={styles.title}>已收到你的需求</Text>
          <BodyText style={styles.subtitle}>系统正在替你整理重点、生成方案，并把下一步结果准备好。</BodyText>
        </View>

        <SectionCard style={styles.summaryCard}>
          <Text style={styles.summaryTitle}>当前任务</Text>
          <View style={styles.badgeRow}>
            {summaryBadges.map((badge) => (
              <View key={badge} style={styles.summaryPill}>
                <Text style={styles.summaryPillText}>{badge}</Text>
              </View>
            ))}
          </View>
          <BodyText style={styles.summaryNote}>通常只需要几秒，你不需要再手动做别的事情。</BodyText>
        </SectionCard>

        <SectionCard tone="paper" style={styles.progressCard}>
          {processingSteps.map((step, index) => {
            const done = index < activeStep;
            const active = index === activeStep;

            return (
              <View key={step} style={styles.stepRow}>
                <View
                  style={[
                    styles.stepMarker,
                    done ? styles.stepMarkerDone : null,
                    active ? [styles.stepMarkerActive, { borderColor: currentMode.accentColor }] : null,
                  ]}
                >
                  {active ? <ActivityIndicator size="small" color={currentMode.accentColor} /> : null}
                  {done ? <Text style={styles.stepDoneText}>✓</Text> : null}
                </View>
                <View style={styles.stepCopy}>
                  <Text style={[styles.stepText, active ? [styles.stepTextActive, { color: currentMode.accentColor }] : null]}>
                    {step}
                  </Text>
                  {active ? <BodyText style={styles.stepHint}>请稍等，系统正在替你完成这一段。</BodyText> : null}
                </View>
              </View>
            );
          })}
        </SectionCard>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.bgBase,
  },
  glow: {
    position: 'absolute',
    top: 24,
    left: 24,
    right: 24,
    height: 220,
    borderRadius: 40,
    backgroundColor: 'rgba(249, 221, 207, 0.35)',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 22,
    paddingBottom: 28,
    gap: 18,
    justifyContent: 'center',
  },
  hero: {
    gap: 10,
  },
  heroBadge: {
    alignSelf: 'flex-start',
    borderRadius: radii.pill,
    paddingHorizontal: 12,
    paddingVertical: 7,
  },
  heroBadgeText: {
    fontFamily: typography.body,
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 0.4,
  },
  title: {
    color: colors.textPrimary,
    fontFamily: typography.display,
    fontSize: 30,
    lineHeight: 36,
    fontWeight: '600',
  },
  subtitle: {
    maxWidth: 320,
    fontSize: 14,
    lineHeight: 22,
  },
  summaryCard: {
    backgroundColor: '#FFFDF9',
  },
  summaryTitle: {
    color: colors.textPrimary,
    fontFamily: typography.body,
    fontSize: 15,
    fontWeight: '700',
  },
  badgeRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  summaryPill: {
    borderRadius: radii.pill,
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: '#FFF4EB',
  },
  summaryPillText: {
    color: colors.textPrimary,
    fontFamily: typography.body,
    fontSize: 12,
    fontWeight: '600',
  },
  summaryNote: {
    fontSize: 12,
  },
  progressCard: {
    backgroundColor: '#FFFDF9',
    gap: 14,
  },
  stepRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
  },
  stepMarker: {
    width: 26,
    height: 26,
    borderRadius: 13,
    borderWidth: 1,
    borderColor: colors.lineSoft,
    backgroundColor: '#FFF8F2',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 1,
  },
  stepMarkerDone: {
    backgroundColor: colors.accentBurgundy,
    borderColor: colors.accentBurgundy,
  },
  stepMarkerActive: {
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
  },
  stepDoneText: {
    color: colors.textInverse,
    fontSize: 13,
    fontWeight: '700',
  },
  stepCopy: {
    flex: 1,
    gap: 4,
    paddingTop: 2,
  },
  stepText: {
    color: colors.textPrimary,
    fontFamily: typography.body,
    fontSize: 15,
    fontWeight: '600',
  },
  stepTextActive: {
    fontWeight: '700',
  },
  stepHint: {
    fontSize: 12,
  },
});
