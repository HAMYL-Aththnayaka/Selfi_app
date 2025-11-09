import {Pressable, StyleSheet} from 'react-native';
import {Colors} from '../Constants/Colors'

function ThemedButtons({style , ...props}){
		
		return(
			<Pressable
				style ={({pressed})=>{
					styles.btn , pressed && styles.pressed,
					style
				}} {...props} />
		)
};

const styles = StyleSheet.create({
	btn:{
		backgroundColor:Colors.primary,
		padding:15,
		borderRadius:5,
		marginVerticle:10
	},
	pressed:{
		opacity:0.8
	}
})

export default ThemedButtons;
