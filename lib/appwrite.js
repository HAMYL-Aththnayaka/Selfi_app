import { Client, Account } from 'react-native-appwrite';

// Create Appwrite client
const client = new Client()
    .setEndpoint('https://sgp.cloud.appwrite.io/v1') // Your Appwrite endpoint
    .setProject('6910e092001a9ee52bab'); // Your project ID

// Initialize account service
const account = new Account(client);

export { client, account };
