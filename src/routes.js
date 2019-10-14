const express = require('express');
const UserController = require('./app/Controllers/UsersController');

const routes = express.Router();

routes.get('/users', UserController.index);
routes.post('/users', UserController.store);


module.exports = routes;