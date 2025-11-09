import { StyleSheet } from 'react-native'
import { Link } from 'expo-router'

import ThemedView from "../Components/ThemedView"
import ThemedText from "../Components/ThemedText"
import ThemedLogo from "../Components/ThemedLogo"
import Spacer from "../Components/Spacer"
import { Colors } from '../Constants/Colors'

const Home = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedLogo />
      <Spacer />

      <ThemedText style={styles.title} title={true}>The Number 1</ThemedText>

      <ThemedText style={{ marginTop: 10, marginBottom: 30 }}>
        Reading List App
      </ThemedText>

      <Link href="/Login" style={styles.link}>
        <ThemedText>Login</ThemedText>
      </Link>

      <Link href="/Register" style={styles.link}>
        <ThemedText>Register</ThemedText>
      </Link>

      <Link href="/Profile" style={styles.link}>
        <ThemedText>Profile</ThemedText>
      </Link>

    </ThemedView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    marginVertical: 20
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  link: {
    marginVertical: 10,
    borderBottomWidth: 1
  },
})