/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Colors, Fonts } from '@/constants/Colors';
import { Pressable, Text, StyleSheet, PressableProps, View } from 'react-native';

export function ButtonComponent({
  text,
  onPress,
  style,
  ...props
}: PressableProps & { text: string; onPress: () => void }) {
  return (
    <Pressable onPress={onPress} style={style} {...props}>
      <View style={styles.container}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 48,
    borderRadius: 16,
    backgroundColor: Colors.accent,
    shadowColor: Colors.shadow,
    shadowOpacity: 1,
    shadowRadius: 16,
    elevation: 24,
  },
  text: {
    color: Colors.white,
    fontSize: 16,
    fontStyle: 'normal',
    textAlign: 'center',
    fontFamily: Fonts.regular,
  },
});
