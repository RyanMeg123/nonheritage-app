import { startTransition, useState } from 'react';
import { Alert, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

import { PageHeaderCard, ScreenShell } from '../components/common';
import { publishPreset } from '../data/mockData';
import { PublishFooterBar } from '../features/publish/components/PublishFooterBar';
import { PublishModeSwitcher } from '../features/publish/components/PublishModeSwitcher';
import { PublishOptionalSection } from '../features/publish/components/PublishOptionalSection';
import { PublishPrimarySection } from '../features/publish/components/PublishPrimarySection';
import { PublishTaskHero } from '../features/publish/components/PublishTaskHero';
import { ConstraintPicker } from '../features/publish/components/ConstraintPicker';
import { CraftSelector } from '../features/publish/components/CraftSelector';
import { ReferenceUploader } from '../features/publish/components/ReferenceUploader';
import { RequirementComposer } from '../features/publish/components/RequirementComposer';
import { getPublishHeaderCopy, publishModeConfig, type PublishSectionKind } from '../features/publish/config';
import type { HomeData, MainTabId, PublishEntryMode, PublishFormState, UploadImagePlaceholder } from '../types';

const MAX_UPLOAD_IMAGES = 6;

const headerCopy = getPublishHeaderCopy(publishPreset);

export function PublishScreen({
  formState,
  tabs,
  onBack,
  onChange,
  onContinue,
  isLoading = false,
  onTabPress,
}: {
  formState: PublishFormState;
  tabs: HomeData['bottomTabs'];
  onBack: () => void;
  onChange: (state: PublishFormState) => void;
  onContinue: () => void;
  isLoading?: boolean;
  onTabPress: (tabId: MainTabId) => void;
}) {
  const [isPickingImages, setIsPickingImages] = useState(false);
  const currentMode = publishModeConfig[formState.entryMode];
  const selectedBudget = publishPreset.budgetOptions.find((item) => item.id === formState.budgetId);
  const selectedTimeline = publishPreset.timelineOptions.find((item) => item.id === formState.timelineId);
  const selectedCraft = publishPreset.craftOptions.find((item) => item.id === formState.preferredCraftId);

  const updateForm = (patch: Partial<PublishFormState>) => {
    onChange({
      ...formState,
      ...patch,
    });
  };

  const pickImages = async () => {
    if (isPickingImages) {
      return;
    }

    const remainingSlots = MAX_UPLOAD_IMAGES - formState.uploadedImages.length;
    if (remainingSlots <= 0) {
      Alert.alert('已达到上限', '最多上传 6 张图片。');
      return;
    }

    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permission.granted) {
      Alert.alert('无法访问相册', '请先允许访问相册，再上传图片。');
      return;
    }

    setIsPickingImages(true);

    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ['images'],
        allowsMultipleSelection: true,
        selectionLimit: remainingSlots,
        quality: 0.9,
      });

      if (result.canceled) {
        return;
      }

      const pickedAt = Date.now();
      const nextImages: UploadImagePlaceholder[] = result.assets.slice(0, remainingSlots).map((asset, index) => ({
        id: `${asset.assetId ?? 'picked-image'}-${pickedAt}-${index}`,
        uri: asset.uri,
      }));

      if (!nextImages.length) {
        return;
      }

      startTransition(() => {
        updateForm({
          uploadedImages: [...formState.uploadedImages, ...nextImages],
        });
      });
    } finally {
      setIsPickingImages(false);
    }
  };

  const deleteImage = (imageId: string) => {
    startTransition(() => {
      updateForm({
        uploadedImages: formState.uploadedImages.filter((image) => image.id !== imageId),
      });
    });
  };

  const selectMode = (entryMode: PublishEntryMode) => {
    startTransition(() => {
      updateForm({ entryMode });
    });
  };

  const handleContinue = () => {
    if (formState.entryMode === 'reference-image' && formState.uploadedImages.length === 0) {
      Alert.alert('先补一张参考图', '这一种发布方式需要至少上传 1 张图片。');
      return;
    }

    if (!formState.requirementText.trim()) {
      Alert.alert('再写一句需求', '先用一句话说明你想做什么，再继续下一步。');
      return;
    }

    onContinue();
  };

  const renderSection = (section: PublishSectionKind) => {
    switch (section) {
      case 'upload':
        return (
          <ReferenceUploader
            title={currentMode.uploadTitle}
            description={currentMode.uploadDescription}
            images={formState.uploadedImages}
            onPick={pickImages}
            onDelete={deleteImage}
          />
        );
      case 'requirement':
        return (
          <RequirementComposer
            title={currentMode.requirementTitle}
            hint={currentMode.requirementHint}
            value={formState.requirementText}
            placeholder={currentMode.requirementPlaceholder}
            onChange={(requirementText) => updateForm({ requirementText })}
            onFillExample={() => updateForm({ requirementText: currentMode.requirementPlaceholder })}
          />
        );
      case 'constraints':
        return (
          <ConstraintPicker
            budgetOptions={publishPreset.budgetOptions}
            timelineOptions={publishPreset.timelineOptions}
            selectedBudgetId={formState.budgetId}
            selectedTimelineId={formState.timelineId}
            onSelectBudget={(budgetId) => updateForm({ budgetId })}
            onSelectTimeline={(timelineId) => updateForm({ timelineId })}
          />
        );
      case 'craft':
        return (
          <CraftSelector
            title={currentMode.craftTitle}
            hint={currentMode.craftHint}
            options={publishPreset.craftOptions}
            selectedId={formState.preferredCraftId}
            styleVariant={currentMode.craftStyle}
            onSelect={(preferredCraftId) => updateForm({ preferredCraftId })}
          />
        );
      default:
        return null;
    }
  };

  const primaryStatus = (() => {
    if (currentMode.primarySection === 'upload') {
      return formState.uploadedImages.length > 0 ? '主任务已准备好' : '主任务还差参考图';
    }
    if (currentMode.primarySection === 'requirement') {
      return formState.requirementText.trim() ? '主任务已准备好' : '主任务还差一句需求';
    }
    if (currentMode.primarySection === 'craft') {
      return selectedCraft ? `主任务已选 ${selectedCraft.label}` : '主任务还差工艺方向';
    }
    return '继续补充任务信息';
  })();

  const primaryCompleted = (() => {
    if (currentMode.primarySection === 'upload') {
      return formState.uploadedImages.length > 0;
    }
    if (currentMode.primarySection === 'requirement') {
      return Boolean(formState.requirementText.trim());
    }
    if (currentMode.primarySection === 'craft') {
      return Boolean(selectedCraft);
    }
    return false;
  })();

  const primaryStatusHint = (() => {
    if (primaryCompleted) {
      if (currentMode.primarySection === 'upload') {
        return '可以继续补一句需求，系统会先按图片和文字一起判断方向。';
      }
      if (currentMode.primarySection === 'requirement') {
        return '想法已经够用，接下来补条件会让后面的判断更稳。';
      }
      return '工艺方向已经定下，接下来再补合作要求和参考信息。';
    }

    if (currentMode.primarySection === 'upload') {
      return '先补至少 1 张参考图，这一步是当前模式的起点。';
    }
    if (currentMode.primarySection === 'requirement') {
      return '先写一句你想做什么，后面的预算和图片都可以再补。';
    }
    return '先定工艺方向，后面的匹配范围才会更准确。';
  })();

  const suggestionText = (() => {
    if (!formState.requirementText.trim()) {
      return '再补一句需求，系统整理出来的结果会更准。';
    }
    if (formState.entryMode !== 'reference-image' && formState.uploadedImages.length === 0) {
      return '现在已经可以继续，也可以再补 1 张参考图，让判断更具体。';
    }
    return '主要信息已经够用，现在可以直接继续；如果愿意，也可以再微调预算和时间。';
  })();

  const nextStepText = '点击后会先整理需求，再进入方案、预览和匹配结果。';

  const summaryBadges = [
    selectedCraft ? `工艺 ${selectedCraft.label}` : null,
    selectedBudget ? `预算 ${selectedBudget.value}` : null,
    selectedTimeline ? `时间 ${selectedTimeline.value}` : null,
  ].filter(Boolean) as string[];

  return (
    <ScreenShell
      footer={
        <PublishFooterBar
          modeLabel={currentMode.modeLabel}
          ctaLabel={currentMode.ctaLabel}
          primaryStatus={primaryStatus}
          suggestionText={suggestionText}
          summaryBadges={summaryBadges}
          nextStepText={nextStepText}
          accentColor={currentMode.accentColor}
          accentSoft={currentMode.accentSoft}
          tabs={tabs}
          isLoading={isLoading}
          onContinue={handleContinue}
          onTabPress={onTabPress}
        />
      }
    >
      <PageHeaderCard
        eyebrow="需求发布"
        title={headerCopy.title}
        subtitle={headerCopy.subtitle}
        badge={headerCopy.badge}
        onBack={onBack}
        showPublishIllustration
      />

      <PublishModeSwitcher selectedMode={formState.entryMode} onSelect={selectMode} />

      <PublishTaskHero
        modeLabel={currentMode.modeLabel}
        title={currentMode.heroTitle}
        description={currentMode.heroDescription}
        helperBullets={currentMode.helperBullets}
        accentColor={currentMode.accentColor}
        accentSoft={currentMode.accentSoft}
      />

      <PublishPrimarySection
        badgeLabel="主任务"
        title="先完成主任务"
        description="当前模式下最关键的一步先放在前面，其他条件后补。"
        statusLabel={primaryStatus}
        statusHint={primaryStatusHint}
        accentColor={currentMode.accentColor}
        accentTint={currentMode.accentTint}
        accentBorder={currentMode.accentBorder}
      >
        {renderSection(currentMode.primarySection)}
      </PublishPrimarySection>

      <PublishOptionalSection
        title="补充条件"
        description="这些信息会帮助后面的需求整理、方案生成和匹配判断。"
      >
        {currentMode.optionalSections.map((section) => (
          <View key={section}>{renderSection(section)}</View>
        ))}
      </PublishOptionalSection>
    </ScreenShell>
  );
}
