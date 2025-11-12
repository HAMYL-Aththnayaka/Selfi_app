import { useContext } from "react";
import { BookContent}  from '../context/userContext';
export function useBook (){


    const context  = useBook(BookContent);

        if (!context){
            throw new Error('useUser must be used within a BookProvider')
        }
    return context
}