const { Pool } = require('pg');

const pool = new Pool({
    user: 'Erick',
    password: 'password',
    host: 'localhost',
    port: 5432, 
    database: 'dbpf'
});

module.exports = {
    query: (text, params) => pool.query(text, params)
}
