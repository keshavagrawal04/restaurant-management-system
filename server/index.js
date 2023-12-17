require('dotenv').config();
const app = require('./app');
const { database } = require('./utils');

try {
    database.connect();
    app.listen(process.env.PORT, () => {
        console.log(`[SERVER] Listening on port ${process.env.PORT}`);
    });
} catch (error) {
    console.log(`[SERVER] Mongo DB Connection Failed : ${error.message}`);
}
