var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    post: 3306,
    user: 'root',
    password: 'P@ssw0rd',
    database: 'react-clone-insta'
});

module.exports = connection;