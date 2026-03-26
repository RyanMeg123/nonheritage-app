import { StyleSheet, Text, View } from 'react-native';

import { BodyText, PageHeaderCard, PillButton, ScreenShell, SectionCard } from '../components/common';
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
      <PageHeaderCard
        eyebrow="需求整理"
        title={data.headerTitle}
        subtitle={data.headerSubtitle}
        badge={data.badgeLabel}
        onBack={onBack}
      />

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

      <SectionCard bordered={false} style={styles.focusCard}>
        <Text style={styles.focusTitle}>{data.focusTitle}</Text>
        <View style={styles.focusList}>
          {data.focusItems.map((item) => (
            <View key={item} style={styles.focusItem}>
              <Text style={styles.focusDot}>•</Text>
              <BodyText style={styles.focusCopy}>
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
  summaryCard: {
    backgroundColor: '#FFFDF9',
  },
  summaryText: {
    color: colors.textPrimary,
    fontFamily: typography.display,
    fontSize: 22,
    lineHeight: 29,
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
    backgroundColor: '#F7EEE7',
  },
  focusTitle: {
    color: colors.textPrimary,
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
    color: colors.accentBurgundy,
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
