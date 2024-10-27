import { ButtonComponent } from '@/components/ButtonComponent';
import { router } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';

export default function ProjectsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}> Projects PAGE</Text>
      <ButtonComponent
        onPress={() => router.push('/(tabs)/projects/addProject')}
        text={'Добавить новый проект'}
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
