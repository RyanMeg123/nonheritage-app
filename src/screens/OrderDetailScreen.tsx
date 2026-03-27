import { StyleSheet, Text, View } from 'react-native';

import { BodyText, PageHeaderCard, PillButton, ScreenShell, SectionCard } from '../components/common';
import { colors, typography } from '../theme/tokens';
import type { OrderDetailScreenData } from '../types';

function getStatusTagTone(value: string) {
  if (value.includes('待确认')) {
    return {
      backgroundColor: 'rgba(216,124,124,0.14)',
      borderColor: 'rgba(216,124,124,0.28)',
      textColor: colors.warnText,
    };
  }

  if (value.includes('确认') || value.includes('已支付')) {
    return {
      backgroundColor: 'rgba(123,167,128,0.16)',
      borderColor: 'rgba(123,167,128,0.28)',
      textColor: '#4B7A52',
    };
  }

  if (value.includes('制作中')) {
    return {
      backgroundColor: 'rgba(123,151,188,0.16)',
      borderColor: 'rgba(123,151,188,0.28)',
      textColor: '#496A92',
    };
  }

  if (value.includes('已完成')) {
    return {
      backgroundColor: 'rgba(143,156,120,0.16)',
      borderColor: 'rgba(143,156,120,0.28)',
      textColor: '#62704C',
    };
  }

  return {
    backgroundColor: 'rgba(194,154,101,0.14)',
    borderColor: 'rgba(194,154,101,0.28)',
    textColor: '#9A6E3E',
  };
}

function getSummaryValueTone(itemId: string, value: string) {
  if (itemId === 'summary-status') {
    return getStatusTagTone(value);
  }

  if (itemId === 'summary-price') {
    return {
      backgroundColor: 'rgba(206,134,126,0.12)',
      borderColor: 'rgba(206,134,126,0.2)',
      textColor: '#B16860',
    };
  }

  if (itemId === 'summary-date') {
    return {
      backgroundColor: 'rgba(121,151,177,0.12)',
      borderColor: 'rgba(121,151,177,0.2)',
      textColor: '#5D7692',
    };
  }

  return {
    backgroundColor: '#F7EFE8',
    borderColor: 'rgba(241,223,210,0.74)',
    textColor: colors.textPrimary,
  };
}

export function OrderDetailScreen({
  data,
  onBack,
  onDone,
}: {
  data: OrderDetailScreenData;
  onBack: () => void;
  onDone: () => void;
}) {
  return (
    <ScreenShell
      footer={
        <View style={styles.footerContent}>
          <PillButton label={data.ctaLabel} onPress={onDone} inverse trailing />
          <BodyText style={styles.footerNote}>{data.footerNote}</BodyText>
        </View>
      }
    >
      <PageHeaderCard
        eyebrow="订单信息"
        title={data.headerTitle}
        subtitle={data.headerSubtitle}
        badge={data.badgeLabel}
        onBack={onBack}
      />

      <SectionCard bordered={false} style={styles.leadCard}>
        <Text style={styles.leadTitle}>{data.leadTitle}</Text>
        <BodyText>{data.leadSummary}</BodyText>
      </SectionCard>

      <SectionCard style={styles.summaryCard}>
        <Text style={styles.sectionTitle}>{data.summaryTitle}</Text>
        <BodyText style={styles.sectionNote}>{data.primaryNote}</BodyText>
        <View style={styles.summaryPanel}>
          {data.summaryItems.map((item, index) => {
            const tone = getSummaryValueTone(item.id, item.value);

            return (
            <View
              key={item.id}
              style={[
                styles.summaryRow,
                index === data.summaryItems.length - 1 ? styles.summaryRowLast : null,
              ]}
            >
              <BodyText style={styles.detailLabel}>{item.label}</BodyText>
              <View
                style={[
                  styles.detailTag,
                  {
                    backgroundColor: tone.backgroundColor,
                    borderColor: tone.borderColor,
                  },
                ]}
              >
                <Text style={[styles.detailValue, { color: tone.textColor }]}>{item.value}</Text>
              </View>
            </View>
            );
          })}
        </View>
      </SectionCard>

      <SectionCard tone="paper" style={styles.contextCard}>
        <Text style={styles.sectionTitle}>{data.contextTitle}</Text>
        <BodyText style={styles.sectionNote}>{data.secondaryNote}</BodyText>
        <View style={styles.contextList}>
          {data.contextItems.map((item) => (
            <View key={item.id} style={styles.contextItem}>
              <BodyText style={styles.contextLabel}>{item.label}</BodyText>
              <Text style={styles.contextValue}>{item.value}</Text>
            </View>
          ))}
        </View>
      </SectionCard>

      <SectionCard tone="warn" bordered={false}>
        <Text style={styles.noticeTitle}>{data.noteTitle}</Text>
        <Text style={styles.noticeText}>{data.noteText}</Text>
      </SectionCard>
    </ScreenShell>
  );
}

const styles = StyleSheet.create({
  leadCard: {
    backgroundColor: '#F7EEE7',
  },
  leadTitle: {
    color: colors.textPrimary,
    fontFamily: typography.display,
    fontSize: 28,
    lineHeight: 34,
    fontWeight: '600',
  },
  summaryCard: {
    backgroundColor: '#FFF7F1',
  },
  contextCard: {
    backgroundColor: colors.mutedPaper,
  },
  sectionTitle: {
    color: colors.textPrimary,
    fontFamily: typography.body,
    fontSize: 16,
    fontWeight: '600',
  },
  sectionNote: {
    fontSize: 12,
  },
  summaryPanel: {
    borderRadius: 20,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(241,223,210,0.74)',
    backgroundColor: colors.surfaceCream,
  },
  summaryRow: {
    paddingHorizontal: 14,
    paddingVertical: 16,
    gap: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(241,223,210,0.74)',
  },
  summaryRowLast: {
    borderBottomWidth: 0,
  },
  detailLabel: {
    fontSize: 12,
    flexShrink: 0,
  },
  detailTag: {
    borderRadius: 999,
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginLeft: 10,
    maxWidth: '72%',
  },
  detailValue: {
    fontFamily: typography.body,
    fontSize: 14,
    fontWeight: '700',
    textAlign: 'right',
  },
  contextList: {
    gap: 10,
  },
  contextItem: {
    borderRadius: 20,
    backgroundColor: '#FFFDFB',
    padding: 14,
    gap: 4,
  },
  contextLabel: {
    fontSize: 12,
  },
  contextValue: {
    color: colors.textPrimary,
    fontFamily: typography.body,
    fontSize: 15,
    fontWeight: '700',
    lineHeight: 22,
  },
  noticeTitle: {
    color: colors.warnText,
    fontFamily: typography.body,
    fontSize: 15,
    fontWeight: '700',
  },
  noticeText: {
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
