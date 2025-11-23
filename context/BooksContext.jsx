import { createContext, useState, useEffect } from 'react';
import { databases, client } from '../lib/appwrite';

import { ID, Permission, Role, Query } from 'react-native-appwrite'; 
import { useUser } from '../hooks/useUser';

const Database_ID = "6914bd40002be2bde2c0";
const Collection_ID = "books"; !

export const BookContext = createContext();

export function BookProvider({ children }) {
    const [books, setBook] = useState([]);
    const { user } = useUser();

    async function fetchBook() {
        try {
            
            const response = await databases.listDocuments(
                Database_ID,
                Collection_ID,
                [
                    Query.equal('userId', user.$id)
                ]
            );
           
            setBook(response.documents); 
        } catch (error) {
            console.log("Fetch Error:", error.message);
        }
    }

    async function fetchBookById(id) {
        try {
            const response = await databases.getDocument(
                Database_ID,
                Collection_ID,
                id
            );
            return response;
        } catch (error) {
            console.log("Fetch One Error:", error.message);
        }
    }

    async function createBook(data) {
        try {
            const newBook = await databases.createDocument(
                Database_ID,
                Collection_ID,
                ID.unique(),
                { ...data, userId: user.$id },
                [
                   
                    Permission.read(Role.user(user.$id)),
                    Permission.update(Role.user(user.$id)),
                    Permission.delete(Role.user(user.$id))
                ]
            );
         
            console.log("Book Created:", newBook);
        } catch (error) {
            console.log("Create Error:", error.message);
        }
    }

    async function deleteBook(id) {
        try {
            await databases.deleteDocument(
                Database_ID,
                Collection_ID,
                id
            );
            
        } catch (error) {
            console.log("Delete Error:", error.message);
        }
    }

    useEffect(() => {
        let unsubscribe;
        
        const channel = `databases.${Database_ID}.collections.${Collection_ID}.documents`;

        if (user) {
            fetchBook();

            unsubscribe = client.subscribe(channel, (response) => {
                const { payload, events } = response;

                if (events.some(event => event.includes('create'))) {
                    
                    setBook((prev) => [...prev, payload]);
                }
                
                if (events.some(event => event.includes('delete'))) {
                    
                    setBook((prev) => prev.filter((book) => book.$id !== payload.$id));
                }
            });
        } else {
            setBook([]);
        }

        return () => {
            if (unsubscribe) unsubscribe();
        };
    }, [user]);

    return (
        <BookContext.Provider
            value={{
                books,
                fetchBook,
                fetchBookById,
                createBook,
                deleteBook
            }}
        >
            {children}
        </BookContext.Provider>
    );
}s