import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Fonts, Colors } from '@/constants/Colors';
import { InputComponent } from './InputComponet';

export default function Form() {
  return (
    <View style={styles.container}>
      <InputComponent placeholder="Ваше имя" />
      <InputComponent placeholder="Ваша филия" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    gap: 30,
  },
});
