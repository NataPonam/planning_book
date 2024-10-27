import { ButtonComponent } from '@/components/ButtonComponent';
import { router } from 'expo-router';
import { Text, StyleSheet, View } from 'react-native';

export default function TasksScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}> TASK PAGE MAIN</Text>
      <ButtonComponent
        onPress={() => router.push('/(tabs)/tasks/addTask')}
        text={'Добавить новую задачу'}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    gap: 8,
  },
  text: {
    fontSize: 24,
  },
});
