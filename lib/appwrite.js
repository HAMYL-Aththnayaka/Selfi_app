import { Client, Account ,Databases} from 'react-native-appwrite';
tars
// Create Appwrite client
const client = new Client()
    .setEndpoint('https://sgp.cloud.appwrite.io/v1') // Your Appwrite endpoint
    .setProject('6910e092001a9ee52bab'); // Your project ID


const account = new Account(client);
const database = new Databases(client)
//const avatars new Avatars(client)

export { client, account ,database };
