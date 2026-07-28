import { SkillChip } from '@/components/SkillChip';
import { StatItem } from '@/components/StatItem';
import { useState } from 'react';
import {
  Alert,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default function HomeScreen() {
  const [isFollowing, setIsFollowing] = useState(false);

  function handleFollowPress() {
    setIsFollowing(currentValue => !currentValue);
  }

  function handleMessagePress() {
    Alert.alert(
      'Сообщение',
      'Здесь позднее откроется экран переписки.',
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.screen}>
      <View style={styles.card}>
        <Image
          source={require('@/assets/images/avatar.jpg')}
          style={styles.avatar}
        />

        <Text style={styles.name}>Зубенко Михаил</Text>

        <Text style={styles.role}>
          React / React Native Developer
        </Text>


        <Text style={styles.description}>
          Санкт-Петербург, Россия - 25 лет опыта в жизни.
        </Text>

        <Text style={styles.description}>
          Изучаю мобильную разработку и собираю первое приложение
          на React Native.
        </Text>

        <View style={styles.stats}>
          <StatItem value="24" label="Проекта" />
          <StatItem value="1 280" label="Подписчиков" />
          <StatItem value="350" label="Подписок" />
        </View>

        <View style={styles.actions}>
          <Pressable
            style={({ pressed }) => [
              styles.button,
              pressed && styles.pressed,
              isFollowing
                ? styles.secondaryButton
                : styles.primaryButton,
            ]}
            onPress={handleFollowPress}
          >
            <Text
              style={[
                styles.buttonText,
                isFollowing
                  ? styles.secondaryButtonText
                  : styles.primaryButtonText,
              ]}
            >
              {isFollowing ? 'Вы подписаны' : 'Подписаться'}
            </Text>
          </Pressable>

          <Pressable
            style={[styles.button, styles.secondaryButton]}
            onPress={handleMessagePress}
          >
            <Text
              style={[
                styles.buttonText,
                styles.secondaryButtonText,
              ]}
            >
              Написать
            </Text>
          </Pressable>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Навыки</Text>

        <View style={styles.skills}>
          <SkillChip title="React" />
          <SkillChip title="TypeScript" />
          <SkillChip title="React Native" />
          <SkillChip title="Expo" />
          <SkillChip title="Node.js" />
          <SkillChip title="Next" />
          <SkillChip title="Redux" />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flexGrow: 1,
    padding: 20,
    paddingTop: 60,
    paddingBottom: 40,
    backgroundColor: '#f4f5f7',
  },
  card: {
    alignItems: 'center',
    padding: 24,
    borderRadius: 24,
    backgroundColor: '#ffffff',
  },
  avatar: {
    width: 112,
    height: 112,
    borderRadius: 56,
    backgroundColor: '#dddddd',
  },
  name: {
    marginTop: 18,
    fontSize: 26,
    fontWeight: '700',
  },
  role: {
    marginTop: 6,
    fontSize: 16,
    color: '#666666',
  },
  description: {
    marginTop: 16,
    fontSize: 15,
    lineHeight: 22,
    textAlign: 'center',
    color: '#444444',
  },
  stats: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 28,
  },
  actions: {
    width: '100%',
    flexDirection: 'row',
    gap: 12,
    marginTop: 28,
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 48,
    paddingHorizontal: 14,
    borderRadius: 14,
  },
  pressed: {
    opacity: 0.7,
  },
  primaryButton: {
    backgroundColor: '#111111',
  },
  secondaryButton: {
    borderWidth: 1,
    borderColor: '#d6d6d6',
    backgroundColor: '#ffffff',
  },
  buttonText: {
    fontSize: 15,
    fontWeight: '600',
  },
  primaryButtonText: {
    color: '#ffffff',
  },
  secondaryButtonText: {
    color: '#111111',
  },
  section: {
    marginTop: 20,
    padding: 20,
    borderRadius: 20,
    backgroundColor: '#ffffff',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
  },
  skills: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginTop: 16,
  },
});