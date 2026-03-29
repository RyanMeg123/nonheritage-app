import { Image, StyleSheet, Text, View } from 'react-native';

import { BodyText, PageHeaderCard, PillButton, ScreenShell, SectionCard } from '../components/common';
import { colors, radii, typography } from '../theme/tokens';
import type { DesignConfirmScreenData, InfoPair } from '../types';

function getDetailMeta(label: string) {
  if (label.includes('工艺')) {
    return { chip: '工艺', tone: 'warm' as const, hint: '确认制作主线' };
  }

  if (label.includes('处理')) {
    return { chip: '辅助', tone: 'soft' as const, hint: '补充层次与质感' };
  }

  if (label.includes('价格')) {
    return { chip: '报价', tone: 'gold' as const, hint: '先看预算边界' };
  }

  if (label.includes('版本')) {
    return { chip: '版本', tone: 'blush' as const, hint: '围绕当前确认单沟通' };
  }

  return { chip: '周期', tone: 'sky' as const, hint: '确认推进节奏' };
}

export function DesignConfirmScreen({
  data,
  previewUri,
  onBack,
  onNext,
}: {
  data: DesignConfirmScreenData;
  previewUri?: string;
  onBack: () => void;
  onNext: () => void;
}) {
  const detailItems: InfoPair[] = [
    ...data.details,
    {
      id: 'confirm-version',
      label: '当前版本',
      value: data.badgeLabel,
    },
  ];

  const detailRows = [detailItems.slice(0, 2), detailItems.slice(2, 5)];

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
        eyebrow="设计确认"
        title={data.headerTitle}
        subtitle={data.headerSubtitle}
        badge={data.badgeLabel}
        onBack={onBack}
      />

      <SectionCard bordered={false} style={styles.leadCard}>
        {previewUri ? <Image source={{ uri: previewUri }} style={styles.leadImage} resizeMode="cover" /> : null}

        <View style={styles.leadTop}>
          <View style={styles.leadBadge}>
            <Text style={styles.leadBadgeText}>当前确认版本</Text>
          </View>
          <Text style={styles.leadTitle}>{data.leadTitle}</Text>
          <BodyText style={styles.leadSummary}>{data.leadSummary}</BodyText>
        </View>
      </SectionCard>

      <SectionCard style={styles.confirmCard}>
        <Text style={styles.sectionTitle}>{data.confirmTitle}</Text>
        <View style={styles.confirmList}>
          {data.confirmItems.map((item) => (
            <View key={item} style={styles.confirmItem}>
              <View style={styles.confirmCheck}>
                <Text style={styles.confirmCheckText}>✓</Text>
              </View>
              <BodyText style={styles.confirmCopy}>{item}</BodyText>
            </View>
          ))}
        </View>
      </SectionCard>

      <SectionCard tone="paper" style={styles.detailCard}>
        <View style={styles.detailHead}>
          <Text style={styles.sectionTitle}>{data.detailTitle}</Text>
          <BodyText style={styles.detailIntro}>收成两行摘要，先扫重点，不用读大段说明。</BodyText>
        </View>

        <View style={styles.detailStack}>
          {detailRows.map((row, rowIndex) => (
            <View key={`row-${rowIndex}`} style={styles.detailRow}>
              {row.map((item) => (
                <DetailDigestCard key={item.id} item={item} compact={rowIndex === 1} />
              ))}
            </View>
          ))}
        </View>
      </SectionCard>

      <View style={styles.actionRow}>
        {data.actions.map((action, index) => (
          <SectionCard key={action.id} bordered={false} style={[styles.actionCard, index === 1 ? styles.actionWarm : null]}>
            <Text style={styles.actionTitle}>{action.title}</Text>
            <BodyText style={styles.actionCopy}>{action.description}</BodyText>
          </SectionCard>
        ))}
      </View>

      <SectionCard tone="warn" bordered={false}>
        <Text style={styles.noticeTitle}>{data.noticeTitle}</Text>
        <Text style={styles.noticeText}>{data.noticeText}</Text>
      </SectionCard>
    </ScreenShell>
  );
}

function DetailDigestCard({ item, compact }: { item: InfoPair; compact: boolean }) {
  const meta = getDetailMeta(item.label);

  return (
    <View
      style={[
        styles.detailDigestCard,
        compact ? styles.detailDigestCardCompact : styles.detailDigestCardWide,
        meta.tone === 'warm' ? styles.detailDigestCardWarm : null,
        meta.tone === 'soft' ? styles.detailDigestCardSoft : null,
        meta.tone === 'gold' ? styles.detailDigestCardGold : null,
        meta.tone === 'sky' ? styles.detailDigestCardSky : null,
        meta.tone === 'blush' ? styles.detailDigestCardBlush : null,
      ]}
    >
      <View style={styles.detailDigestTop}>
        <Text style={styles.detailDigestLabel}>{item.label}</Text>
        <View style={styles.detailDigestChip}>
          <Text style={styles.detailDigestChipText}>{meta.chip}</Text>
        </View>
      </View>

      <Text style={[styles.detailDigestValue, compact ? styles.detailDigestValueCompact : null]} numberOfLines={compact ? 3 : 4}>
        {item.value}
      </Text>
      <BodyText style={styles.detailDigestHint}>{meta.hint}</BodyText>
    </View>
  );
}

