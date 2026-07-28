import { Link } from 'expo-router';
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea} edges={['bottom']}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.eyebrow}>МОБИЛЬНАЯ РАЗРАБОТКА</Text>

        <Text style={styles.title}>
          React Native Learning
        </Text>

        <Text style={styles.description}>
          Учебное приложение для изучения навигации,
          компонентов и мобильных API.
        </Text>

        <View style={styles.navigation}>
          <Link href="/profile" asChild>
            <Pressable
              style={({ pressed }) => [
                styles.card,
                pressed && styles.pressed,
              ]}
            >
              <Text style={styles.cardTitle}>Профиль</Text>

              <Text style={styles.cardDescription}>
                Открыть профиль разработчика
              </Text>
            </Pressable>
          </Link>

          <Link href="/settings" asChild>
            <Pressable
              style={({ pressed }) => [
                styles.card,
                pressed && styles.pressed,
              ]}
            >
              <Text style={styles.cardTitle}>Настройки</Text>

              <Text style={styles.cardDescription}>
                Настроить учебное приложение
              </Text>
            </Pressable>
          </Link>

          <Link
            href={{
              pathname: '/user/[id]',
              params: {
                id: '42',
              },
            }}
            asChild
          >
            <Pressable
              style={({ pressed }) => [
                styles.card,
                pressed && styles.pressed,
              ]}
            >
              <Text style={styles.cardTitle}>
                Пользователь №42
              </Text>

              <Text style={styles.cardDescription}>
                Пример динамического маршрута
              </Text>
            </Pressable>
          </Link>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f4f5f7',
  },
  content: {
    flexGrow: 1,
    padding: 20,
    paddingTop: 32,
  },
  eyebrow: {
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1.2,
    color: '#777777',
  },
  title: {
    marginTop: 8,
    fontSize: 32,
    fontWeight: '800',
    color: '#171717',
  },
  description: {
    marginTop: 12,
    maxWidth: 500,
    fontSize: 16,
    lineHeight: 23,
    color: '#606060',
  },
  navigation: {
    gap: 14,
    marginTop: 32,
  },
  card: {
    padding: 20,
    borderWidth: 1,
    borderColor: '#e1e1e1',
    borderRadius: 20,
    backgroundColor: '#ffffff',
  },
  pressed: {
    opacity: 0.65,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#171717',
  },
  cardDescription: {
    marginTop: 6,
    fontSize: 15,
    lineHeight: 21,
    color: '#666666',
  },
});