const mongoose = require('mongoose');

// This function connects to MongoDB using the URI from the .env file
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB is live at: ${conn.connection.host}`);
  } catch (err) {
    console.error(`MongoDB failed: ${err.message}`);
    process.exit(1); // Stop the app if DB connection fails
  }
};

module.exports = connectDB;
