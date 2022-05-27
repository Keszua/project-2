// Dzień 13 Kryptografia
const {	ecryptText,	decryptText } = require('./cipher');

const SALT = 'diJIJI';

(async () => {
	const encrypted = await ecryptText('Heja banana', 'tajne haslo', SALT);
	console.log('encrypted', encrypted);


	const decryptred = await decryptText(encrypted.encrypted, 'tajne haslo', SALT, encrypted.iv);
	console.log(decryptred);
})();