import { Children, type ReactNode } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { BodyText, CardTitle, SectionCard } from '../../../components/common';
import { colors, typography } from '../../../theme/tokens';

export function PublishOptionalSection({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: ReactNode;
}) {
  const items = Children.toArray(children).filter(Boolean);

  return (
    <SectionCard style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.eyebrow}>可选补充</Text>
        <CardTitle>{title}</CardTitle>
        <BodyText>{description}</BodyText>
      </View>

      <View style={styles.stack}>
        {items.map((item, index) => (
          <View key={index} style={styles.itemWrap}>
            {index > 0 ? <View style={styles.divider} /> : null}
            {item}
          </View>
        ))}
      </View>
    </SectionCard>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFCFA',
    borderColor: 'rgba(241,223,210,0.75)',
    shadowOpacity: 0.45,
    elevation: 4,
  },
  header: {
    gap: 4,
  },
  eyebrow: {
    color: colors.textSecondary,
    fontFamily: typography.body,
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  stack: {
    gap: 18,
  },
  itemWrap: {
    gap: 18,
  },
  divider: {
    height: 1,
    backgroundColor: 'rgba(241,223,210,0.9)',
  },
});
