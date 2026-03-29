import { MainTabBar, PageHeaderCard, ScreenShell } from '../components/common';
import { ChatFocusPanel } from '../features/chat/components/ChatFocusPanel';
import { ChatMessageDigest } from '../features/chat/components/ChatMessageDigest';
import { ChatNextStepPanel } from '../features/chat/components/ChatNextStepPanel';
import { ChatVersionAnchor } from '../features/chat/components/ChatVersionAnchor';
import type { ConversationScreenData, HomeData, MainTabId } from '../types';

export function ChatHomeScreen({
  data,
  tabs,
  onTabPress,
  onOpenProgress,
}: {
  data: ConversationScreenData;
  tabs: HomeData['bottomTabs'];
  onTabPress: (tabId: MainTabId) => void;
  onOpenProgress: () => void;
}) {
  const currentTarget = data.statusItems.find((item) => item.label === '当前目标')?.value ?? '确认当前版本细节';
  const nextAction = data.statusItems.find((item) => item.label === '下一动作')?.value ?? '确认后进入下一步';
  const currentVersion = data.statusItems.find((item) => item.label === '当前版本')?.value ?? 'V1';

  const waitingLabel = data.actions[0]?.title.includes('更新')
    ? '当前待你确认'
    : data.actions[0]?.title.includes('保持')
      ? '当前待传承人回复'
      : '当前待系统更新';

  const waitingHint = data.actions[0]?.title.includes('更新')
    ? `先确认“${currentTarget}”是否需要继续调整；确认后，系统会把当前版本从 ${currentVersion} 往下推进。`
    : data.footerNote;

  const closureHint = `这轮不是泛泛聊天，收口点是“${currentTarget}”。一旦确认，就按“${nextAction}”继续推进。`;

  return (
    <ScreenShell footer={<MainTabBar tabs={tabs} activeTab="chat" onTabPress={onTabPress} />}>
      <PageHeaderCard
        eyebrow="沟通空间"
        title={data.headerTitle}
        subtitle={data.headerSubtitle}
        badge={data.badgeLabel}
        showConversationIllustration
      />

      <ChatVersionAnchor
        label={data.quoteLabel}
        text={data.quoteText}
        statusLabel={waitingLabel}
        statusHint={waitingHint}
      />

      <ChatFocusPanel
        eyebrow={data.introTitle}
        title={data.introText}
        summary={data.headerSubtitle}
        note={data.introNote}
        responsibilityTitle="当前推进责任"
        responsibilityValue={waitingLabel}
        closureTitle="本轮待确认"
        closureValue={currentTarget}
        statusTitle={data.statusTitle}
        statusItems={data.statusItems}
      />

      <ChatMessageDigest messages={data.messages} />

      <ChatNextStepPanel
        actions={data.actions}
        ctaLabel={data.ctaLabel}
        note={data.footerNote}
        closureTitle={currentTarget}
        closureHint={closureHint}
        onOpenProgress={onOpenProgress}
      />
    </ScreenShell>
  );
}
