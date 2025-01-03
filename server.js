const express = require('express');
const Person = require('./person'); 
const MenuItems = require('./Menu')
const bodyParser = require('body-parser');
const db = require('./db');
const { is } = require('express/lib/request');
require('dotenv').config();

const app = express();

// Middleware for parsing JSON
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/idli', (req, res) => {
    res.send('Idli available');
});

app.get('/dosa', (req, res) => {
    const ddosa = {
        name: 'masala',
        size: 'medium',
        chutney: false
    };
    res.send(ddosa);
});

const personRoutes = require('./routes/personRoutes');
app.use('/person',personRoutes);

const menuRoutes = require('./routes/menuRoutes');
app.use('/menu',menuRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log('Server is running on port 3000');
});
