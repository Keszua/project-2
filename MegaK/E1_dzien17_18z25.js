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
	}

	add(item) {
		this.items.push(item);
		this.totalValue += item.price;
	}

	getTotalValue() {
		return this.items.reduce( (prev, product) => prev + product.price, 0);
	}

	showBasket() {
		this.items
			.map( (product, i) => `${i +1} - ${product.name} - ${product.price.toFixed(2)}zł`)
			.forEach( text => console.log(text));
	}

	remove(number) {
		this.items.splice(number -1, 1);
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

const shopBasket = new Basket();
const oranges = new Product('Pomarańcze luz', 7.55);
const cucumbers = new Product('Ogórek duży', 8.2);


shopBasket.add(cucumbers);
shopBasket.add(oranges);
shopBasket.add(cucumbers);
console.log('total:', shopBasket.getTotalValue());
shopBasket.showBasket();
console.log('---------')
shopBasket.remove(5);
shopBasket.showBasket();


