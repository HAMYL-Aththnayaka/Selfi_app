import { useRouter } from 'expo-router';
import { Keyboard, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native';
import { useBooks } from '../../hooks/useBooks';

import { useState } from 'react';



import Spacer from '../../Components/Spacer';
import ThemedButton from '../../Components/ThemedButton';
import ThemedText from '../../Components/ThemedText';
import ThemedTextInput from '../../Components/ThemedTextInput';
import ThemedView from '../../Components/ThemedView';



	const Create =()=>{

		const [title , setTitle] = useState('');
		const [author , setAuthor] = useState('');
		const [description , setDescription] = useState('');
		const [loading ,setLoading] = useState(false);


		const {createBook } = useBooks();
		const router = useRouter();

		const handleSubmit =async()=>{
				if(!title.trim() || !author.trim() || !description.trim()) return
					setLoading(true)
				await createBook({title , author , description})
				
		
				setTitle('')
				setAuthor('')
				setDescription('')

				
				router.replace('/books');
				setLoading(false)
		}


		return(
		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
			
			<ThemedView style={styles.container}>
				<ThemedText title={true} style={styles.heading}>
					Add a New Book
				</ThemedText>
				<Spacer />

				<ThemedTextInput 
					style={styles.input}
					placeholder='Book title'
					value={title}
					onChangeText={setTitle}
				/>
				<Spacer />

				<ThemedTextInput 
					style={styles.input}
					placeholder='author'
					value={title}
					onChangeText={setAuthor}
				/>
				<Spacer />

				<ThemedTextInput 
					style={styles.multiline}
					placeholder='bookDescription'
					value={title}
					onChangeText={setDescription}
				/>
				<Spacer />

				<ThemedButton onPress={handleSubmit} disabled={loading}>
					<Text style={{color :'$fff'}}>
						{loading ? 'saving... ' : 'Create Book'}	
					</Text>
				</ThemedButton>

			</ThemedView>

		</TouchableWithoutFeedback>	
		
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
		},
		input:{
			padding:20,
			borderRadius:6,
			alignSelf:'streched',
			marginHorizontal:40,
		},
		multiline:{
			padding:20,
			borderRadius:6,
			minHeigth:100,
			alignSelf:'streched',
			marginHorizontal:40
		}
	})