// задача 1 _______________________________________________________________________________________________________

// const apartment = {
// 	imgUrl: "https://via.placeholder.com/640x480",
// 	descr: "Spacious apartment in the city center",
// 	rating: 4,
// 	price: 2153,
// 	tags: ["premium", "promoted", "top"],
// };
// console.log(apartment);

// задача 2 _______________________________________________________________________________________________________

// const apartment = {
// 	imgUrl: "https://via.placeholder.com/640x480",
// 	descr: "Spacious apartment in the city center",
// 	rating: 4,
// 	price: 2153,
// 	tags: ["premium", "promoted", "top"],
// 	owner: {
// 		name: "Henry",
// 		phone: "982-126-1588",
// 		email: "henry.carter@aptmail.com",
// 	},
// };

// console.log(apartment);

// задача 3 _______________________________________________________________________________________________________

// const apartment = {
// 	imgUrl: "https://via.placeholder.com/640x480",
// 	descr: "Spacious apartment in the city center",
// 	rating: 4,
// 	price: 2153,
// 	tags: ["premium", "promoted", "top"],
// };

// // Change code below this line
// const aptRating = apartment.rating;
// const aptDescr = apartment.descr;
// const aptPrice = apartment.price;
// const aptTags = apartment.tags;
// // Change code above this line
// console.log(aptTags);

// задача 4 _______________________________________________________________________________________________________

// const apartment = {
// 	imgUrl: "https://via.placeholder.com/640x480",
// 	descr: "Spacious apartment in the city center",
// 	rating: 4,
// 	price: 2153,
// 	tags: ["premium", "promoted", "top"],
// 	owner: {
// 		name: "Henry",
// 		phone: "982-126-1588",
// 		email: "henry.carter@aptmail.com",
// 	},
// };

// // Change code below this line
// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags.at(-1);
// // Change code above this line
// console.log(firstTag);
// console.log(lastTag);

// задача 5 _______________________________________________________________________________________________________

// const apartment = {
// 	imgUrl: "https://via.placeholder.com/640x480",
// 	descr: "Spacious apartment in the city center",
// 	rating: 4,
// 	price: 2153,
// 	tags: ["premium", "promoted", "top"],
// };

// // Change code below this line
// const aptRating = apartment["rating"];
// const aptDescr = apartment["descr"];
// const aptPrice = apartment["price"];
// const aptTags = apartment["tags"];
// // Change code above this line
// console.log(aptTags);

// задача 6 _______________________________________________________________________________________________________

// const apartment = {
// 	imgUrl: "https://via.placeholder.com/640x480",
// 	descr: "Spacious apartment in the city center",
// 	rating: 4,
// 	price: 2153,
// 	tags: ["premium", "promoted", "top"],
// 	owner: {
// 		name: "Henry",
// 		phone: "982-126-1588",
// 		email: "henry.carter@aptmail.com",
// 	},
// };

// // Change code below this line
// apartment.rating = 4.7;
// apartment.price = 5000;
// apartment.tags.push("trusted");
// apartment.owner.name = "Henry Sibola";
// console.log(apartment);

// задача 7 _______________________________________________________________________________________________________

// const apartment = {
// 	imgUrl: "https://via.placeholder.com/640x480",
// 	descr: "Spacious apartment in the city center",
// 	rating: 4.7,
// 	price: 5000,
// 	tags: ["premium", "promoted", "top", "trusted"],
// 	owner: {
// 		name: "Henry Sibola",
// 		phone: "982-126-1588",
// 		email: "henry.carter@aptmail.com",
// 	},
// };

// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = {};
// apartment.location.country = "Jamaica";
// apartment.location.city = "Kingston";
// console.log(apartment);

// задача 8 _______________________________________________________________________________________________________

// const name = "Repair Droid";
// const price = 2500;
// const image = "https://via.placeholder.com/640x480";
// const tags = ["on sale", "trending", "best buy"];

// const product = {
// 	// Change code below this line
// 	name,
// 	price,
// 	image,
// 	tags,
// 	// Change code above this line
// };
// console.log(product);

// задача 9 _______________________________________________________________________________________________________

// const emailInputName = "email";
// const passwordInputName = "password";

// const credentials = {
// 	// Change code below this line
// 	[emailInputName]: "henry.carter@aptmail.com",
// 	[passwordInputName]: "jqueryismyjam",
// 	// Change code above this line
// };

// console.log(credentials);

