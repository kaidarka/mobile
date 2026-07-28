import { useState } from 'react';
import {
  Pressable,
  StyleSheet,
  Switch,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SettingsScreen() {
  const [notificationsEnabled, setNotificationsEnabled] =
    useState(true);

  const [darkThemeEnabled, setDarkThemeEnabled] =
    useState(false);

  return (
    <SafeAreaView style={styles.safeArea} edges={['bottom']}>
      <View style={styles.content}>
        <Text style={styles.title}>
          Настройки приложения
        </Text>

        <Text style={styles.description}>
          Пока изменения хранятся только в локальном состоянии
          экрана.
        </Text>

        <View style={styles.settings}>
          <View style={styles.setting}>
            <View style={styles.settingContent}>
              <Text style={styles.settingTitle}>
                Уведомления
              </Text>

              <Text style={styles.settingDescription}>
                Получать учебные напоминания
              </Text>
            </View>

            <Switch
              value={notificationsEnabled}
              onValueChange={setNotificationsEnabled}
            />
          </View>

          <View style={styles.divider} />

          <View style={styles.setting}>
            <View style={styles.settingContent}>
              <Text style={styles.settingTitle}>
                Тёмная тема
              </Text>

              <Text style={styles.settingDescription}>
                Пока только демонстрационный переключатель
              </Text>
            </View>

            <Switch
              value={darkThemeEnabled}
              onValueChange={setDarkThemeEnabled}
            />
          </View>
        </View>

        <Pressable
          style={({ pressed }) => [
            styles.resetButton,
            pressed && styles.pressed,
          ]}
          onPress={() => {
            setNotificationsEnabled(false);
            setDarkThemeEnabled(false);
          }}
        >
          <Text style={styles.resetButtonText}>
            Сбросить настройки
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f4f5f7',
  },
  content: {
    flex: 1,
    padding: 20,
    paddingTop: 32,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: '#171717',
  },
  description: {
    marginTop: 10,
    fontSize: 15,
    lineHeight: 22,
    color: '#666666',
  },
  settings: {
    marginTop: 28,
    paddingHorizontal: 18,
    borderRadius: 20,
    backgroundColor: '#ffffff',
  },
  setting: {
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 88,
  },
  settingContent: {
    flex: 1,
    paddingRight: 16,
  },
  settingTitle: {
    fontSize: 17,
    fontWeight: '700',
  },
  settingDescription: {
    marginTop: 4,
    fontSize: 14,
    color: '#777777',
  },
  divider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#dddddd',
  },
  resetButton: {
    alignItems: 'center',
    marginTop: 20,
    padding: 15,
    borderRadius: 16,
    backgroundColor: '#ffffff',
  },
  pressed: {
    opacity: 0.65,
  },
  resetButtonText: {
    fontSize: 15,
    fontWeight: '700',
    color: '#c12626',
  },
});