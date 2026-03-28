import { Feather } from '@expo/vector-icons';
import { type ComponentProps } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { BodyText, PageHeaderCard, ScreenShell, SectionCard } from '../components/common';
import { colors, radii, typography } from '../theme/tokens';
import type { ConversationScreenData, InfoPair } from '../types';

function getStatusIconName(label: string): ComponentProps<typeof Feather>['name'] {
  if (label.includes('目标')) return 'crosshair';
  if (label.includes('版本')) return 'layers';
  if (label.includes('动作')) return 'corner-down-right';
  return 'circle';
}

function getStatusMeta(index: number) {
  if (index === 0) {
    return {
      step: '01',
      stageLabel: '当前聚焦',
      stageHint: '先把这一轮最关键的确认点收拢清楚。',
    };
  }

  if (index === 1) {
    return {
      step: '02',
      stageLabel: '对齐版本',
      stageHint: '所有讨论都默认基于当前版本继续推进。',
    };
  }

  return {
    step: '03',
    stageLabel: '下一推进',
    stageHint: '确认无误后，再触发下一次版本更新或进入后续流程。',
  };
}

export function ConversationScreen({
  data,
  onBack,
  onNext,
}: {
  data: ConversationScreenData;
  onBack: () => void;
  onNext: () => void;
}) {
  return (
    <ScreenShell
      footer={
        <View style={styles.footerContent}>
          <Pressable style={({ pressed }) => [styles.footerButton, pressed && styles.footerButtonPressed]} onPress={onNext}>
            <View style={styles.footerButtonInner}>
              <View style={styles.footerButtonCopy}>
                <BodyText inverse style={styles.footerEyebrow}>下一步</BodyText>
                <Text style={styles.footerButtonLabel}>{data.ctaLabel}</Text>
              </View>
              <View>
                <Feather name="arrow-right" size={20} color={colors.textInverse} />
              </View>
            </View>
          </Pressable>
          <BodyText style={styles.footerNote}>{data.footerNote}</BodyText>
        </View>
      }
    >
      <PageHeaderCard
        eyebrow="版本沟通"
        title={data.headerTitle}
        subtitle={data.headerSubtitle}
        badge={data.badgeLabel}
        badgeIcon={<Feather name="message-circle" size={14} color={colors.accentBurgundy} />}
        onBack={onBack}
        animatedHero
        showConversationIllustration
      />

      <SectionCard style={styles.statusCard}>
        <View style={styles.statusHeader}>
          <View style={styles.statusHeaderCopy}>
            <Text style={styles.sectionTitle}>{data.statusTitle}</Text>
            <BodyText style={styles.statusHeaderNote}>把当前关注点、对齐版本和下一动作收成一条清晰流程，避免沟通像散点记录。</BodyText>
          </View>
          <View style={styles.statusSummaryBadge}>
            <Text style={styles.statusSummaryBadgeText}>{`${data.statusItems.length} 个节点`}</Text>
          </View>
        </View>

        <View style={styles.statusFlowBoard}>
          {data.statusItems.map((item, index) => (
            <StatusItem
              key={item.id}
              item={item}
              index={index}
              lead={index === 0}
              last={index === data.statusItems.length - 1}
            />
          ))}
        </View>
      </SectionCard>

      <SectionCard bordered={false} style={styles.introCard}>
        <Text style={styles.introTitle}>{data.introTitle}</Text>
        <Text style={styles.introText}>{data.introText}</Text>
        <BodyText>{data.introNote}</BodyText>
      </SectionCard>

      <SectionCard style={styles.discussionCard}>
        <Text style={styles.sectionTitle}>本轮对话摘要</Text>
        <View style={styles.messageList}>
          {data.messages.map((message, index) => (
            <View
              key={message.id}
              style={[
                styles.messageRow,
                message.tone === 'artisan' ? styles.messageRowWarm : null,
                index === data.messages.length - 1 ? styles.messageRowLast : null,
              ]}
            >
              <Text style={styles.messageSpeaker}>{message.speaker}</Text>
              <BodyText style={styles.messageText}>{message.text}</BodyText>
            </View>
          ))}
        </View>

        <View style={styles.nextStepInline}>
          <Text style={styles.nextStepTitle}>接下来怎么推进</Text>
          {data.actions.map((action, index) => (
            <BodyText key={action.id} style={[styles.nextStepText, index === data.actions.length - 1 ? styles.nextStepTextLast : null]}>
              {action.title}：{action.description}
            </BodyText>
          ))}
        </View>
      </SectionCard>
    </ScreenShell>
  );
}

