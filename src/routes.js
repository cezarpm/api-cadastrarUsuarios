const express = require('express');
const UserController = require('./app/Controllers/UsersController');
const LoginController = require('./app/Controllers/LoginController');

const routes = express.Router();

routes.post('/login', LoginController.login);
routes.post('/register', UserController.store);

module.exports = routes;
