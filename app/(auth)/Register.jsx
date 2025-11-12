import { Link } from 'expo-router';
import { Keyboard, StyleSheet, Text, View } from "react-native";
import { TouchableWithoutFeedback } from 'react-native-web';
import { useUser } from '../../hooks/useUser';
import { Colors } from '../../Constants/Colors.js';

// Themed Components
import { useState } from 'react';
import Spacer from '../../Components/Spacer';
import ThemedButtons from '../../Components/ThemedButton';
import ThemedText from '../../Components/ThemedText';
import ThemedTextInput from '../../Components/ThemedTextInput';
import ThemedView from '../../Components/ThemedView';

const Register = () => {
    const [error , setError] = useState(null);
    const {user , register }=useUser();
    const [email , setEmail] =useState('')
    const [password ,setPassword]=useState('');
    const handleSubmit =async ()=>{
        try{
            setError(null);
            await register(email , password);
            console.log(`current user is :${user}`)
        }catch(error){
          setError(error.meassage)
        }
    }
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss()}>
        <ThemedView style={styles.container}>
            <Spacer />
            <ThemedText title={true} style={styles.title}>
                Register  Your Account
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
            <Spacer height={100} />
            <ThemedButtons onPress={handleSubmit}>
        <Text style={{color:'#f2f2f2',textAlign:'center'}}>Register Account</Text>
        </ThemedButtons>
        <Spacer />

            {error  && <Text  style={styles.error}>{error}</Text>}

        <Spacer/>
            <View style={styles.linkContainer}>
                <Link href='/Login'>
                    <ThemedText style={styles.linkText}>
                        Login instead
                    </ThemedText>
                </Link>
            </View>
        </ThemedView>
        </TouchableWithoutFeedback>
    );
}

export default Register;

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
