// задача 1 _______________________________________________________________________________________________________

// function makePizza() {
// 	return "Your pizza is being prepared, please wait.";
// }
// // Change code below this line

// const result = makePizza();
// const pointer = makePizza;

// задача 2 _______________________________________________________________________________________________________

// function deliverPizza(pizzaName) {
// 	return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
// 	return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// // Chande code below this line
// function makeMessage(pizzaName, callback) {
// 	return callback(`${pizzaName}`);
// }
// console.log(makeMessage("Royal Grand", deliverPizza));

// задача 3 _______________________________________________________________________________________________________

// function makePizza(pizzaName, callback) {
// 	console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
// 	callback(pizzaName);
// }

// makePizza("Royal Grand", function deliverPizza(pizzaName) {
// 	console.log(`Delivering pizza ${pizzaName}.`);
// });
// // Change code below this line

// makePizza("Ultracheese", function eatPizza(pizzaName) {
// 	console.log(`Eating pizza ${pizzaName}.`);
// });

// задача 4 _______________________________________________________________________________________________________

// const pizzaPalace = {
// 	pizzas: ["Ultracheese", "Smoked", "Four meats"],
// 	order(pizzaName, onSuccess, onError) {
// 		if (this.pizzas.includes(pizzaName)) {
// 			return onSuccess(pizzaName);
// 		}
// 		return onError(`There is no pizza with a name ${pizzaName} in the assortment.`);
// 	},
// };
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
// 	return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
// 	return `Error! ${error}`;
// }

// // Method calls with callbacks
// pizzaPalace.order("Smoked", makePizza, onOrderError);
// pizzaPalace.order("Four meats", makePizza, onOrderError);
// pizzaPalace.order("Big Mike", makePizza, onOrderError);
// pizzaPalace.order("Vienna", makePizza, onOrderError);

// задача 5 _______________________________________________________________________________________________________

// function calculateTotalPrice(orderedItems) {
// 	let totalPrice = 0;
// 	// Change code below this line

// 	orderedItems.forEach(element => {
// 		totalPrice += element;
// 	});

// 	// Change code above this line
// 	return totalPrice;
// }

// calculateTotalPrice([12, 85, 37, 4]);

// задача 6 _______________________________________________________________________________________________________

// function filterArray(numbers, value) {
// 	const filteredNumbers = [];
// 	// Change code below this line

// 	numbers.forEach(element => {
// 		if (value < element) {
// 			filteredNumbers.push(element);
// 		}
// 	});

// 	// Change code above this line
// 	return filteredNumbers;
// }

// задача 7 _______________________________________________________________________________________________________

// function getCommonElements(firstArray, secondArray) {
// 	const commonElements = [];
// 	// Change code below this line
// 	firstArray.forEach(element => {
// 		if (secondArray.includes(element)) {
// 			commonElements.push(element);
// 		}
// 	});

// 	return commonElements;
// 	// Change code above this line
// }

// задача 8 _______________________________________________________________________________________________________

// Change code below this line

// const calculateTotalPrice = (quantity, pricePerItem) => {
//   // Change code above this line
//   return quantity * pricePerItem;
// }

// задача 9 _______________________________________________________________________________________________________

// Change code below this line
// const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;;
// // Change code above this line

// задача 10 _______________________________________________________________________________________________________

// Change code below this line
// const calculateTotalPrice = (orderedItems) => {
//   let totalPrice = 0;

//   orderedItems.forEach(item => {
//     totalPrice += item;
//   });

//   return totalPrice;
// }
// Change code above this line

// задача 11 _______________________________________________________________________________________________________

// Change code below this line
// const filterArray = (numbers, value) => {
//   const filteredNumbers = [];

//   numbers.forEach(number => {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   // Change code above this line
//   return filteredNumbers;
// }

// задача 12 _______________________________________________________________________________________________________

// Change code below this line
// const getCommonElements = (firstArray, secondArray) => {
//   const commonElements = [];

//   firstArray.forEach(element => {
//     if (secondArray.includes(element)) {
//       commonElements.push(element);
//     }
//   });

//   // Change code above this line
//   return commonElements;
// }

// задача 13 _______________________________________________________________________________________________________

// const changeEven = (numbers, value) => {
// 	// Change code below this line
// 	const newNum = [];
// 	numbers.forEach(element => {
// 		if (element % 2 === 0) {
// 			newNum.push(element + value);
// 		} else {
// 			newNum.push(element);
// 		}
// 	});
// 	return newNum;
// 	// Change code above this line
// };
// console.log(changeEven([1, 2, 3, 4, 5], 10));
// changeEven([1, 2, 3, 4, 5], 10);

// задача 14 _______________________________________________________________________________________________________

