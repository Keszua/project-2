const productList = document.querySelector('.product-list');
const addProductForm = document.querySelector('.form-add-product');
const nameInput = document.querySelector('[name="product-name" ]')
const priceInput = document.querySelector('[name="product-price" ]')

const saveProductToLocalStorage = (name, price) => {
	const oldProductList = JSON.parse(localStorage.getItem('shop-products')) ?? [] ;
	oldProductList.push({name, price});
	localStorage.setItem('shop-products', JSON.stringify(oldProductList));

};

const loadProductsFromLocaLStorage = () => {
	const productList = JSON.parse(localStorage.getItem('shop-products')) ?? [] ;

	for (const {name, price} of productList) {
		addProductToShop(name, price);
	}
};


const addProductToShop = (name, price) => {
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
}

const handleAddproductFormSubmit = event => {
	event.preventDefault(); //nie odswierzaj strony

	const nameFormInput = nameInput.value;
	const priceFormInput =  Number(priceInput.value);

	addProductToShop(nameFormInput, priceFormInput);
	saveProductToLocalStorage(nameFormInput, priceFormInput);
};

addProductForm.addEventListener('submit', handleAddproductFormSubmit);
loadProductsFromLocaLStorage();