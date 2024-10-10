import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ImageBackground,
  Dimensions,
  Pressable,
} from 'react-native';
import { Fonts, Colors } from '@/constants/Colors';
import { router } from 'expo-router';

export default function Main() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <ImageBackground
          source={require('../assets/images/backGround.png')}
          resizeMode="stretch"
          style={styles.background}
        >
          <Image source={require('../assets/images/todo.png')} style={styles.image} />
        </ImageBackground>
      </View>
      <View style={styles.footer}>
        <Text style={styles.subtitle}>Мой трекер</Text>
        <Text style={styles.title}>
          Управляй{'\n'}
          <Text style={[styles.title, styles.accenttitle]}>Задачами</Text> и {'\n'}достигай{'\n'}
          результата
        </Text>
      </View>
      <Pressable style={styles.button} onPress={() => router.navigate('/accaunt')}>
        <Image source={require('../assets/images/Arrow.png')} style={styles.buttonImage} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: Dimensions.get('window').height / 2,
  },
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  image: {
    height: 249,
    width: 249,
  },
  footer: {
    flex: 1,
    alignItems: 'flex-start',
    paddingLeft: 30,
    paddingTop: 60,
  },
  title: {
    fontSize: 35,
    fontFamily: Fonts.regular,
    color: Colors.darkText,
    fontWeight: '500',
    fontStyle: 'normal',
    lineHeight: 40,
  },
  accenttitle: {
    fontFamily: Fonts.semibold,
    color: Colors.accent,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '500',
    fontStyle: 'normal',
    fontFamily: Fonts.regular,
    color: Colors.accent,
    paddingBottom: 10,
  },
  button: {
    position: 'absolute',
    bottom: -50,
    right: -50,
    width: 170,
    height: 170,
    borderRadius: 100,
    backgroundColor: Colors.accent,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonImage: {
    width: 24,
    height: 24,
  },
});