// const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// // Change code below this line
// const planetsLengths = planets.map(planet => planet.length);

// задача 15 _______________________________________________________________________________________________________

// const books = [
// 	{
// 		title: "The Last Kingdom",
// 		author: "Bernard Cornwell",
// 		rating: 8.38,
// 	},
// 	{
// 		title: "Beside Still Waters",
// 		author: "Robert Sheckley",
// 		rating: 8.51,
// 	},
// 	{
// 		title: "The Dream of a Ridiculous Man",
// 		author: "Fyodor Dostoevsky",
// 		rating: 7.75,
// 	},
// 	{ title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
// 	{ title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// // Change code below this line

// const titles = books.map(elemet => elemet.title);

// задача 16 _______________________________________________________________________________________________________

// const books = [
// 	{
// 		title: "The Last Kingdom",
// 		author: "Bernard Cornwell",
// 		genres: ["adventure", "history"],
// 	},
// 	{
// 		title: "Beside Still Waters",
// 		author: "Robert Sheckley",
// 		genres: ["fiction"],
// 	},
// 	{
// 		title: "Redder Than Blood",
// 		author: "Tanith Lee",
// 		genres: ["horror", "mysticism"],
// 	},
// ];
// // Change code below this line

// const genres = books.flatMap(elem => elem.genres);

// задача 17 _______________________________________________________________________________________________________

// Change code below this line
// const getUserNames = users => {
// 	const usetName = users.map(elem => elem.name);
// 	return usetName;
// };
// getUserNames([
// 	{
// 		name: "Moore Hensley",
// 		email: "moorehensley@indexia.com",
// 		eyeColor: "blue",
// 		friends: ["Sharron Pace"],
// 		isActive: false,
// 		balance: 2811,
// 		skills: ["ipsum", "lorem"],
// 		gender: "male",
// 		age: 37,
// 	},
// 	{
// 		name: "Sharlene Bush",
// 		email: "sharlenebush@tubesys.com",
// 		eyeColor: "blue",
// 		friends: ["Briana Decker", "Sharron Pace"],
// 		isActive: true,
// 		balance: 3821,
// 		skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
// 		gender: "female",
// 		age: 34,
// 	},
// 	{
// 		name: "Ross Vazquez",
// 		email: "rossvazquez@xinware.com",
// 		eyeColor: "green",
// 		friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
// 		isActive: false,
// 		balance: 3793,
// 		skills: ["nulla", "anim", "proident", "ipsum", "elit"],
// 		gender: "male",
// 		age: 24,
// 	},
// 	{
// 		name: "Elma Head",
// 		email: "elmahead@omatom.com",
// 		eyeColor: "green",
// 		friends: ["Goldie Gentry", "Aisha Tran"],
// 		isActive: true,
// 		balance: 2278,
// 		skills: ["adipisicing", "irure", "velit"],
// 		gender: "female",
// 		age: 21,
// 	},
// 	{
// 		name: "Carey Barr",
// 		email: "careybarr@nurali.com",
// 		eyeColor: "blue",
// 		friends: ["Jordan Sampson", "Eddie Strong"],
// 		isActive: true,
// 		balance: 3951,
// 		skills: ["ex", "culpa", "nostrud"],
// 		gender: "male",
// 		age: 27,
// 	},
// 	{
// 		name: "Blackburn Dotson",
// 		email: "blackburndotson@furnigeer.com",
// 		eyeColor: "brown",
// 		friends: ["Jacklyn Lucas", "Linda Chapman"],
// 		isActive: false,
// 		balance: 1498,
// 		skills: ["non", "amet", "ipsum"],
// 		gender: "male",
// 		age: 38,
// 	},
// 	{
// 		name: "Sheree Anthony",
// 		email: "shereeanthony@kog.com",
// 		eyeColor: "brown",
// 		friends: ["Goldie Gentry", "Briana Decker"],
// 		isActive: true,
// 		balance: 2764,
// 		skills: ["lorem", "veniam", "culpa"],
// 		gender: "female",
// 		age: 39,
// 	},
// ]);
// Change code above this line

// задача 18 _______________________________________________________________________________________________________

// Change code below this line
// const getUserEmails = users => {
// 	const usetName = users.map(el => el.email);
// 	return usetName;
// };
// Change code above this line

// задача 19 _______________________________________________________________________________________________________

// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Change code below this line

// const evenNumbers = numbers.filter(num => num % 2 === 0);
// const oddNumbers = numbers.filter(num => num % 2 !== 0);
// console.log(evenNumbers);

// задача 20 _______________________________________________________________________________________________________

