/* eslint-disable no-console */
// const connectionString = `mongodb://${process.env.MONGO_ROOT_USERNAME}:${process.env.MONGO_ROOT_PASSWORD}@${process.env.DB_HOST}`;

const mongoose = require('mongoose');

module.exports = async () => {
  const connectionString = 'mongodb://adminuser:password123@mongo-posts-clusterip-srv.postsapp.svc.cluster.local:27017';
  try {
    const conct = await mongoose.connect(connectionString, {
      dbName: 'posts',
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected: ${conct.connection.host}`);
  } catch (err) {
    console.log(`Error ${err.message}`);
    process.exit(1);
  }
};

