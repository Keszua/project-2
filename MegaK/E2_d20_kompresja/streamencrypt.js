
const {pipeline} = require('stream').promises;
const {createReadStream, createWriteStream} = require('fs');
const {createCipher} = require('crypto'); // A w drugim createDecipher
const {promisify} = require('util');
const scrypt = promisify(require('crypto').scrypt);
const {ENCRYPTION_SALT} = require('./constants');
const {createGzip} = require('zlib');


console.log("Start");
const [,,fileIn, fileOut, pwd] = process.argv;
const algorithm = 'aes-192-cbc';


(async () => {
    
    try{
        const key = await scrypt(pwd, ENCRYPTION_SALT, 24);
        await pipeline(
            createReadStream(fileIn),
            createCipher(algorithm, key),
            //createGzip(),
            createWriteStream(fileOut)
        );
        console.log('Done!');
    } catch(err) {
        console.log('Ops!', err);
    }
    
})();