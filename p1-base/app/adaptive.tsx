import { useMemo } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  useColorScheme,
  useWindowDimensions,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

type Technology = {
  id: number;
  title: string;
  description: string;
  progress: number;
};

const technologies: Technology[] = [
  {
    id: 1,
    title: 'Components',
    description: 'View, Text, Image и Pressable',
    progress: 100,
  },
  {
    id: 2,
    title: 'Layout',
    description: 'Flexbox и адаптивные размеры',
    progress: 80,
  },
  {
    id: 3,
    title: 'Navigation',
    description: 'Expo Router и экраны',
    progress: 0,
  },
  {
    id: 4,
    title: 'Native APIs',
    description: 'Камера, геолокация и уведомления',
    progress: 10,
  },
];

export default function HomeScreen() {
  const { width } = useWindowDimensions();
  const colorScheme = useColorScheme();

  const isDark = colorScheme === 'dark';
  const isWideScreen = width >= 700;

  const theme = useMemo(
    () => ({
      screen: isDark ? '#111214' : '#f3f4f6',
      card: isDark ? '#1c1d20' : '#ffffff',
      primaryText: isDark ? '#f5f5f5' : '#161616',
      secondaryText: isDark ? '#a8a8a8' : '#666666',
      border: isDark ? '#333438' : '#e3e3e3',
      accent: isDark ? '#f5f5f5' : '#161616',
    }),
    [isDark],
  );

  return (
    <SafeAreaView
      style={[
        styles.safeArea,
        { backgroundColor: theme.screen },
      ]}
    >
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View
          style={[
            styles.page,
            isWideScreen && styles.widePage,
          ]}
        >
          <View style={styles.header}>
            <Text
              style={[
                styles.eyebrow,
                { color: theme.secondaryText },
              ]}
            >
              REACT NATIVE ROADMAP
            </Text>

            <Text
              style={[
                styles.title,
                { color: theme.primaryText },
              ]}
            >
              Основы мобильной разработки
            </Text>

            <Text
              style={[
                styles.subtitle,
                { color: theme.secondaryText },
              ]}
            >
              Ширина экрана: {Math.round(width)}
            </Text>
          </View>

          <View style={styles.grid}>
            {technologies.map(technology => (
              <View
                key={technology.id}
                style={[
                  styles.card,
                  isWideScreen && styles.wideCard,
                  {
                    backgroundColor: theme.card,
                    borderColor: theme.border,
                  },
                ]}
              >
                <Text
                  style={[
                    styles.cardTitle,
                    { color: theme.primaryText },
                  ]}
                >
                  {technology.title}
                </Text>

                <Text
                  style={[
                    styles.cardDescription,
                    { color: theme.secondaryText },
                  ]}
                >
                  {technology.description}
                </Text>
                <View style={styles.progressTrack}>
                    <View
                        style={[
                        styles.progressValue,
                        { width: `${technology.progress}%` },
                        ]}
                    />
                </View>
              </View>
            ))}
          </View>

          <View
            style={[
              styles.info,
              {
                backgroundColor: theme.card,
                borderColor: theme.border,
              },
            ]}
          >
            <Text
              style={[
                styles.infoTitle,
                { color: theme.primaryText },
              ]}
            >
              Текущий layout
            </Text>

            <Text
              style={[
                styles.infoText,
                { color: theme.secondaryText },
              ]}
            >
              {isWideScreen
                ? 'Широкий экран: карточки расположены в две колонки.'
                : 'Компактный экран: карточки расположены в одну колонку.'}
            </Text>
          </View>

          
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  content: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingVertical: 24,
  },
  page: {
    width: '100%',
    maxWidth: 600,
    alignSelf: 'center',
  },
  widePage: {
    maxWidth: 900,
  },
  header: {
    marginBottom: 24,
  },
  eyebrow: {
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1.2,
  },
  title: {
    marginTop: 8,
    fontSize: 32,
    lineHeight: 38,
    fontWeight: '800',
  },
  subtitle: {
    marginTop: 10,
    fontSize: 15,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  card: {
    width: '100%',
    minHeight: 130,
    padding: 18,
    borderWidth: 1,
    borderRadius: 20,
  },
  wideCard: {
    flexBasis: '48%',
    flexGrow: 1,
  },
  cardTitle: {
    fontSize: 19,
    fontWeight: '700',
  },
  cardDescription: {
    marginTop: 8,
    fontSize: 15,
    lineHeight: 21,
  },
  info: {
    marginTop: 20,
    padding: 18,
    borderWidth: 1,
    borderRadius: 20,
  },
  infoTitle: {
    fontSize: 17,
    fontWeight: '700',
  },
  infoText: {
    marginTop: 6,
    fontSize: 14,
    lineHeight: 20,
  },
  progressTrack: {
    height: 6,
    marginTop: 16,
    overflow: 'hidden',
    borderRadius: 999,
    backgroundColor: '#dddddd',
  },
  progressValue: {
    height: '100%',
    borderRadius: 999,
    backgroundColor: '#111111',
  },
});