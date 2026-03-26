import { useState } from 'react';
import { Image, Modal, Pressable, StyleSheet, Text, View } from 'react-native';

import { BodyText, CardTitle } from '../../../components/common';
import { colors, radii, typography } from '../../../theme/tokens';
import type { UploadImagePlaceholder } from '../../../types';

export function ReferenceUploader({
  title,
  description,
  images,
  onPick,
  onDelete,
}: {
  title: string;
  description: string;
  images: UploadImagePlaceholder[];
  onPick: () => void;
  onDelete: (imageId: string) => void;
}) {
  const [previewImage, setPreviewImage] = useState<UploadImagePlaceholder | null>(null);

  return (
    <View style={styles.block}>
      <View style={styles.header}>
        <CardTitle>{title}</CardTitle>
        <BodyText>{description}</BodyText>
      </View>

      <Pressable style={({ pressed }) => [styles.uploadPanel, pressed ? styles.pressed : null]} onPress={onPick}>
        <View style={styles.uploadOrb}>
          <Text style={styles.uploadOrbText}>+</Text>
        </View>
        <Text style={styles.uploadTitle}>{images.length ? '继续补图片' : '上传图片'}</Text>
        <BodyText style={styles.uploadDescription}>支持 1-6 张图，建议包含整体参考和你最在意的局部细节。</BodyText>
        <View style={styles.metaRow}>
          <View style={styles.metaPill}>
            <Text style={styles.metaText}>已上传 {images.length} / 6</Text>
          </View>
          <View style={[styles.metaPill, styles.metaPillSoft]}>
            <Text style={styles.metaText}>支持预览与删除</Text>
          </View>
        </View>
      </Pressable>

      {images.length ? (
        <View style={styles.thumbRow}>
          {images.map((image) => (
            <View key={image.id} style={styles.thumbWrap}>
              <Pressable
                onPress={() => setPreviewImage(image)}
                style={({ pressed }) => [styles.thumbButton, pressed ? styles.pressed : null]}
              >
                <Image source={{ uri: image.uri }} style={styles.thumb} />
              </Pressable>
              <Pressable style={styles.deleteBadge} onPress={() => onDelete(image.id)}>
                <Text style={styles.deleteBadgeText}>×</Text>
              </Pressable>
            </View>
          ))}
        </View>
      ) : null}

      {images.length ? (
        <View style={styles.feedbackPill}>
          <Text style={styles.feedbackText}>主任务已完成，当前已准备 {images.length} 张参考图。</Text>
        </View>
      ) : null}

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
                <Pressable
                  style={styles.previewDelete}
                  onPress={() => {
                    onDelete(previewImage.id);
                    setPreviewImage(null);
                  }}
                >
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
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    gap: 12,
  },
  header: {
    gap: 4,
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
    fontSize: 24,
    fontWeight: '600',
  },
  uploadDescription: {
    textAlign: 'center',
    maxWidth: 260,
  },
  metaRow: {
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
  metaText: {
    color: colors.textPrimary,
    fontFamily: typography.body,
    fontSize: 12,
    fontWeight: '600',
  },
  thumbRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  thumbWrap: {
    position: 'relative',
  },
  feedbackPill: {
    alignSelf: 'flex-start',
    borderRadius: radii.pill,
    backgroundColor: '#FFF4EB',
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  feedbackText: {
    color: colors.textPrimary,
    fontFamily: typography.body,
    fontSize: 12,
    fontWeight: '600',
  },
  thumbButton: {
    borderRadius: 18,
  },
  thumb: {
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
  previewOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  previewBackdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(27, 24, 22, 0.54)',
  },
  previewCard: {
    width: '86%',
    maxWidth: 420,
    borderRadius: 28,
    backgroundColor: '#FFFCF9',
    padding: 16,
    gap: 12,
  },
  previewActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
  },
  previewDelete: {
    borderRadius: radii.pill,
    paddingHorizontal: 14,
    paddingVertical: 8,
    backgroundColor: '#FBE0DA',
  },
  previewDeleteText: {
    color: colors.accentBurgundy,
    fontFamily: typography.body,
    fontSize: 13,
    fontWeight: '600',
  },
  previewClose: {
    borderRadius: radii.pill,
    paddingHorizontal: 14,
    paddingVertical: 8,
    backgroundColor: '#F2ECE6',
  },
  previewCloseText: {
    color: colors.textPrimary,
    fontFamily: typography.body,
    fontSize: 13,
    fontWeight: '600',
  },
  previewImage: {
    width: '100%',
    aspectRatio: 1,
    borderRadius: 22,
    backgroundColor: colors.bgSoft,
  },
  pressed: {
    opacity: 0.92,
  },
});
