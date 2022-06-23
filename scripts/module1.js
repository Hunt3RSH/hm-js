// Задача 5 ///////////////////////////////////////////////////////

// const productName = "Droid";
// const pricePerItem = 3500;
// const message = `You picked ${productName}, price per item is ${pricePerItem} credits`;
// console.log(message);

// Задача 6 ///////////////////////////////////////////////////////

// const orderedQuantity = 6;
// const pricePerDroid = 800;
// const deliveryFee = 50;
// const totalPrice = ((pricePerDroid * orderedQuantity) + deliveryFee);
// const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;

// console.log(totalPrice)
// console.log(message)

// Задача 7 ///////////////////////////////////////////////////////

// function sayHi() {
//     console.log('Hello, this is my first function!')
// }
// sayHi()

// Задача 8 ///////////////////////////////////////////////////////

// function add(a, b, c) {
//     console.log(`Addition result equals ${a + b + c}`);
//   }

//   add(15, 27, 10);
//   add(10, 20, 30);
//   add(5, 10, 15);

// Задача 9 ///////////////////////////////////////////////////////

// function add(a, b, c) {
//     return a + b + c
//   }

//   let result = add(2, 5, 8);
//   console.log(result)

//   console.log(add(15, 27, 10));
//   console.log(add(10, 20, 30));
//   console.log(add(5, 10, 15));

// Задача 10 ///////////////////////////////////////////////////////

// function makeMessage (name, price) {
//      const message = `You picked ${name}, price per item is ${price} credits`;
//     return message;
//   };

//   console.log(makeMessage(`Radar`, 6150));
//   console.log(makeMessage('Scanner', 3500));
//   console.log(makeMessage(`Reactor`, 8000));
//   console.log(makeMessage(`Engine`, 4070));

// Задача 11 ///////////////////////////////////////////////////////

// function calculateTotalPrice (orderedQuantity, pricePerItem) {
//     const totalPrice = (orderedQuantity * pricePerItem);

//     return totalPrice;
//   };
//   console.log(calculateTotalPrice(5, 100));
//   console.log(calculateTotalPrice(8, 60));
//   console.log(calculateTotalPrice(3, 400));
//   console.log(calculateTotalPrice(1, 3500));
//   console.log(calculateTotalPrice(12, 70));

// Задача 12 ///////////////////////////////////////////////////////

// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
//     const message = `You ordered droids worth ${((orderedQuantity*pricePerDroid)+deliveryFee)} credits. Delivery (${deliveryFee} credits) is included in total price.`
//     return message;
//   }
//     console.log(makeOrderMessage(2, 100, 50));
//     console.log(makeOrderMessage(4, 300, 100));
//     console.log(makeOrderMessage(10, 70, 200));

// Задача 13 ///////////////////////////////////////////////////////

// function isAdult(age) {
//     const passed = (age >= 18);
//     return passed;
//   }
//   console.log(isAdult(20))
//   console.log(isAdult(14))
//   console.log(isAdult(8))
//   console.log(isAdult(37))

// Задача 14 ///////////////////////////////////////////////////////

// function isValidPassword(password) {
//     const SAVED_PASSWORD = 'jqueryismyjam';
//     const isMatch = password === SAVED_PASSWORD;

//     return isMatch;
//   }
//   console.log(isValidPassword("mangodab3st"))
//   console.log(isValidPassword("kiwirul3z"))
//   console.log(isValidPassword("jqueryismyjam"))

// Задача 15 ///////////////////////////////////////////////////////

//   function checkAge(age) {
//     let message;

//     if (age >= 18) {
//       message = 'You are an adult';
//     } else {
//       message = 'You are a minor';
//     }

//     return message;
//   }
//   console.log(checkAge(20))
//   console.log(checkAge(8))
//   console.log(checkAge(14))
//   console.log(checkAge(38))

// Задача 16 ///////////////////////////////////////////////////////
//   function checkStorage(available, ordered) {
//     let message;
//     if (available < ordered){
//         message = `Not enough goods in stock!`
//     } else {
//         message = `Order is processed, our manager will contact you.`
//     }
//     return message;
//   }

//     console.log(checkStorage(100, 50))
//     console.log(checkStorage(100, 130))
//     console.log(checkStorage(200, 20))
//     console.log(checkStorage(200, 150))
//     console.log(checkStorage(150, 180))

// Задача 18 ///////////////////////////////////////////////////////

//   function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//     let message;
//     let totalPrice;
//     totalPrice = (pricePerDroid * orderedQuantity)
//     let balance
//     balance = (customerCredits-totalPrice)
//     if (totalPrice <= customerCredits) {
//         message = `You ordered ${orderedQuantity} droids, you have ${balance} credits left`;
//     } else {
//         message = `Insufficient funds!`;
//     }

//     return message;
//   }

//   console.log((makeTransaction(3000, 5, 23000)))
//   console.log((makeTransaction(1000, 3, 15000)))
//   console.log((makeTransaction(5000, 10, 8000)))
//   console.log((makeTransaction(2000, 8, 10000)))
//   console.log((makeTransaction(500, 10, 5000)))

