import { View, Text, StyleSheet } from 'react-native';

export default function AddProject() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}> ADD NEW PROJECT PAGE</Text>
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
  },
});
