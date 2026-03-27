import { Feather } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { BodyText, PageHeaderCard, ScreenShell, SectionCard } from '../../../components/common';
import { colors, radii, typography } from '../../../theme/tokens';

export function PublishFlowStateScreen({
  badge,
  title,
  message,
  primaryLabel,
  onPrimaryPress,
  secondaryLabel,
  onSecondaryPress,
}: {
  badge: string;
  title: string;
  message: string;
  primaryLabel: string;
  onPrimaryPress: () => void;
  secondaryLabel?: string;
  onSecondaryPress?: () => void;
}) {
  return (
    <ScreenShell
      footer={
        <View style={styles.footer}>
          <View style={styles.footerIntro}>
            <View style={styles.footerChip}>
              <Feather name="navigation" size={13} color={colors.accentBurgundy} />
              <Text style={styles.footerChipText}>下一步</Text>
            </View>
            <Text style={styles.footerTitle}>{primaryLabel}</Text>
            <BodyText style={styles.footerHint}>先处理当前这个缺口，再继续往后面的结果页推进。</BodyText>
          </View>

          <Pressable style={({ pressed }) => [styles.primaryButton, pressed && styles.primaryButtonPressed]} onPress={onPrimaryPress}>
            <View style={styles.primaryButtonInner}>
              <View style={styles.primaryButtonCopy}>
                <BodyText inverse style={styles.primaryButtonEyebrow}>
                  当前动作
                </BodyText>
                <Text style={styles.primaryButtonTitle}>{primaryLabel}</Text>
              </View>
              <Feather name="arrow-right" size={20} color={colors.textInverse} />
            </View>
          </Pressable>

          {secondaryLabel && onSecondaryPress ? (
            <Pressable style={({ pressed }) => [styles.secondaryButton, pressed && styles.secondaryButtonPressed]} onPress={onSecondaryPress}>
              <Text style={styles.secondaryButtonText}>{secondaryLabel}</Text>
            </Pressable>
          ) : null}
        </View>
      }
    >
      <PageHeaderCard
        eyebrow="结果状态"
        title="发布结果"
        subtitle="这一段只展示当前已经拿到的真实结果。"
        badge={badge}
      />

      <SectionCard tone="paper" style={styles.heroCard}>
        <View style={styles.heroSky} />
        <View style={styles.heroGlow} />
        <View style={styles.heroMist} />

        <View style={styles.heroTop}>
          <View style={styles.heroCopy}>
            <View style={styles.heroPill}>
              <Text style={styles.heroPillText}>{badge}</Text>
            </View>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.message}>{message}</Text>
          </View>

          <View style={styles.stateBadgeWrap}>
            <View style={[styles.stateSheet, styles.stateSheetBack]} />
            <View style={styles.stateSheetFront}>
              <View style={styles.stateDot} />
              <View style={styles.stateLineStrong} />
              <View style={styles.stateLineSoft} />
              <View style={styles.stateTag}>
                <Text style={styles.stateTagText}>待补齐</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.stateCard}>
          <View style={styles.stateIconWrap}>
            <Feather name="info" size={16} color={colors.accentBurgundy} />
          </View>
          <View style={styles.stateCopy}>
            <BodyText style={styles.stateLabel}>当前状态说明</BodyText>
            <Text style={styles.stateTitle}>现在不是结果不好，而是还没有拿到可展示内容</Text>
            <BodyText>所以这里先停在真实状态，不会再用占位结果冒充后续页面。</BodyText>
          </View>
        </View>
      </SectionCard>
    </ScreenShell>
  );
}

