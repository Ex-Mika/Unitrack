import { useEffect } from 'react';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { router } from 'expo-router';
import { useFrameworkReady } from '@/hooks/useFrameworkReady';

// Global user state (in a real app, use proper state management)
declare global {
  var currentUser: any;
}

export default function RootLayout() {
  useFrameworkReady();

  useEffect(() => {
    // Check if user is logged in on app start
    const timeoutId = setTimeout(() => {
      if (!global.currentUser) {
        router.replace('/login');
      }
    }, 0);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="login" />
        <Stack.Screen name="admin" />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </>
  );
}
