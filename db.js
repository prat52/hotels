const mongoose = require('mongoose');
require('dotenv').config();


const mongourl = process.env.DB_URL;
mongoose.connect(mongourl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Database connection error:'));
db.once('open', () => {
    console.log('Database connected successfully');
});

module.exports = db;