// const books = [
// 	{
// 		title: "The Last Kingdom",
// 		author: "Bernard Cornwell",
// 		genres: ["adventure", "history"],
// 	},
// 	{
// 		title: "Beside Still Waters",
// 		author: "Robert Sheckley",
// 		genres: ["fiction", "mysticism"],
// 	},
// 	{
// 		title: "Redder Than Blood",
// 		author: "Tanith Lee",
// 		genres: ["horror", "mysticism", "adventure"],
// 	},
// ];
// // Change code below this line
// const allGenres = books.flatMap(el => el.genres);
// const uniqueGenres = allGenres.filter((course, index, array) => array.indexOf(course) === index);

// console.log(uniqueGenres);

// задача 21 _______________________________________________________________________________________________________

// const books = [
// 	{
// 		title: "The Last Kingdom",
// 		author: "Bernard Cornwell",
// 		rating: 8.38,
// 	},
// 	{
// 		title: "Beside Still Waters",
// 		author: "Robert Sheckley",
// 		rating: 8.51,
// 	},
// 	{
// 		title: "The Dream of a Ridiculous Man",
// 		author: "Fyodor Dostoevsky",
// 		rating: 7.75,
// 	},
// 	{ title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
// 	{ title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];

// const MIN_RATING = 8;
// const AUTHOR = "Bernard Cornwell";
// // Change code below this line

// const topRatedBooks = books.filter(el => el.rating >= MIN_RATING);
// const booksByAuthor = books.filter(el => el.author === AUTHOR);

// console.log(booksByAuthor);

// задача 22 _______________________________________________________________________________________________________

// // Change code below this line
// const getUsersWithEyeColor = (users, color) => {
// 	return users.filter(el => el.eyeColor === color);
// };
// // Change code above this line

// console.log(
// 	getUsersWithEyeColor(
// 		[
// 			{
// 				name: "Moore Hensley",
// 				email: "moorehensley@indexia.com",
// 				eyeColor: "blue",
// 				friends: ["Sharron Pace"],
// 				isActive: false,
// 				balance: 2811,
// 				gender: "male",
// 			},
// 			{
// 				name: "Sharlene Bush",
// 				email: "sharlenebush@tubesys.com",
// 				eyeColor: "blue",
// 				friends: ["Briana Decker", "Sharron Pace"],
// 				isActive: true,
// 				balance: 3821,
// 				gender: "female",
// 			},
// 			{
// 				name: "Ross Vazquez",
// 				email: "rossvazquez@xinware.com",
// 				eyeColor: "green",
// 				friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
// 				isActive: false,
// 				balance: 3793,
// 				gender: "male",
// 			},
// 			{
// 				name: "Elma Head",
// 				email: "elmahead@omatom.com",
// 				eyeColor: "green",
// 				friends: ["Goldie Gentry", "Aisha Tran"],
// 				isActive: true,
// 				balance: 2278,
// 				gender: "female",
// 			},
// 			{
// 				name: "Carey Barr",
// 				email: "careybarr@nurali.com",
// 				eyeColor: "blue",
// 				friends: ["Jordan Sampson", "Eddie Strong"],
// 				isActive: true,
// 				balance: 3951,
// 				gender: "male",
// 			},
// 			{
// 				name: "Blackburn Dotson",
// 				email: "blackburndotson@furnigeer.com",
// 				eyeColor: "brown",
// 				friends: ["Jacklyn Lucas", "Linda Chapman"],
// 				isActive: false,
// 				balance: 1498,
// 				gender: "male",
// 			},
// 			{
// 				name: "Sheree Anthony",
// 				email: "shereeanthony@kog.com",
// 				eyeColor: "brown",
// 				friends: ["Goldie Gentry", "Briana Decker"],
// 				isActive: true,
// 				balance: 2764,
// 				gender: "female",
// 			},
// 		],
// 		"green",
// 	),
// );

