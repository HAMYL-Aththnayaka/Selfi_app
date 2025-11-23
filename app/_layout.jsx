import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'react-native';
import { Colors } from '../Constants/Colors.js';



//useCOntec
import { UserProvider } from '../context/userContext';
import { BookProvider } from '../context/BooksContext.jsx';



export default function RootLayout() {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  return (
    <UserProvider>
      <BookProvider>
      <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: theme.navBackground },
          headerTintColor: theme.title,
        }}
      >
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="(dashboard)" options={{ headerShown: false }} />
        <Stack.Screen name="index" options={{ title: 'Index Page' }} />
        <Stack.Screen name="Home" options={{ title: 'Home Page' }} />
      </Stack>

      </BookProvider>
      
    </UserProvider>
  );
}
