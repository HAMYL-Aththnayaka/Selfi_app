import {StyleSheet} from 'react-native'

import Spacer  from  '../../Components/Spacer';
import ThemedText from '../../Components/ThemedText';
import ThemedView from '../../Components/ThemedView';

	const Create =()=>{
		return(
		<ThemedView  style={styles.container}> 
		
			<ThemedText title={true} style={styles.heading}>
				Add a New Book
			</ThemedText>
			<Spacer />
		</ThemedView>	
		
	)}
		
export default Create;

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