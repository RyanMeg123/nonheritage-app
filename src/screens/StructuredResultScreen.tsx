import { StyleSheet, Text, View } from 'react-native';

import { BackChip, BodyText, DisplayText, PillButton, ScreenShell, SectionCard } from '../components/common';
import { colors, radii, typography } from '../theme/tokens';
import type { StructuredResultData } from '../types';

export function StructuredResultScreen({
  data,
  onBack,
  onNext,
}: {
  data: StructuredResultData;
  onBack: () => void;
  onNext: () => void;
}) {
  return (
    <ScreenShell
      footer={
        <View style={styles.footerContent}>
          <PillButton label={data.ctaLabel} onPress={onNext} inverse trailing />
          <BodyText style={styles.footerNote}>{data.footerNote}</BodyText>
        </View>
      }
    >
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <BackChip onPress={onBack} />
          <View style={styles.headerCopy}>
            <BodyText style={styles.headerEyebrow}>structured brief</BodyText>
            <DisplayText style={styles.headerTitle}>{data.headerTitle}</DisplayText>
            <BodyText>{data.headerSubtitle}</BodyText>
          </View>
        </View>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{data.badgeLabel}</Text>
        </View>
      </View>

      <SectionCard tone="paper" style={styles.summaryCard}>
        <Text style={styles.summaryText}>{data.summary}</Text>
        <BodyText>{data.summaryNote}</BodyText>
      </SectionCard>

      <SectionCard style={styles.infoCard}>
        <Text style={styles.sectionTitle}>{data.keyInfoTitle}</Text>
        <View style={styles.infoList}>
          {data.keyInfo.map((item, index) => (
            <View key={item.id} style={[styles.infoRow, index === 1 ? styles.infoRowWarm : null]}>
              <BodyText style={styles.infoLabel}>{item.label}</BodyText>
              <Text style={styles.infoValue}>{item.value}</Text>
            </View>
          ))}
        </View>
      </SectionCard>

      <SectionCard tone="deep" bordered={false} style={styles.focusCard}>
        <Text style={styles.focusTitle}>{data.focusTitle}</Text>
        <View style={styles.focusList}>
          {data.focusItems.map((item) => (
            <View key={item} style={styles.focusItem}>
              <Text style={styles.focusDot}>•</Text>
              <BodyText inverse style={styles.focusCopy}>
                {item}
              </BodyText>
            </View>
          ))}
        </View>
      </SectionCard>

      <SectionCard tone="warn" bordered={false}>
        <Text style={styles.warnTitle}>{data.confirmTitle}</Text>
        <Text style={styles.warnText}>{data.confirmText}</Text>
      </SectionCard>
    </ScreenShell>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: 12,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
    flex: 1,
  },
  headerCopy: {
    flex: 1,
    gap: 2,
    paddingTop: 2,
  },
  headerEyebrow: {
    color: colors.accentBurgundy,
    fontSize: 12,
    fontWeight: '600',
  },
  headerTitle: {
    fontSize: 30,
  },
  badge: {
    borderRadius: radii.pill,
    backgroundColor: colors.sky,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  badgeText: {
    color: colors.textPrimary,
    fontFamily: typography.body,
    fontSize: 12,
    fontWeight: '700',
  },
  summaryCard: {
    backgroundColor: '#FFFDF9',
  },
  summaryText: {
    color: colors.textPrimary,
    fontFamily: typography.display,
    fontSize: 24,
    lineHeight: 31,
    fontWeight: '600',
  },
  infoCard: {
    backgroundColor: '#FFF7F1',
  },
  sectionTitle: {
    color: colors.textPrimary,
    fontFamily: typography.body,
    fontSize: 16,
    fontWeight: '600',
  },
  infoList: {
    gap: 10,
  },
  infoRow: {
    borderRadius: 20,
    backgroundColor: colors.surfaceCream,
    padding: 14,
    gap: 4,
  },
  infoRowWarm: {
    backgroundColor: '#EFF8FF',
  },
  infoLabel: {
    fontSize: 12,
  },
  infoValue: {
    color: colors.textPrimary,
    fontFamily: typography.body,
    fontSize: 17,
    fontWeight: '700',
  },
  focusCard: {
    backgroundColor: colors.accentBurgundy,
  },
  focusTitle: {
    color: colors.textInverse,
    fontFamily: typography.body,
    fontSize: 16,
    fontWeight: '700',
  },
  focusList: {
    gap: 10,
  },
  focusItem: {
    flexDirection: 'row',
    gap: 8,
  },
  focusDot: {
    color: colors.textInverse,
    fontSize: 18,
    lineHeight: 20,
  },
  focusCopy: {
    flex: 1,
  },
  warnTitle: {
    color: colors.warnText,
    fontFamily: typography.body,
    fontSize: 15,
    fontWeight: '700',
  },
  warnText: {
    color: colors.warnText,
    fontFamily: typography.body,
    fontSize: 14,
    lineHeight: 21,
  },
  footerContent: {
    gap: 10,
  },
  footerNote: {
    fontSize: 12,
  },
});
