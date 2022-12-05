var mysql2= require('mysql2');

//https://nodejs.org/api/process.html (process)
var connection = mysql2.createConnection({
  host     : process.env.HOST,
  user     : process.env.USER,
  password : process.env.PASSWORD,
  database : 'sales'
});

module.exports = connection;