// Задача 19 ///////////////////////////////////////////////////////

//   function checkPassword(password) {
//     const ADMIN_PASSWORD = 'jqueryismyjam';
//     let message;

//     if (password === null) {
//       message =  'Canceled by user!';
//     } else if (password === ADMIN_PASSWORD) {
//       message = 'Welcome!';
//     } else {
//       message = 'Access denied, wrong password!';
//     }

//     return message;
//   }

// Задача 20 ///////////////////////////////////////////////////////

// function checkStorage(available, ordered) {
//     let message;
//         if (ordered === 0) {
//   message =  'There are no products in the order!';
// } else if (ordered > available) {
//   message = 'Your order is too large, there are not enough items in stock!';
// } else {
//   message = 'The order is accepted, our manager will contact you';
// }
//     return message;
//   }

// Задача 21 //////////////////////////////////////////////////////

// function isNumberInRange(start, end, number) {
// 	const isInRange = number > start && number < end;

// 	return isInRange;
// }
// console.log(isNumberInRange(10, 30, 17));
// console.log(isNumberInRange(10, 30, 5));

// Задача 22 //////////////////////////////////////////////////////

// function checkIfCanAccessContent(subType) {
//   const canAccessContent = subType === "pro" || subType === "vip" ;

//   return canAccessContent;
// }

// console.log(checkIfCanAccessContent("pro"));
// console.log(checkIfCanAccessContent("starter"));
// console.log(checkIfCanAccessContent("vip"));
// console.log(checkIfCanAccessContent("free"));

// Задача 23 //////////////////////////////////////////////////////

// function isNumberNotInRange(start, end, number) {
//     const isInRange = number >= start && number <= end;
//     const isNotInRange = !isInRange;

//     return isNotInRange;
// }

// console.log(isNumberNotInRange(10, 30, 17))
// console.log(isNumberNotInRange(10, 30, 5))

// Задача 24 ////////////////////////////////////////////////////// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// function getDiscount(totalSpent) {
// 	const BASE_DISCOUNT = 0;
// 	const BRONZE_DISCOUNT = 0.02;
// 	const SILVER_DISCOUNT = 0.05;
// 	const GOLD_DISCOUNT = 0.1;
//     let discount;
//     if (totalSpent < 5000) {
//         discount = BASE_DISCOUNT
//     } else if (totalSpent >= 5000 && 20000 > totalSpent) {
//         discount = BRONZE_DISCOUNT
//     } else if (totalSpent >= 20000 && 50000 > totalSpent) {
//         discount = SILVER_DISCOUNT
//     } else if (totalSpent >= 50000) {
//         discount = GOLD_DISCOUNT
//     }
// 	return discount;
// }

// console.log(getDiscount(137000));
// console.log(getDiscount(46900));
// console.log(getDiscount(8250));
// console.log(getDiscount(1300));
// console.log(getDiscount(5000));

// Задача 25 //////////////////////////////////////////////////////

// function checkStorage(available, ordered) {
//     let message;
//     message = ordered > available ? "Not enough goods in stock!" : "The order is accepted, our manager will contact you";

//     return message;
// }
// console.log(checkStorage(100, 100));

// Задача 26 //////////////////////////////////////////////////////

// function checkPassword(password) {
// 	const ADMIN_PASSWORD = "jqueryismyjam";
//     let message;
//     message = password === ADMIN_PASSWORD ? "Access is allowed" : "Access denied, wrong password!";
// 	return message;
// }
// console.log(checkPassword("jqueryismyjam"));
// console.log(checkPassword("angul4r1sl1f3"));

// Задача 27 ////////////////////////////////////////////////////// 222222222222222222222222222222222222222222222222222222222222222222222222222222222222

// function getSubscriptionPrice(type) {
// 	let price;

// 	switch (type) {
// 		case "starter":
// 			price = 0;
// 			break;

// 		case "professional":
// 			price = 20;
// 			break;

// 		case "organization":
// 			price = 50;
// 			break;
// 	}

// 	return price;
// }

// console.log(getSubscriptionPrice("organization"));
// console.log(getSubscriptionPrice("starter"));
// console.log(getSubscriptionPrice("professional"));

// Задача 28 //////////////////////////////////////////////////////

// function checkPassword(password) {
// 	const ADMIN_PASSWORD = "jqueryismyjam";
// 	let message;
//     switch (password) {
// 			case null:
// 				message = "Canceled by user!";
// 				break;

// 			case ADMIN_PASSWORD:
// 				message = "Welcome!";
// 				break;

//             default:
// 				message = "Access denied, wrong password!";
// 		}

// 	return message;
// }

// console.log(checkPassword("mangohackzor"));
// console.log(checkPassword(null));
// console.log(checkPassword("polyhax"));
// console.log(checkPassword("jqueryismyjam"));

// Задача 29 //////////////////////////////////////////////////////

function getShippingCost(country) {
    let message;
    
	return message;
}