const styles = StyleSheet.create({
  leadCard: {
    backgroundColor: '#F7EEE7',
    gap: 16,
  },
  leadImage: {
    width: '100%',
    height: 176,
    borderRadius: 22,
    backgroundColor: colors.surfaceCream,
  },
  leadTop: {
    gap: 10,
  },
  leadBadge: {
    alignSelf: 'flex-start',
    borderRadius: radii.pill,
    backgroundColor: '#FFF7F1',
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  leadBadgeText: {
    color: colors.accentBurgundy,
    fontFamily: typography.body,
    fontSize: 11,
    fontWeight: '700',
  },
  leadTitle: {
    color: colors.textPrimary,
    fontFamily: typography.display,
    fontSize: 17,
    lineHeight: 23,
    fontWeight: '600',
  },
  leadSummary: {
    fontSize: 11,
    lineHeight: 16,
  },
  sectionTitle: {
    color: colors.textPrimary,
    fontFamily: typography.body,
    fontSize: 14,
    fontWeight: '600',
  },
  confirmCard: {
    backgroundColor: '#FFF7F1',
    gap: 12,
  },
  confirmList: {
    gap: 10,
  },
  confirmItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 10,
  },
  confirmCheck: {
    width: 20,
    height: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FBEFEA',
  },
  confirmCheckText: {
    color: colors.accentBurgundy,
    fontSize: 11,
    fontWeight: '700',
  },
  confirmCopy: {
    flex: 1,
    fontSize: 12,
    lineHeight: 17,
  },
  detailCard: {
    backgroundColor: colors.mutedPaper,
    gap: 14,
  },
  detailHead: {
    gap: 5,
  },
  detailIntro: {
    paddingRight: 8,
    fontSize: 11,
    lineHeight: 16,
  },
  detailStack: {
    gap: 10,
  },
  detailRow: {
    flexDirection: 'row',
    gap: 10,
  },
  detailDigestCard: {
    borderRadius: 20,
    padding: 12,
    gap: 8,
    backgroundColor: colors.surfaceCream,
    borderWidth: 1,
    borderColor: 'rgba(241,223,210,0.78)',
  },
  detailDigestCardWide: {
    flex: 1,
    minHeight: 150,
  },
  detailDigestCardCompact: {
    flex: 1,
    minHeight: 112,
  },
  detailDigestCardWarm: {
    backgroundColor: '#FFFDFB',
  },
  detailDigestCardSoft: {
    backgroundColor: '#FFF8F1',
  },
  detailDigestCardGold: {
    backgroundColor: '#FFF8EC',
  },
  detailDigestCardSky: {
    backgroundColor: '#F5FAFF',
  },
  detailDigestCardBlush: {
    backgroundColor: '#FFF6F4',
  },
  detailDigestTop: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 8,
  },
  detailDigestLabel: {
    color: colors.textSecondary,
    fontFamily: typography.body,
    fontSize: 10,
    fontWeight: '600',
  },
  detailDigestChip: {
    alignSelf: 'flex-start',
    borderRadius: radii.pill,
    backgroundColor: 'rgba(255,255,255,0.74)',
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
  detailDigestChipText: {
    color: colors.accentBurgundy,
    fontFamily: typography.body,
    fontSize: 9,
    fontWeight: '700',
  },
  detailDigestValue: {
    color: colors.textPrimary,
    fontFamily: typography.body,
    fontSize: 12,
    lineHeight: 17,
    fontWeight: '700',
  },
  detailDigestValueCompact: {
    fontSize: 11,
    lineHeight: 16,
  },
  detailDigestHint: {
    fontSize: 10,
    lineHeight: 15,
    marginTop: 'auto',
  },
  actionRow: {
    gap: 10,
  },
  actionCard: {
    backgroundColor: colors.surfaceCream,
    gap: 5,
  },
  actionWarm: {
    backgroundColor: '#FBEFEA',
  },
  actionTitle: {
    color: colors.textPrimary,
    fontFamily: typography.body,
    fontSize: 12,
    fontWeight: '700',
  },
  actionCopy: {
    fontSize: 11,
    lineHeight: 16,
  },
  noticeTitle: {
    color: colors.warnText,
    fontFamily: typography.body,
    fontSize: 13,
    fontWeight: '700',
  },
  noticeText: {
    color: colors.warnText,
    fontFamily: typography.body,
    fontSize: 11,
    lineHeight: 16,
  },
  footerContent: {
    gap: 10,
  },
  footerNote: {
    fontSize: 11,
    lineHeight: 16,
  },
});
