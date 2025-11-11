import {StyleSheet,Text} from 'react-native'
import {useUser} from '../../hooks/useUser'

import Spacer  from  '../../Components/Spacer';
import ThemedText from '../../Components/ThemedText';
import ThemedView from '../../Components/ThemedView';
import ThemedButton from '../../Components/ThemedButton';

	const Profile =()=>{
		const {logout,user,authCheck} = useUser();

		return(
		<ThemedView  style={styles.container}> 
		
			<ThemedText title={true} style={styles.header}>
				{authCheck && user ? user.email : 'Please login'} 
			</ThemedText>
			<Spacer />
			
			<ThemedText> Time to start reading some books ...</ThemedText>
			
			<ThemedButton onPress={logout}>
				<Text style={{color:'#f2f2f2'}}> logout</Text>
			</ThemedButton>

		</ThemedView>	
		
		)}
		
export default Profile;

	const styles = StyleSheet.create({
		container:{
			flex:1,
			justifyContent:'center',
			alignItems:'center'
		},
		header:{
			fontWeight:'bold',
			fontSize:18,
			textAlign:'center'
		}
	})