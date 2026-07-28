import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: 'Главная',
        }}
      />

      <Stack.Screen
        name="profile"
        options={{
          title: 'Профиль',
        }}
      />

      <Stack.Screen
        name="settings"
        options={{
          title: 'Настройки',
        }}
      />
    </Stack>
  );
}