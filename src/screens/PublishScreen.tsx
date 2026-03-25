import { startTransition, useState } from 'react';
import { Alert, Image, Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

import { publishPreset } from '../data/mockData';
import {
  BackChip,
  BodyText,
  CardTitle,
  DisplayText,
  InputField,
  MainTabBar,
  PillButton,
  ScreenShell,
  SectionCard,
  ToggleChip,
} from '../components/common';
import { colors, radii, typography } from '../theme/tokens';
import type { HomeData, MainTabId, PublishFormState, UploadImagePlaceholder } from '../types';

const MAX_UPLOAD_IMAGES = 6;
const craftCardTints = {
  'tie-dye': colors.sky,
  'su-embroidery': colors.blush,
  silver: colors.butter,
} as const;

export function PublishScreen({
  formState,
  tabs,
  onBack,
  onChange,
  onContinue,
  onTabPress,
}: {
  formState: PublishFormState;
  tabs: HomeData['bottomTabs'];
  onBack: () => void;
  onChange: (state: PublishFormState) => void;
  onContinue: () => void;
  onTabPress: (tabId: MainTabId) => void;
}) {
  const [isPickingImages, setIsPickingImages] = useState(false);
  const [previewImage, setPreviewImage] = useState<UploadImagePlaceholder | null>(null);

  const selectedBudget = publishPreset.budgetOptions.find((item) => item.id === formState.budgetId);
  const selectedTimeline = publishPreset.timelineOptions.find((item) => item.id === formState.timelineId);

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

      if (nextImages.length === 0) {
        return;
      }

      startTransition(() => {
        onChange({
          ...formState,
          uploadedImages: [...formState.uploadedImages, ...nextImages],
        });
      });
    } finally {
      setIsPickingImages(false);
    }
  };

  const deleteImage = (imageId: string) => {
    const nextImages = formState.uploadedImages.filter((image) => image.id !== imageId);

    startTransition(() => {
      onChange({
        ...formState,
        uploadedImages: nextImages,
      });
    });

    if (previewImage?.id === imageId) {
      setPreviewImage(null);
    }
  };

  const cycleBudget = () => {
    const currentIndex = publishPreset.budgetOptions.findIndex((item) => item.id === formState.budgetId);
    const next = publishPreset.budgetOptions[(currentIndex + 1) % publishPreset.budgetOptions.length];
    onChange({ ...formState, budgetId: next.id });
  };

  const cycleTimeline = () => {
    const currentIndex = publishPreset.timelineOptions.findIndex((item) => item.id === formState.timelineId);
    const next = publishPreset.timelineOptions[(currentIndex + 1) % publishPreset.timelineOptions.length];
    onChange({ ...formState, timelineId: next.id });
  };

  return (
    <ScreenShell
      footer={
        <View style={styles.footerContent}>
          <PillButton label="AI 帮我整理需求" onPress={onContinue} inverse trailing />
          <BodyText style={styles.footerNote}>下一步会先帮你整理方向，再生成更清楚的方案卡。</BodyText>
          <MainTabBar tabs={tabs} activeTab="custom" onTabPress={onTabPress} />
        </View>
      }
    >
      <View style={styles.headerCard}>
        <View style={styles.headerSky} />
        <View style={styles.headerFlower} />
        <View style={styles.headerTop}>
          <BackChip onPress={onBack} />
          <View style={styles.progressChip}>
            <Text style={styles.progressText}>{publishPreset.progressLabel}</Text>
          </View>
        </View>
        <BodyText style={styles.headerEyebrow}>upload & shape</BodyText>
        <DisplayText style={styles.headerTitle}>{publishPreset.headerTitle}</DisplayText>
        <BodyText style={styles.headerSubtitle}>{publishPreset.headerSubtitle}</BodyText>
      </View>

      <SectionCard tone="paper" style={styles.uploadOuter}>
        <View style={styles.uploadHeader}>
          <View style={styles.uploadHeaderCopy}>
            <CardTitle>{publishPreset.uploadGuideTitle}</CardTitle>
            <BodyText>{publishPreset.uploadGuideDescription}</BodyText>
          </View>
          <View style={styles.stepChip}>
            <Text style={styles.stepChipText}>{publishPreset.uploadGuideLabel}</Text>
          </View>
        </View>

        <Pressable style={({ pressed }) => [styles.uploadPanel, pressed && styles.pressed]} onPress={pickImages}>
          <View style={styles.uploadOrb}>
            <Text style={styles.uploadOrbText}>+</Text>
          </View>
          <Text style={styles.uploadTitle}>点击上传图片</Text>
          <BodyText style={styles.uploadDescription}>
            支持 1-6 张图，建议至少上传 1 张细节图和 1 张整体参考图。
          </BodyText>
          <View style={styles.uploadMetaRow}>
            <View style={styles.metaPill}>
              <Text style={styles.metaPillText}>已上传 {formState.uploadedImages.length} / 6</Text>
            </View>
            <View style={[styles.metaPill, styles.metaPillSoft]}>
              <Text style={styles.metaPillText}>支持预览与删除</Text>
            </View>
          </View>
        </Pressable>

        {formState.uploadedImages.length ? (
          <View style={styles.uploadThumbRow}>
            {formState.uploadedImages.map((image) => (
              <View key={image.id} style={styles.thumbnailWrap}>
                <Pressable
                  onPress={() => setPreviewImage(image)}
                  style={({ pressed }) => [styles.thumbnailButton, pressed && styles.pressed]}
                >
                  <Image source={{ uri: image.uri }} style={styles.thumbnail} />
                </Pressable>
                <Pressable style={styles.deleteBadge} onPress={() => deleteImage(image.id)}>
                  <Text style={styles.deleteBadgeText}>×</Text>
                </Pressable>
              </View>
            ))}
          </View>
        ) : null}
      </SectionCard>

      <SectionCard style={styles.textCard}>
        <View style={styles.sectionCopy}>
          <CardTitle>{publishPreset.requirementHintTitle}</CardTitle>
          <BodyText>{publishPreset.requirementHintSubtitle}</BodyText>
        </View>
        <InputField
          value={formState.requirementText}
          onChangeText={(requirementText) => onChange({ ...formState, requirementText })}
          placeholder={publishPreset.requirementPlaceholder}
        />
      </SectionCard>

      <SectionCard tone="paper" style={styles.craftSection}>
        <View style={styles.sectionCopy}>
          <CardTitle>工艺方向</CardTitle>
          <BodyText>先选一个更像你今天想要的感觉</BodyText>
        </View>
        <View style={styles.craftGrid}>
          {publishPreset.craftOptions.map((option) => {
            const active = option.id === formState.preferredCraftId;
            return (
              <Pressable
                key={option.id}
                onPress={() => onChange({ ...formState, preferredCraftId: option.id })}
                style={[
                  styles.craftOption,
                  { backgroundColor: craftCardTints[option.id as keyof typeof craftCardTints] },
                  active ? styles.craftOptionActive : null,
                ]}
              >
                <View style={styles.craftOptionOrb} />
                <Text style={styles.craftOptionLabel}>{option.label}</Text>
              </Pressable>
            );
          })}
        </View>
        <View style={styles.chipRow}>
          {publishPreset.craftOptions.map((option) => (
            <ToggleChip
              key={option.id}
              label={option.label}
              active={option.id === formState.preferredCraftId}
              onPress={() => onChange({ ...formState, preferredCraftId: option.id })}
            />
          ))}
        </View>
      </SectionCard>

      <SectionCard style={styles.conditionCard}>
        <View style={styles.sectionCopy}>
          <CardTitle>条件信息</CardTitle>
          <BodyText>像选心情卡一样点一下切换就行</BodyText>
        </View>
        <View style={styles.conditionRow}>
          <Pressable onPress={cycleBudget} style={({ pressed }) => [styles.conditionItem, pressed && styles.pressed]}>
            <View style={styles.conditionIcon}>
              <Text style={styles.conditionIconText}>¥</Text>
            </View>
            <BodyText style={styles.conditionLabel}>预算上限</BodyText>
            <Text style={styles.conditionValue}>{selectedBudget ? selectedBudget.value : ''}</Text>
          </Pressable>
          <Pressable
            onPress={cycleTimeline}
            style={({ pressed }) => [styles.conditionItem, styles.conditionItemSky, pressed && styles.pressed]}
          >
            <View style={[styles.conditionIcon, styles.conditionIconSky]}>
              <Text style={styles.conditionIconText}>⌚</Text>
            </View>
            <BodyText style={styles.conditionLabel}>交付时间</BodyText>
            <Text style={styles.conditionValue}>{selectedTimeline ? selectedTimeline.value : ''}</Text>
          </Pressable>
        </View>
      </SectionCard>

      <Modal
        visible={previewImage !== null}
        transparent
        animationType="fade"
        onRequestClose={() => setPreviewImage(null)}
      >
        <View style={styles.previewOverlay}>
          <Pressable style={styles.previewBackdrop} onPress={() => setPreviewImage(null)} />
          <View style={styles.previewCard}>
            <View style={styles.previewActions}>
              {previewImage ? (
                <Pressable style={styles.previewDelete} onPress={() => deleteImage(previewImage.id)}>
                  <Text style={styles.previewDeleteText}>删除</Text>
                </Pressable>
              ) : null}
              <Pressable style={styles.previewClose} onPress={() => setPreviewImage(null)}>
                <Text style={styles.previewCloseText}>关闭</Text>
              </Pressable>
            </View>
            {previewImage ? <Image source={{ uri: previewImage.uri }} style={styles.previewImage} /> : null}
          </View>
        </View>
      </Modal>
    </ScreenShell>
  );
}

