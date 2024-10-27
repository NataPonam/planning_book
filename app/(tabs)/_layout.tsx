import React from 'react';
import { Tabs } from 'expo-router';
import CustomTabBar from '@/components/navigation/CustomTabBar';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
      tabBar={(props) => <CustomTabBar {...props} />}
    >
      <Tabs.Screen
        name="tasks"
        options={{
          title: 'Мои проекты',
        }}
      />
      <Tabs.Screen
        name="projects"
        options={{
          title: 'Проекты',
        }}
      />
    </Tabs>
  );
}
