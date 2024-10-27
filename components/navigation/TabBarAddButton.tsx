import React, { useEffect } from 'react';
import { Colors } from '@/constants/Colors';
import { StyleSheet, Animated, Pressable, PressableProps, View } from 'react-native';

export default function TabBarAddButton({
  pressed,
  onPress,
  style,
  ...props
}: PressableProps & { pressed: boolean; onPress: (prev: boolean) => void }) {
  const animatedValue = new Animated.Value(0);

  useEffect(() => {
    if (pressed) {
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }).start();
    }
  }, [pressed]);

  const spin = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '45deg'],
  });

  return (
    <Pressable style={style} onPress={onPress} {...props}>
      <View style={styles.container}>
        <Animated.Image
          style={{ ...styles.plus, transform: [{ rotate: spin }] }}
          source={require('../../assets/images/Add.png')}
        ></Animated.Image>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: 50,
    backgroundColor: Colors.accent,
    borderRadius: 25,
    shadowColor: Colors.black,
    elevation: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  plus: {
    width: 25,
    height: 25,
  },
});
