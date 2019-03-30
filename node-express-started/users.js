const sql = require('./sqlmanager');

exports.getUsers = async (req, res) => {
    let result = await sql.getUsers();
    res.send(result);
}

exports.getUserById = async (req, res) => {
    let result = await sql.getUserById(1);
    res.json(result);
}