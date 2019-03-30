const express = require('express');
const router = express.Router();

const users = require('./users/users');

module.exports = (app) => {
    router.get('/user', users.getUsers)
          .post('/user', users.saveUser)
          .put('/user', users.updateUser)
          .delete('/user', users.deleteUser)

    app.use('/api', router);
}