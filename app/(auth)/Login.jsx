import { Link } from 'expo-router';
import { StyleSheet, View ,Pressable,Text} from "react-native";
import {Colors} from '../../Constants/Colors.js'

// Themed Components
import Spacer from '../../Components/Spacer';
import ThemedText from '../../Components/ThemedText';
import ThemedView from '../../Components/ThemedView';
import ThemedButtons from '../../Components/ThemedButton';

const Login = () => {
	const handleSubmit =()=>{
			console.log('login Form Submited ');
	}
	
    return (
        <ThemedView style={styles.container}>
		
            <Spacer />
            <ThemedText title={true} style={styles.title}>
                Login In To Your Account
            </ThemedText>
			
		<ThemedButtons onPress={handleSubmit}>
		<Text style={{color:'#f2f2f2',textAlign:'center'}}>Login To Your Account</Text>
		</ThemedButtons>

			
            <Spacer height={100} />
            <View style={styles.linkContainer}>
                <Link href='/Register'>
                    <ThemedText style={styles.linkText}>
                        Register instead
                    </ThemedText>
                </Link>
            </View>
        </ThemedView>
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
	}
});
