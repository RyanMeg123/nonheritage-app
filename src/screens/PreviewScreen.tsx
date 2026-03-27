import { Feather } from '@expo/vector-icons';
import type { ComponentProps } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

import { BodyText, PageHeaderCard, ScreenShell, SectionCard } from '../components/common';
import { colors, radii, typography } from '../theme/tokens';
import type { ActionCard, PreviewScreenData } from '../types';

function getActionIcon(index: number): ComponentProps<typeof Feather>['name'] {
  if (index === 0) return 'image';
  if (index === 1) return 'users';
  return 'arrow-right';
}

export function PreviewScreen({
  data,
  previewUri,
  onBack,
  onNext,
}: {
  data: PreviewScreenData;
  previewUri?: string;
  onBack: () => void;
  onNext: () => void;
}) {
  return (
    <ScreenShell
      footer={
        <View style={styles.footerContent}>
          <View style={styles.footerIntro}>
            <View style={styles.footerChip}>
              <Feather name="navigation" size={13} color={colors.accentBurgundy} />
              <Text style={styles.footerChipText}>下一步</Text>
            </View>
            <Text style={styles.footerTitle}>{data.ctaLabel}</Text>
            <BodyText style={styles.footerHint}>看完当前方向后，系统会继续帮你筛更合适的制作对象。</BodyText>
          </View>

          <Pressable style={({ pressed }) => [styles.footerButton, pressed && styles.footerButtonPressed]} onPress={onNext}>
            <View style={styles.footerButtonInner}>
              <View style={styles.footerButtonCopy}>
                <BodyText inverse style={styles.footerEyebrow}>
                  当前节点
                </BodyText>
                <Text style={styles.footerButtonTitle}>{data.badgeLabel}</Text>
              </View>
              <Feather name="arrow-right" size={20} color={colors.textInverse} />
            </View>
          </Pressable>

          <BodyText style={styles.footerNote}>{data.footerNote}</BodyText>
        </View>
      }
    >
      <PageHeaderCard
        eyebrow="预览确认"
        title={data.headerTitle}
        subtitle={data.headerSubtitle}
        badge={data.badgeLabel}
        onBack={onBack}
      />

      <SectionCard tone="paper" style={styles.heroCard}>
        <View style={styles.heroSky} />
        <View style={styles.heroGlow} />
        <View style={styles.heroTop}>
          <View style={styles.heroCopy}>
            <View style={styles.heroPills}>
              <View style={styles.heroPill}>
                <Text style={styles.heroPillText}>方向预览</Text>
              </View>
              <View style={[styles.heroPill, styles.heroPillSoft]}>
                <Text style={styles.heroPillText}>{data.badgeLabel}</Text>
              </View>
            </View>
            <Text style={styles.heroTitle}>{data.heroTitle}</Text>
            <Text style={styles.heroNote}>{data.heroNote}</Text>
          </View>
        </View>

        <View style={styles.previewFrame}>
          <View style={styles.previewBadge}>
            <Feather name="eye" size={13} color={colors.accentBurgundy} />
            <Text style={styles.previewBadgeText}>当前效果方向</Text>
          </View>

          {previewUri ? (
            <Image source={{ uri: previewUri }} style={styles.heroImage} resizeMode="cover" />
          ) : (
            <View style={styles.placeholderScene}>
              <View style={styles.placeholderGlow} />
              <View style={styles.placeholderCardBack} />
              <View style={styles.placeholderCardFront}>
                <View style={styles.placeholderLineStrong} />
                <View style={styles.placeholderLineSoft} />
                <View style={styles.placeholderTag}>
                  <Text style={styles.placeholderTagText}>预览待生成</Text>
                </View>
              </View>
            </View>
          )}
        </View>

        <View style={styles.previewSummary}>
          <View style={styles.previewSummaryItem}>
            <Text style={styles.previewSummaryLabel}>现在看到的</Text>
            <BodyText style={styles.previewSummaryText}>成品气质和主要细节方向</BodyText>
          </View>
          <View style={styles.previewDivider} />
          <View style={styles.previewSummaryItem}>
            <Text style={styles.previewSummaryLabel}>还不是</Text>
            <BodyText style={styles.previewSummaryText}>最终交付承诺或锁死的细节版本</BodyText>
          </View>
        </View>
      </SectionCard>

      <SectionCard tone="warn" bordered={false} style={styles.noticeCard}>
        <View style={styles.noticeTop}>
          <View style={styles.noticeIconWrap}>
            <Feather name="alert-triangle" size={15} color={colors.warnText} />
          </View>
          <View style={styles.noticeCopy}>
            <Text style={styles.noticeTitle}>{data.noticeTitle}</Text>
            <Text style={styles.noticeText}>{data.noticeText}</Text>
          </View>
        </View>
      </SectionCard>

      <SectionCard bordered={false} style={styles.actionShell}>
        <View style={styles.actionHead}>
          <Text style={styles.actionHeadTitle}>接下来会继续往下做什么</Text>
          <BodyText style={styles.actionHeadCopy}>先确认这张预览是否值得继续，再进入匹配结果看谁更适合接这个方向。</BodyText>
        </View>

        <View style={styles.actionRow}>
          {data.actions.map((action, index) => (
            <ActionStepCard key={action.id} action={action} index={index} />
          ))}
        </View>
      </SectionCard>
    </ScreenShell>
  );
}

