import { Stack, Redirect } from 'expo-router'; // Import Redirect
import { StatusBar } from 'react-native';
import { useUser } from '../../hooks/useUser';
import { ActivityIndicator, View } from 'react-native';
import Home from '../Home'
export default function AuthLayout() {
  const { user, loading } = useUser(); // Assuming your hook returns a loading state

  // 1. If specific loading state exists, show spinner to prevent flickering
  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  // 2. STOP THE LOOP: If user is already logged in, kick them to the dashboard
  // Do not render the Login/Register stack.
  if (user) {
    return <Home/>; 
  }

  return (
    <>
      <StatusBar style="auto" />
      <Stack
        screenOptions={{
          headerShown: false, // Fixed Typo: was 'headerShow'
          animation: 'ios',   // Standard animation (or 'default')
        }}
      >
        <Stack.Screen name="Login" options={{ headerShown: false }} />
        <Stack.Screen name="Register" options={{ headerShown: false }} />
      </Stack>
    </>
  );
}