function StatusItem({ item, index, lead, last }: { item: InfoPair; index: number; lead: boolean; last: boolean }) {
  const meta = getStatusMeta(index);

  return (
    <View style={[styles.statusRow, last ? styles.statusRowLast : null]}>
      <View style={styles.statusRail}>
        <View style={[styles.statusStepDot, lead ? styles.statusStepDotLead : null]}>
          <Text style={[styles.statusStepText, lead ? styles.statusStepTextLead : null]}>{meta.step}</Text>
        </View>
        {last ? null : <View style={[styles.statusConnector, lead ? styles.statusConnectorLead : null]} />}
      </View>

      <View style={[styles.statusItem, lead ? styles.statusItemLead : null]}>
        <View style={styles.statusMetaRow}>
          <View style={[styles.statusStageChip, lead ? styles.statusStageChipLead : null]}>
            <Text style={[styles.statusStageChipText, lead ? styles.statusStageChipTextLead : null]}>{meta.stageLabel}</Text>
          </View>
          <View style={[styles.statusIconWrap, lead ? styles.statusIconWrapLead : null]}>
            <Feather name={getStatusIconName(item.label)} size={15} color={colors.accentBurgundy} />
          </View>
        </View>

        <View style={styles.statusCopy}>
          <BodyText style={styles.statusLabel}>{item.label}</BodyText>
          <Text style={[styles.statusValue, lead ? styles.statusValueLead : null]}>{item.value}</Text>
          <BodyText style={styles.statusHint}>{meta.stageHint}</BodyText>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionTitle: {
    color: colors.textPrimary,
    fontFamily: typography.body,
    fontSize: 15,
    fontWeight: '600',
  },
  statusCard: {
    backgroundColor: '#FFF7F1',
    gap: 16,
  },
  statusHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: 12,
  },
  statusHeaderCopy: {
    flex: 1,
    gap: 6,
  },
  statusHeaderNote: {
    paddingRight: 8,
  },
  statusSummaryBadge: {
    borderRadius: radii.pill,
    backgroundColor: 'rgba(255,255,255,0.86)',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderWidth: 1,
    borderColor: 'rgba(241,223,210,0.78)',
  },
  statusSummaryBadgeText: {
    color: colors.accentBurgundy,
    fontFamily: typography.body,
    fontSize: 11,
    fontWeight: '700',
  },
  statusFlowBoard: {
    borderRadius: 26,
    backgroundColor: 'rgba(255,253,251,0.82)',
    borderWidth: 1,
    borderColor: 'rgba(241,223,210,0.8)',
    paddingHorizontal: 14,
    paddingVertical: 14,
    gap: 2,
  },
  statusRow: {
    flexDirection: 'row',
    alignItems: 'stretch',
    gap: 12,
    minHeight: 118,
  },
  statusRowLast: {
    minHeight: 104,
  },
  statusRail: {
    alignItems: 'center',
    width: 34,
  },
  statusStepDot: {
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF1E8',
    borderWidth: 1,
    borderColor: 'rgba(217,152,131,0.24)',
  },
  statusStepDotLead: {
    backgroundColor: '#FBE3DD',
    borderColor: 'rgba(201,120,120,0.3)',
  },
  statusStepText: {
    color: colors.accentBurgundy,
    fontFamily: typography.body,
    fontSize: 10,
    fontWeight: '700',
  },
  statusStepTextLead: {
    color: colors.textPrimary,
  },
  statusConnector: {
    flex: 1,
    width: 2,
    marginTop: 8,
    marginBottom: 6,
    borderRadius: 999,
    backgroundColor: 'rgba(217,152,131,0.16)',
  },
  statusConnectorLead: {
    backgroundColor: 'rgba(201,120,120,0.22)',
  },
  statusItem: {
    flex: 1,
    borderRadius: 24,
    backgroundColor: colors.surfaceCream,
    borderWidth: 1,
    borderColor: 'rgba(241,223,210,0.74)',
    padding: 14,
    gap: 12,
  },
  statusItemLead: {
    backgroundColor: '#FFFDFC',
    borderColor: 'rgba(201,120,120,0.2)',
  },
  statusMetaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 10,
  },
  statusStageChip: {
    borderRadius: radii.pill,
    backgroundColor: '#FFF6EF',
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  statusStageChipLead: {
    backgroundColor: '#FBEFEA',
  },
  statusStageChipText: {
    color: colors.accentBurgundy,
    fontFamily: typography.body,
    fontSize: 11,
    fontWeight: '700',
  },
  statusStageChipTextLead: {
    color: colors.textPrimary,
  },
  statusIconWrap: {
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF5EF',
  },
  statusIconWrapLead: {
    backgroundColor: '#FBE7E1',
  },
  statusCopy: {
    gap: 4,
  },
  statusLabel: {
    fontSize: 11,
    lineHeight: 17,
  },
  statusValue: {
    color: colors.textPrimary,
    fontFamily: typography.body,
    fontSize: 16,
    lineHeight: 22,
    fontWeight: '700',
  },
  statusValueLead: {
    fontSize: 17,
    lineHeight: 24,
  },
  statusHint: {
    fontSize: 12,
    lineHeight: 18,
  },
  introCard: {
    backgroundColor: '#F7EEE7',
  },
  introTitle: {
    color: colors.accentBurgundy,
    fontFamily: typography.body,
    fontSize: 13,
    fontWeight: '600',
  },
  introText: {
    color: colors.textPrimary,
    fontFamily: typography.display,
    fontSize: 20,
    lineHeight: 27,
    fontWeight: '600',
  },
  discussionCard: {
    backgroundColor: '#FFF8F1',
    gap: 14,
  },
  messageList: {
    borderRadius: 22,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(241,223,210,0.74)',
  },
  messageRow: {
    backgroundColor: '#FFFDFB',
    paddingHorizontal: 16,
    paddingVertical: 14,
    gap: 6,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(241,223,210,0.74)',
  },
  messageRowWarm: {
    backgroundColor: '#FBEFEA',
  },
  messageRowLast: {
    borderBottomWidth: 0,
  },
  messageSpeaker: {
    color: colors.accentBurgundy,
    fontFamily: typography.body,
    fontSize: 12,
    fontWeight: '700',
  },
  messageText: {
    fontSize: 13,
    lineHeight: 20,
  },
  nextStepInline: {
    gap: 6,
    borderTopWidth: 1,
    borderTopColor: 'rgba(241,223,210,0.74)',
    paddingTop: 14,
  },
  nextStepTitle: {
    color: colors.textPrimary,
    fontFamily: typography.body,
    fontSize: 14,
    fontWeight: '700',
  },
  nextStepText: {
    fontSize: 13,
    lineHeight: 20,
  },
  nextStepTextLast: {
    marginBottom: 0,
  },
  footerContent: {
    gap: 10,
  },
  footerButton: {
    borderRadius: 24,
    paddingVertical: 16,
    paddingHorizontal: 20,
    backgroundColor: colors.accentBurgundy,
    shadowColor: 'rgba(216, 150, 142, 0.45)',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 1,
    shadowRadius: 22,
    elevation: 8,
  },
  footerButtonPressed: {
    opacity: 0.94,
    transform: [{ scale: 0.985 }],
  },
  footerButtonInner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  footerButtonCopy: {
    gap: 4,
  },
  footerEyebrow: {
    color: 'rgba(240,228,213,0.64)',
  },
  footerButtonLabel: {
    color: colors.textInverse,
    fontFamily: typography.body,
    fontSize: 15,
    fontWeight: '600',
  },
  footerNote: {
    fontSize: 12,
  },
});