// задача 23 _______________________________________________________________________________________________________
// const user = [
// 	{
// 		name: "Moore Hensley",
// 		email: "moorehensley@indexia.com",
// 		eyeColor: "blue",
// 		friends: ["Sharron Pace"],
// 		isActive: false,
// 		balance: 2811,
// 		gender: "male",
// 		age: 37,
// 	},
// 	{
// 		name: "Sharlene Bush",
// 		email: "sharlenebush@tubesys.com",
// 		eyeColor: "blue",
// 		friends: ["Briana Decker", "Sharron Pace"],
// 		isActive: true,
// 		balance: 3821,
// 		gender: "female",
// 		age: 34,
// 	},
// 	{
// 		name: "Ross Vazquez",
// 		email: "rossvazquez@xinware.com",
// 		eyeColor: "green",
// 		friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
// 		isActive: false,
// 		balance: 3793,
// 		gender: "male",
// 		age: 24,
// 	},
// 	{
// 		name: "Elma Head",
// 		email: "elmahead@omatom.com",
// 		eyeColor: "green",
// 		friends: ["Goldie Gentry", "Aisha Tran"],
// 		isActive: true,
// 		balance: 2278,
// 		gender: "female",
// 		age: 21,
// 	},
// 	{
// 		name: "Carey Barr",
// 		email: "careybarr@nurali.com",
// 		eyeColor: "blue",
// 		friends: ["Jordan Sampson", "Eddie Strong"],
// 		isActive: true,
// 		balance: 3951,
// 		gender: "male",
// 		age: 27,
// 	},
// 	{
// 		name: "Blackburn Dotson",
// 		email: "blackburndotson@furnigeer.com",
// 		eyeColor: "brown",
// 		friends: ["Jacklyn Lucas", "Linda Chapman"],
// 		isActive: false,
// 		balance: 1498,
// 		gender: "male",
// 		age: 38,
// 	},
// 	{
// 		name: "Sheree Anthony",
// 		email: "shereeanthony@kog.com",
// 		eyeColor: "brown",
// 		friends: ["Goldie Gentry", "Briana Decker"],
// 		isActive: true,
// 		balance: 2764,
// 		gender: "female",
// 		age: 39,
// 	},
// ];

// // Change code below this line
// const getUsersWithAge = (users, minAge, maxAge) => {
// 	return users.filter(el => el.age > minAge && el.age < maxAge);
// };

// // Change code above this line

// console.log(getUsersWithAge(user, 20, 30));

// задача 24 _______________________________________________________________________________________________________
// const friends = [
// 	{
// 		name: "Moore Hensley",
// 		email: "moorehensley@indexia.com",
// 		eyeColor: "blue",
// 		friends: ["Sharron Pace"],
// 		isActive: false,
// 		balance: 2811,
// 		gender: "male",
// 		age: 37,
// 	},
// 	{
// 		name: "Sharlene Bush",
// 		email: "sharlenebush@tubesys.com",
// 		eyeColor: "blue",
// 		friends: ["Briana Decker", "Sharron Pace"],
// 		isActive: true,
// 		balance: 3821,
// 		gender: "female",
// 		age: 34,
// 	},
// 	{
// 		name: "Ross Vazquez",
// 		email: "rossvazquez@xinware.com",
// 		eyeColor: "green",
// 		friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
// 		isActive: false,
// 		balance: 3793,
// 		gender: "male",
// 		age: 24,
// 	},
// 	{
// 		name: "Elma Head",
// 		email: "elmahead@omatom.com",
// 		eyeColor: "green",
// 		friends: ["Goldie Gentry", "Aisha Tran"],
// 		isActive: true,
// 		balance: 2278,
// 		gender: "female",
// 		age: 21,
// 	},
// 	{
// 		name: "Carey Barr",
// 		email: "careybarr@nurali.com",
// 		eyeColor: "blue",
// 		friends: ["Jordan Sampson", "Eddie Strong"],
// 		isActive: true,
// 		balance: 3951,
// 		gender: "male",
// 		age: 27,
// 	},
// 	{
// 		name: "Blackburn Dotson",
// 		email: "blackburndotson@furnigeer.com",
// 		eyeColor: "brown",
// 		friends: ["Jacklyn Lucas", "Linda Chapman"],
// 		isActive: false,
// 		balance: 1498,
// 		gender: "male",
// 		age: 38,
// 	},
// 	{
// 		name: "Sheree Anthony",
// 		email: "shereeanthony@kog.com",
// 		eyeColor: "brown",
// 		friends: ["Goldie Gentry", "Briana Decker"],
// 		isActive: true,
// 		balance: 2764,
// 		gender: "female",
// 		age: 39,
// 	},
// ];

// // Change code below this line
// const getUsersWithFriend = (users, friendName) => {
// 	// return users.filter(el => );
// 	const msg = users.filter(user => user.friends.includes(friendName));
// 	return msg;
// };

// console.log(getUsersWithFriend(friends, "Briana Decker"));
// // Change code above this line

