const mongoose = require('mongoose');

async function connect() {
    try {
        const connection = await mongoose.connect(`${process.env.MONGODB_URI}/${process.env.DB_NAME}`);
        console.log('[SERVER] Mongo DB Connection Established');
    } catch (error) {
        throw error;
    }
}

module.exports = {
    connect
};
