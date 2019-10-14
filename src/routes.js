const express = require('express');
const UserController = require('./app/Controllers/UsersController');

const routes = express.Router();

routes.get('/users', UserController.index);


module.exports = routes;