// задача 25 _______________________________________________________________________________________________________
// Change code below this line
// const a = [
// 	{
// 		name: "Moore Hensley",
// 		email: "moorehensley@indexia.com",
// 		eyeColor: "blue",
// 		friends: ["Sharron Pace"],
// 		isActive: false,
// 		balance: 2811,
// 		gender: "male",
// 		age: 37,
// 	},
// 	{
// 		name: "Sharlene Bush",
// 		email: "sharlenebush@tubesys.com",
// 		eyeColor: "blue",
// 		friends: ["Briana Decker", "Sharron Pace"],
// 		isActive: true,
// 		balance: 3821,
// 		gender: "female",
// 		age: 34,
// 	},
// 	{
// 		name: "Ross Vazquez",
// 		email: "rossvazquez@xinware.com",
// 		eyeColor: "green",
// 		friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
// 		isActive: false,
// 		balance: 3793,
// 		gender: "male",
// 		age: 24,
// 	},
// 	{
// 		name: "Elma Head",
// 		email: "elmahead@omatom.com",
// 		eyeColor: "green",
// 		friends: ["Goldie Gentry", "Aisha Tran"],
// 		isActive: true,
// 		balance: 2278,
// 		gender: "female",
// 		age: 21,
// 	},
// 	{
// 		name: "Carey Barr",
// 		email: "careybarr@nurali.com",
// 		eyeColor: "blue",
// 		friends: ["Jordan Sampson", "Eddie Strong"],
// 		isActive: true,
// 		balance: 3951,
// 		gender: "male",
// 		age: 27,
// 	},
// 	{
// 		name: "Blackburn Dotson",
// 		email: "blackburndotson@furnigeer.com",
// 		eyeColor: "brown",
// 		friends: ["Jacklyn Lucas", "Linda Chapman"],
// 		isActive: false,
// 		balance: 1498,
// 		gender: "male",
// 		age: 38,
// 	},
// 	{
// 		name: "Sheree Anthony",
// 		email: "shereeanthony@kog.com",
// 		eyeColor: "brown",
// 		friends: ["Goldie Gentry", "Briana Decker"],
// 		isActive: true,
// 		balance: 2764,
// 		gender: "female",
// 		age: 39,
// 	},
// ];

// const getFriends = users => {
// 	const allFriends = users.flatMap(el => el.friends);
// 	const unickFriends = allFriends.filter((el, index, array) => array.indexOf(el) === index);
// 	return unickFriends;
// };
// // Change code above this line
// console.log(getFriends(a));

// задача 26 _______________________________________________________________________________________________________

// Change code below this line
// const getActiveUsers = users => {
// 	const msg = users.filter(el => el.isActive === true);
// 	return msg;
// };
// Change code above this line

// задача 27 _______________________________________________________________________________________________________

// Change code below this line
// const getInactiveUsers = users => {
// 	const msg = users.filter(el => el.isActive === false);
// 	return msg;
// };
// Change code above this line

// задача 28 _______________________________________________________________________________________________________

// const books = [
// 	{
// 		title: "The Last Kingdom",
// 		author: "Bernard Cornwell",
// 		rating: 8.38,
// 	},
// 	{
// 		title: "Beside Still Waters",
// 		author: "Robert Sheckley",
// 		rating: 8.51,
// 	},
// 	{
// 		title: "The Dream of a Ridiculous Man",
// 		author: "Fyodor Dostoevsky",
// 		rating: 7.75,
// 	},
// 	{ title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
// ];
// const BOOK_TITLE = "The Dream of a Ridiculous Man";
// const AUTHOR = "Robert Sheckley";
// // Change code below this line

// const bookWithTitle = books.find(el => el.title === BOOK_TITLE);
// const bookByAuthor = books.find(el => el.author === AUTHOR);

// задача 29 _______________________________________________________________________________________________________

// Change code below this line
// const getUserWithEmail = (users, email) => {
// 	const msg = users.find(el => el.email === email);
// 	return msg;
// };
// Change code above this line

// задача 30 _______________________________________________________________________________________________________

// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change code below this line

// const eachElementInFirstIsEven = firstArray.every(el => el % 2 === 0);
// const eachElementInFirstIsOdd = firstArray.every(el => el % 2 !== 0);

// const eachElementInSecondIsEven = secondArray.every(el => el %2 ===0);
// const eachElementInSecondIsOdd = secondArray.every(el => el % 2 !== 0);

// const eachElementInThirdIsEven = thirdArray.every(el => el % 2 === 0);
// const eachElementInThirdIsOdd = thirdArray.every(el => el % 2 !== 0);

// задача 31 _______________________________________________________________________________________________________

// // Change code below this line
// const isEveryUserActive = users => {
// 	const msg = users.every(el => el.isActive === true);
// 	return msg;
// };
// // Change code above this line

// задача 32 _______________________________________________________________________________________________________

// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change below this line

// const anyElementInFirstIsEven = firstArray.some(el => el % 2 === 0);
// const anyElementInFirstIsOdd = firstArray.some(el => el % 2 !== 0);

// const anyElementInSecondIsEven = secondArray.some(el => el % 2 === 0);
// const anyElementInSecondIsOdd = secondArray.some(el => el % 2 !== 0);

