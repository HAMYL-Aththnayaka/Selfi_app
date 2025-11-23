import { createContext, useState, useEffect } from 'react';
import { databases, client } from '../lib/appwrite';
// Consolidate imports
import { ID, Permission, Role, Query } from 'react-native-appwrite'; 
import { useUser } from '../hooks/useUser';

const Database_ID = "6914bd40002be2bde2c0";
const Collection_ID = "books"; // Ensure this matches your Appwrite Console Collection ID exactly!

export const BookContext = createContext();

export function BookProvider({ children }) {
    const [books, setBook] = useState([]);
    const { user } = useUser();

    async function fetchBook() {
        try {
            // FIX 1: 'listDocuments' is plural
            const response = await databases.listDocuments(
                Database_ID,
                Collection_ID,
                [
                    Query.equal('userId', user.$id)
                ]
            );
            // FIX 2: Actually update the state with the result
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
                    // FIX 3: Correct syntax is Role.user(...)
                    Permission.read(Role.user(user.$id)),
                    Permission.update(Role.user(user.$id)),
                    Permission.delete(Role.user(user.$id))
                ]
            );
            // NOTE: We do NOT need to setBook here because the useEffect 
            // Realtime listener below will catch the 'create' event and add it.
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
            // Again, let the Realtime listener handle the state update
        } catch (error) {
            console.log("Delete Error:", error.message);
        }
    }

    useEffect(() => {
        let unsubscribe;
        // FIX 4: Channel syntax usually requires 'documents' (plural) at the end
        const channel = `databases.${Database_ID}.collections.${Collection_ID}.documents`;

        if (user) {
            fetchBook();

            unsubscribe = client.subscribe(channel, (response) => {
                const { payload, events } = response;

                if (events.some(event => event.includes('create'))) {
                    // FIX 5: Correct arrow function return for adding to array
                    setBook((prev) => [...prev, payload]);
                }
                
                if (events.some(event => event.includes('delete'))) {
                    // FIX 6: Fixed typo 'fileter' to 'filter'
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
}