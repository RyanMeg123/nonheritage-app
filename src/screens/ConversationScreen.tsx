import { Feather } from '@expo/vector-icons';
import { type ComponentProps } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Svg, { Circle, Path } from 'react-native-svg';

import { BodyText, PageHeaderCard, ScreenShell, SectionCard } from '../components/common';
import { colors, typography } from '../theme/tokens';
import type { ConversationScreenData, InfoPair } from '../types';

function getStatusIconName(label: string): ComponentProps<typeof Feather>['name'] {
  if (label.includes('目标')) return 'crosshair';
  if (label.includes('版本')) return 'layers';
  if (label.includes('动作')) return 'corner-down-right';
  return 'circle';
}

function StatusRailDecoration() {
  return (
    <Svg width={42} height={168} viewBox="0 0 42 168">
      <Path
        d="M21 16V152"
        stroke="rgba(217,152,131,0.18)"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeDasharray="2 10"
      />
      <Circle cx={21} cy={28} r={5} fill="rgba(201,120,120,0.16)" />
      <Circle cx={21} cy={84} r={4.5} fill="rgba(217,152,131,0.14)" />
      <Circle cx={21} cy={140} r={4.5} fill="rgba(231,200,122,0.16)" />
    </Svg>
  );
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
        <View pointerEvents="none" style={styles.statusDecoration}>
          <StatusRailDecoration />
        </View>
        <Text style={styles.sectionTitle}>{data.statusTitle}</Text>
        <View style={styles.statusPanel}>
          {data.statusItems.map((item, index) => (
            <StatusItem
              key={item.id}
              item={item}
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

function StatusItem({ item, lead, last }: { item: InfoPair; lead: boolean; last: boolean }) {
  return (
    <View style={[styles.statusItem, lead ? styles.statusItemLead : null, last ? styles.statusItemLast : null]}>
      <View style={styles.statusItemTop}>
        <View style={[styles.statusIconWrap, lead ? styles.statusIconWrapLead : null]}>
          <Feather name={getStatusIconName(item.label)} size={15} color={colors.accentBurgundy} />
        </View>
        <BodyText style={styles.statusLabel}>{item.label}</BodyText>
      </View>
      <Text style={styles.statusValue}>{item.value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionTitle: {
    color: colors.textPrimary,
    fontFamily: typography.body,
    fontSize: 16,
    fontWeight: '600',
  },
  statusCard: {
    backgroundColor: '#FFF7F1',
    overflow: 'hidden',
  },
  statusDecoration: {
    position: 'absolute',
    top: 26,
    right: 6,
  },
  statusPanel: {
    marginRight: 24,
    borderRadius: 22,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(241,223,210,0.74)',
  },
  statusItem: {
    backgroundColor: colors.surfaceCream,
    padding: 14,
    gap: 8,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(241,223,210,0.74)',
  },
  statusItemLead: {
    backgroundColor: '#FFFDFB',
  },
  statusItemLast: {
    borderBottomWidth: 0,
  },
  statusItemTop: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  statusIconWrap: {
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF5EF',
  },
  statusIconWrapLead: {
    backgroundColor: '#FBEFEA',
  },
  statusLabel: {
    fontSize: 12,
  },
  statusValue: {
    color: colors.textPrimary,
    fontFamily: typography.body,
    fontSize: 17,
    fontWeight: '700',
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
    fontSize: 24,
    lineHeight: 31,
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
    fontSize: 14,
    lineHeight: 21,
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
    fontSize: 15,
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
    fontSize: 16,
    fontWeight: '600',
  },
  footerNote: {
    fontSize: 12,
  },
});
