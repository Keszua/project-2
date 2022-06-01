// projekt
// program encrypt.js. Przyjmuje w linni komend informacje o nazwie pliku (tekstowego) i haśle, np:
// node encrypt.js /home/tekst.txt mojehaslo
// Zapisuje do niego zaszyfrowane (nie zahashowane) dane. Uzyj soli.
// Zapisać iv w JSON

const {readFile, writeFile} = require('fs').promises;
const {encryptBinary, encryptText,	hash} = require('./cipher');
const {ENCRYPTION_SALT, HASH_SALT} =  require('./constants');

const [,,fileName, pwd] = process.argv; // destruktyryzacja tablicy process.argv

if(!fileName || !pwd) {
	console.log('Poprawna składnia: node encrypt nazwePliku hasło');
	return;
}

(async () => {
	const content = await readFile(fileName, 'utf8');
	const contentHash = hash(content, HASH_SALT);
	console.log(content);
	const encrypted = await encryptText(content, pwd, ENCRYPTION_SALT);
	encrypted.hash = contentHash;  // dopisanie nowego pola do istniejacego obiektu
	console.log(encrypted);
	await writeFile(fileName, JSON.stringify(encrypted), 'utf8');
	console.log('Zaszyfrowano treść');

})();


//kodowanie plików binarnych (grafika itp.)
// (async () => {
// 	const content = await readFile(fileName);  // bez 'utf8'
// 	const encrypted = await encryptBinary(content, pwd, ENCRYPTION_SALT);
// 	await writeFile(fileName, JSON.stringify(encrypted), 'utf8');
// 	console.log('Zaszyfrowano plik binarny');
// })();
