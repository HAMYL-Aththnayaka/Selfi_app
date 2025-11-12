import {ActivityIndicator , useColorScheme} from 'react-native';
import {Colors} from '../Constants/Colors'


import ThemedView from './ThemedView'
const ThemeLoader =()=>{
	const colorScheme = useColorScheme();
	const theme = Colors[colorScheme] ?? Colors.light;

	return(
			<ThemedView style={{
				flex:1,
				justifyContent:'center',
				alignItem:'center'
			}}>
				<ActivityIndicator size='large' color={theme.text}/>
			</ThemedView>
)}
export default ThemeLoader;