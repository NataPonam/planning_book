import { Link, Stack } from 'expo-router';
import { StyleSheet } from 'react-native';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Ой, страница не найдена!' }} />

      <Link href="/" style={styles.link}></Link>
    </>
  );
}

const styles = StyleSheet.create({
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
