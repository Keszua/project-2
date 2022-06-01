// projekt
// program decrypt.js. Przyjmuje w linni komend informacje o nazwie pliku (tekstowego) i haśle, np:
// node encrypt.js /home/tekst.txt mojehaslo
// Zapisuje do niego zaszyfrowane (nie zahashowane) dane. Uzyj soli.
// Zapisać iv w JSON

const {readFile, writeFile} = require('fs').promises;
const {decryptBinary, decryptText, hash} = require('./cipher');
const {ENCRYPTION_SALT, HASH_SALT} =  require('./constants');

const [,,fileName, pwd] = process.argv; // destruktyryzacja tablicy process.argv

if(!fileName || !pwd) {
	console.log('Poprawna składnia: node encrypt nazwePliku hasło');
	return;
}

(async () => {
	const json = await readFile(fileName, 'utf8');
	const encrypted = JSON.parse(json);
	const decrypted = await decryptText(encrypted.encrypted, pwd, ENCRYPTION_SALT, encrypted.iv);
	const decryptedHash = hash(decrypted, HASH_SALT);

	if(decryptedHash === encrypted.hash) {
		await writeFile(fileName, decrypted, 'utf8');
		console.log('Odszyfrowano treść');
	} else {
		console.error('Files is not original!');
	}

})();

// odszyfrowanie pliku binarnego
// (async () => {
// 	const json = await readFile(fileName, 'utf8');
// 	const encrypted = JSON.parse(json);
// 	const decrypted = await decryptBinary(encrypted.encrypted, pwd, ENCRYPTION_SALT, encrypted.iv);

// 	await writeFile(fileName, decrypted, 'binary');
// 	console.log('Odszyfrowano treść');

// })();
