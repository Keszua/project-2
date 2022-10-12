const mysql = require('mysql2/promise');

const pool = mysql.createPool( { // multi połączenie.
	host: 'localhost',
    //port: "3306",
	user: 'root',
	password: '',
	database: 'megak_todo',
    decimalNumbers: true, //liczby jako liczby, ale tracimy dokładność albo bigNumberStrings: flase  (??chyba)
	//multipleStatments: true,
	namedPlaceholders: true, // aby działało przekazywanie argumentów z obiektu
});

module.exports = {
    pool,
};