// const anyElementInThirdIsEven = thirdArray.some(el => el % 2 === 0);
// const anyElementInThirdIsOdd = thirdArray.some(el => el % 2 !== 0);

// задача 33 _______________________________________________________________________________________________________

// const isAnyUserActive = users => {
// 	const msg = users.some(el => el.isActive === true);
// 	return msg;
// };

// задача 34 _______________________________________________________________________________________________________

// const players = {
// 	mango: 1270,
// 	poly: 468,
// 	ajax: 710,
// 	kiwi: 244,
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]
// // Change code below this line

// const totalPlayTime = playtimes.reduce((previousValue, number) => {
// 	return previousValue + number;
// });

// // Change code above this line
// const averagePlayTime = totalPlayTime / playtimes.length;

// задача 35 _______________________________________________________________________________________________________

// const players = [
// 	{ name: "Mango", playtime: 1270, gamesPlayed: 4 },
// 	{ name: "Poly", playtime: 469, gamesPlayed: 2 },
// 	{ name: "Ajax", playtime: 690, gamesPlayed: 3 },
// 	{ name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];
// // Change code below this line

// const totalAveragePlaytimePerGame = players.reduce((acc, el) => {
// 	console.log(acc);
// 	return acc + el.playtime / el.gamesPlayed;
// }, 0);
// console.log(totalAveragePlaytimePerGame);

// задача 36 _______________________________________________________________________________________________________

// Change code below this line
// const calculateTotalBalance = users => {
// 	return users.reduce((acc, el) => {
// 		return acc + el.balance;
// 	}, 0);
// };
// Change code above this line

// задача 37 _______________________________________________________________________________________________________

// const array = [
// 	{
// 		name: "Moore Hensley",
// 		email: "moorehensley@indexia.com",
// 		eyeColor: "blue",
// 		friends: ["Sharron Pace"],
// 		isActive: false,
// 		balance: 2811,
// 		gender: "male",
// 	},
// 	{
// 		name: "Sharlene Bush",
// 		email: "sharlenebush@tubesys.com",
// 		eyeColor: "blue",
// 		friends: ["Briana Decker", "Sharron Pace"],
// 		isActive: true,
// 		balance: 3821,
// 		gender: "female",
// 	},
// 	{
// 		name: "Ross Vazquez",
// 		email: "rossvazquez@xinware.com",
// 		eyeColor: "green",
// 		friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
// 		isActive: false,
// 		balance: 3793,
// 		gender: "male",
// 	},
// 	{
// 		name: "Elma Head",
// 		email: "elmahead@omatom.com",
// 		eyeColor: "green",
// 		friends: ["Goldie Gentry", "Aisha Tran"],
// 		isActive: true,
// 		balance: 2278,
// 		gender: "female",
// 	},
// 	{
// 		name: "Carey Barr",
// 		email: "careybarr@nurali.com",
// 		eyeColor: "blue",
// 		friends: ["Jordan Sampson", "Eddie Strong"],
// 		isActive: true,
// 		balance: 3951,
// 		gender: "male",
// 	},
// 	{
// 		name: "Blackburn Dotson",
// 		email: "blackburndotson@furnigeer.com",
// 		eyeColor: "brown",
// 		friends: ["Jacklyn Lucas", "Linda Chapman"],
// 		isActive: false,
// 		balance: 1498,
// 		gender: "male",
// 	},
// 	{
// 		name: "Sheree Anthony",
// 		email: "shereeanthony@kog.com",
// 		eyeColor: "brown",
// 		friends: ["Goldie Gentry", "Briana Decker"],
// 		isActive: true,
// 		balance: 2764,
// 		gender: "female",
// 	},
// ];
// // Change code below this line
// const getTotalFriendCount = users => {
// 	const friendsCount = users.reduce((acc, el) => {
// 		return acc + el.friends.length;
// 	}, 0);
// 	return friendsCount;
// };

// // Change code above this line
// console.log(getTotalFriendCount(array));

// const tweets = [
// 	{ id: "000", likes: 5, tags: ["js", "nodejs"] },
// 	{ id: "001", likes: 2, tags: ["html", "css"] },
// 	{ id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
// 	{ id: "003", likes: 8, tags: ["css", "react"] },
// 	{ id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

// Пройдемо по всіх елементах колекції і додамо значення властивості tags
// до акумулятора, початкове значення якого вкажемо порожнім масивом [].
// На кожній ітерації пушимо в акумулятор усі елементи tweet.tags і повертаємо його.
// const tags = tweets.reduce((allTags, tweet) => {
// 	allTags.push(...tweet.tags);

// 	return allTags;
// }, []);
// console.log(tags);

