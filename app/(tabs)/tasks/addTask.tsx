import { Colors } from '@/constants/Colors';
import { View, Text, StyleSheet } from 'react-native';

export default function AddTask() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}> ADD NEW TASK PAGE</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
  },
  text: {
    fontSize: 24,
    color: Colors.darkText,
  },
});