// задача 10 _______________________________________________________________________________________________________

// const apartment = {
// 	descr: "Spacious apartment in the city center",
// 	rating: 4,
// 	price: 2153,
// };
// const keys = [];
// const values = [];
// // Change code below this line
// for (const key in apartment) {
// 	keys.push(key);
// 	values.push(apartment[key]);
// }
// console.log(values);
// // console.log(keys);

// задача 11 _______________________________________________________________________________________________________

// const keys = [];
// const values = [];
// const advert = {
// 	service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
// 	// Change code below this line
// 	if (apartment.hasOwnProperty(key)) {
// 		keys.push(key);
//         values.push(apartment[key]);
// 	}
// 	// Change code above this line
// }

// задача 12 _______________________________________________________________________________________________________

// function countProps(object) {
// 	let propCount = 0;
// 	// Change code below this line
// 	for (const item in object) {
// 		if (object.hasOwnProperty(item)) {
// 			propCount += 1;
// 		}
// 	}

// 	// Change code above this line
// 	return propCount;
// }
// console.log(countProps({ name: "Mango", age: 2 }));

// задача 13 _______________________________________________________________________________________________________

// const apartment = {
// 	descr: "Spacious apartment in the city center",
// 	rating: 4,
// 	price: 2153,
// };
// const values = [];
// // Change code below this line
// const keys = Object.keys(apartment);

// for (const item of keys) {
// 	values.push(apartment[item]);
// }
// console.log(values);

// задача 14 _______________________________________________________________________________________________________

// function countProps(object) {
// 	// Change code below this line
// 	let propCount = 0;
// 	const keys = Object.keys(object);
// 	for (const key of keys) {
// 		propCount++;
// 	}

// 	return propCount;
// 	// Change code above this line
// }
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));

// задача 15 _______________________________________________________________________________________________________

// const apartment = {
// 	descr: "Spacious apartment in the city center",
// 	rating: 4,
// 	price: 2153,
// };
// // Change code below this line
// const keys = Object.keys(apartment);
// const values = Object.values(apartment);

// console.log(keys, values);

// задача 16 _______________________________________________________________________________________________________

// function countTotalSalary(salaries) {
// 	let totalSalary = 0;
// 	// Change code below this line
// 	for (const item in salaries) {
// 		if (salaries.hasOwnProperty(item)) {
// 			totalSalary += salaries[item];
// 		}
// 	}
// 	// Change code above this line
// 	return totalSalary;
// }
// console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }));

// задача 17 _______________________________________________________________________________________________________

// const colors = [
// 	{ hex: "#f44336", rgb: "244,67,54" },
// 	{ hex: "#2196f3", rgb: "33,150,243" },
// 	{ hex: "#4caf50", rgb: "76,175,80" },
// 	{ hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line
// for (const item of colors) {
// 	hexColors.push(item["hex"]);
// 	rgbColors.push(item["rgb"]);
// }
// console.log(hexColors, rgbColors);

// задача 18 _______________________________________________________________________________________________________

// const products = [
// 	{ name: "Radar", price: 1300, quantity: 4 },
// 	{ name: "Scanner", price: 2700, quantity: 3 },
// 	{ name: "Droid", price: 400, quantity: 7 },
// 	{ name: "Grip", price: 1200, quantity: 9 },
// ];
// function getProductPrice(productName) {
// 	// Change code below this line
// 	for (const item of products) {
// 		if (item.name === productName) {
// 			return item.price;
// 		}
// 	}
// 	return null;
// 	// Change code above this line
// }

// console.log(getProductPrice("Droid"));

// задача 19 _______________________________________________________________________________________________________

// const products = [
// 	{ name: "Radar", price: 1300, quantity: 4 },
// 	{ name: "Scanner", price: 2700, quantity: 3 },
// 	{ name: "Droid", price: 400, quantity: 7 },
// 	{ name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
// 	// Change code below this line
// 	const array = [];
// 	for (const item of products) {
// 		if (item.hasOwnProperty(propName)) {
// 			// console.log(item);
// 			array.push(item[propName]);
// 		}
// 	}
// 	return array;
// 	// Change code above this line
// }

// console.log(getAllPropValues("name"));

// задача 20 _______________________________________________________________________________________________________

