 import {createContext , useState} from 'react'
 import {databases} from '../lib/appwrite'
 import {ID,Permission,Role} from 'appwrite'
 import {useUser} from '../hooks/useUser'



    const Database_ID = "6914bd40002be2bde2c0"
    const Collection_ID ="books"

 export const BookContext = createContext();

 export function BookProvider ({children}){
 	const {book , setBooks} =useState([]);\
 	const {user} =useUser();

 	async function fetchBook(){
 		try{

 		}catch(error){
 			console.log(error.message)
 		}
 	}

 	async function fetchBookById(id){
 		try{

 		}catch(error){
 			console.log(error.message)
 		}
 	}

 	async function createBook(data){
 		try{

 				const newBook = await databases.createDocument(
 					Database_ID,
 					Collection_ID,
 					ID.unique(),
 					{...data,userId: user.$id },
 					{
 						Permission.read(Role(user.$id)),
 						Permission.update(Role(user.$id)),
 						Permission.delete(Role(user.$id))
 					})
 		}catch(error){
 			console.log(error.message)
 		}
	 }

	async function deleteBook(id) {
		try{

		}catch(error){
			console.log(error.message)
		}
	}

return(
	<BookContext.Provider
	 value={{   books ,
	 			fetchBook ,  
	 			fetchBookById ,
	 			createBook, 
	 			deleteBook}}>

	 			{children}

	</BookContext.Provider>	

		)


 }