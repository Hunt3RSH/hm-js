// Переробите наведений код так, щоб у ньому використовувалися операції +=, -=, *=, /=, ++, --.
//Кількість рядків коду не повинна змінитися. Код для переробки:

// let num = 1;
// num += 12;
// num -= 14;
// num *= 5;
// num /= 7;
// num += 1;
// num -= 1;

// Попросіть користувача ввести 3 імені та прізвища, наприклад, студентів.
// Виведіть введені дані методом console.log
// у вигляді абзаців та нумерованого списку.

// function stud(name, surName) {
// 	const user1 = prompt("Ведіть ПІБ");
// 	const user2 = prompt("Ведіть ПІБ");
// 	const user3 = prompt("Ведіть ПІБ");
// 	console.log(`1й ${user1}\n2й ${user2}\n3й ${user3}`);
// }
// stud();

// function getExtremeElements(array) {
// 	const first = array[0];
// 	const last = array[array.length - 1];
// 	console.log(last);
// 	console.table(first);
// 	return [first, last];
// }
// console.log(getExtremeElements(["a", "b", "c", "d", "e"]));

// задача 10 _______________________________________________________________________________________________________
// function splitMessage(message, delimeter) {
// 	let words;
// 	words = message.split(delimeter);

// 	// Change code above this line
// 	return words;
// }

// console.log(splitMessage("Mango hurries to the train", " "));

// задача 11 _______________________________________________________________________________________________________

// function calculateEngravingPrice(message, pricePerWord) {
// 	// Change code below this line
// 	message = message.split(" ");
// 	console.log(message);
// 	const mas = message.length;
// 	console.log(mas);
// 	return mas * pricePerWord;
// 	// Change code above this line
// }
// console.log(calculateEngravingPrice("JavaScript is in my blood", 10));

// задача 12 _______________________________________________________________________________________________________

// function makeStringFromArray(array, delimeter) {
// 	let string;
// 	// Change code below this line
// 	string = array.join(delimeter);
// 	// Change code above this line
// 	return string;
// }
// console.log(makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " "));

// задача 13 _______________________________________________________________________________________________________

// function slugify(title) {
// 	// Change code below this line
// 	const lower = title.toLowerCase();
// 	console.log(lower);
// 	const split = lower.split(" ");
// 	console.log(split);
// 	const slug = split.join("-");
// 	return slug;
// 	// Change code above this line
// }

// console.log(slugify("Arrays for begginers"));

// задача 14 _______________________________________________________________________________________________________

// const fruits = ["apple", "plum", "pear", "orange", "banana"];

// // Change code below this line
// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, 4);
// const lastThreeEls = fruits.slice(-3);
// console.log(nonExtremeEls);

// задача 15 _______________________________________________________________________________________________________

// const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
// const newClients = ["Peach", "Houston"];

// const allClients = oldClients.concat(newClients); // Change this line

// задача 16 _______________________________________________________________________________________________________

// function makeArray(firstArray, secondArray, maxLength) {
// 	// Change code below this line
// 	const max = firstArray.concat(secondArray).slice(0, maxLength);
// 	console.log(max);
// 	return max;

// 	// Change code above this line
// }
// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));

// задача 17 _______________________________________________________________________________________________________

// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i += 1) {
// 	// Change this line
// 	console.log(i);
// }

// задача 18 _______________________________________________________________________________________________________

// function calculateTotal(number) {
// 	// Change code below this line
// 	let total = 0;
// 	for (let i = 1; i <= number; i += 1) {
// 		console.table(i);
// 		total += i;
// 	}
// 	return total;
// 	// Change code above this line
// }
// console.log(calculateTotal(3));

// задача 19 _______________________________________________________________________________________________________

// const fruits = ["apple", "plum", "pear", "orange"];

// for (let i = 0; i < fruits.length; i += 1) {
// 	// Change this line
// 	const fruit = fruits[i]; // Change this line
// 	console.log(fruit);
// }

// задача 20 _______________________________________________________________________________________________________

// function calculateTotalPrice(order) {
// 	let total = 0;
// 	// Change code below this line
// 	for (const orders of order) {
// 		total += orders;
// 	}

// 	// Change code above this line
// 	return total;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));

// задача 21 _______________________________________________________________________________________________________

// function findLongestWord(string) {
// 	// Change code below this line
// 	let arrStr = string.split(" ");
// 	let wordLength = 0;
// 	let longestWord;

// 	for (let i = 0; i < arrStr.length; i += 1) {
// 		wordLength = arrStr[1].length;

// 		if (arrStr[i].length > wordLength) {
// 			longestWord = arrStr[i];

// 			return longestWord;
// 		}
// 	}

