// Dzień 13 Kryptografia

// strona do przesyłania waidomosci:
//privnote.com


// strona do rozszyfrowania
// crackstation.net


// Przykład 1 - szyfrowanie 
// const { promisify } = require('util');
// const scrypt = promisify(require('crypto').scrypt);
// const randomBytes = promisify(require('crypto').randomBytes);
// const { createCipheriv } = require('crypto');

// const algorithm = 'aes-192-cbc';
// const password = 'Password used to generate key';

// (async () => {
// 	const key = await scrypt(password, 'salt', 24);
// 	const iv = await randomBytes(16);

// 	const cipher = createCipheriv(algorithm, key, iv);
// 	let encrypted = cipher.update('some clear text data', 'utf8', 'hex');
// 	encrypted += cipher.final('hex');

// 	console.log({
// 		encrypted,
// 		iv: iv.toString('hex'),
// 	})

// })()


// Przykład 2 - odkodowanie
// const { promisify } = require('util');
// const scrypt = promisify(require('crypto').scrypt);
// const { createDecipheriv } = require('crypto');

// const algorithm = 'aes-192-cbc';
// const password = 'Password used to generate key';
// const encrypted = 'e32ba7ee9599b6b8b66d60c9bdfb7db2667dafc7b721e3b176e049038dca605c';
// const ivHex = 'caa5d7846b8c7476884fa6c7e169153d';


// (async () => {
// 	const key = await scrypt(password, 'salt', 24);
// 	const iv = Buffer.from(ivHex, 'hex');

// 	const decipher = createDecipheriv(algorithm, key, iv);
// 	let decryptred = decipher.update(encrypted, 'hex', 'utf8');
// 	decryptred += decipher.final('utf8');

// 	console.log(decryptred);
// })();



// Przeróbka od Kuby:
const { promisify } = require('util');
const scrypt = promisify(require('crypto').scrypt);
const randomBytes = promisify(require('crypto').randomBytes);
const { createCipheriv, createDecipheriv } = require('crypto');

const password = 'Password used to generate key';

async function ecryptText(text, password, salt) {
	const algorithm = 'aes-192-cbc';
	const key = await scrypt(password, salt, 24);
	const iv = await randomBytes(16);

	const cipher = createCipheriv(algorithm, key, iv);
	let encrypted = cipher.update(text, 'utf8', 'hex');
	encrypted += cipher.final('hex');

	return{
		encrypted,
		iv: iv.toString('hex'),
	};
};

async function decryptText(text, password, salt, ivHex) {
	const algorithm = 'aes-192-cbc';
	const key = await scrypt(password, salt, 24);
	const iv = Buffer.from(ivHex, 'hex');

	const decipher = createDecipheriv(algorithm, key, iv);
	let decryptred = decipher.update(text, 'hex', 'utf8');
	decryptred += decipher.final('utf8');

	return decryptred;
}

module.exports ={
	ecryptText,
	decryptText,
}