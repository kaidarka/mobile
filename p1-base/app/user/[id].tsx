import { Stack, useLocalSearchParams } from 'expo-router';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function UserScreen() {
  const { id } = useLocalSearchParams<{
    id: string;
  }>();

  return (
    <SafeAreaView style={styles.safeArea} edges={['bottom']}>
      <Stack.Screen
        options={{
          title: `Пользователь ${id}`,
        }}
      />

      <View style={styles.content}>
        <Text style={styles.label}>
          Идентификатор пользователя
        </Text>

        <Text style={styles.id}>
          {id}
        </Text>

        <Text style={styles.description}>
          Позднее по этому идентификатору мы сможем запросить
          пользователя с сервера.
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  label: {
    fontSize: 15,
    color: '#777777',
  },
  id: {
    marginTop: 8,
    fontSize: 48,
    fontWeight: '800',
  },
  description: {
    marginTop: 18,
    maxWidth: 400,
    fontSize: 15,
    lineHeight: 22,
    textAlign: 'center',
    color: '#666666',
  },
});