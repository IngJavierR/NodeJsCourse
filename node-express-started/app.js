const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');
const users = require('./users');

var app = express();
var router = express.Router();

app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, 'public')))

router.get('/', (req, res) => {
    //res.send('Hello World');
    //res.sendFile(`${__dirname}/views/index.html`);
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

router.get('/users', users.getUsers);
router.get('/user', users.getUserById);

app.use('/api', router);

app.listen(3000, () => {
    debug(`Listening at port ${chalk.red('3000')}`);
});