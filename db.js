      const mongoose = require('mongoose');

// Define the MongoDB connection URL
      const mongoURL = 'mongodb://localhost:27017/hotels' 
// Replace 'mydatabase' with your database name

      mongoose.connect(mongoURL, {
          useNewUrlParser: true,
          useUnifiedTopology: true
      })

// Get the default connection
// Mongoose maintains a default connection object representing the MongoDB connection.

      const db = mongoose.connection;


// Define event Listener for database connection
      db.on('connected', () => {
          console.log('Connected to MongoDB server');
  
      })
      db.on('error', () => {
          console.log('MongoDB Connection error: ',err);
  
      })
      db.on('Disconnected', () => {
          console.log('MongoDB Disconnected');
  
      })

// Export the database connection

      module.exports = db;

