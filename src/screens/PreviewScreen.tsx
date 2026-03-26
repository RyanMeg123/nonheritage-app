import { Image, StyleSheet, Text, View } from 'react-native';

import { BodyText, PageHeaderCard, PillButton, ScreenShell, SectionCard } from '../components/common';
import { colors, radii, typography } from '../theme/tokens';
import type { PreviewScreenData } from '../types';

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
          <PillButton label={data.ctaLabel} onPress={onNext} inverse trailing />
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
        <Text style={styles.heroTitle}>{data.heroTitle}</Text>
        <View style={styles.heroVisual}>
          {previewUri ? <Image source={{ uri: previewUri }} style={styles.heroImage} /> : null}
          {!previewUri ? <View style={styles.heroGradient} /> : null}
        </View>
        <BodyText>{data.heroNote}</BodyText>
      </SectionCard>

      <SectionCard tone="warn" bordered={false}>
        <Text style={styles.noticeTitle}>{data.noticeTitle}</Text>
        <Text style={styles.noticeText}>{data.noticeText}</Text>
      </SectionCard>

      <View style={styles.actionRow}>
        {data.actions.map((action, index) => (
          <SectionCard key={action.id} bordered={false} style={[styles.actionCard, index === 1 ? styles.actionWarm : null]}>
            <Text style={styles.actionTitle}>{action.title}</Text>
            <BodyText>{action.description}</BodyText>
          </SectionCard>
        ))}
      </View>
    </ScreenShell>
  );
}

const styles = StyleSheet.create({
  heroCard: {
    backgroundColor: '#FFFDF9',
  },
  heroTitle: {
    color: colors.textPrimary,
    fontFamily: typography.display,
    fontSize: 26,
    fontWeight: '600',
  },
  heroVisual: {
    height: 312,
    borderRadius: 24,
    overflow: 'hidden',
    backgroundColor: colors.blush,
  },
  heroImage: {
    width: '100%',
    height: '100%',
  },
  heroGradient: {
    flex: 1,
    backgroundColor: colors.accentBurgundy,
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
  actionRow: {
    gap: 10,
  },
  actionCard: {
    backgroundColor: '#FFF7F1',
  },
  actionWarm: {
    backgroundColor: '#FBEFEA',
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
  footerNote: {
    fontSize: 12,
  },
});
