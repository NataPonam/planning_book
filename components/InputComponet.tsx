import React, { useState } from 'react';
import { StyleSheet, View, TextInput, TextInputProps } from 'react-native';
import { Colors } from '@/constants/Colors';

export function InputComponent({ style, ...props }: TextInputProps) {
  const [text, onChangeText] = useState('');
  const [active, setActive] = useState(false);

  return (
    <View style={style}>
      <TextInput
        onFocus={() => setActive(true)}
        onBlur={() => setActive(false)}
        style={{ ...styles.input, borderColor: active ? Colors.accent : Colors.stroke }}
        onChangeText={onChangeText}
        value={text}
        {...props}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  input: {
    width: '100%',
    height: 60,
    borderRadius: 16,
    backgroundColor: Colors.white,
    borderStyle: 'solid',
    borderWidth: 1,
    paddingLeft: 20,
  },
});
