import { Pressable, StyleSheet, Text, View } from 'react-native';

import { BodyText, PageHeaderCard, PillButton, ScreenShell, SectionCard } from '../components/common';
import { colors, radii, typography } from '../theme/tokens';
import type { OnboardingScreenData } from '../types';

type OnboardingStatus = 'idle' | 'draft' | 'submitted';

export function ArtisanOnboardingScreen({
  data,
  status,
  onBack,
  onSaveDraft,
  onSubmit,
  onFinish,
}: {
  data: OnboardingScreenData;
  status: OnboardingStatus;
  onBack: () => void;
  onSaveDraft: () => void;
  onSubmit: () => void;
  onFinish: () => void;
}) {
  const submitted = status === 'submitted';

  return (
    <ScreenShell
      footer={
        <View style={styles.footerContent}>
          <PillButton
            label={submitted ? '返回我的' : data.ctaLabel}
            onPress={submitted ? onFinish : onSubmit}
            inverse
            trailing
          />
          <BodyText style={styles.footerNote}>
            {submitted ? '审核结果会通过站内消息通知你。' : data.footerNote}
          </BodyText>
        </View>
      }
    >
      <PageHeaderCard
        eyebrow="入驻认证"
        title={data.headerTitle}
        subtitle={data.headerSubtitle}
        badge={submitted ? '等待审核' : data.badgeLabel}
        onBack={onBack}
      />

      <SectionCard bordered={false} style={styles.leadCard}>
        <View style={styles.leadTop}>
          <View style={styles.leadPill}>
            <Text style={styles.leadPillText}>{data.leadEyebrow}</Text>
          </View>
          <Text style={styles.leadEstimate}>{submitted ? '平台已收到资料' : data.leadEstimate}</Text>
        </View>
        <Text style={styles.leadTitle}>{data.leadTitle}</Text>
        <BodyText>{data.leadSummary}</BodyText>
      </SectionCard>

      <SectionCard tone="paper" style={styles.progressCard}>
        <View style={styles.progressRow}>
          {data.steps.map((step, index) => {
            const stepState =
              submitted
                ? index === 0
                  ? 'done'
                  : index === 1
                    ? 'current'
                    : 'upcoming'
                : step.state;

            return (
              <View key={step.id} style={styles.progressItem}>
                <View
                  style={[
                    styles.progressDot,
                    stepState === 'done' ? styles.progressDotDone : null,
                    stepState === 'current' ? styles.progressDotCurrent : null,
                  ]}
                >
                  <Text
                    style={[
                      styles.progressIndex,
                      stepState !== 'upcoming' ? styles.progressIndexActive : null,
                    ]}
                  >
                    {index + 1}
                  </Text>
                </View>
                <Text
                  style={[
                    styles.progressLabel,
                    stepState === 'current' ? styles.progressLabelCurrent : null,
                  ]}
                >
                  {step.label}
                </Text>
              </View>
            );
          })}
        </View>
      </SectionCard>

      <SectionCard style={styles.requirementCard}>
        <Text style={styles.sectionTitle}>{data.requirementTitle}</Text>
        <View style={styles.requirementList}>
          {data.requirements.map((item, index) => (
            <View key={item.id} style={styles.requirementRow}>
              <View style={styles.requirementIndexWrap}>
                <Text style={styles.requirementIndex}>{index + 1}</Text>
              </View>
              <View style={styles.requirementCopy}>
                <Text style={styles.requirementTitle}>{item.title}</Text>
                <BodyText>{item.description}</BodyText>
              </View>
            </View>
          ))}
        </View>
      </SectionCard>

      <SectionCard tone="warn" bordered={false}>
        <Text style={styles.reviewTitle}>{data.reviewTitle}</Text>
        <Text style={styles.reviewText}>{data.reviewText}</Text>
      </SectionCard>

      <View style={styles.actionRow}>
        <Pressable onPress={onSaveDraft} style={({ pressed }) => [styles.actionCard, pressed && styles.pressed]}>
          <Text style={styles.actionTitle}>{data.draftTitle}</Text>
          <BodyText>{status === 'draft' ? '草稿已保存，可稍后继续补资料。' : data.draftDescription}</BodyText>
        </Pressable>
        <Pressable
          onPress={submitted ? onFinish : onSubmit}
          style={({ pressed }) => [
            styles.actionCard,
            styles.actionCardWarm,
            submitted ? styles.actionCardSubmitted : null,
            pressed && styles.pressed,
          ]}
        >
          <Text style={styles.actionTitle}>{submitted ? '已提交审核' : data.submitTitle}</Text>
          <BodyText>{submitted ? '平台会先审核资料完整度，再开放接单。' : data.submitDescription}</BodyText>
        </Pressable>
      </View>
    </ScreenShell>
  );
}

