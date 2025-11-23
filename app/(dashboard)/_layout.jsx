import {Tabs} from 'expo-router';
import {useColorScheme} from 'react-native'
import {Colors} from '../../Constants/Colors.js'
import {Ionicons} from '@expo/vector-icons'
import UserOnly from '../../Components/auth/UserOnly'
	const DashboardLayout=()=>{
		const colorScheme = useColorScheme();
		const theme = Colors[colorScheme] ?? Colors.light;
		
		return(<UserOnly>
				<Tabs 
			screenOptions ={{headerShown:false,
							tabBarStyle:{
										 backgroundColor:theme.navBackground,
										 padding:10,
										 height:90
							},
							tabBarActiveTintColor:theme.iconColourFocused,
							tabBarInactiveTintColor:theme.iconColour}}>
					
					<Tabs.Screen 
								name='Profile' 
								options={{title:'PROFILE',
										  tabBarIcon:({focused})=>(
											  <Ionicons
														size={24}
														name={focused ? 'person':'person-outline'}
														color={focused ? theme.iconColourFocused : theme.iconColour}
														/>
										  )}}
					/>
					<Tabs.Screen 
								name='Books' 
								options={{title:'BOOKS',
										  tabBarIcon:({focused})=>(
											  <Ionicons
														size={24}
														name={focused ? 'book':'book-outline'}
														color={focused ? theme.iconColourFocused : theme.iconColour}
														/>)}}
					/>
					<Tabs.Screen 
								name='Create' 
								options={{title:'CREATE',
										  tabBarIcon:({focused})=>(
											  <Ionicons
														size={24}
														name={focused ? 'create':'create-outline'}
														color={focused ? theme.iconColourFocused : theme.iconColour}
														/>)}}
					/>
				

					<Tabs.Screen 
								name='books/[]id]' 
								options={{href:null}}
					/>
					</Tabs>

			</UserOnly>)
	}
export default DashboardLayout