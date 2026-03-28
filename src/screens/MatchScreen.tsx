import { Image, StyleSheet, Text, View } from 'react-native';

import { BodyText, PageHeaderCard, PillButton, ScreenShell, SectionCard } from '../components/common';
import { colors, radii, typography } from '../theme/tokens';
import type { MatchScreenData } from '../types';

export function MatchScreen({
  data,
  previewUri,
  onBack,
  onNext,
}: {
  data: MatchScreenData;
  previewUri?: string;
  onBack: () => void;
  onNext: () => void;
}) {
  const priceItem = data.logicItems.find((item) => item.label === '价格区间');
  const timelineItem = data.logicItems.find((item) => item.label === '参考工期');

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
        eyebrow="匹配推荐"
        title={data.headerTitle}
        subtitle={data.headerSubtitle}
        badge={data.badgeLabel}
        onBack={onBack}
      />

      <SectionCard bordered={false} style={styles.leadCard}>
        {previewUri ? (
          <Image source={{ uri: previewUri }} style={styles.leadImage} resizeMode="contain" />
        ) : null}
        <Text style={styles.leadName}>{data.leadTitle}</Text>
        <BodyText>{data.leadSummary}</BodyText>
        <BodyText style={styles.leadReason}>
          {data.reasonText}
        </BodyText>

        {priceItem || timelineItem ? (
          <View style={styles.leadMetaRow}>
            {priceItem ? (
              <View style={[styles.leadMetaCard, styles.leadMetaCardWarm]}>
                <BodyText style={styles.leadMetaLabel}>{priceItem.label}</BodyText>
                <Text style={styles.leadMetaValue} numberOfLines={1} adjustsFontSizeToFit minimumFontScale={0.72}>
                  {priceItem.value}
                </Text>
              </View>
            ) : null}
            {timelineItem ? (
              <View style={[styles.leadMetaCard, styles.leadMetaCardCool]}>
                <BodyText style={styles.leadMetaLabel}>{timelineItem.label}</BodyText>
                <Text style={styles.leadMetaValue} numberOfLines={1} adjustsFontSizeToFit minimumFontScale={0.72}>
                  {timelineItem.value}
                </Text>
              </View>
            ) : null}
          </View>
        ) : null}
      </SectionCard>

      <SectionCard tone="paper" style={styles.altCard}>
        <Text style={styles.sectionTitle}>{data.alternativesTitle}</Text>
        <View style={styles.altList}>
          {data.alternatives.map((item) => (
            <View key={item.id} style={styles.altItem}>
              <Text style={styles.altName}>{item.name}</Text>
              <BodyText style={styles.altRole}>{item.role}</BodyText>
              <Text style={styles.altHighlight}>{item.highlight}</Text>
              <BodyText>{item.note}</BodyText>
            </View>
          ))}
        </View>
      </SectionCard>

      <SectionCard tone="warn" bordered={false}>
        <Text style={styles.noticeTitle}>{data.noticeTitle}</Text>
        <Text style={styles.noticeText}>{data.noticeText}</Text>
      </SectionCard>
    </ScreenShell>
  );
}

const styles = StyleSheet.create({
  leadCard: {
    backgroundColor: '#F7EEE7',
  },
  leadImage: {
    width: '100%',
    height: 220,
    borderRadius: 22,
    marginBottom: 14,
    backgroundColor: colors.surfaceCream,
  },
  leadName: {
    color: colors.textPrimary,
    fontFamily: typography.display,
    fontSize: 22,
    lineHeight: 29,
    fontWeight: '600',
  },
  leadReason: {
    color: colors.accentBurgundy,
  },
  leadMetaRow: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 4,
  },
  leadMetaCard: {
    flex: 1,
    borderRadius: 20,
    padding: 14,
    gap: 4,
  },
  leadMetaCardWarm: {
    backgroundColor: '#FFF7F1',
  },
  leadMetaCardCool: {
    backgroundColor: '#EEF8FF',
  },
  leadMetaLabel: {
    fontSize: 12,
  },
  leadMetaValue: {
    color: colors.textPrimary,
    fontFamily: typography.body,
    fontSize: 16,
    fontWeight: '700',
  },
  sectionTitle: {
    color: colors.textPrimary,
    fontFamily: typography.body,
    fontSize: 15,
    fontWeight: '600',
  },
  altCard: {
    backgroundColor: colors.mutedPaper,
  },
  altList: {
    gap: 10,
  },
  altItem: {
    borderRadius: 22,
    backgroundColor: colors.surfaceCream,
    padding: 14,
    gap: 4,
  },
  altName: {
    color: colors.textPrimary,
    fontFamily: typography.display,
    fontSize: 18,
    fontWeight: '600',
  },
  altRole: {
    color: colors.accentBurgundy,
    fontSize: 12,
  },
  altHighlight: {
    color: colors.textPrimary,
    fontFamily: typography.body,
    fontSize: 13,
    fontWeight: '700',
  },
  noticeTitle: {
    color: colors.warnText,
    fontFamily: typography.body,
    fontSize: 14,
    fontWeight: '700',
  },
  noticeText: {
    color: colors.warnText,
    fontFamily: typography.body,
    fontSize: 13,
    lineHeight: 20,
  },
  footerContent: {
    gap: 10,
  },
  footerNote: {
    fontSize: 12,
  },
});
