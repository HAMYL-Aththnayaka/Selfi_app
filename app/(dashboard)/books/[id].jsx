import {StyleSheet ,Text , View} from 'react-native'
import {useLocalSearchParams} from 'expo-router'
import React ,{useState, useEffect } from 'react'
import {useBooks } from '../../../hooks/useBooks'
import {useRouter} from 'expo-router'
import {Colors} from '../../../Constants/Colors'

import Spacer  from  '../../../Components/Spacer';
import ThemedButton from '../../../Components/ThemedButton';
import ThemedText from '../../../Components/ThemedText';
import ThemedView from '../../../Components/ThemedView';
import ThemedCard from '../../../Components/ThemedCard'
import ThemedLoader  from '../../../Components/ThemedLoader'


const BooksDetaials =()=>{
	const [book , setBook] =useState(null);
	const { id } = useLocalSearchParams();
	const {fetchBookById ,deleteBook} = useBooks();
	const router = useRouter();


	const handleDelete=async()=>{
		await deleteBook(id);
		setBook(null);
		router.replace('/Books')
	}
	useEffect(()=>{
		async function loadBook(){
			const bookData = await fetchBookById(id)
			setBook(bookData)
		}
		loadBook();
	},[id])

	if(!book){
		return(
				<ThemedView safe={true} style={styles.container}>
					<ThemedLoader />
				</ThemedView>
			)
	}

	return (
		<ThemedView
			safe={true}
			style={styles.container} >
				<ThemedCard style={styles.card}>
				<ThemedText>written By : {book.author}</ThemedText>
				<Spacer />

				<ThemedText title={true}> Book description </ThemedText>
				<Spacer height={10} />

				<ThemedText>{book.descripion}</ThemedText>


				</ThemedCard>
				<ThemedButton style={styles.delete} onPress={handleDelete}>
					<Text style={{color:'#fff',textAlign:'center'}}>Delete Book</Text>
				</ThemedButton>
		</ThemedView>
		)
}

export default BooksDetaials;
const styles = StyleSheet.create({
	container:{
		felx:1,
		alignItems:'stretch'
	},
	title:{
		fontSize:22,
		marginVertical:10
	},
	card:{
		margin:20
	},
	delete:{
		marginTop:40,
		backgroundColor:Colors.warning,
		width:200,
		alignSelf:'center'
	}
})