// database.js
const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017/ged'; // Remplacez 'ged' par le nom de votre base de données
const client = new MongoClient(uri);

async function connectToMongoDB() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB', error);
  }
}

module.exports = { connectToMongoDB }; // Assurez-vous que c'est la seule exportation
