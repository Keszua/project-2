//dla bezpieczeństwa, robie "rozporszenie" i "ponownie składam w tablice, żeby mieć pewność, ze to tablica.
const buyBtns = [...document.querySelectorAll('[data-name]')]; 
const basketUl = document.querySelector('.basket-list');
const buyAllBtn = document.querySelector('.btn-buy-all');

const basket = new Basket();


//console.clear();

// buyBtns.forEach((btn) => {
// 	btn.addEventListener('click',  event => {
// 		console.log('Klik', event.target.dataset.id);
// 	})
// })

const removeItem = (event) => {
	const id = Number(event.target.dataset.id);
	basket.remove(id);
	createBasketUi();
};

const createBasketUi = () => {
	basketUl.innerText = '';
	for (const {id, text} of basket.getBasketSummary()) {
		const newLi = document.createElement('li');
		newLi.innerText = text;
		
		const buttonX = document.createElement('button');
		buttonX.innerText = 'X';
		buttonX.dataset.id = id;
		buttonX.addEventListener('click', removeItem);
		newLi.appendChild(buttonX);
		newLi.dataset.id = id;
		basketUl.appendChild(newLi);
	}

	const basketTotalValue = basket.getTotalValue();
	buyAllBtn.disabled = basketTotalValue === 0;  // lub warunek i buyAllBtn.removeAttribute('disabled'); buyAllBtn.setAttribute('disabled', true);

	buyAllBtn.innerText = `Złóż zamówienie (${basketTotalValue.toFixed(2)} zł)`;

};
createBasketUi();

const addProductToBasket = (event) => {
		const name = event.target.dataset.name;
		const price = Number(event.target.dataset.price);

		const newProduct = new Product(name, price);
		basket.add(newProduct);

		//console.log( basket.getBasketSummary());
		createBasketUi();
};

for (const btn of buyBtns ) {
	btn.addEventListener('click', addProductToBasket);
};

const buyAllProducts = () => {
	const basketTotalValue = basket.getTotalValue();
	alert(`Zakupy na kwotę ${basketTotalValue.toFixed(2)}`);
	basket.clear();
	createBasketUi();
};

buyAllBtn.addEventListener('click', buyAllProducts);