const styles = StyleSheet.create({
  headerCard: {
    borderRadius: 34,
    overflow: 'hidden',
    padding: 18,
    backgroundColor: '#FFFCF9',
    borderWidth: 1,
    borderColor: colors.lineSoft,
    gap: 6,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 14 },
    shadowOpacity: 0.9,
    shadowRadius: 28,
    elevation: 7,
  },
  headerSky: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: colors.sky,
    opacity: 0.35,
  },
  headerFlower: {
    position: 'absolute',
    right: -10,
    top: 26,
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: 'rgba(248,217,213,0.72)',
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  progressChip: {
    borderRadius: radii.pill,
    backgroundColor: 'rgba(255,255,255,0.82)',
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  progressText: {
    color: colors.textPrimary,
    fontFamily: typography.body,
    fontSize: 12,
    fontWeight: '700',
  },
  headerEyebrow: {
    color: colors.accentBurgundy,
    fontSize: 12,
    fontWeight: '600',
    letterSpacing: 0.7,
  },
  headerTitle: {
    fontSize: 33,
  },
  headerSubtitle: {
    fontSize: 14,
    width: 220,
  },
  uploadOuter: {
    backgroundColor: colors.mutedPaper,
  },
  uploadHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: 12,
  },
  uploadHeaderCopy: {
    flex: 1,
    gap: 4,
  },
  stepChip: {
    borderRadius: radii.pill,
    backgroundColor: colors.sky,
    paddingHorizontal: 10,
    paddingVertical: 7,
  },
  stepChipText: {
    color: colors.textPrimary,
    fontFamily: typography.body,
    fontSize: 12,
    fontWeight: '700',
  },
  uploadPanel: {
    borderRadius: 28,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: colors.lineStrong,
    backgroundColor: colors.uploadSurface,
    alignItems: 'center',
    paddingHorizontal: 18,
    paddingVertical: 22,
    gap: 10,
  },
  uploadOrb: {
    width: 68,
    height: 68,
    borderRadius: 34,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFE2D7',
  },
  uploadOrbText: {
    color: colors.accentBurgundy,
    fontSize: 28,
    fontWeight: '300',
  },
  uploadTitle: {
    color: colors.textPrimary,
    fontFamily: typography.display,
    fontSize: 26,
    fontWeight: '600',
  },
  uploadDescription: {
    textAlign: 'center',
    maxWidth: 250,
  },
  uploadMetaRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 8,
  },
  metaPill: {
    borderRadius: radii.pill,
    backgroundColor: '#FFF5EF',
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  metaPillSoft: {
    backgroundColor: '#EFF8FF',
  },
  metaPillText: {
    color: colors.textPrimary,
    fontFamily: typography.body,
    fontSize: 12,
    fontWeight: '600',
  },
  uploadThumbRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  thumbnailWrap: {
    position: 'relative',
  },
  thumbnailButton: {
    borderRadius: 18,
  },
  thumbnail: {
    width: 74,
    height: 74,
    borderRadius: 18,
    backgroundColor: colors.bgSoft,
  },
  deleteBadge: {
    position: 'absolute',
    top: -6,
    right: -6,
    width: 24,
    height: 24,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.accentBurgundy,
  },
  deleteBadgeText: {
    color: colors.textInverse,
    fontSize: 16,
    lineHeight: 16,
  },
  textCard: {
    backgroundColor: '#FFFDF9',
  },
  sectionCopy: {
    gap: 4,
  },
  craftSection: {
    backgroundColor: colors.surfaceCream,
  },
  craftGrid: {
    flexDirection: 'row',
    gap: 12,
  },
  craftOption: {
    flex: 1,
    minHeight: 120,
    borderRadius: 24,
    padding: 14,
    justifyContent: 'flex-end',
    overflow: 'hidden',
  },
  craftOptionActive: {
    borderWidth: 2,
    borderColor: 'rgba(255,255,255,0.85)',
  },
  craftOptionOrb: {
    position: 'absolute',
    top: 14,
    right: 14,
    width: 54,
    height: 54,
    borderRadius: 27,
    backgroundColor: 'rgba(255,255,255,0.4)',
  },
  craftOptionLabel: {
    color: colors.textPrimary,
    fontFamily: typography.display,
    fontSize: 20,
    fontWeight: '600',
  },
  chipRow: {
    flexDirection: 'row',
    gap: 8,
    flexWrap: 'wrap',
  },
  conditionCard: {
    backgroundColor: colors.surfaceCream,
  },
  conditionRow: {
    flexDirection: 'row',
    gap: 12,
  },
  conditionItem: {
    flex: 1,
    borderRadius: 24,
    backgroundColor: '#FFF5EF',
    padding: 16,
    gap: 8,
  },
  conditionItemSky: {
    backgroundColor: '#EFF8FF',
  },
  conditionIcon: {
    width: 38,
    height: 38,
    borderRadius: 19,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFD9CE',
  },
  conditionIconSky: {
    backgroundColor: '#D9F0FF',
  },
  conditionIconText: {
    color: colors.textPrimary,
    fontSize: 14,
    fontWeight: '700',
  },
  conditionLabel: {
    fontSize: 12,
  },
  conditionValue: {
    color: colors.textPrimary,
    fontFamily: typography.body,
    fontSize: 18,
    fontWeight: '700',
  },
  previewOverlay: {
    flex: 1,
    backgroundColor: 'rgba(31, 36, 48, 0.32)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  previewBackdrop: {
    ...StyleSheet.absoluteFillObject,
  },
  previewCard: {
    width: '100%',
    maxWidth: 420,
    borderRadius: 30,
    backgroundColor: '#FFFDF9',
    padding: 14,
    gap: 12,
  },
  previewActions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 8,
  },
  previewDelete: {
    borderRadius: radii.pill,
    backgroundColor: colors.accentBurgundy,
    paddingHorizontal: 14,
    paddingVertical: 8,
  },
  previewDeleteText: {
    color: colors.textInverse,
    fontFamily: typography.body,
    fontSize: 13,
    fontWeight: '700',
  },
  previewClose: {
    borderRadius: radii.pill,
    backgroundColor: colors.sky,
    paddingHorizontal: 14,
    paddingVertical: 8,
  },
  previewCloseText: {
    color: colors.textPrimary,
    fontFamily: typography.body,
    fontSize: 13,
    fontWeight: '700',
  },
  previewImage: {
    width: '100%',
    aspectRatio: 1,
    borderRadius: 22,
    backgroundColor: colors.bgSoft,
  },
  footerContent: {
    gap: 10,
  },
  footerNote: {
    fontSize: 12,
  },
  pressed: {
    opacity: 0.92,
    transform: [{ scale: 0.98 }],
  },
});
