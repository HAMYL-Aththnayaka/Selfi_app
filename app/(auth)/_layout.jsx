import { Stack } from 'expo-router';
import { ActivityIndicator, StatusBar, View } from 'react-native';
import { useUser } from '../../hooks/useUser';

import Home from '../Home';
export default function AuthLayout() {
  const { user, loading } = useUser();

  
  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (user) {
    return <Home/>; 
  }

  return (
    <>
      <StatusBar style="auto" />
      <Stack
        screenOptions={{
          headerShown: false, 
          animation: 'ios',   
        }}
      >
        <Stack.Screen name="Login" options={{ headerShown: false }} />
        <Stack.Screen name="Register" options={{ headerShown: false }} />
      </Stack>
    </>
  );
}