import { Stack } from 'expo-router';
import { StatusBar, useColorScheme } from 'react-native';


export default function RootLayout() {

  return(
    <>
    <StatusBar style='auto' />
    <Stack screenOptions={{
     headerShow:false,
	 animation:'slide'
    }}>
      <Stack.Screen  name ='index' options={{title:'Index Page'}} />
	
      <Stack.Screen  name ='Home' options={{title:'Home Page'}} />
    </Stack>
    </>
  )
}
