import { Link } from 'expo-router';
import { useState } from 'react';
import { Keyboard, StyleSheet, Text, View,ActivityIndicator } from "react-native";
import { Colors } from '../../Constants/Colors.js';
import { useUser } from '../../hooks/useUser.jsx';
//import {ActivityIndicator} 'react-native'

// Themed Components
import { TouchableWithoutFeedback } from 'react-native-web';
import Spacer from '../../Components/Spacer';
import ThemedButtons from '../../Components/ThemedButton';
import ThemedText from '../../Components/ThemedText';
import ThemedTextInput from '../../Components/ThemedTextInput';
import ThemedView from '../../Components/ThemedView';
import ThemedLoader from '../../Components/ThemedLoader'

const Login = () => {
    const {login }=useUser();
    const [error , setError] = useState(null);

	const handleSubmit =async ()=>{
        setError(null);

		 try{
            await login(email , password);
            console.log(`current user is : ${user}`)

        }catch(error){
            setError(error.message)
        }
	}
	
    const {user} = useUser()

    const [email , setEmail] =useState('');
    const [password , setPassword] =useState('');

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss()}>
            <View style={{flex:1}}>
        <ThemedView style={styles.container}>
		
            <Spacer />
            <ThemedText title={true} style={styles.title}>
                Login In To Your Account
            </ThemedText>

            <ThemedTextInput
                            style={{width:"80%" ,
                                    marginBottom:20
                            }}
                            placeholder='Your email' 
                            keyboardType='email-address'
                            value={email}
                            onChangeText ={ setEmail}/>	  
            <ThemedTextInput
                            style={{width:"80%" ,
                                    marginBottom:20
                            }}
                            placeholder='password'
                            secureTextEntry
                            value={password}
                            onChangeText ={ setPassword}/>	  
            
		<ThemedButtons onPress={handleSubmit}>
		<Text style={{color:'#f2f2f2',textAlign:'center'}}>Login To Your Account</Text>
		</ThemedButtons>

			<Spacer />

            {error  && <Text  style={styles.error}>{error}</Text>}

            <Spacer  />
            <View style={styles.linkContainer}>
                <Link href='/Register'>
                    <ThemedText style={styles.linkText}>
                        Register instead
                    </ThemedText>
                </Link>
            </View>
        </ThemedView>
       
        </View>
        </TouchableWithoutFeedback>
    );
}

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 20
    },
    title: {
        textAlign: 'center',
        fontSize: 18,
        marginBottom: 30
    },
    linkContainer: {
        alignItems: 'center'
    },
    linkText: {
        textAlign: 'center',
        color: 'blue', // optional styling
        textDecorationLine: 'underline'
    },
	btn:{
		backgroundColor:Colors.primary,
		padding:15,
		borderRadius:5
	},
	pressed:{
		opacity:0.8
	},
    error:{
        color:Colors.warning,
        padding:10,
        backgroundColor:'#f5c1c8',
        borderColor:Colors.warning,
        borderWidth:1,
        borderRadius:6,
        marginHorinzontal:10
    }
});
