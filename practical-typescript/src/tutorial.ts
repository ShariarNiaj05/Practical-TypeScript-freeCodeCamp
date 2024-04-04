/* let awesomeName: string = "shakeAndBake";

awesomeName = "new name";
// awesomeName = 20; // not possible for number type. awesomeName only takes type string!

let amount: number = 20;

amount = 12 - 1;
// amount = "3 Pants"; // not possible for string type. amount only takes type number! */

/* let gretings: string = "Hello";
gretings = "good afternoon";

let age: number = 20;
age = age + 5; */

// gretings = 24; // not possible
// age = "-5"; // not possible

// -------------------Union Type --------------------
/* let tax: string | number = 10;
tax = 100;
tax = "10$";

let requestStatus: "pending" | "Success" | "error" = "pending";

requestStatus = "Success"

// -------------------Any Type --------------------
let notSure: any = 4;
notSure = 'maybe a string instead';
notSure = false; // okay, definitely a boolean */

/* const books = ["1984", "Brave new world", "Fahrenheit 451"];

let foundBook: string | undefined;

for (let book of books) {
  if (book === "1984") {
    foundBook = book;
    foundBook = foundBook.toUpperCase();
    break;
  }
}

console.log(foundBook);
 */

// -------------Challenges for any -------------
/* let discount: number | string = 20;
discount = "20%";
// discount = true; // This will result in a TypeScript error

let orderStatus: "processing" | "shipped" | "delivered" = "processing";
orderStatus = "shipped";
// orderStatus = 'cancelled'; // This will result in a TypeScript error */

// --------Arrays - Fundamentals-------

let prices: number[] = [100, 75, 42, 34];
// prices.push("hello") // error

let fruit: string[] = ["apple", "orange"];

// let randomValues: [] = "Hello"; //Type 'string' is not assignable to type '[]'

let array: (string | boolean)[] = ['apple', true, 'orange', false];