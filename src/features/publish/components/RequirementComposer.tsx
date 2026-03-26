import { Pressable, StyleSheet, Text, View } from 'react-native';

import { BodyText, CardTitle, InputField } from '../../../components/common';
import { colors, radii, typography } from '../../../theme/tokens';

export function RequirementComposer({
  title,
  hint,
  value,
  placeholder,
  onChange,
  onFillExample,
}: {
  title: string;
  hint: string;
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
  onFillExample: () => void;
}) {
  return (
    <View style={styles.block}>
      <View style={styles.header}>
        <CardTitle>{title}</CardTitle>
        <BodyText>{hint}</BodyText>
      </View>

      <View style={styles.inputWrap}>
        <Text style={styles.prompt}>一句话也可以，先把方向说出来。</Text>
        <InputField value={value} onChangeText={onChange} placeholder={placeholder} />
      </View>

      <View style={styles.footer}>
        <Pressable style={({ pressed }) => [styles.chip, pressed ? styles.pressed : null]} onPress={onFillExample}>
          <Text style={styles.chipText}>用示例填入一版</Text>
        </Pressable>
      </View>

      {value.trim() ? (
        <View style={styles.feedbackPill}>
          <Text style={styles.feedbackText}>已写入需求方向，系统会按这段描述先做整理。</Text>
        </View>
      ) : null}
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
  inputWrap: {
    gap: 12,
  },
  prompt: {
    color: colors.accentBurgundy,
    fontFamily: typography.body,
    fontSize: 13,
    fontWeight: '600',
  },
  footer: {
    flexDirection: 'row',
  },
  chip: {
    borderRadius: radii.pill,
    backgroundColor: '#F5E8E8',
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  chipText: {
    color: colors.accentBurgundy,
    fontFamily: typography.body,
    fontSize: 12,
    fontWeight: '600',
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
  pressed: {
    opacity: 0.92,
  },
});
