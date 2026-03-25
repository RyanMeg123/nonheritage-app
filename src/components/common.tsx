import { type ReactNode } from 'react';
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  type StyleProp,
  type ViewStyle,
} from 'react-native';

import { colors, radii, typography } from '../theme/tokens';
import type { MainTabId } from '../types';

export function ScreenShell({
  children,
  footer,
}: {
  children: ReactNode;
  footer?: ReactNode;
}) {
  return (
    <View style={styles.screen}>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {children}
      </ScrollView>
      {footer ? <View style={styles.footerWrap}>{footer}</View> : null}
    </View>
  );
}

export function BackChip({ onPress }: { onPress: () => void }) {
  return (
    <Pressable onPress={onPress} style={({ pressed }) => [styles.backChip, pressed && styles.pressed]}>
      <Text style={styles.backChipText}>←</Text>
    </Pressable>
  );
}

export function SectionCard({
  children,
  style,
  bordered = true,
  tone = 'cream',
}: {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
  bordered?: boolean;
  tone?: 'cream' | 'paper' | 'deep' | 'warn';
}) {
  return (
    <View
      style={[
        styles.card,
        styles.creamCard,
        tone === 'paper' ? styles.paperCard : null,
        tone === 'deep' ? styles.deepCard : null,
        tone === 'warn' ? styles.warnCard : null,
        bordered ? styles.borderedCard : null,
        style,
      ]}
    >
      {children}
    </View>
  );
}

export function CardTitle({ children, inverse = false }: { children: ReactNode; inverse?: boolean }) {
  return <Text style={[styles.cardTitle, inverse ? styles.textInverse : null]}>{children}</Text>;
}

export function BodyText({
  children,
  style,
  inverse = false,
}: {
  children: ReactNode;
  style?: any;
  inverse?: boolean;
}) {
  return (
    <Text style={[styles.bodyText, inverse ? styles.bodyTextInverse : null, style]}>{children}</Text>
  );
}

export function DisplayText({
  children,
  inverse = false,
  style,
}: {
  children: ReactNode;
  inverse?: boolean;
  style?: any;
}) {
  return (
    <Text style={[styles.displayText, inverse ? styles.textInverse : null, style]}>{children}</Text>
  );
}

export function PillButton({
  label,
  onPress,
  inverse = false,
  trailing = false,
}: {
  label: string;
  onPress: () => void;
  inverse?: boolean;
  trailing?: boolean;
}) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.pillButton,
        inverse ? styles.pillButtonInverse : styles.pillButtonDefault,
        pressed && styles.pressed,
      ]}
    >
      <View style={styles.buttonContent}>
        <View>
          {trailing ? <BodyText inverse style={styles.buttonEyebrow}>下一步</BodyText> : null}
          <Text style={[styles.buttonLabel, inverse ? styles.textInverse : null]}>{label}</Text>
        </View>
        {trailing ? <Text style={styles.buttonArrow}>→</Text> : null}
      </View>
    </Pressable>
  );
}

export function ToggleChip({
  label,
  active,
  onPress,
}: {
  label: string;
  active?: boolean;
  onPress: () => void;
}) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.toggleChip,
        active ? styles.toggleChipActive : styles.toggleChipIdle,
        pressed && styles.pressed,
      ]}
    >
      <Text style={[styles.toggleChipText, active ? styles.toggleChipTextActive : null]}>{label}</Text>
    </Pressable>
  );
}

export function InputField({
  value,
  onChangeText,
  placeholder,
}: {
  value: string;
  onChangeText: (value: string) => void;
  placeholder: string;
}) {
  return (
    <View style={styles.inputWrap}>
      <TextInput
        multiline
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#9A8674"
        style={styles.input}
        textAlignVertical="top"
      />
    </View>
  );
}