const styles = StyleSheet.create({
  leadCard: {
    backgroundColor: '#F7EEE7',
    gap: 12,
  },
  leadTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 12,
  },
  leadPill: {
    borderRadius: radii.pill,
    backgroundColor: '#F5E8E8',
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  leadPillText: {
    color: colors.accentBurgundy,
    fontFamily: typography.body,
    fontSize: 12,
    fontWeight: '600',
  },
  leadEstimate: {
    color: colors.textSecondary,
    fontFamily: typography.body,
    fontSize: 12,
    fontWeight: '600',
  },
  leadTitle: {
    color: colors.textPrimary,
    fontFamily: typography.display,
    fontSize: 24,
    lineHeight: 31,
    fontWeight: '600',
  },
  progressCard: {
    backgroundColor: '#FFFDF9',
  },
  progressRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
  },
  progressItem: {
    flex: 1,
    alignItems: 'center',
    gap: 8,
  },
  progressDot: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: colors.bgSoft,
    alignItems: 'center',
    justifyContent: 'center',
  },
  progressDotDone: {
    backgroundColor: colors.chipActive,
  },
  progressDotCurrent: {
    backgroundColor: colors.accentBurgundy,
  },
  progressIndex: {
    color: colors.textSecondary,
    fontFamily: typography.body,
    fontSize: 13,
    fontWeight: '600',
  },
  progressIndexActive: {
    color: colors.textInverse,
  },
  progressLabel: {
    color: colors.textSecondary,
    fontFamily: typography.body,
    fontSize: 12,
    fontWeight: '500',
    textAlign: 'center',
    lineHeight: 18,
  },
  progressLabelCurrent: {
    color: colors.textPrimary,
    fontWeight: '600',
  },
  requirementCard: {
    backgroundColor: '#FBF6EF',
  },
  sectionTitle: {
    color: colors.textPrimary,
    fontFamily: typography.body,
    fontSize: 16,
    fontWeight: '600',
  },
  requirementList: {
    gap: 12,
  },
  requirementRow: {
    flexDirection: 'row',
    gap: 10,
  },
  requirementIndexWrap: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: colors.surfaceDeep,
    alignItems: 'center',
    justifyContent: 'center',
  },
  requirementIndex: {
    color: colors.textInverse,
    fontFamily: typography.body,
    fontSize: 12,
    fontWeight: '700',
  },
  requirementCopy: {
    flex: 1,
    gap: 3,
  },
  requirementTitle: {
    color: colors.textPrimary,
    fontFamily: typography.body,
    fontSize: 14,
    fontWeight: '600',
  },
  reviewTitle: {
    color: colors.warnText,
    fontFamily: typography.body,
    fontSize: 13,
    fontWeight: '600',
  },
  reviewText: {
    color: colors.warnText,
    fontFamily: typography.body,
    fontSize: 14,
    lineHeight: 21,
  },
  actionRow: {
    gap: 10,
  },
  actionCard: {
    borderRadius: 20,
    backgroundColor: '#F9F3EC',
    borderWidth: 1,
    borderColor: colors.lineSoft,
    padding: 16,
    gap: 8,
  },
  actionCardWarm: {
    backgroundColor: '#EFE0CF',
  },
  actionCardSubmitted: {
    backgroundColor: '#F5E8E8',
  },
  actionTitle: {
    color: colors.textPrimary,
    fontFamily: typography.body,
    fontSize: 14,
    fontWeight: '600',
  },
  pressed: {
    opacity: 0.92,
  },
  footerContent: {
    gap: 8,
  },
  footerNote: {
    textAlign: 'center',
  },
});
