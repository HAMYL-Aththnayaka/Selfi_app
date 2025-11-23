import { Account, Client, Databases } from 'react-native-appwrite';

const client = new Client();

client
  
  .setEndpoint('https://sgp.cloud.appwrite.io/v1') 
  .setProject('6910e092001a9ee52bab') 
  .setPlatform('dev.yasasthebeast.shelfie'); 

const account = new Account(client);
const databases = new Databases(client);

export { account, client, databases };

