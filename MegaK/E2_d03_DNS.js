// Asynchroniczne wywołanie dns - czyli  sprawdzenie adresu IP, podając nazwę strony.

const dns = require('dns');
const {promisify} = require('util');
// dns.lookup('bing.com', (err, data) => {
// 	console.log(data)
// });


(async () => {
	try {
		const data = await promisify(dns.lookup)('bing.com');
		console.log(data.address);
	} catch(err) {
		console.log('Coś nie pykło', err);
	}
})()
