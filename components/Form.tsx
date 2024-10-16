import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Colors } from '@/constants/Colors';
import { InputComponent } from './InputComponet';
import { useDispatch } from 'react-redux';
import { setName, setSurName } from '@/slices/UserSlice/UserSlice';
import { ButtonComponent } from './ButtonComponent';
import { router } from 'expo-router';

export default function Form() {
  const dispatch = useDispatch();

  const [userName, setUserName] = useState<string | undefined>(undefined);
  const [userSurname, setUserSurname] = useState<string | undefined>(undefined);

  const submit = () => {
    if (!userName || !userSurname) {
      console.log('не введен пользователь');
    } else {
      dispatch(setName(userName));
      dispatch(setSurName(userSurname));
      router.push('/(tabs)/tasks');
    }
  };
  return (
    <View style={styles.container}>
      <InputComponent placeholder="Ваше имя" onChangeText={setUserName} />
      <InputComponent placeholder="Ваша фамилия" onChangeText={setUserSurname} />
      <ButtonComponent onPress={submit} text="Начать" style={styles.button} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    gap: 30,
  },
  button: {
    marginTop: 20,
  },
});
