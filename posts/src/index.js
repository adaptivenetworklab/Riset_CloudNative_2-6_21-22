const express = require('express');
const app = express();

const connectDB = require('./database/database');
const expressApp = require('./express-app');

const startServer = async () => {
    await connectDB();
    await expressApp(app);

    app.listen(4000, () => {
        console.log('Listening on Port 4000');
    });
}

startServer()
