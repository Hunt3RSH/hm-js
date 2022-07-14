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

// задача 2 _______________________________________________________________________________________________________

function makePizza(pizzaName, callback) {
	console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
	callback(pizzaName);
}

makePizza("Royal Grand", function deliverPizza(pizzaName) {
	console.log(`Delivering pizza ${pizzaName}.`);
});
// Change code below this line

makePizza("Ultracheese", eatPizza);
