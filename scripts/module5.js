// задача 1 _______________________________________________________________________________________________________

// const pizzaPalace = {
// 	pizzas: ["Supercheese", "Smoked", "Four meats"],
// 	// Change code below this line
// 	checkPizza(pizzaName) {
// 		return this.pizzas.includes(pizzaName);
// 	},
// 	order(pizzaName) {
// 		const isPizzaAvailable = this.checkPizza(pizzaName);

// 		if (!isPizzaAvailable) {
// 			return `Sorry, there is no pizza named «${pizzaName}»`;
// 		}

// 		return `Order accepted, preparing «${pizzaName}» pizza`;
// 	},
// 	// Change code above this line
// };

// console.log(pizzaPalace.order("Smoked"));

// задача 2 _______________________________________________________________________________________________________

// const customer = {
// 	username: "Mango",
// 	balance: 24000,
// 	discount: 0.1,
// 	orders: ["Burger", "Pizza", "Salad"],
// 	// Change code below this line
// 	getBalance() {
// 		return this.balance;
// 	},
// 	getDiscount() {
// 		return this.discount;
// 	},
// 	setDiscount(value) {
// 		this.discount = value;
// 	},
// 	getOrders() {
// 		return this.orders;
// 	},
// 	addOrder(cost, order) {
// 		this.balance -= cost - cost * this.discount;
// 		this.orders.push(order);
// 	},
// 	// Change code above this line
// };

// customer.setDiscount(0.15);
// console.log(customer.getDiscount()); // 0.15
// customer.addOrder(5000, "Steak");
// console.log(customer.getBalance()); // 19750
// console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]

// задача 3 _______________________________________________________________________________________________________

// const historyService = {
// 	orders: [
// 		{ email: "jacob@hotmail.com", dish: "Burrito" },
// 		{ email: "solomon@topmail.net", dish: "Burger" },
// 		{ email: "artemis@coldmail.net", dish: "Pizza" },
// 		{ email: "solomon@topmail.net", dish: "Apple pie" },
// 		{ email: "jacob@hotmail.com", dish: "Taco" },
// 	],
// 	// Change code below this line
// 	getOrdersLog() {
// 		return this.orders.map(order => `email: ${order.email} dish: ${order.dish}`).join(" - ");
// 	},
// 	getEmails() {
// 		const emails = this.orders.map(order => order.email);
// 		const uniqueEmails = new Set(emails);
// 		return [...uniqueEmails];
// 	},
// 	getOrdersByEmail(email) {
// 		return this.orders.filter(order => order.email === email);
// 	},
// 	// Change code above this line
// };
// console.log(historyService.getOrdersByEmail("solomon@topmail.net"));

// задача 4 _______________________________________________________________________________________________________

// const parent = {
// 	name: "Stacey",
// 	surname: "Moore",
// 	age: 54,
// 	heritage: "Irish",
// };
// // Change code below this line

// const child = Object.create(parent);

// // Change code above this line
// child.name = "Jason";
// child.age = 27;

// console.log(child);

// задачі на завтра

/*
 * Є масив. Значення в масиві будуть або числами, рядками, або їх комбінацією. Ваше завдання - повернути масив,
в якому будуть йти спочатку числа, відсортовані в порядку зростання, а потім рядки, відсортовані в алфавітному порядку.
Значення повинні зберегти свій вихідний тип. Якщо на вході був рядок, то й повернутися повинен рядок, якщо число - число.
 */

// //Приклад:
// const example = array => {
// 	// return array.reduce((acc, el) => {
// 	// 	if (typeof el === "number") {
// 	// 		acc.unshift(el);
// 	// 		return [...acc.sort((a, b) => a - b)];
// 	// 	} else {
// 	// 		acc.push(el);
// 	// 		return [...acc.sort((a, b) => a.localeCompare(b))];
// 	// 	}
// 	// }, []);
// 	let newArray = [];
// 	array.map(el => {
// 		if (typeof el === "number") {
// 			return newArray.unshift(el);
// 		}
// 		newArray.push(el);
// 		return [...newArray.sort((a, b) => a.localeCompare(b))];
// 	});
// 	return [...newArray.sort((a, b) => a - b)];
// };

// console.log(example([6, 2, 3, 4, 5])); // [2, 3, 4, 5, 6]
// console.log(example([14, 32, 3, 5, 5])); // [3, 5, 5, 14, 32]
// console.log(example([14, 32, 3, 5, 5])); // [1, 2, 3, 4, 5]
// console.log(example(["Banana", "Orange", "Apple", "Mango", 0, 2, 2])); // [0, 2, 2, 'Apple', 'Banana', 'Mango', 'Orange']

/*
Є багатомірний масив. Треба зробити його розгладити на один рівень
*/

// const arr = [12, [34, [2, [33]]], 34, [23], "hello", ["five", ["some arr", ["last arr"], { name: "John" }]]];

