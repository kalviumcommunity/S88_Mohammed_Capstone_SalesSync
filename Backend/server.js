const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

// Load up the .env file
dotenv.config();

// Fire up that MongoDB connection
connectDB();

// Create the express app
const app = express();

// This lets the app accept JSON in requests
app.use(cors());             // Allows frontend (on a different port) to talk to the backend
app.use(express.json());     // Parses incoming JSON data (req.body)

// Just a test route to make sure the server works
app.get('/', (req, res) => {
  res.send(' SalesSync API is up and running!');
});
const productRoutes = require('./routes/productRoutes');
app.use('/api/products', productRoutes);


// Pick a port and start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server listening on port ${PORT}`);
});
