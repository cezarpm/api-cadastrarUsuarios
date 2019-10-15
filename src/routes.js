const express = require('express');
const UserController = require('./app/Controllers/UsersController');
const LoginController = require('./app/Controllers/LoginController');

const routes = express.Router();

// routes.get('/users', UserController.index);



routes.post('/users/login', LoginController.login);
routes.post('/users/register', UserController.store);



module.exports = routes;