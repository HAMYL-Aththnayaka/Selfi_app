import { createContext, useState,useEffect } from 'react';
import { ID } from 'react-native-appwrite';
import { account } from '../lib/appwrite.js';
const UserContext = createContext(null);

export function UserProvider({children}){
    const [user ,setUser] =useState(null);
    const [authCheck ,setAuthCheck] =useState(false)

    async function login(email , passwort){
          try{
                await account.createEmailPasswordSession(email,passwort);

                const response = await account.get();
                setUser(response);
            }catch(error){
               throw Error (error.message)
            }
    }
    async function register(email , passwort){
            try{
                    await account.create(ID.unique(),email,passwort);
                    await login(email,passwort)
            }catch(error){
       throw Error (error.message)

            }
    }
    async function logout(){
            try{
                await account.deleteSession('current');
                setUser(null);
                setAuthCheck(false)
            }catch(error){
                throw Error (error.message)
            }
    }

    async function getUserValueInital(){
        try{
            const response = await account.get();
            setUser(response);
        }catch(error){
            setUser(null)
        }finally{
            setAuthCheck(true);
        }
    }

    useEffect(()=>{
            getUserValueInital();;
    },[])
    return (
        <UserContext.Provider value={{user ,login,register,logout,authCheck}}>
                {children}
        </UserContext.Provider>
    )
}

export default UserContext;
