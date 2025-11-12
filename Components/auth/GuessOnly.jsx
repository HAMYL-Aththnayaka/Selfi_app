import {useUser} from '../../hooks/useUser';
import {useRouter} from 'expo-router';
import {useEffect} from 'react'
import {Text} from 'react-native'


import ThemedLoader from '../ThemedLoader'

const GuessOnly =({children}) =>{
	const {user , authCheck} = useUser();
	const router = useRouter();


	useEffect(()=>{
		if(authCheck && user !== null){
			router.replace('/Login');
		}
	},[user ,authCheck])


	if(!authCheck ||  user){
		 return(<ThemedLoader/>)
	}
	return children
}	
export default GuessOnly
