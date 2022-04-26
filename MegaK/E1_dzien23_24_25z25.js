// 23 odrabaczanie

"use strict";

a = 123;

console.log(a);


// 24 Babel

// Aby sprawdzić, jak przeglądarka co obsługuje:
https://caniuse.com/


//co działa (albo nie) w node
https://node.green/

// Babel - transpilator "nowoczesnego" kodu na starsze wersje
https://babeljs.io/


Map

Set

// npm install --save-dev standardx @babel/eslint-parser @babel/core

npm init -y

npm i -D eslint babel-eslint eslint-config-airbnb
//	|  └ dodaj do developmentu	
//	└ install

npm i -D eslint babel-eslint eslint-config-airbnb

Tworzymy .eslintrc w glłownym folderze naszego projektu z zawartoscią:
{
	"parserOptions": {
		"ecmaVersion": 2021
	},
	"env":{
		"browser": true
	},
	"parser": "babel-eslint",
	"extends": "airbnb",
	"rules": {}
}


npm install --save-dev standardx @babel/eslint-parser @babel/core

//Następnie w pliku package.json na końcu dodajemy:
"babel": {},
"eslintConfig": {
	"parser": "@babel/eslint-parser",
	"parserOptions": {
		"sourceType": "module",
		"allowImportExportEverywhere": true
	}
}

//--------------------
// przykład, żeby ESLint sam zmienił apostrofy na cudzysłowie. Na początku pliku wpisujemy taki komentarz:
/*eslint quotes: ["error", "double"]*/
//Jeśli chcemy, aby te zasady tyczyły się całego projektu, mżna ta regułe wkleić w plik .eslintrc w rules
	"rules": {
		"quotes": ["error", "double"]
	}

// stopnie ważności: error, warn












