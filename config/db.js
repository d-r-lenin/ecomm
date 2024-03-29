const mongoose = require('mongoose');


const connectionString = process.env.ENV !== 'dev' ? process.env.MONGO_STRING : 'mongodb://localhost:27017/ecomm';


async function connect() {
    try {
        await mongoose.connect(connectionString, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.info('DB Connected successfully');
    } catch (error) {
        console.info('DB Connection failure ' + error);
        console.error(error);
    }
}

module.exports = { connect };