// // Мабуть, збирання тегів - не одиночна операція, тому напишемо функцію
// // для збирання тегів з колекції
// const getTags = tweets =>
// 	tweets.reduce((allTags, tweet) => {
// 		allTags.push(...tweet.tags);

// 		return allTags;
// 	}, []);

// console.log(getTags(tweets));

// задача 38 _______________________________________________________________________________________________________

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = ["Tanith Lee", "Bernard Cornwell", "Robert Sheckley", "Fyodor Dostoevsky"];
// // Change code below this line

// const ascendingReleaseDates = [...releaseDates].sort();

// const alphabeticalAuthors = [...authors].sort();
// console.log(releaseDates);
// console.log(ascendingReleaseDates);

// задача 39 _______________________________________________________________________________________________________

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// // Change code below this line

// const ascendingReleaseDates = [...releaseDates].sort((a, b) => a - b);

// const descendingReleaseDates = [...releaseDates].sort((a, b) => b - a);

// console.log(ascendingReleaseDates, descendingReleaseDates);

// задача 40 _______________________________________________________________________________________________________
// const authors = ["Tanith Lee", "Bernard Cornwell", "Robert Sheckley", "Fyodor Dostoevsky", "Howard Lovecraft"];
// // Change code below this line

// const authorsInAlphabetOrder = [...authors].sort((a, b) => a.localeCompare(b));

// const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a));

// задача 41 _______________________________________________________________________________________________________

// const books = [
// 	{
// 		title: "The Last Kingdom",
// 		author: "Bernard Cornwell",
// 		rating: 8.38,
// 	},
// 	{
// 		title: "Beside Still Waters",
// 		author: "Robert Sheckley",
// 		rating: 8.51,
// 	},
// 	{
// 		title: "The Dream of a Ridiculous Man",
// 		author: "Fyodor Dostoevsky",
// 		rating: 7.75,
// 	},
// 	{ title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
// 	{ title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// // Change code below this line

// const sortedByAuthorName = [...books].sort((firstAuthor, secondAuthor) =>
// 	firstAuthor.author.localeCompare(secondAuthor.author),
// );

// const sortedByReversedAuthorName = [...books].sort((firstAuthor, secondAuthor) =>
// 	secondAuthor.author.localeCompare(firstAuthor.author),
// );

// const sortedByAscendingRating = [...books].sort((first, sec) => first.rating - sec.rating);

// const sortedByDescentingRating = [...books].sort((first, sec) => sec.rating - first.rating);

// задача 42 _______________________________________________________________________________________________________

// const users = [
// 	{
// 		name: "Moore Hensley",
// 		email: "moorehensley@indexia.com",
// 		eyeColor: "blue",
// 		friends: ["Sharron Pace"],
// 		isActive: false,
// 		balance: 2811,
// 		gender: "male",
// 	},
// 	{
// 		name: "Sharlene Bush",
// 		email: "sharlenebush@tubesys.com",
// 		eyeColor: "blue",
// 		friends: ["Briana Decker", "Sharron Pace"],
// 		isActive: true,
// 		balance: 3821,
// 		gender: "female",
// 	},
// 	{
// 		name: "Ross Vazquez",
// 		email: "rossvazquez@xinware.com",
// 		eyeColor: "green",
// 		friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
// 		isActive: false,
// 		balance: 3793,
// 		gender: "male",
// 	},
// 	{
// 		name: "Elma Head",
// 		email: "elmahead@omatom.com",
// 		eyeColor: "green",
// 		friends: ["Goldie Gentry", "Aisha Tran"],
// 		isActive: true,
// 		balance: 2278,
// 		gender: "female",
// 	},
// 	{
// 		name: "Carey Barr",
// 		email: "careybarr@nurali.com",
// 		eyeColor: "blue",
// 		friends: ["Jordan Sampson", "Eddie Strong"],
// 		isActive: true,
// 		balance: 3951,
// 		gender: "male",
// 	},
// 	{
// 		name: "Blackburn Dotson",
// 		email: "blackburndotson@furnigeer.com",
// 		eyeColor: "brown",
// 		friends: ["Jacklyn Lucas", "Linda Chapman"],
// 		isActive: false,
// 		balance: 1498,
// 		gender: "male",
// 	},
// 	{
// 		name: "Sheree Anthony",
// 		email: "shereeanthony@kog.com",
// 		eyeColor: "brown",
// 		friends: ["Goldie Gentry", "Briana Decker"],
// 		isActive: true,
// 		balance: 2764,
// 		gender: "female",
// 	},
// ];

// задача 42 _______________________________________________________________________________________________________

// Change code below this line
// const sortByAscendingBalance = users => {
// 	const sortPrice = [...users].sort((first, second) => first.balance - second.balance);
// 	return sortPrice;
// };
// Change code above this line

