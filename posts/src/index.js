const express = require('express');
const app = express();
const dotenv = require('dotenv-flow');

const connectDB = require('./database/database');
const expressApp = require('./express-app');

dotenv.config({
    node_env: process.env.NODE_ENV || 'dev',
  });

const startServer = async () => {
    await connectDB();
    await expressApp(app);

    app.listen(process.env.PORT, () => {
        console.log(`Posts service is listening to port ${process.env.PORT}`);
        console.log(`${process.env.MESSAGE}`);
    });
}

startServer()