export function MainTabBar({
  tabs,
  activeTab,
  onTabPress,
}: {
  tabs: Array<{ id: string; label: string; glyph: string }>;
  activeTab: MainTabId;
  onTabPress: (tabId: MainTabId) => void;
}) {
  return (
    <View style={styles.tabWrap}>
      {tabs.map((tab, index) => {
        const typedId = tab.id as MainTabId;
        const active = typedId === activeTab;

        return (
          <Pressable key={tab.id} onPress={() => onTabPress(typedId)} style={styles.tabItem}>
            <View
              style={[
                styles.tabIcon,
                active ? styles.tabIconActive : null,
                index === 1 ? styles.tabIconTall : null,
                index === 2 ? styles.tabIconBook : null,
              ]}
            >
              <Text style={[styles.tabGlyph, active ? styles.tabGlyphActive : null]}>{tab.glyph}</Text>
            </View>
            <Text style={[styles.tabLabel, active ? styles.tabLabelActive : null]}>{tab.label}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.bgBase,
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    paddingTop: 14,
    paddingHorizontal: 20,
    paddingBottom: 160,
    gap: 18,
  },
  footerWrap: {
    position: 'absolute',
    left: 16,
    right: 16,
    bottom: 14,
    paddingHorizontal: 14,
    paddingTop: 10,
    paddingBottom: 14,
    borderRadius: 30,
    backgroundColor: 'rgba(255,253,250,0.94)',
    borderWidth: 1,
    borderColor: 'rgba(241,223,210,0.8)',
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 1,
    shadowRadius: 24,
    elevation: 10,
  },
  backChip: {
    borderRadius: radii.pill,
    minWidth: 44,
    minHeight: 44,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.lineSoft,
    backgroundColor: 'rgba(255,255,255,0.92)',
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.8,
    shadowRadius: 18,
    elevation: 6,
  },
  backChipText: {
    color: colors.textPrimary,
    fontFamily: typography.body,
    fontSize: 18,
    fontWeight: '600',
  },
  pressed: {
    opacity: 0.9,
    transform: [{ scale: 0.98 }],
  },
  card: {
    borderRadius: 28,
    padding: 20,
    gap: 12,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.85,
    shadowRadius: 24,
    elevation: 7,
  },
  creamCard: {
    backgroundColor: colors.mutedCream,
  },
  paperCard: {
    backgroundColor: colors.mutedPaper,
  },
  deepCard: {
    backgroundColor: '#F4D8D6',
  },
  warnCard: {
    backgroundColor: colors.warnBg,
  },
  borderedCard: {
    borderWidth: 1,
    borderColor: colors.lineSoft,
  },
  cardTitle: {
    color: colors.textPrimary,
    fontFamily: typography.body,
    fontSize: 16,
    fontWeight: '600',
  },
  displayText: {
    color: colors.textPrimary,
    fontFamily: typography.display,
    fontSize: 30,
    fontWeight: '600',
    letterSpacing: -0.9,
  },
  textInverse: {
    color: colors.textInverse,
  },
  bodyText: {
    color: colors.textSecondary,
    fontFamily: typography.body,
    fontSize: 13,
    lineHeight: 20,
  },
  bodyTextInverse: {
    color: 'rgba(255,253,250,0.82)',
  },
  pillButton: {
    borderRadius: 24,
    paddingVertical: 16,
    paddingHorizontal: 20,
  },
  pillButtonDefault: {
    backgroundColor: colors.surfaceCream,
    borderWidth: 1,
    borderColor: colors.lineSoft,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.7,
    shadowRadius: 20,
    elevation: 5,
  },
  pillButtonInverse: {
    backgroundColor: colors.accentBurgundy,
    shadowColor: 'rgba(216, 150, 142, 0.45)',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 1,
    shadowRadius: 22,
    elevation: 8,
  },
  buttonContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonEyebrow: {
    color: 'rgba(240,228,213,0.64)',
    marginBottom: 4,
  },
  buttonLabel: {
    color: colors.textPrimary,
    fontFamily: typography.body,
    fontSize: 16,
    fontWeight: '600',
  },
  buttonArrow: {
    color: colors.textInverse,
    fontSize: 20,
    fontWeight: '600',
  },
  toggleChip: {
    borderRadius: radii.pill,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  toggleChipIdle: {
    backgroundColor: colors.chipIdle,
    borderWidth: 1,
    borderColor: colors.lineSoft,
  },
  toggleChipActive: {
    backgroundColor: colors.chipActive,
  },
  toggleChipText: {
    color: colors.textPrimary,
    fontFamily: typography.body,
    fontSize: 13,
    fontWeight: '600',
  },
  toggleChipTextActive: {
    color: colors.textPrimary,
  },
  inputWrap: {
    borderRadius: 22,
    padding: 14,
    borderWidth: 1,
    borderColor: colors.lineSoft,
    backgroundColor: colors.surfaceCream,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.55,
    shadowRadius: 18,
    elevation: 4,
  },
  input: {
    minHeight: 110,
    color: colors.textPrimary,
    fontFamily: typography.body,
    fontSize: 14,
    lineHeight: 22,
  },
  tabWrap: {
    flexDirection: 'row',
    gap: 6,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    gap: 6,
    paddingVertical: 6,
  },
  tabIcon: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF4EC',
  },
  tabIconActive: {
    backgroundColor: colors.accentBurgundy,
  },
  tabIconTall: {
    borderRadius: 16,
  },
  tabIconBook: {
    borderRadius: 14,
  },
  tabGlyph: {
    color: colors.textSecondary,
    fontSize: 16,
  },
  tabGlyphActive: {
    color: colors.textInverse,
  },
  tabLabel: {
    color: colors.textSecondary,
    fontFamily: typography.body,
    fontSize: 11,
    fontWeight: '600',
  },
  tabLabelActive: {
    color: colors.textPrimary,
  },
});
