import { Stack } from 'expo-router';
import { StatusBar, useColorScheme } from 'react-native';
import {useUser} from '../../hooks/useUser'
import GuestOnly from '../../Components/auth/GuessOnly'

export default function RootLayout() {
const {user} = useUser();
console.log(user)
  return(

    <GuestOnly>
    <StatusBar style='auto' />
    <Stack screenOptions={{
     headerShow:false,
	 animation:'slide'
    }}>
      <Stack.Screen  name ='index' options={{title:'Index Page'}} />
	
      <Stack.Screen  name ='Home' options={{title:'Home Page'}} />
    </Stack>
    </GuestOnly>
  )
}