// задача 43 _______________________________________________________________________________________________________

// Change code below this line
// const sortByDescendingFriendCount = users => {
// 	const descSortPrice = [...users].sort((first, sec) => sec.friends.length - first.friends.length);
// 	return descSortPrice;
// };
// Change code above this line

// задача 44 _______________________________________________________________________________________________________

// const sortByName = users => {
// 	const nameSort = [...users].sort((first, sec) => first.name.localeCompare(sec.name));
// 	return nameSort;
// };

// console.log(sortByAscendingBalance(users));

// задача 45 _______________________________________________________________________________________________________

// const books = [
// 	{
// 		title: "The Last Kingdom",
// 		author: "Bernard Cornwell",
// 		rating: 8.38,
// 	},
// 	{
// 		title: "Beside Still Waters",
// 		author: "Robert Sheckley",
// 		rating: 8.51,
// 	},
// 	{
// 		title: "The Dream of a Ridiculous Man",
// 		author: "Fyodor Dostoevsky",
// 		rating: 7.75,
// 	},
// 	{ title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
// 	{
// 		title: "The Dreams in the Witch House",
// 		author: "Howard Lovecraft",
// 		rating: 8.67,
// 	},
// ];
// const MIN_BOOK_RATING = 8;
// // Change code below this line

// const names = books
// 	.filter(el => el.rating >= MIN_BOOK_RATING)
// 	.map(el => el.author)
// 	.sort((first, sec) => first.localeCompare(sec));

// console.log(names);

// задача 46 _______________________________________________________________________________________________________
const array = [
	{
		name: "Moore Hensley",
		email: "moorehensley@indexia.com",
		eyeColor: "blue",
		friends: ["Sharron Pace"],
		isActive: false,
		balance: 2811,
		gender: "male",
	},
	{
		name: "Sharlene Bush",
		email: "sharlenebush@tubesys.com",
		eyeColor: "blue",
		friends: ["Briana Decker", "Sharron Pace"],
		isActive: true,
		balance: 3821,
		gender: "female",
	},
	{
		name: "Ross Vazquez",
		email: "rossvazquez@xinware.com",
		eyeColor: "green",
		friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
		isActive: false,
		balance: 3793,
		gender: "male",
	},
	{
		name: "Elma Head",
		email: "elmahead@omatom.com",
		eyeColor: "green",
		friends: ["Goldie Gentry", "Aisha Tran"],
		isActive: true,
		balance: 2278,
		gender: "female",
	},
	{
		name: "Carey Barr",
		email: "careybarr@nurali.com",
		eyeColor: "blue",
		friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
		isActive: true,
		balance: 3951,
		gender: "male",
	},
	{
		name: "Blackburn Dotson",
		email: "blackburndotson@furnigeer.com",
		eyeColor: "brown",
		friends: ["Jacklyn Lucas", "Linda Chapman", "Adrian Cross", "Solomon Fokes"],
		isActive: false,
		balance: 1498,
		gender: "male",
	},
	{
		name: "Sheree Anthony",
		email: "shereeanthony@kog.com",
		eyeColor: "brown",
		friends: ["Goldie Gentry", "Briana Decker"],
		isActive: true,
		balance: 2764,
		gender: "female",
	},
];

// задача 46 _______________________________________________________________________________________________________

// Change code below this line
// const getNamesSortedByFriendCount = users => {
// 	const userFriendsHight = [...users]
// 		.sort((first, sec) => first.friends.length - sec.friends.length)
// 		.map(el => el.name);
// 	return userFriendsHight;
// };
// Change code above this line

// задача 47 _______________________________________________________________________________________________________

// Change code below this line
console.time("start 1");
const getSortedFriends = users => {
	const a = [...users]
		.flatMap(el => el.friends)
		.filter((el, index, array) => array.indexOf(el) === index)
		.sort((first, sec) => first.localeCompare(sec));
	return a;
};
console.timeEnd("start 1");

console.time("start 2");
const getSortedFriends2 = users => {
	return Array.from(new Set([...users.flatMap(el => el.friends).sort((first, sec) => first.localeCompare(sec))]));
};
console.timeEnd("start 2");
// задача 48 _______________________________________________________________________________________________________

// Change code below this line
// const getTotalBalanceByGender = (users, gender) => {
// 	const balance = users.filter(el => el.gender === gender).reduce((acc, el) => (acc += el.balance), 0);
// 	return balance;
// };
// Change code above this line

console.log(getSortedFriends(array));

console.log(getSortedFriends2(array));

// 1 дізнатись к-сьб друзів юзера
// 2 узерів повернути в 1 масив
// 3 відсотувати їх по іменно
