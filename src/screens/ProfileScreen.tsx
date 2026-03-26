import { Pressable, StyleSheet, Text, View } from 'react-native';

import { BodyText, MainTabBar, PageHeaderCard, ScreenShell, SectionCard } from '../components/common';
import { colors, radii, typography } from '../theme/tokens';
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
      <PageHeaderCard eyebrow="账户中心" title={data.headerTitle} subtitle={data.headerSubtitle} badge={data.badgeLabel} />

      <SectionCard bordered={false} style={styles.leadCard}>
        <Text style={styles.leadTitle}>{data.leadTitle}</Text>
        <BodyText>{data.leadSummary}</BodyText>
      </SectionCard>

      <SectionCard style={styles.versionCard}>
        <View style={styles.versionTop}>
          <Text style={styles.sectionTitle}>{data.versionTitle}</Text>
          <View style={styles.versionTag}>
            <Text style={styles.versionTagText}>{data.versionTag}</Text>
          </View>
        </View>
        <BodyText>{data.versionSummary}</BodyText>
      </SectionCard>

      <View style={styles.entryRow}>
        {data.quickEntries.map((item, index) => (
          <SectionCard key={item.id} bordered={false} style={[styles.entryCard, index === 1 ? styles.entryWarm : null]}>
            <Text style={styles.entryTitle}>{item.title}</Text>
            <BodyText>{item.description}</BodyText>
          </SectionCard>
        ))}
      </View>

      <SectionCard tone="paper" style={styles.recentCard}>
        <Text style={styles.sectionTitle}>{data.recentTitle}</Text>
        <View style={styles.recentList}>
          {data.recentItems.map((item) => (
            <View key={item} style={styles.recentItem}>
              <Text style={styles.recentDot}>•</Text>
              <BodyText style={styles.recentCopy}>{item}</BodyText>
            </View>
          ))}
        </View>
        <Text onPress={onOpenProgress} style={styles.progressLink}>
          查看完整进度
        </Text>
      </SectionCard>

      <SectionCard style={styles.accountCard}>
        <Text style={styles.sectionTitle}>{data.accountTitle}</Text>
        <View style={styles.accountList}>
          {data.accountItems.map((item, index) => (
            <Pressable
              key={item.id}
              onPress={item.id === 'account-3' ? onOpenOnboarding : undefined}
              style={({ pressed }) => [
                styles.accountItem,
                index === 2 ? styles.accountItemWarm : null,
                pressed && item.id === 'account-3' ? styles.pressed : null,
              ]}
            >
              <Text style={styles.accountTitle}>{item.title}</Text>
              <BodyText>{item.description}</BodyText>
            </Pressable>
          ))}
        </View>
      </SectionCard>
    </ScreenShell>
  );
}

const styles = StyleSheet.create({
  leadCard: {
    backgroundColor: '#F7EEE7',
  },
  leadTitle: {
    color: colors.textPrimary,
    fontFamily: typography.display,
    fontSize: 28,
    lineHeight: 34,
    fontWeight: '600',
  },
  versionCard: {
    backgroundColor: colors.surfaceCream,
  },
  versionTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sectionTitle: {
    color: colors.textPrimary,
    fontFamily: typography.body,
    fontSize: 16,
    fontWeight: '600',
  },
  versionTag: {
    borderRadius: radii.pill,
    backgroundColor: '#FBEFEA',
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  versionTagText: {
    color: colors.accentBurgundy,
    fontFamily: typography.body,
    fontSize: 12,
    fontWeight: '700',
  },
  entryRow: {
    gap: 10,
  },
  entryCard: {
    backgroundColor: '#FFF7F1',
  },
  entryWarm: {
    backgroundColor: '#FBEFEA',
  },
  entryTitle: {
    color: colors.textPrimary,
    fontFamily: typography.body,
    fontSize: 15,
    fontWeight: '700',
  },
  recentCard: {
    backgroundColor: colors.mutedPaper,
  },
  recentList: {
    gap: 10,
  },
  recentItem: {
    flexDirection: 'row',
    gap: 8,
  },
  recentDot: {
    color: colors.accentBurgundy,
    fontSize: 18,
    lineHeight: 20,
  },
  recentCopy: {
    flex: 1,
  },
  progressLink: {
    color: colors.accentBurgundy,
    fontFamily: typography.body,
    fontSize: 14,
    fontWeight: '700',
    marginTop: 4,
  },
  accountCard: {
    backgroundColor: '#FFF7F1',
  },
  accountList: {
    gap: 10,
  },
  accountItem: {
    borderRadius: 18,
    backgroundColor: colors.surfaceCream,
    padding: 14,
    gap: 4,
  },
  accountItemWarm: {
    backgroundColor: '#FBEFEA',
  },
  accountTitle: {
    color: colors.textPrimary,
    fontFamily: typography.body,
    fontSize: 15,
    fontWeight: '700',
  },
  pressed: {
    opacity: 0.92,
  },
});
