const mongoose = require('mongoose');

const mongourl = 'mongodb://localhost:27017/navinDB'; 
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
