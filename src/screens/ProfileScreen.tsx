import { MainTabBar, PageHeaderCard, ScreenShell } from '../components/common';
import { ProfileOverviewCard } from '../features/profile/components/ProfileOverviewCard';
import { ProfileProjectSummaryCard } from '../features/profile/components/ProfileProjectSummaryCard';
import { ProfileServiceSection } from '../features/profile/components/ProfileServiceSection';
import { ProfileStatusHero } from '../features/profile/components/ProfileStatusHero';
import { ProfileVersionHistorySection } from '../features/profile/components/ProfileVersionHistorySection';
import { ProfileVersionUpdateCard } from '../features/profile/components/ProfileVersionUpdateCard';
import type { HomeData, MainTabId, ProfileScreenData } from '../types';

export function ProfileScreen({
  data,
  tabs,
  onTabPress,
  onOpenProgress,
  onOpenOnboarding,
}: {
  data: ProfileScreenData;
  tabs: HomeData['bottomTabs'];
  onTabPress: (tabId: MainTabId) => void;
  onOpenProgress: () => void;
  onOpenOnboarding: () => void;
}) {
  return (
    <ScreenShell footer={<MainTabBar tabs={tabs} activeTab="mine" onTabPress={onTabPress} />}>
      <PageHeaderCard
        eyebrow="项目总览"
        title={data.headerTitle}
        subtitle={data.headerSubtitle}
        badge={data.badgeLabel}
      />

      <ProfileStatusHero
        title={data.leadTitle}
        summary={data.leadSummary}
        stageLabel={data.stageLabel}
        stageValue={data.stageValue}
        nextNodeLabel={data.nextNodeLabel}
        nextNodeValue={data.nextNodeValue}
      />

      <ProfileProjectSummaryCard
        label={data.currentActionLabel}
        title={data.currentActionTitle}
        summary={data.currentActionSummary}
        checklist={data.currentActionChecklist}
        outcome={data.currentActionOutcome}
      />

      <ProfileVersionUpdateCard
        title={data.versionTitle}
        tag={data.versionTag}
        summary={data.versionSummary}
        note={data.versionNote}
      />

      <ProfileOverviewCard
        label="当前推进"
        title={data.orderTitle}
        summary={data.orderSummary}
        tag={data.orderTag}
        note="这里看的是当前项目怎么继续往前走，不是回看旧记录。"
        actionLabel="查看完整进度"
        onPress={onOpenProgress}
      />

      <ProfileOverviewCard
        label="最近发生"
        title={data.messageTitle}
        summary={data.messageSummary}
        tag={data.messageTag}
        note={data.messageActionLabel}
        subdued
      />

      <ProfileVersionHistorySection title={data.historyTitle} summary={data.historySummary} items={data.historyItems} />

      <ProfileServiceSection
        title={data.accountTitle}
        summary={data.accountSummary}
        items={data.accountItems}
        onOpenOnboarding={onOpenOnboarding}
      />
    </ScreenShell>
  );
}
