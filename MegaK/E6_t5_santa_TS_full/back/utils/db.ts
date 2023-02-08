import {createPool} from 'mysql2/promise';

export const pool = createPool( { // multi połączenie.
	host: 'localhost',
    port: 3308,
	user: 'root',
	password: 'admin',
	database: 'megak_santa',
    decimalNumbers: true, //liczby jako liczby, ale tracimy dokładność albo bigNumberStrings: flase  (??chyba)
	//multipleStatments: true,
	namedPlaceholders: true, // aby działało przekazywanie argumentów z obiektu
});

// przy tworzeniu bazy, pamiętać o kodowaniu COLLATE = 'utf8mb4_unicode_ci';
