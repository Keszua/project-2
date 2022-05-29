// Dzień 13 Kryptografia
const {	ecryptText,	decryptText } = require('./cipher');

const SALT = 'kadjfkjakfj@KJK#$';

(async () => {
	const encrypted = await ecryptText('Heja banana', 'tajne haslo', SALT);
	console.log('encrypted', encrypted);


	const decryptred = await decryptText(encrypted.encrypted, 'tajne haslo', SALT, encrypted.iv);
	console.log(decryptred);
})();



// dzień 15
// bezpieczne hashowanie 1
const {createHmac} = require('crypto');

const hash = createHmac('sha512', SALT)
    .update('Tekst do zahashowania')
    .digest('hex');

console.log(hash);


// bezpieczne hashowanie 2
const { pbkdf2 } = require('crypto');

const oryginalText = 'Hello, World!';

pbkdf2(oryginalText, SALT, 100000, 64, 'sha512', (err, derivedKey) => {

    if (err) throw err;
    console.log(derivedKey.toString('hex'));

});


// bezpieczne hashowanie 3
// bcrypt, nalezy zainstlawoac bcrypta  npm i bcrypt
const {hash} = require('bcrypt');

hash('tekst do zhasowania', 10, (err, hash) => {
    if (err) {
        console.log(err);
    } else {
        console.log(hash);
    }
});