const styles = StyleSheet.create({
  heroCard: {
    backgroundColor: '#FFFDF9',
    overflow: 'hidden',
    gap: 18,
  },
  heroSky: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: colors.sky,
    opacity: 0.28,
  },
  heroGlow: {
    position: 'absolute',
    right: -24,
    top: 22,
    width: 142,
    height: 142,
    borderRadius: 71,
    backgroundColor: 'rgba(255,228,163,0.28)',
  },
  heroMist: {
    position: 'absolute',
    left: -18,
    bottom: 16,
    width: 162,
    height: 54,
    borderRadius: 27,
    backgroundColor: 'rgba(255,255,255,0.72)',
  },
  heroTop: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 14,
  },
  heroCopy: {
    flex: 1,
    gap: 12,
  },
  heroPill: {
    alignSelf: 'flex-start',
    borderRadius: radii.pill,
    backgroundColor: '#FFF5EF',
    paddingHorizontal: 12,
    paddingVertical: 7,
  },
  heroPillText: {
    color: colors.accentBurgundy,
    fontFamily: typography.body,
    fontSize: 12,
    fontWeight: '700',
  },
  title: {
    color: colors.textPrimary,
    fontFamily: typography.display,
    fontSize: 28,
    lineHeight: 36,
    fontWeight: '600',
  },
  message: {
    color: colors.textSecondary,
    fontFamily: typography.body,
    fontSize: 15,
    lineHeight: 24,
  },
  stateBadgeWrap: {
    width: 112,
    height: 120,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
  },
  stateSheet: {
    position: 'absolute',
    width: 82,
    height: 102,
    borderRadius: 24,
    backgroundColor: 'rgba(255,255,255,0.48)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.58)',
  },
  stateSheetBack: {
    transform: [{ translateX: 12 }, { translateY: -8 }, { rotate: '10deg' }],
  },
  stateSheetFront: {
    width: 86,
    height: 108,
    borderRadius: 26,
    backgroundColor: '#FFF8F2',
    borderWidth: 1,
    borderColor: 'rgba(228,200,190,0.72)',
    paddingHorizontal: 14,
    paddingVertical: 16,
    gap: 10,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 1,
    shadowRadius: 18,
    elevation: 6,
    transform: [{ rotate: '-8deg' }],
  },
  stateDot: {
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: 'rgba(201,120,120,0.2)',
    borderWidth: 1,
    borderColor: 'rgba(201,120,120,0.3)',
  },
  stateLineStrong: {
    width: '100%',
    height: 8,
    borderRadius: 999,
    backgroundColor: 'rgba(217,152,131,0.18)',
  },
  stateLineSoft: {
    width: '72%',
    height: 8,
    borderRadius: 999,
    backgroundColor: 'rgba(223,244,255,0.86)',
  },
  stateTag: {
    marginTop: 'auto',
    alignSelf: 'flex-start',
    borderRadius: 14,
    backgroundColor: '#FBEFEA',
    paddingHorizontal: 10,
    paddingVertical: 7,
  },
  stateTagText: {
    color: colors.accentBurgundy,
    fontFamily: typography.body,
    fontSize: 10,
    fontWeight: '700',
  },
  stateCard: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
    borderRadius: 24,
    backgroundColor: 'rgba(255,253,251,0.86)',
    borderWidth: 1,
    borderColor: 'rgba(228,200,190,0.54)',
    padding: 14,
  },
  stateIconWrap: {
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF5EF',
  },
  stateCopy: {
    flex: 1,
    gap: 2,
  },
  stateLabel: {
    fontSize: 12,
    color: colors.accentBurgundy,
    fontWeight: '700',
  },
  stateTitle: {
    color: colors.textPrimary,
    fontFamily: typography.body,
    fontSize: 16,
    fontWeight: '700',
  },
  footer: {
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
  primaryButton: {
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
  primaryButtonPressed: {
    opacity: 0.92,
  },
  primaryButtonInner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 12,
  },
  primaryButtonCopy: {
    flex: 1,
    gap: 3,
  },
  primaryButtonEyebrow: {
    fontSize: 11,
    opacity: 0.78,
  },
  primaryButtonTitle: {
    color: colors.textInverse,
    fontFamily: typography.body,
    fontSize: 18,
    fontWeight: '700',
  },
  secondaryButton: {
    borderRadius: radii.xl,
    backgroundColor: colors.surfaceCream,
    borderWidth: 1,
    borderColor: colors.lineSoft,
    paddingHorizontal: 18,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondaryButtonPressed: {
    opacity: 0.9,
  },
  secondaryButtonText: {
    color: colors.textPrimary,
    fontFamily: typography.body,
    fontSize: 16,
    fontWeight: '700',
  },
});
