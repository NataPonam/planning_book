import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { Colors, Fonts } from '@/constants/Colors';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import { store } from '@/store';
import { Provider } from 'react-redux';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const insets = useSafeAreaInsets();
  const [loaded] = useFonts({
    'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Medium': require('../assets/fonts/Poppins-Medium.ttf'),
    'Poppins-SemiBold': require('../assets/fonts/Poppins-SemiBold.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <GestureHandlerRootView>
        <Provider store={store}>
          <Stack
            screenOptions={{
              headerShown: false,
              headerTitleAlign: 'center',
              headerShadowVisible: false,
              headerTitleStyle: {
                color: Colors.darkText,
                fontFamily: Fonts.regular,
                fontSize: 18,
              },
              contentStyle: {
                paddingTop: insets.top,
              },
            }}
          >
            <Stack.Screen name="index" options={{ statusBarColor: Colors.accent }} />
            <Stack.Screen
              name="accaunt"
              options={{
                headerShown: true,
                headerTitle: 'Создание аккаунта',
                headerBackVisible: false,
                contentStyle: {
                  paddingTop: 0,
                },
              }}
            />
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="+not-found" />
          </Stack>
        </Provider>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}