// 	// Change code above this line
// }
// console.log(findLongestWord("Thequickbrown foxjumped overthelazyfdfffffffdfdfdog"));

// задача 22 _______________________________________________________________________________________________________

// function createArrayOfNumbers(min, max) {
// 	const numbers = [];
// 	// Change code below this line
// 	for (let i = min; i <= max; i += 1) {
// 		numbers.push(i);
// 	}
// 	// Change code above this line
// 	return numbers;
// }
// console.log(createArrayOfNumbers(14, 17));

// задача 23 _______________________________________________________________________________________________________

// function filterArray(numbers, value) {
// 	// Change code below this line
// 	const mass = [];
// 	// console.log(numbers);
// 	for (const i of numbers) {
// 		console.log(i);
// 		if (i > value) {
// 			mass.push(i);
// 		}
// 	}

// 	return mass;
// 	// Change code above this line
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));

// задача 24 _______________________________________________________________________________________________________

// function checkFruit(fruit) {
// 	const fruits = ["apple", "plum", "pear", "orange"];

// 	return fruits.includes(fruit); // Change this line
// }

// checkFruit("plum");
// checkFruit("mandarin");

// задача 25 _______________________________________________________________________________________________________

// Спільними елементами масивів називають ті елементи, які присутні у всіх масивах.

// 	Наприклад, у двох масивах[1, 3, 5] і[0, 8, 5, 3] спільними будуть числа 3 і 5,
// 	оскільки вони присутні в обох вихідних масивах.А числа 0, 1 і 8 присутні
// 	тільки в одному з масивів.

// Напиши функцію getCommonElements(array1, array2),
// яка отримує два масиви довільної довжини в параметри array1 і array2,
// і повертає новий масив, що складається з тих елементів,
// які присутні в обох вихідних масивах.

// function getCommonElements(array1, array2) {
// 	// Change code below this line
// 	const element = [];

// 	for (const elementMass of array1) {
// 		if (array2.includes(elementMass)) {
// 			element.push(elementMass);
// 			console.log(elementMass);
// 		}
// 	}

// 	return element;
// 	// Change code above this line
// }
// console.log(getCommonElements([1, 2, 3], [2, 4]));
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));

// задача 26 _______________________________________________________________________________________________________

// function calculateTotalPrice(order) {
// 	let total = 0;
// 	// Change code below this line

// 	for (const totalSum of order) {
// 		total += totalSum;
// 	}

// 	// Change code above this line
// 	return total;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));

// задача 27 _______________________________________________________________________________________________________

// function filterArray(numbers, value) {
// 	// Change code below this line
// 	const filteredNumbers = [];

// 	for (const number of numbers) {
// 		if (number > value) {
// 			filteredNumbers.push(number);
// 		}
// 	}

// 	return filteredNumbers;
// 	// Change code above this line
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3));

// задача 28 _______________________________________________________________________________________________________

// Change code below this line
// const a = 3 % 1;
// const b = 4 % 3;
// const c = 11 % 4;
// const d = 12 % 7;
// const e = 8 % 6;

// console.log(a, b, c, d, e);

// задача 29 _______________________________________________________________________________________________________

// Напиши функцію getEvenNumbers(start, end),
// яка повертає масив усіх парних чисел від start до end.
// Парним вважається число, яке ділиться на 2 без остачі(10 % 2 === 0).

// function getEvenNumbers(start, end) {
// 	// Change code below this line
// 	const mass = [];
// 	for (let i = start; i <= end; i += 1) {
// 		console.log(i);
// 		if (i % 2 === 0) {
// 			mass.push(i);
// 		}
// 	}

// 	return mass;
// 	// Change code above this line
// }
// console.log(getEvenNumbers(3, 11));

// задача 30 _______________________________________________________________________________________________________

// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
// 	if (i % 5 === 0) {
// 		number = i;
// 		break;
// 	}
// }

// задача 31 _______________________________________________________________________________________________________

// function findNumber(start, end, divisor) {
// 	// Change code below this line
// 	let number;

// 	for (let i = start; i < end; i += 1) {
// 		if (i % divisor === 0) {
// 			return (number = i);
// 		}
// 	}

// 	return number;
// 	// Change code above this line
// }

// findNumber(2, 6, 5);

// findNumber(8, 17, 3);

// задача 32 _______________________________________________________________________________________________________

// function includes(array, value) {
// 	// Change code below this line
// 	for (const element of array) {
// 		if (element === value) {
// 			return true;
// 		}
// 	}
// 	return false;
// 	// Change code above this line
// }

// console.log(includes([1, 2, 3, 4, 5], 17));
// console.log(includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter"));
