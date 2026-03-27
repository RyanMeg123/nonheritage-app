import { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import { SPLASH_DURATION_MS, SPLASH_FRAME_TIMINGS } from '../application/splashTiming';
import { BodyText } from '../components/common';
import { colors, typography } from '../theme/tokens';

const splashFigure = require('../../assets/illustrations/dz-hero.png');
const loadingFrames = [
  require('../../assets/loading/frame1.png'),
  require('../../assets/loading/frame2.png'),
  require('../../assets/loading/frame3.png'),
  require('../../assets/loading/frame4.png'),
];
const LOADING_DOTS = ['', '.', '..', '...'];

export function LaunchScreen() {
  const [frameIndex, setFrameIndex] = useState(0);

  useEffect(() => {
    const timers = SPLASH_FRAME_TIMINGS.map((timing, index) =>
      setTimeout(() => {
        setFrameIndex(index);
      }, timing),
    );

    const finalFrameTimer = setTimeout(() => {
      setFrameIndex(loadingFrames.length - 1);
    }, SPLASH_DURATION_MS - 120);

    return () => {
      timers.forEach((timer) => clearTimeout(timer));
      clearTimeout(finalFrameTimer);
    };
  }, []);

  return (
    <View style={styles.screen}>
      <View style={styles.glowLarge} />
      <View style={styles.glowSmall} />

      <View style={styles.brandBlock}>
        <Text style={styles.brandEyebrow}>非遗定制</Text>
        <Text style={styles.brandTitle}>把一件心意，交给真正的手艺</Text>
        <BodyText style={styles.brandSubtitle}>
          为你连接工艺方案、传承人和定制过程，慢慢做出一件值得留存的作品。
        </BodyText>
      </View>

      <View style={styles.figureWrap}>
        <View style={styles.figureHalo} />
        <Image source={splashFigure} resizeMode="contain" style={styles.figure} />
      </View>

      <View style={styles.loadingBlock}>
        <View style={styles.loadingFlowerWrap}>
          <Image
            source={loadingFrames[frameIndex]}
            resizeMode="contain"
            style={[
              styles.loadingFlower,
              frameIndex === loadingFrames.length - 1 ? styles.loadingFlowerBloomed : null,
            ]}
          />
        </View>
        <Text style={styles.loadingText}>{`正在为你准备进入方式${LOADING_DOTS[frameIndex]}`}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: colors.bgBase,
    paddingHorizontal: 28,
    paddingTop: 108,
    paddingBottom: 72,
    overflow: 'hidden',
  },
  glowLarge: {
    position: 'absolute',
    top: 36,
    right: -38,
    width: 220,
    height: 220,
    borderRadius: 110,
    backgroundColor: 'rgba(249, 228, 216, 0.7)',
  },
  glowSmall: {
    position: 'absolute',
    bottom: 180,
    left: -46,
    width: 168,
    height: 168,
    borderRadius: 84,
    backgroundColor: 'rgba(251, 239, 234, 0.95)',
  },
  brandBlock: {
    gap: 14,
  },
  brandEyebrow: {
    color: colors.accentBurgundy,
    fontFamily: typography.body,
    fontSize: 15,
    fontWeight: '700',
    letterSpacing: 2,
  },
  brandTitle: {
    color: colors.textPrimary,
    fontFamily: typography.body,
    fontSize: 34,
    lineHeight: 44,
    fontWeight: '700',
  },
  brandSubtitle: {
    maxWidth: 280,
    fontSize: 16,
    lineHeight: 24,
  },
  figureWrap: {
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 300,
  },
  figureHalo: {
    position: 'absolute',
    width: 274,
    height: 274,
    borderRadius: 137,
    backgroundColor: 'rgba(255, 248, 242, 0.92)',
  },
  figure: {
    width: 278,
    height: 278,
  },
  loadingBlock: {
    alignItems: 'center',
    gap: 14,
  },
  loadingFlowerWrap: {
    width: 76,
    height: 76,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingFlower: {
    width: 76,
    height: 76,
  },
  loadingFlowerBloomed: {
    transform: [{ scale: 1.04 }],
  },
  loadingText: {
    color: colors.textSecondary,
    fontFamily: typography.body,
    fontSize: 14,
  },
});
