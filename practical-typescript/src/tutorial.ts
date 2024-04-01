/* let awesomeName: string = "shakeAndBake";

awesomeName = "new name";
// awesomeName = 20; // not possible for number type. awesomeName only takes type string!

let amount: number = 20;

amount = 12 - 1;
// amount = "3 Pants"; // not possible for string type. amount only takes type number! */

let gretings: string = "Hello";
gretings = "good afternoon";

let age: number = 20;
age = age + 5;

// gretings = 24; // not possible
// age = "-5"; // not possible

// -------------------Union Type --------------------
let tax: string | number = 10;
tax = 100;
tax = "10$";

let requestStatus: "pending" | "Success" | "error" = "pending";

requestStatus = 
