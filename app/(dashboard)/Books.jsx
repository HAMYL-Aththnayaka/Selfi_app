import {StyleSheet} from 'react-native'

import Spacer  from  '../../Components/Spacer';
import ThemedText from '../../Components/ThemedText';
import ThemedView from '../../Components/ThemedView';

	const Books =()=>{
		return(
		<ThemedView  style={styles.container} safe={true}> 
		<Spacer />
			<ThemedText title={true} style={styles.heading}>
				Your Reading List
			</ThemedText>
			
		</ThemedView>	
		
	)}
		
export default Books;

	const styles = StyleSheet.create({
		container:{
			flex:1,
			
			alignItems:'center'
		},
		header:{
			fontWeight:'bold',
			fontSize:18,
			textAlign:'center'
		}
	})