// const flatMap = array => {
// 	// let newArray = [];
// 	// for (const item of array) {
// 	// 	if (Array.isArray(item)) {
// 	// 		newArray.push(...flatMap(item));
// 	// 	} else {
// 	// 		newArray.push(item);
// 	// 	}
// 	// }
// 	// return newArray;
// 	// return array.flat(Infinity);
// 	// array.reduce((acc, el) => {
// 	// 	if (Array.isArray(el)) {
// 	// 	} else {
// 	// 	}
// 	// }, []);
// };
// console.log(flatMap(arr));

//  [12,34,2,33,34,23,'hello','five','some arr','last arr', { name: 'John' }]

// const arr = [
// 	{
// 		name: "test",
// 		value: 1,
// 		children: [
// 			{
// 				name: "test2",
// 				value: 2,
// 				children: [{ name: "test3", value: 3 }],
// 			},
// 		],
// 	},
// ];

// const newObj = array => {
// 	// let newArray = [];

// let newObjeckt = {};
// for (const item of array) {
// 	if (Array.isArray(item.children)) {
// 		console.log(newObj(item.children));
// 		newArray.push(...newObj(item.children));
// 	} else {
// 		newArray.push(item);
// 	}
// 	return newArray;
// }
// return newObjeckt;

// 	array.reduce((acc, el) => {
// 		acc[el.name] = el.value;
// 		if (el.children) {
// 			return newObj(el.children);
// 		}
// 		console.log(acc);
// 		return acc;
// 		// return acc;
// 		// console.log(el);
// 		// console.log(el.children[0]);
// 		// console.log(el.children[0].children[0]);
// 	}, {});
// };

// const obj = {};

// const func = arr => {
// 	arr.map(el => {
// 		obj[el.name] = el.value;
// 		if (el.children) {
// 			return func(el.children);
// 		}
// 	});
// 	return obj;
// };
// console.log(func(arr));

// console.log(newObj(arr));
// {test: 1, test2: 2, test3: 3}

// задача 5 _______________________________________________________________________________________________________

// const ancestor = {
//   name: "Paul",
//   age: 83,
//   surname: "Dawson",
//   heritage: "Irish",
// };
// // Change code below this line

// const parent = Object.create(ancestor);
// parent.name = "Stacey";
// parent.surname = "Moore";
// parent.age = 54;

// const child = Object.create(parent);
// child.name = "Jason";
// child.age = 27;

// // Change code above this line

// задача 7 _______________________________________________________________________________________________________

// class Car {
// 	// Change code below this line
// 	constructor(brand, model, price) {
// 		this.brand = brand;
// 		this.model = model;
// 		this.price = price;
// 	}

// 	// Change code above this line
// }

// задача 8 _______________________________________________________________________________________________________

// class Car {
// 	// Change code below this line
// 	constructor({ brand, model, price }) {
// 		this.brand = brand;
// 		this.model = model;
// 		this.price = price;
// 	}
// 	// Change code above this line
// }

// задача 9 _______________________________________________________________________________________________________

// class Car {
// 	constructor({ brand, model, price }) {
// 		this.brand = brand;
// 		this.model = model;
// 		this.price = price;
// 	}
// 	// Change code below this line
// 	getPrice() {
// 		return this.price;
// 	}
// 	changePrice(newPrice) {
// 		return (this.price = newPrice);
// 	}

// 	// Change code above this line
// }

// задача 10 _______________________________________________________________________________________________________
// class Storage {
// 	constructor(items) {
// 		this.items = items;
// 	}
// 	getItems() {
// 		return this.items;
// 	}
// 	addItem(newItem) {
// 		this.items.push(newItem);
// 	}
// 	removeItem(itemToRemove) {
// 		this.items.splice(this.items.indexOf(itemToRemove), 1);
// 	}
// }

// // Change code above this line
// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

// задача 11 _______________________________________________________________________________________________________

// class StringBuilder {
// 	constructor(initialValue) {
// 		this.value = initialValue;
// 	}
// 	getValue() {
// 		return this.value;
// 	}
// 	padEnd(str) {
// 		this.value = this.value + str;
// 	}
// 	padStart(str) {
// 		this.value = str + this.value;
// 	}
// 	padBoth(str) {
// 		this.value = str + this.value + str;
// 	}
// }

// // Change code above this line
// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="

// задача 12 _______________________________________________________________________________________________________

// class Car {
// 	// Change code below this line
// 	#brand;
// 	constructor({ brand, model, price }) {
// 		this.#brand = brand;
// 		this.model = model;
// 		this.price = price;
// 	}
// 	getBrand() {
// 		return this.#brand;
// 	}
// 	changeBrand(newBrand) {
// 		return (this.#brand = newBrand);
// 	}
// 	// Change code above this line
// }
// const cars = new Car({ brand: "Audi", model: "Q3", price: 36000 });
// console.log(cars.changeBrand("hdf"));

// задача 13 _______________________________________________________________________________________________________

// class Storage {
// 	// Change code below this line
// 	#items;
// 	constructor(items) {
// 		this.#items = items;
// 	}

// 	getItems() {
// 		return this.#items;
// 	}

// 	addItem(newItem) {
// 		this.#items.push(newItem);
// 	}

// 	removeItem(itemToRemove) {
// 		this.#items = this.#items.filter(item => item !== itemToRemove);
// 	}
// }

