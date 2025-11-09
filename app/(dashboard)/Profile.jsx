import {StyleSheet} from 'react-native'

import Spacer  from  '../../Components/Spacer';
import ThemedText from '../../Components/ThemedText';
import ThemedView from '../../Components/ThemedView';

	const Profile =()=>{
		return(
		<ThemedView  style={styles.container}> 
		
			<ThemedText title={true} style={styles.header}>
				Your Email
			</ThemedText>
			<Spacer />
			
			<ThemedText> Time to start reading some books ...</ThemedText>
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