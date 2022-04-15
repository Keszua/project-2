// Etap 1 - tydzień 4 - dzień 17 z 25 
// Pętle i OOP

/*
Opis projektu
Faza 1. projektu - logika
1. Tworzymy koszyk sklepu internetowego.
2. Do koszyka można dodawać nowe pozycje, w których zawiera się nazwa produktu i jego cena.
3. Można wyświetlić zawartość koszyka odpowiednią metodą.
4. Można usunąć element z koszyka odpowiednią metodą.
5. Można wyświetlić wartość koszyka odpowiednią metodą.
*/

class Basket {
	constructor() {
		this.items = [];
		this.totalValue = 0;
		
		const storageBasket = localStorage.getItem('basket');
		if(storageBasket) {
			this.items =JSON.parse(storageBasket);
			
		}
		
	}

	clear() {
		this.items.length = 0; // lub this.items.splice(0); lub this.items = []; lub this.items.length = 0;
	
		localStorage.removeItem('basket');
	}
	
	add(item) {
		this.items.push(item);
		this.totalValue += item.price;

		const storage = JSON.stringify(this.items);
		localStorage.setItem('basket', storage);
	}

	getTotalValue() {
		return this.items.reduce( (prev, product) => prev + product.price, 0);
	}

	getBasketSummary() {
		return this.items
			.map( (product, i) => {
				return {
					id: i + 1,
					text: `${i +1} - ${product.name} - ${product.price.toFixed(2)}zł `,
				}
			});
	}

	remove(number) {
		this.items.splice(number -1, 1);

		const storage = JSON.stringify(this.items);
		localStorage.setItem('basket', storage);
	}
}

class Product {
	constructor(productName, prosuctPrice) {
		this.name = productName;
		this.price = prosuctPrice;
	}

	setNewPrice(newPrice) {
		this.price = newPrice;
	}
}

