const sql = require('mssql');

const config = {
    user: 'sa',
    password: 'AxitySotelo2019',
    server: 'localhost', // You can use 'localhost\\instance' to connect to named instance
    database: 'cursonode',
}

exports.getUsers =  async () => {
    let results;
    try {
        let pool = await sql.connect(config);
        results = await pool.request()
                            .query('select * from Users');
    }catch(err){}
    finally{
        sql.close();
    }
    return results;
};

exports.getUserById =  async (id) => {
    let results;
    try {
        let pool = await sql.connect(config);
        results = await pool.request()
                            .input('id', sql.Int, id)
                            .query('select * from Users where id = @id');
    }catch(err){}
    finally{
        sql.close();
    }
    return results;
};