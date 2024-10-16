import EditIcon from '@/assets/icons/EditIcon';
import PlusIcon from '@/assets/icons/PlusIcon';
import { Colors, Fonts } from '@/constants/Colors';
import { useState } from 'react';
import { BlurView } from 'expo-blur';
import { Text, StyleSheet, Pressable, View, Dimensions } from 'react-native';
import {
  Directions,
  FlingGestureHandler,
  GestureHandlerStateChangeEvent,
  State,
} from 'react-native-gesture-handler';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { router } from 'expo-router';

export default function AddScreen({
  setPressed,
}: {
  pressed: boolean;
  setPressed: (prev: boolean) => void;
}) {
  const [visible, setVisible] = useState(true);
  const position = useSharedValue(0);
  const onFling = ({ nativeEvent }: GestureHandlerStateChangeEvent) => {
    if (nativeEvent.state === State.ACTIVE) {
      position.value = withTiming(position.value + 300, { duration: 100 });
    }
    if (nativeEvent.state === State.END) {
      setVisible(false);
      setPressed(false);
    }
  };

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: position.value }],
  }));

  return (
    <FlingGestureHandler direction={Directions.DOWN} onHandlerStateChange={onFling}>
      <View>
        {visible && (
          <BlurView
            intensity={20}
            tint="dark"
            style={styles.main}
            blurReductionFactor={5}
            experimentalBlurMethod="dimezisBlurView"
          />
        )}
        <Animated.View style={[styles.container, animatedStyle]}>
          <View style={styles.line} />
          <Pressable style={styles.button} onPress={() => router.push('/(tabs)/tasks/addTask')}>
            <EditIcon />
            <Text style={styles.text}>Добавить задачу</Text>
          </Pressable>
          <Pressable
            style={styles.button}
            onPress={() => router.push('/(tabs)/projects/addProject')}
          >
            <PlusIcon />
            <Text style={styles.text}>Добавить проект</Text>
          </Pressable>
        </Animated.View>
      </View>
    </FlingGestureHandler>
  );
}

const styles = StyleSheet.create({
  main: {
    position: 'absolute',
    bottom: 0,
    height: Dimensions.get('window').height,
    width: '100%',
  },
  container: {
    position: 'absolute',
    bottom: 0,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    height: 250,
    width: '100%',
    backgroundColor: Colors.white,
    paddingHorizontal: 24,
    paddingTop: 14,
    paddingBottom: 30,
    zIndex: 1,
  },
  line: {
    alignSelf: 'center',
    width: 42,
    height: 4,
    borderRadius: 6,
    backgroundColor: Colors.stroke,
    marginBottom: 25,
  },
  button: {
    height: 56,
    borderColor: Colors.stroke,
    borderWidth: 1,
    borderRadius: 12,
    borderStyle: 'solid',
    paddingHorizontal: 20,
    paddingVertical: 16,
    gap: 12,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  text: {
    fontFamily: Fonts.regular,
    fontSize: 16,
    fontStyle: 'normal',
    color: Colors.darkText,
  },
});
