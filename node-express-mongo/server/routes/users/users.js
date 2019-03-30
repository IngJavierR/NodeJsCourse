const User = require('./../../model/userModel');

exports.getUsers = (req, res) => {
    console.log('query', req.query);
    const query = {};
    // if(req.query.work) {
    //     query.work = req.query.work
    // }
    User.find(query, (err, users) => {
        if(err) {
            return res.send(err);
        }
        return res.json(users);
    });
}

exports.saveUser = (req, res) => {
    // let user = new User({
    //     id:0,
    //     name: 'Javier',
    //     work: 'Axity'
    // });
    let user = new User(req.body);
    user.save((err) => {
        if(err) {
            return res.send(err);
        }
        return res.json('Complete');
    })
}

exports.deleteUser = (req, res) => {
    let user = new User(req.body);
    user.delete((err) => {
        if(err) {
            return res.send(err);
        }
        return res.json('Complete');
    })

}

exports.updateUser = (req, res) => {
    let user = new User(req.body);
    user.update(user, (err) => {
        if(err) {
            return res.send(err);
        }
        return res.json('Complete');
    })

}