import { Tabs } from 'expo-router';
import React from 'react';
import { Text } from 'react-native';

import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <SafeAreaView style={{ flex: 1 }}>

    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarLabelPosition: 'below-icon',
        tabBarStyle: {
          top: 0,
          position: 'absolute',

        }
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <Text>🏠</Text>
          ),
        }}
      />
      <Tabs.Screen
        name="food"
        options={{
          title: 'Food',
          tabBarIcon: ({ color, focused }) => (
            <Text>🍒</Text>
          ),
        }}
      />
      <Tabs.Screen
        name="logging"
        options={{
          title: 'Logging',
          tabBarIcon: ({ color, focused }) => (
            <Text>📝</Text>
          ),
        }}
      />
      <Tabs.Screen
        name="recommendations"
        options={{
          title: 'Improve',
          tabBarIcon: ({ color, focused }) => (
            <Text>✏️</Text>
          ),
        }}
      />
    </Tabs>
    </SafeAreaView>
  );
}
