import { StyleSheet, Text, View } from 'react-native';

import { BodyText, CardTitle, ToggleChip } from '../../../components/common';
import { colors, radii, typography } from '../../../theme/tokens';
import type { BudgetOption, TimelineOption } from '../../../types';

export function ConstraintPicker({
  budgetOptions,
  timelineOptions,
  selectedBudgetId,
  selectedTimelineId,
  onSelectBudget,
  onSelectTimeline,
}: {
  budgetOptions: BudgetOption[];
  timelineOptions: TimelineOption[];
  selectedBudgetId: string;
  selectedTimelineId: string;
  onSelectBudget: (budgetId: string) => void;
  onSelectTimeline: (timelineId: string) => void;
}) {
  const selectedBudget = budgetOptions.find((item) => item.id === selectedBudgetId);
  const selectedTimeline = timelineOptions.find((item) => item.id === selectedTimelineId);

  return (
    <View style={styles.block}>
      <View style={styles.header}>
        <CardTitle>补充条件</CardTitle>
        <BodyText>预算和时间直接点选，比来回切换更顺手。</BodyText>
      </View>

      <View style={styles.optionBlock}>
        <Text style={styles.optionLabel}>预算上限</Text>
        <View style={styles.chipRow}>
          {budgetOptions.map((item) => (
            <ToggleChip
              key={item.id}
              label={item.value}
              active={item.id === selectedBudgetId}
              onPress={() => onSelectBudget(item.id)}
            />
          ))}
        </View>
      </View>

      <View style={styles.optionBlock}>
        <Text style={styles.optionLabel}>交付时间</Text>
        <View style={styles.chipRow}>
          {timelineOptions.map((item) => (
            <ToggleChip
              key={item.id}
              label={item.value}
              active={item.id === selectedTimelineId}
              onPress={() => onSelectTimeline(item.id)}
            />
          ))}
        </View>
      </View>

      <View style={styles.summaryRow}>
        <View style={styles.summaryPill}>
          <Text style={styles.summaryText}>{selectedBudget?.value ?? ''}</Text>
        </View>
        <View style={[styles.summaryPill, styles.summaryPillSoft]}>
          <Text style={styles.summaryText}>{selectedTimeline?.value ?? ''}</Text>
        </View>
      </View>

      <BodyText style={styles.feedbackText}>预算和时间已经就位，后面会直接带入需求整理。</BodyText>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    gap: 16,
  },
  header: {
    gap: 4,
  },
  optionBlock: {
    gap: 10,
  },
  optionLabel: {
    color: colors.textPrimary,
    fontFamily: typography.body,
    fontSize: 14,
    fontWeight: '600',
  },
  chipRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  summaryRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  summaryPill: {
    borderRadius: radii.pill,
    backgroundColor: '#FFF5EF',
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  summaryPillSoft: {
    backgroundColor: '#EFF8FF',
  },
  summaryText: {
    color: colors.textPrimary,
    fontFamily: typography.body,
    fontSize: 12,
    fontWeight: '600',
  },
  feedbackText: {
    fontSize: 12,
  },
});