// const products = [
// 	{ name: "Radar", price: 1300, quantity: 4 },
// 	{ name: "Scanner", price: 2700, quantity: 3 },
// 	{ name: "Droid", price: 400, quantity: 7 },
// 	{ name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
// 	// Change code below this line
// 	for (const item of products) {
// 		if (item.name === productName) {
// 			return item.price * item.quantity;
// 		}
// 	}
// 	return 0;
// 	// Change code above this line
// }
// console.log(calculateTotalPrice("Raddar"));

// задача 21 _______________________________________________________________________________________________________

// const highTemperatures = {
// 	yesterday: 28,
// 	today: 26,
// 	tomorrow: 33,
// };
// // Change code below this line

// const { yesterday, today, tomorrow } = highTemperatures;

// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;

// console.log(meanTemperature);

// задача 22 _______________________________________________________________________________________________________

// const highTemperatures = {
// 	yesterday: 28,
// 	today: 26,
// 	tomorrow: 33,
// };
// // Change code below this line

// const {
// 	yesterday,
// 	today,
// 	tomorrow,
// 	icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
// } = highTemperatures;

// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;

// задача 23 _______________________________________________________________________________________________________

// const highTemperatures = {
// 	yesterday: 28,
// 	today: 26,
// 	tomorrow: 33,
// };
// // Change code below this line

// const {
// 	yesterday: highYesterday,
// 	today: highToday,
// 	tomorrow: highTomorrow,
// 	icon: highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
// } = highTemperatures;

// // Change code above this line
// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;

// задача 24 _______________________________________________________________________________________________________

// const colors = [
// 	{ hex: "#f44336", rgb: "244,67,54" },
// 	{ hex: "#2196f3", rgb: "33,150,243" },
// 	{ hex: "#4caf50", rgb: "76,175,80" },
// 	{ hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line

// for (const { hex, rgb } of colors) {
// 	hexColors.push(hex);
// 	rgbColors.push(rgb);
// }

// задача 25 _______________________________________________________________________________________________________

// const forecast = {
// 	today: {
// 		low: 28,
// 		high: 32,
// 		icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
// 	},
// 	tomorrow: {
// 		low: 27,
// 		high: 31,
// 	},
// };
// // Change code below this line

// const {
// 	today: {
// 		low: lowToday,
// 		high: highToday,
// 		icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
// 	},
// 	tomorrow: {
// 		low: lowTomorrow,
// 		high: highTomorrow,
// 		icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
// 	},
// } = forecast;

// задача 26 _______________________________________________________________________________________________________

// function calculateMeanTemperature(forecast) {
// 	const {
// 		today: { low: todayLow, high: todayHigh },
// 		tomorrow: { low: tomorrowLow, high: tomorrowHigh },
// 	} = forecast;
// 	// Change code above this line
// 	return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }
// console.log(calculateMeanTemperature({ today: { low: 28, high: 32 }, tomorrow: { low: 25, high: 29 } }));

// задача 27 _______________________________________________________________________________________________________

// const scores = [89, 64, 42, 17, 93, 51, 26];
// // Change code below this line
// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);
// console.log(bestScore);

// задача 28 _______________________________________________________________________________________________________

// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// // Change code below this line
// const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);

// задача 29 _______________________________________________________________________________________________________

// const defaultSettings = {
// 	theme: "light",
// 	public: true,
// 	withPassword: false,
// 	minNumberOfQuestions: 10,
// 	timePerQuestion: 60,
// };
// const overrideSettings = {
// 	public: false,
// 	withPassword: true,
// 	timePerQuestion: 30,
// };
// // Change code below this line
// const finalSettings = { ...defaultSettings, ...overrideSettings };

// console.log(finalSettings);

// задача 30 _______________________________________________________________________________________________________

// function makeTask(data) {
// 	const completed = false;
// 	const category = "General";
// 	const priority = "Normal";
// 	// Change code below this line
// 	const data2 = {
// 		category,
// 		priority,
// 		completed,
// 		...data,
// 	};
// 	return data2;
// 	// Change code above this line
// }
// console.log(makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" }));

// задача 31 _______________________________________________________________________________________________________

// // Change code below this line
// function add(...args) {
// 	// const summ = Object.values(args);
// 	let total = 0;
// 	for (const value of args) {
// 		total += value;
// 	}
// 	return total;
// 	// Change code above this line
// }

// console.log(add(15, 27));
// console.log(add(12, 4, 11, 48));

// задача 32 _______________________________________________________________________________________________________

// Change code below this line
// function addOverNum(num, ...args) {
// 	let total = 0;

