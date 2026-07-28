import { Link } from 'expo-router';
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const skills = [
  'React',
  'TypeScript',
  'React Native',
  'Expo',
  'TanStack Query',
  'Zustand',
];

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.safeArea} edges={['bottom']}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>FD</Text>
        </View>

        <Text style={styles.name}>Frontend Developer</Text>

        <Text style={styles.role}>
          React → React Native
        </Text>

        <Text style={styles.description}>
          Изучаю мобильную разработку и постепенно переношу
          опыт из React в React Native.
        </Text>

        <View style={styles.skills}>
          {skills.map(skill => (
            <View key={skill} style={styles.skill}>
              <Text style={styles.skillText}>{skill}</Text>
            </View>
          ))}
        </View>

        <Link href="/settings" asChild>
          <Pressable
            style={({ pressed }) => [
              styles.button,
              pressed && styles.buttonPressed,
            ]}
          >
            <Text style={styles.buttonText}>
              Открыть настройки
            </Text>
          </Pressable>
        </Link>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  content: {
    alignItems: 'center',
    padding: 24,
    paddingBottom: 48,
  },
  avatar: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 112,
    height: 112,
    borderRadius: 56,
    backgroundColor: '#171717',
  },
  avatarText: {
    fontSize: 32,
    fontWeight: '800',
    color: '#ffffff',
  },
  name: {
    marginTop: 20,
    fontSize: 27,
    fontWeight: '800',
  },
  role: {
    marginTop: 6,
    fontSize: 16,
    color: '#666666',
  },
  description: {
    marginTop: 18,
    maxWidth: 500,
    fontSize: 15,
    lineHeight: 22,
    textAlign: 'center',
    color: '#555555',
  },
  skills: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 10,
    marginTop: 24,
  },
  skill: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 999,
    backgroundColor: '#eeeeee',
  },
  skillText: {
    fontSize: 14,
    fontWeight: '500',
  },
  button: {
    width: '100%',
    alignItems: 'center',
    marginTop: 32,
    padding: 16,
    borderRadius: 16,
    backgroundColor: '#171717',
  },
  buttonPressed: {
    opacity: 0.7,
  },
  buttonText: {
    fontSize: 15,
    fontWeight: '700',
    color: '#ffffff',
  },
});