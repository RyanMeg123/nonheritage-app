import { Feather } from '@expo/vector-icons';
import { useMemo, useState } from 'react';
import { Alert, Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

import { BodyText, ScreenShell, SectionCard } from '../components/common';
import { colors, radii, typography } from '../theme/tokens';
import type { AuthLoadingStage } from '../features/auth/hooks/useAuthSession';
import type { PhoneCheckResult } from '../types/auth';

const authFigure = require('../../assets/illustrations/home2.png');

function normalizePhone(value: string) {
  return value.replace(/[^\d]/g, '').slice(0, 11);
}

export function AuthScreen({
  loadingStage,
  onCheckPhone,
  onRegisterLogin,
  onLogin,
  onSuccess,
}: {
  loadingStage: AuthLoadingStage;
  onCheckPhone: (phone: string) => Promise<PhoneCheckResult>;
  onRegisterLogin: (payload: { phone: string; password: string }) => Promise<unknown>;
  onLogin: (payload: { phone: string; password: string }) => Promise<unknown>;
  onSuccess: () => void;
}) {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [phoneCheckResult, setPhoneCheckResult] = useState<PhoneCheckResult | null>(null);

  const submitting =
    loadingStage === 'checking-phone' ||
    loadingStage === 'registering' ||
    loadingStage === 'logging-in';

  const copy = useMemo(() => {
    if (!phoneCheckResult) {
      return {
        eyebrow: '欢迎回来',
        title: '登录后继续定制之旅',
        subtitle: '先输入手机号。首次使用会直接为你创建账号，老用户则继续输入密码登录。',
        primaryLabel: loadingStage === 'checking-phone' ? '正在确认' : '继续',
        passwordLabel: '',
        passwordPlaceholder: '',
      };
    }

    if (phoneCheckResult.nextAction === 'register-login') {
      return {
        eyebrow: '第一次来到这里',
        title: '设置一个登录密码',
        subtitle: '这个手机号还没有使用过。设置密码后会直接注册并进入首页。',
        primaryLabel: loadingStage === 'registering' ? '正在注册' : '注册并登录',
        passwordLabel: '登录密码',
        passwordPlaceholder: '至少 6 位',
      };
    }

    return {
      eyebrow: '欢迎回来',
      title: '输入密码继续',
      subtitle: '这个手机号已经注册过，输入密码后继续进入首页。',
      primaryLabel: loadingStage === 'logging-in' ? '正在登录' : '登录',
      passwordLabel: '登录密码',
      passwordPlaceholder: '请输入密码',
    };
  }, [loadingStage, phoneCheckResult]);

  const handlePhoneChange = (value: string) => {
    const normalized = normalizePhone(value);
    setPhone(normalized);

    if (phoneCheckResult?.phone !== normalized) {
      setPhoneCheckResult(null);
      setPassword('');
    }
  };

  const handlePrimaryPress = async () => {
    if (!phoneCheckResult) {
      if (phone.length !== 11) {
        Alert.alert('手机号不完整', '请先输入 11 位手机号。');
        return;
      }

      try {
        const result = await onCheckPhone(phone);
        setPhoneCheckResult(result);
      } catch (error) {
        const message = error instanceof Error ? error.message : '网络错误，请稍后重试';
        Alert.alert('暂时无法继续', message);
      }
      return;
    }

    if (password.trim().length < 6) {
      Alert.alert('密码太短', '密码至少需要 6 位。');
      return;
    }

    try {
      if (phoneCheckResult.nextAction === 'register-login') {
        await onRegisterLogin({ phone, password });
      } else {
        await onLogin({ phone, password });
      }
      onSuccess();
    } catch (error) {
      const message = error instanceof Error ? error.message : '网络错误，请稍后重试';
      Alert.alert('登录失败', message);
    }
  };

  return (
    <ScreenShell
      footer={
        <View style={styles.footer}>
          <Pressable
            style={({ pressed }) => [styles.primaryButton, pressed && styles.primaryButtonPressed]}
            disabled={submitting}
            onPress={() => {
              void handlePrimaryPress();
            }}
          >
            <View style={styles.primaryButtonInner}>
              <View style={styles.primaryButtonCopy}>
                <BodyText inverse style={styles.buttonEyebrow}>
                  7 天内自动保持登录
                </BodyText>
                <Text style={styles.primaryButtonLabel}>{copy.primaryLabel}</Text>
              </View>
              <Feather name="arrow-right" size={20} color={colors.textInverse} />
            </View>
          </Pressable>
          <BodyText style={styles.footerNote}>
            登录后会自动恢复你的身份信息，后续下单会直接使用真实用户身份。
          </BodyText>
        </View>
      }
    >
      <View style={styles.heroCard}>
        <View style={styles.heroCopy}>
          <Text style={styles.heroEyebrow}>{copy.eyebrow}</Text>
          <Text style={styles.heroTitle}>欢迎进入非遗定制</Text>
          <Text style={styles.heroSubtitle}>{copy.subtitle}</Text>
        </View>
        <View style={styles.heroFigureWrap}>
          <View style={styles.heroHalo} />
          <Image source={authFigure} resizeMode="cover" style={styles.heroFigure} />
        </View>
      </View>

      <SectionCard style={styles.formCard}>
        <Text style={styles.cardTitle}>{copy.title}</Text>
        <BodyText style={styles.cardText}>
          登录后可继续浏览方案、沟通版本与创建订单，7 天内再次打开会自动进入首页。
        </BodyText>

        <View style={styles.fieldGroup}>
          <Text style={styles.fieldLabel}>手机号</Text>
          <TextInput
            keyboardType="number-pad"
            value={phone}
            editable={!submitting}
            onChangeText={handlePhoneChange}
            placeholder="请输入 11 位手机号"
            placeholderTextColor={colors.textSecondary}
            style={styles.input}
          />
        </View>

        {phoneCheckResult ? (
          <View style={styles.fieldGroup}>
            <Text style={styles.fieldLabel}>{copy.passwordLabel}</Text>
            <TextInput
              secureTextEntry
              value={password}
              editable={!submitting}
              onChangeText={setPassword}
              placeholder={copy.passwordPlaceholder}
              placeholderTextColor={colors.textSecondary}
              style={styles.input}
            />
          </View>
        ) : null}
      </SectionCard>
    </ScreenShell>
  );
}

const styles = StyleSheet.create({
  heroCard: {
    borderRadius: 34,
    backgroundColor: '#F4F8FB',
    borderWidth: 1,
    borderColor: colors.lineSoft,
    paddingTop: 28,
    paddingHorizontal: 24,
    paddingBottom: 20,
    overflow: 'hidden',
    minHeight: 292,
    justifyContent: 'space-between',
  },
  heroCopy: {
    maxWidth: '100%',
    paddingRight: 112,
    gap: 10,
    zIndex: 2,
  },
  heroEyebrow: {
    color: colors.accentBurgundy,
    fontFamily: typography.body,
    fontSize: 15,
    fontWeight: '700',
  },
  heroTitle: {
    color: colors.textPrimary,
    fontFamily: typography.body,
    fontSize: 36,
    lineHeight: 44,
    fontWeight: '700',
  },
  heroSubtitle: {
    color: colors.textSecondary,
    fontFamily: typography.body,
    fontSize: 16,
    lineHeight: 25,
  },
  heroFigureWrap: {
    position: 'absolute',
    right: -6,
    bottom: 0,
    width: 160,
    height: 192,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  heroHalo: {
    position: 'absolute',
    top: 8,
    width: 156,
    height: 156,
    borderRadius: 78,
    backgroundColor: 'rgba(247, 238, 231, 0.96)',
  },
  heroFigure: {
    width: 156,
    height: 184,
    borderTopLeftRadius: 68,
    borderTopRightRadius: 68,
  },
  formCard: {
    gap: 18,
  },
  cardTitle: {
    color: colors.textPrimary,
    fontFamily: typography.body,
    fontSize: 24,
    fontWeight: '700',
  },
  cardText: {
    fontSize: 15,
    lineHeight: 23,
  },
  fieldGroup: {
    gap: 10,
  },
  fieldLabel: {
    color: colors.textPrimary,
    fontFamily: typography.body,
    fontSize: 15,
    fontWeight: '600',
  },
  input: {
    minHeight: 58,
    borderRadius: radii.l,
    borderWidth: 1,
    borderColor: colors.lineSoft,
    backgroundColor: colors.surfaceCream,
    paddingHorizontal: 18,
    color: colors.textPrimary,
    fontFamily: typography.body,
    fontSize: 16,
  },
  footer: {
    gap: 12,
  },
  primaryButton: {
    borderRadius: radii.xl,
    backgroundColor: colors.accentBurgundy,
    paddingHorizontal: 24,
    paddingVertical: 20,
    shadowColor: colors.shadow,
    shadowOpacity: 0.26,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 10 },
  },
  primaryButtonPressed: {
    opacity: 0.92,
  },
  primaryButtonInner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 12,
  },
  primaryButtonCopy: {
    gap: 4,
  },
  buttonEyebrow: {
    fontSize: 12,
  },
  primaryButtonLabel: {
    color: colors.textInverse,
    fontFamily: typography.body,
    fontSize: 22,
    fontWeight: '700',
  },
  footerNote: {
    textAlign: 'center',
  },
});
