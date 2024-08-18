const express = require('express');
const bodyParser = require('body-parser');
const menuRouter = require('./menu/menuRoute');

const app = express();

app.use(bodyParser.json());
app.use('/dishes', menuRouter);

app.get('/', (req, res) => {
   res.send('Bienvenue sur notre api de gestion de menu'); 
});

module.exports = app;