const express = require('express');
const mongoose = require('mongoose');

const app = express();
const router = express.Router();
app.use(express.json());

//conecta com o banco
mongoose.connect('mongodb://localhost:27017/carsdb', { useNewUrlParser: true, useUnifiedTopology: true });

//carrega as models
const Brand = require('./models/brand');
const Car = require('./models/car');

//carrega as rotas
const indexRoute = require('./routes/index-route');
const carRoute = require('./routes/car-route');
const brandRoute = require('./routes/brand-route');

app.use('/', indexRoute);
app.use('/cars', carRoute);
app.use('/brands', brandRoute);

module.exports = app;