function ActionStepCard({ action, index }: { action: ActionCard; index: number }) {
  return (
    <View style={[styles.actionCard, index === 1 ? styles.actionWarm : null]}>
      <View style={styles.actionTop}>
        <View style={[styles.actionIconWrap, index === 1 ? styles.actionIconWrapWarm : null]}>
          <Feather name={getActionIcon(index)} size={16} color={colors.accentBurgundy} />
        </View>
        <Text style={styles.actionIndex}>{`0${index + 1}`}</Text>
      </View>
      <Text style={styles.actionTitle}>{action.title}</Text>
      <BodyText>{action.description}</BodyText>
    </View>
  );
}

const styles = StyleSheet.create({
  heroCard: {
    backgroundColor: '#FFFDF9',
    overflow: 'hidden',
    gap: 16,
  },
  heroSky: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: colors.sky,
    opacity: 0.24,
  },
  heroGlow: {
    position: 'absolute',
    right: -30,
    top: 24,
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: 'rgba(255,228,163,0.28)',
  },
  heroTop: {
    gap: 10,
  },
  heroCopy: {
    gap: 12,
  },
  heroPills: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  heroPill: {
    borderRadius: radii.pill,
    backgroundColor: '#FFF5EF',
    paddingHorizontal: 12,
    paddingVertical: 7,
  },
  heroPillSoft: {
    backgroundColor: 'rgba(255,255,255,0.76)',
  },
  heroPillText: {
    color: colors.accentBurgundy,
    fontFamily: typography.body,
    fontSize: 12,
    fontWeight: '700',
  },
  heroTitle: {
    color: colors.textPrimary,
    fontFamily: typography.display,
    fontSize: 28,
    lineHeight: 36,
    fontWeight: '600',
  },
  heroNote: {
    color: colors.textSecondary,
    fontFamily: typography.body,
    fontSize: 15,
    lineHeight: 24,
  },
  previewFrame: {
    height: 336,
    borderRadius: 28,
    overflow: 'hidden',
    backgroundColor: '#F6ECE4',
    borderWidth: 1,
    borderColor: 'rgba(228,200,190,0.56)',
  },
  previewBadge: {
    position: 'absolute',
    top: 14,
    right: 14,
    zIndex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    borderRadius: radii.pill,
    backgroundColor: 'rgba(255,253,251,0.94)',
    paddingHorizontal: 10,
    paddingVertical: 7,
  },
  previewBadgeText: {
    color: colors.accentBurgundy,
    fontFamily: typography.body,
    fontSize: 11,
    fontWeight: '700',
  },
  heroImage: {
    width: '100%',
    height: '100%',
  },
  placeholderScene: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F7E7E1',
  },
  placeholderGlow: {
    position: 'absolute',
    width: 180,
    height: 180,
    borderRadius: 90,
    backgroundColor: 'rgba(255,228,163,0.28)',
  },
  placeholderCardBack: {
    position: 'absolute',
    width: 168,
    height: 212,
    borderRadius: 28,
    backgroundColor: 'rgba(255,255,255,0.44)',
    transform: [{ rotate: '8deg' }, { translateX: 18 }, { translateY: -6 }],
  },
  placeholderCardFront: {
    width: 174,
    height: 222,
    borderRadius: 30,
    backgroundColor: '#FFF8F2',
    borderWidth: 1,
    borderColor: 'rgba(228,200,190,0.72)',
    paddingHorizontal: 20,
    paddingVertical: 24,
    gap: 12,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 1,
    shadowRadius: 22,
    elevation: 8,
    transform: [{ rotate: '-7deg' }],
  },
  placeholderLineStrong: {
    width: '100%',
    height: 12,
    borderRadius: 999,
    backgroundColor: 'rgba(201,120,120,0.2)',
  },
  placeholderLineSoft: {
    width: '72%',
    height: 12,
    borderRadius: 999,
    backgroundColor: 'rgba(223,244,255,0.92)',
  },
  placeholderTag: {
    marginTop: 'auto',
    alignSelf: 'flex-start',
    borderRadius: radii.pill,
    backgroundColor: '#FBEFEA',
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  placeholderTagText: {
    color: colors.accentBurgundy,
    fontFamily: typography.body,
    fontSize: 12,
    fontWeight: '700',
  },
  previewSummary: {
    flexDirection: 'row',
    alignItems: 'stretch',
    gap: 12,
    borderRadius: 24,
    backgroundColor: 'rgba(255,253,251,0.82)',
    borderWidth: 1,
    borderColor: 'rgba(228,200,190,0.54)',
    padding: 14,
  },
  previewSummaryItem: {
    flex: 1,
    gap: 4,
  },
  previewSummaryLabel: {
    color: colors.accentBurgundy,
    fontFamily: typography.body,
    fontSize: 12,
    fontWeight: '700',
  },
  previewSummaryText: {
    fontSize: 12,
    lineHeight: 19,
  },
  previewDivider: {
    width: 1,
    backgroundColor: 'rgba(228,200,190,0.74)',
  },
  noticeCard: {
    backgroundColor: '#FFF6E3',
  },
  noticeTop: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
  },
  noticeIconWrap: {
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.56)',
  },
  noticeCopy: {
    flex: 1,
    gap: 4,
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
    lineHeight: 22,
  },
  actionShell: {
    backgroundColor: '#FFF8F2',
    gap: 14,
  },
  actionHead: {
    gap: 6,
  },
  actionHeadTitle: {
    color: colors.textPrimary,
    fontFamily: typography.body,
    fontSize: 17,
    fontWeight: '700',
  },
  actionHeadCopy: {
    paddingRight: 8,
  },
  actionRow: {
    gap: 10,
  },
  actionCard: {
    borderRadius: 24,
    backgroundColor: '#FFFDFB',
    borderWidth: 1,
    borderColor: 'rgba(241,223,210,0.74)',
    padding: 16,
    gap: 8,
  },
  actionWarm: {
    backgroundColor: '#FFF5EF',
  },
  actionTop: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  actionIconWrap: {
    width: 34,
    height: 34,
    borderRadius: 17,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EEF8FF',
  },
  actionIconWrapWarm: {
    backgroundColor: '#FBEFEA',
  },
  actionIndex: {
    color: colors.textSecondary,
    fontFamily: typography.body,
    fontSize: 12,
    fontWeight: '700',
  },
  actionTitle: {
    color: colors.textPrimary,
    fontFamily: typography.body,
    fontSize: 15,
    fontWeight: '700',
  },
  footerContent: {
    gap: 10,
  },
  footerIntro: {
    gap: 4,
  },
  footerChip: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    borderRadius: radii.pill,
    backgroundColor: '#FFF5EF',
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  footerChipText: {
    color: colors.accentBurgundy,
    fontFamily: typography.body,
    fontSize: 11,
    fontWeight: '700',
  },
  footerTitle: {
    color: colors.textPrimary,
    fontFamily: typography.body,
    fontSize: 18,
    fontWeight: '700',
  },
  footerHint: {
    fontSize: 12,
  },
  footerButton: {
    borderRadius: radii.xl,
    backgroundColor: colors.accentBurgundy,
    paddingHorizontal: 18,
    paddingVertical: 16,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 1,
    shadowRadius: 20,
    elevation: 8,
  },
  footerButtonPressed: {
    opacity: 0.92,
  },
  footerButtonInner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 12,
  },
  footerButtonCopy: {
    flex: 1,
    gap: 3,
  },
  footerEyebrow: {
    fontSize: 11,
    opacity: 0.78,
  },
  footerButtonTitle: {
    color: colors.textInverse,
    fontFamily: typography.body,
    fontSize: 18,
    fontWeight: '700',
  },
  footerNote: {
    fontSize: 12,
  },
});
