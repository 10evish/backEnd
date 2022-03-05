const express = require('express');
const route = express.Router()

const controller = require('../controller/controller');

// API
route.post('/create', controller.create);
route.get('/read', controller.find);
route.post('/update', controller.update);
route.post('/delete', controller.delete);


module.exports = route