import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Fonts, Colors } from '@/constants/Colors';
import { ButtonComponent } from '@/components/ButtonComponent';
import Form from '@/components/Form';

export default function Account() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Добро пожаловать!</Text>
      <Text style={styles.descr}>Чтобы продолжить, заполните начальную информацию о вас?</Text>
      <Form />
      <ButtonComponent onPress={() => console.log('pressed')} text="Начать" style={styles.button} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingHorizontal: 24,
    paddingTop: 32,
  },
  title: {
    fontFamily: Fonts.semibold,
    fontSize: 25,
    fontWeight: '600',
    fontStyle: 'normal',
    color: Colors.darkText,
  },
  descr: {
    fontFamily: Fonts.regular,
    fontSize: 14,
    fontWeight: '400',
    fontStyle: 'normal',
    lineHeight: 20,
    color: Colors.lightText,
    paddingBottom: 40,
  },
  button: {
    marginTop: 60,
  },
});
