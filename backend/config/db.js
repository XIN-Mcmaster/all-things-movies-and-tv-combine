
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }

    const db = mongoose.connection;

    db.on('connected', () => {
        console.log('Connected to MongoDB');
    });

    db.on('error', (err) => {
        console.error('Error connecting to MongoDB:', err);
    });
    db.on('disconnected', () => {
        console.log('Disconnected from MongoDB');
    });


}

module.exports = connectDB; 