// // Change code above this line
// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Droid"]

// задача 14 _______________________________________________________________________________________________________

// class StringBuilder {
// 	// Change code below this line
// 	#value;
// 	constructor(initialValue) {
// 		this.#value = initialValue;
// 	}

// 	getValue() {
// 		return this.#value;
// 	}

// 	padEnd(str) {
// 		this.#value += str;
// 	}

// 	padStart(str) {
// 		this.#value = str + this.#value;
// 	}

// 	padBoth(str) {
// 		this.padStart(str);
// 		this.padEnd(str);
// 	}
// }

// // Change code above this line
// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="

// задача 15 _______________________________________________________________________________________________________

// class Car {
// 	// Change code below this line
// 	#brand;

// 	constructor({ brand, model, price }) {
// 		this.#brand = brand;
// 		this.model = model;
// 		this.price = price;
// 	}

// 	get brand() {
// 		return this.#brand;
// 	}

// 	set brand(newBrand) {
// 		this.#brand = newBrand;
// 	}

// 	get model() {
// 		return this.model;
// 	}

// 	set model(newModel) {
// 		this.model = newModel;
// 	}

// 	get price() {
// 		return this.price;
// 	}

// 	set price(newPrice) {
// 		this.price = newPrice;
// 	}
// 	// Change code above this line
// }

// задача 16 _______________________________________________________________________________________________________

// class Car {
// 	// Change code below this line
// 	static MAX_PRICE = 50000;
// 	#price;
// 	constructor({ price }) {
// 		this.#price = price;
// 	}

// 	get price() {
// 		return this.#price;
// 	}
// 	set price(newPrice) {
// 		if (newPrice <= Car.MAX_PRICE) {
// 			this.#price = newPrice;
// 		}
// 	}
// 	// Change code above this line
// }
// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000

// задача 17 _______________________________________________________________________________________________________

// class Car {
// 	static #MAX_PRICE = 50000;
// 	// Change code below this line
// 	static checkPrice(price) {
// 		if (price >= Car.#MAX_PRICE) {
// 			return "Error! Price exceeds the maximum";
// 		} else {
// 			return "Success! Price is within acceptable limits";
// 		}
// 	}
// 	// Change code above this line
// 	constructor({ price }) {
// 		this.price = price;
// 	}
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
// console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"

// задача 18 _______________________________________________________________________________________________________

// class User {
// 	constructor(email) {
// 		this.email = email;
// 	}

// 	get email() {
// 		return this.email;
// 	}

// 	set email(newEmail) {
// 		this.email = newEmail;
// 	}
// }
// class Admin extends User {
// 	AccessLevel = { BASIC: "basic", SUPERUSER: "superuser" };
// }

// задача 19 _______________________________________________________________________________________________________

// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class Admin extends User {
//   // Change code below this line
//   constructor({email, accessLevel}) {
//     super(email);
//     this.AccessLevel = accessLevel
//   }

//   static AccessLevel = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };

//   // Change code above this line
// }

// const mango = new Admin({
//   email: "mango@mail.com",
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"

// задача 20 _______________________________________________________________________________________________________

// class User {
// 	email;

// 	constructor(email) {
// 		this.email = email;
// 	}

// 	get email() {
// 		return this.email;
// 	}

// 	set email(newEmail) {
// 		this.email = newEmail;
// 	}
// }
// class Admin extends User {
// 	// Change code below this line

// 	static AccessLevel = {
// 		BASIC: "basic",
// 		SUPERUSER: "superuser",
// 	};

// 	constructor({ email, accessLevel }) {
// 		super(email);
// 		this.accessLevel = accessLevel;
// 	}
// 	blacklistedEmails = [];

// 	blacklist(email) {
// 		return this.blacklistedEmails.push(email);
// 	}
// 	isBlacklisted(email) {
// 		return this.email !== email;
// 	}

// 	// Change code above this line
// }

// const mango = new Admin({
// 	email: "mango@mail.com",
// 	accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"

// mango.blacklist("poly@mail.com");
// console.log(mango.blacklistedEmails); // ["poly@mail.com"]
// console.log(mango.isBlacklisted("mango@mail.com")); // false
// console.log(mango.isBlacklisted("poly@mail.com")); // true

// uniqueInOrder("AAAABBBCCDAABBB") == ["A", "B", "C", "D", "A", "B"];
// uniqueInOrder("ABBCcAD") == ["A", "B", "C", "c", "A", "D"];
// uniqueInOrder([1, 2, 2, 3, 3]) == [1, 2, 3];

// const uniqueInOrder = element => [...new Set(element)]; // only unique
const uniqueInOrder = array => {
	const res = [];
	for (let i = 0; i < array.length; i++) {
		if (array[i] !== array[i + 1]) {
			res.push(array[i]);
		}
	}
	return res;
};

// const uniqueInOrder = array => {
// 	return array.reduce((acc, element, index) => {
// 		if (array[index] !== array[index + 1]) {
// 			acc.push(element);
// 		}
// 		return acc;
// 	}, []);
// };

console.log(uniqueInOrder("AAAABBBCCDAABBB"));
