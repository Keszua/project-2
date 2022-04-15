const productList = document.querySelector('.product-list');
const addProductForm = document.querySelector('.form-add-product');
const nameInput = document.querySelector('[name="product-name" ]')
const priceInput = document.querySelector('[name="product-price" ]')


addProductForm.addEventListener('submit', (event) => {
	event.preventDefault(); //nie odswierzaj strony
	const name = event.target.elements['product-name'].value;
	const price =  Number(priceInput.value);

	const newLi = document.createElement('li');
	const newStrong = document.createElement('strong');
	newStrong.innerText = name;
	const newPriceText = document.createTextNode(` ${price.toFixed(2)} `);

	const newBtn = document.createElement('button');
	newBtn.classList.add('btn-buy-product');
	newBtn.dataset.name = name;
	newBtn.dataset.price = String(price);
	newBtn.innerText = 'Kup';
	newBtn.addEventListener('click', addProductToBasket);

	newLi.appendChild(newStrong);
	newLi.appendChild(newPriceText);
	newLi.appendChild(newBtn);

	productList.appendChild(newLi);

});