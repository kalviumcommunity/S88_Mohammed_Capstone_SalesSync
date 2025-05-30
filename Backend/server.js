const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const { register, login } = require('./controllers/authController');
const productRoutes = require('./routes/products'); // <-- This is fine

dotenv.config();

const app = express(); // <-- Define app BEFORE using it
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/products', productRoutes); 

app.get('/', (req, res) => {
  res.send('SalesSync backend is live');
});

app.post('/api/auth/register', register);
app.post('/api/auth/login', login);

// MongoDB Connection and Server Start
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}).catch((err) => {
  console.error('MongoDB connection error:', err);
});
