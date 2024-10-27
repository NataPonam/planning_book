import React, { useState } from 'react';
import { StyleSheet, View, Pressable, Dimensions } from 'react-native';
import { Colors } from '@/constants/Colors';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs/lib/typescript/src/types';
import HomeIcon from '@/assets/icons/HomeIcon';
import FolderIcon from '@/assets/icons/FolderIcon';
import TabBarAddButton from './TabBarAddButton';
import AddScreen from './AddScreen';

export default function CustomTabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  const [pressed, setPressed] = useState<boolean>(false);

  return (
    <View>
      <View style={styles.container}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const isFocused = state.index === index;
          const strokeColor = isFocused ? Colors.accent : Colors.lightText;
          const fillColor = isFocused ? Colors.accent : 'none';
          const innerStroke = isFocused ? Colors.white : Colors.lightText;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
            }
          };

          return (
            <Pressable key={options.title} accessibilityRole="button" onPress={onPress}>
              <View>
                {route.name === 'tasks' ? (
                  <HomeIcon strokeColor={strokeColor} fillColor={fillColor} />
                ) : (
                  <FolderIcon
                    strokeColor={strokeColor}
                    fillColor={fillColor}
                    innerStroke={innerStroke}
                  />
                )}
              </View>
            </Pressable>
          );
        })}
      </View>
      <TabBarAddButton
        onPress={() => setPressed(!pressed)}
        pressed={pressed}
        style={styles.addButton}
      />
      {pressed && <AddScreen pressed={pressed} setPressed={setPressed} />}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingVertical: 16,
    backgroundColor: Colors.white,
  },
  addButton: {
    position: 'absolute',
    top: 10,
    right: Dimensions.get('window').width / 2 - 25,
    zIndex: 5,
  },
});