// 	for (const arg of args) {
// 		if (arg > num) {
// 			total += arg;
// 		}
// 	}

// 	return total;
// 	// Change code above this line
// }

// console.log(addOverNum(20, 74, 11, 62, 46, 12, 36));

// задача 33 _______________________________________________________________________________________________________

// // Change code below this line
// function findMatches(num, ...args) {
// 	const matches = []; // Don't change this line
// 	for (const item2 of num) {
// 		for (const item of args) {
// 			// console.log(item);
// 			if (item === item2) {
// 				matches.push(item);
// 			}
// 		}
// 	}
// 	// Change code above this line
// 	return matches;
// }
// console.log(findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41));

// задача 34 _______________________________________________________________________________________________________

// const bookShelf = {
// 	// Change code below this line
// 	books: ["The last kingdom", "The guardian of dreams"],
// 	getBooks() {
// 		return "Returning all books";
// 	},
// 	addBook(bookName) {
// 		return `Adding book ${bookName}`;
// 	},
// 	removeBook(bookName) {
// 		return `Deleting book ${bookName}`;
// 	},
// 	updateBook(oldName, newName) {
// 		return `Updating book ${oldName} to ${newName}`;
// 	},
// 	// Change code above this line
// };
// console.log(bookShelf.removeBook("Red sunset"));

// задача 35 _______________________________________________________________________________________________________

// const bookShelf = {
// 	books: ["The last kingdom", "Haze", "The guardian of dreams"],

// 	updateBook(oldName, newName) {
// 		// Change code below this line
// 		const oldName1 = this.books.indexOf(oldName);
// 		this.books.splice(oldName1, 1, newName);
// 		// Change code above this line
// 	},
// };
// console.log(bookShelf.updateBook("Haze", "Dungeon chronicles"));

// задача 36 _______________________________________________________________________________________________________

// const atTheOldToad = {
// 	// Change code below this line
// 	potions: [],
// 	// Change code above this line
// };

// задача 37 _______________________________________________________________________________________________________

// const atTheOldToad = {
// 	potions: ["Speed potion", "Dragon breath", "Stone skin"],
// 	// Change code below this line
// 	getPotions() {
// 		return this.potions;
// 	},
// 	// Change code above this line
// };

// задача 38 _______________________________________________________________________________________________________

// const atTheOldToad = {
// 	potions: ["Speed potion", "Dragon breath", "Stone skin"],
// 	addPotion(potionName) {
// 		// Change code below this line
// 		this.potions.push(potionName);
// 		// Change code above this line
// 	},
// };

// задача 39 _______________________________________________________________________________________________________

// const atTheOldToad = {
// 	potions: ["Speed potion", "Dragon breath", "Stone skin"],
// 	removePotion(potionName) {
// 		// Change code below this line
// 		const removePotion = this.potions.indexOf(potionName);
// 		this.potions.splice(removePotion, 1);
// 		// Change code above this line
// 	},
// };

// задача 40 _______________________________________________________________________________________________________

// const atTheOldToad = {
// 	potions: ["Speed potion", "Dragon breath", "Stone skin"],
// 	updatePotionName(oldName, newName) {
// 		// Change code below this line
// 		const removePotion = this.potions.indexOf(oldName);
// 		this.potions.splice(removePotion, 1, newName);
// 		// Change code above this line
// 	},
// };

// задача 41 _______________________________________________________________________________________________________

const atTheOldToad = {
	potions: [
		{ name: "Speed potion", price: 460 },
		{ name: "Dragon breath", price: 780 },
		{ name: "Stone skin", price: 520 },
	],
	// Change code below this line
	getPotions() {
		return this.potions;
	},
	addPotion(newPotion) {
		for (const item of this.potions) {
			if (item.name === newPotion.name) {
				return `Error! Potion ${newPotion.name} is already in your inventory!`;
			}
		}

		this.potions.push(newPotion);
	},
	removePotion(potionName) {
		for (const key of this.potions) {
			if (key.name === potionName) {
				this.potions.splice(this.potions.indexOf(key), 1);
			}
		}

		return `Potion ${potionName} is not in inventory!`;
	},

	updatePotionName(oldName, newName) {
		for (const key of this.potions) {
			if (key.name === oldName) {
				key.name = newName;
				console.log(this.potions);
			}
		}
		return `Potion ${oldName} is not in inventory!`;
	},
	// Change code above this line
};

console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth"));
