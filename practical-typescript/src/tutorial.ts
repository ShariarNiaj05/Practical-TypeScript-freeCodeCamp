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

/* let prices: number[] = [100, 75, 42, 34];
// prices.push("hello") // error

let fruit: string[] = ["apple", "orange"];

// let randomValues: [] = "Hello"; //Type 'string' is not assignable to type '[]'

let array: (string | boolean)[] = ['apple', true, 'orange', false]; */

// Array challenge

/* Create an array temperatures of type number[] and assign it some values. Then, try to add a string value to it.
Create an array colors of type string[] and assign it some values. Then, try to add a boolean value to it.
Create an array mixedArray of type(number | string)[] and assign it some values.Then, try to add a boolean value to it. */

/* // 1. Temperatures
let temperatures: number[] = [20, 25, 30];
// temperatures.push('hot'); // This will result in a TypeScript error

// 2. Colors
let colors: string[] = ['red', 'green', 'blue'];
// colors.push(true); // This will result in a TypeScript error

// 3. Mixed Array
let mixedArray: (number | string)[] = [1, 'two', 3];
// mixedArray.push(true); // This will result in a TypeScript error */

// ----------------Objects - Fundamentals

/* let car: { brand: string; year: number } = {
  brand: "BMW",
  year: 2015,
};

car.brand = "Ford";

// car.color = "Read" // error

let car1: { brand: string; year: number } = {
  brand: "Audi",
  year: 2019,
};

let book = { title: "book", cost: 20 };
let pen = { title: "pen", cost: 20 };
let notebook = { title: "notebook" };

let items: { title: string; cost: number }[] = [book, pen, notebook];

//for notebook: Property 'cost' is missing in type '{ title: string; }' but required in type '{ title: string; cost: number; }

let item1: { title: string; cost?: number }[] = [book, pen, notebook];

// now cost is optional

let item2: { readonly title: string; cost?: number }[] = [book, pen, notebook];

items[0].title = 'new book'; // Error: Cannot assign to 'title' because it is a read-only property */
/* 
// Object Challenges
// 1. Create an object bike of type { brand: string, year: number } and assign it some values. Then, try to assign a string to the year property.
let bike: { brand: string; year: number } = { brand: 'Yamaha', year: 2010 };
// bike.year = 'old'; // This will result in a TypeScript error

// 2. Create an object laptop of type { brand: string, year: number } and try to assign an object with missing year property to it.

let laptop: { brand: string; year: number } = { brand: 'Dell', year: 2020 };
// let laptop2: { brand: string, year: number } = { brand: 'HP' }; // This will result in a TypeScript error

// 3. Create an array products of type { title: string, price?: number }[] and assign it some values. Then, try to add an object with a price property of type string to it.
let product1 = { title: 'Shirt', price: 20 };
let product2 = { title: 'Pants' };
let products: { title: string; price?: number }[] = [product1, product2];
// products.push({ title: 'Shoes', price: 'expensive' }); // This will result in a TypeScript error */

// Functions - Fundamentals

/* function sayHi(name: string) {
  console.log(`Hello there ${name.toUpperCase()}!!!`);
} */

/* const sayHi = (name: string): void => {
  console.log(`Hello there ${name.toUpperCase()}!!!`);
};

sayHi("john"); */
// sayHi(3)
// sayHi('peter', 'random');

function calculateDiscount(price: number): number {
  return price * 0.9;
}

const finalPrice = calculateDiscount(200);
