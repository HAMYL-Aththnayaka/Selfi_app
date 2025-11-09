import { Link } from 'expo-router';
import { StyleSheet, View } from "react-native";

// Themed Components
import Spacer from '../../Components/Spacer';
import ThemedText from '../../Components/ThemedText';
import ThemedView from '../../Components/ThemedView';

const Register = () => {
    return (
        <ThemedView style={styles.container}>
            <Spacer />
            <ThemedText title={true} style={styles.title}>
                Register  Your Account
            </ThemedText>
            <Spacer height={100} />
            <View style={styles.linkContainer}>
                <Link href='/Login'>
                    <ThemedText style={styles.linkText}>
                        Login instead
                    </ThemedText>
                </Link>
            </View>
        </ThemedView>
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
    }
});
