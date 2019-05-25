const mongoose = require('mongoose');
const config = require('config');
//const db = config.get('mongoURI');

const db = {
  mongoURI: process.env.MONGO_URI,
  jwtSecret: process.env.JWT_SECRET,
  githubClientId: process.env.GITHUB_CLIENT_ID,
  githubSecret: process.env.GITHUB_SECRET
};

const connectDB = async () => {
  try {
    await mongoose.connect(db.mongoURI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false
    });

    console.log('MongoDB Connected...');
  } catch (err) {
    console.error(err.message);
    // Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
