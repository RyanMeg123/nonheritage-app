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

function CardCornerAccent({ tone = 'warm' }: { tone?: 'warm' | 'soft' }) {
  const stroke = tone === 'warm' ? 'rgba(201,120,120,0.22)' : 'rgba(217,152,131,0.18)';
  const fill = tone === 'warm' ? 'rgba(248,217,213,0.32)' : 'rgba(255,255,255,0.4)';

  return (
    <Svg width={84} height={84} viewBox="0 0 84 84">
      <Path
        d="M72 10C61 10 52 16 47 26C43 34 34 41 22 45"
        stroke={stroke}
        strokeWidth={1.5}
        strokeLinecap="round"
        fill="none"
      />
      <Path
        d="M60 0C60 18 74 20 84 20L84 0H60Z"
        fill={fill}
      />
      <Circle cx={46} cy={26} r={3} fill={stroke} />
    </Svg>
  );
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

      <SectionCard tone="paper" style={styles.quoteCard}>
        <View pointerEvents="none" style={styles.quoteDecoration}>
          <CardCornerAccent tone="soft" />
        </View>
        <View style={styles.inlineLabelRow}>
          <View style={styles.inlineIconWrap}>
            <Feather name="bookmark" size={14} color={colors.accentBurgundy} />
          </View>
          <Text style={styles.quoteLabel}>{data.quoteLabel}</Text>
        </View>
        <Text style={styles.quoteText}>{data.quoteText}</Text>
      </SectionCard>

      <SectionCard style={styles.statusCard}>
        <View pointerEvents="none" style={styles.statusDecoration}>
          <StatusRailDecoration />
        </View>
        <Text style={styles.sectionTitle}>{data.statusTitle}</Text>
        <View style={styles.statusList}>
          {data.statusItems.map((item, index) => (
            <StatusItem key={item.id} item={item} lead={index === 0} />
          ))}
        </View>
      </SectionCard>

      <SectionCard bordered={false} style={styles.introCard}>
        <Text style={styles.introTitle}>{data.introTitle}</Text>
        <Text style={styles.introText}>{data.introText}</Text>
        <BodyText>{data.introNote}</BodyText>
      </SectionCard>

      <View style={styles.messageList}>
        {data.messages.map((message) => (
          <SectionCard
            key={message.id}
            bordered={message.tone === 'user'}
            tone={message.tone === 'user' ? 'cream' : 'paper'}
            style={[styles.messageCard, message.tone === 'artisan' ? styles.messageWarm : null]}
          >
            <Text style={styles.messageSpeaker}>{message.speaker}</Text>
            <BodyText style={styles.messageText}>{message.text}</BodyText>
          </SectionCard>
        ))}
      </View>

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

function StatusItem({ item, lead }: { item: InfoPair; lead: boolean }) {
  return (
    <View style={[styles.statusItem, lead ? styles.statusItemLead : null]}>
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
  quoteCard: {
    backgroundColor: colors.mutedPaper,
    overflow: 'hidden',
  },
  quoteDecoration: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
  inlineLabelRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingRight: 36,
  },
  inlineIconWrap: {
    width: 26,
    height: 26,
    borderRadius: 13,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.7)',
  },
  quoteLabel: {
    color: colors.accentBurgundy,
    fontFamily: typography.body,
    fontSize: 12,
    fontWeight: '700',
  },
  quoteText: {
    color: colors.textPrimary,
    fontFamily: typography.body,
    fontSize: 15,
    lineHeight: 22,
  },
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
  statusList: {
    gap: 10,
    paddingRight: 24,
  },
  statusItem: {
    borderRadius: 18,
    backgroundColor: colors.surfaceCream,
    padding: 14,
    gap: 8,
  },
  statusItemLead: {
    borderWidth: 1,
    borderColor: 'rgba(201,120,120,0.14)',
    backgroundColor: '#FFFDFB',
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
  messageList: {
    gap: 12,
  },
  messageCard: {
    backgroundColor: '#FFF8F1',
  },
  messageWarm: {
    backgroundColor: '#FBEFEA',
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
