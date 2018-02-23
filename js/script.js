// // 1) strings
// var string = "Hello";
// // string += " World"; // uncomment to test
// string = string + " World";
// console.log(string + "!");

// // 2) equality
// var x = 4, y = 4;
// if (x == y) {
//   console.log("x=4 is equal to y=4");
// }
// if (x === y) {
//   console.log("Strict: x=4 is equal to y=4");
// } else {
//   console.log("Strict: x=4 is NOT equal to y=4");
// }


// x = "4";
// if (x == y) {
//   console.log("x='4' is equal to y=4");
// }
// if (x === y) {
//   console.log("Strict: x='4' is equal to y=4");
// } else {
//   console.log("Strict: x='4' is NOT equal to y=4");
// }

// // 3) truthy vs falsy
// if ( false || null || undefined || "" || 0 || NaN) {
//   console.log("Will this ever execute?");
// } else {
//   console.log ("All false");
// }

// if (true && "hello" && 1 && -1 && "false") {
//   console.log("All true");
// } else {
//   console.log("Something was false");
// }

// // 4) for loops
// var sum = 0;
// for (var i = 0; i < 10; i++) {
//   console.log(i);
//   sum = sum + i;
// }
// console.log("sum of 0 through 9 is: " + sum);

// // 5) objects
// var company = new Object();
// // this is the long way to use an object.
// company.name = "Facebook";
// company.ceo = new Object();
// company.ceo.firstName = "Mark";
// company.ceo.favColor = "blue";
// console.dir(company);
// console.log("Company CEO name is: " + company.ceo.firstName);

// var stockPropName = "stock of company";
// company[stockPropN
// console.log("Stock price is: " + company[stockPropName]);ame] = 182;



// // this is the faster way
// var facebook = {
//   name: "Facebook",
//   ceo: {
//     firstName: "Mark",
//     favColor: "blue"
//   },
//   "stock of company": 182
// };
// console.dir(facebook);
// console.log(company == facebook ? "too good": "to be true")

// 6) copy primitives
// var a = 7;
// var b = a;
// console.log("a: " + a);
// console.log("b: " + b);

// b = 5;
// console.log("after b update:");
// console.log("a: " + a);
// console.log("b: " + b);

// 8) copy objects
// var a = { x: 7 };
// var b = a;
// console.log(a);
// console.log(b);

// b.x = 5;
// console.log("after b.x update:");
// console.log(a);
// console.log(b);

// // 7) Arrays
// var array = new Array();
// array[0] = "Dave";
// array[1] = 2;
// array[2] = function (name) {
//   console.log("Hello " + name);
// };
// array[3] = {course: "Javascript"};

// console.log(array);
// array[2](array[0]);
// console.log(array[3].course);

// 8) More arrays
// var names = ["Dave", "John", "Joe"];
// console.log(names);

// for (var i = 0; i < names.length; i++) {
//   console.log("Hello " + names[i]);
// }
// for (var i in names){
//   console.log("Hi @"+ i +" = " + names[i]);
// }

// // 9)
// var names = ["Dave", "John", "Joe"];
// names[100] = "Jim";
// for (var i = 0; i < names.length; i++) {
//   console.log("Hello " + names[i]);
// }


// Activity 16
// 1) What is wrong with this code?
function a()
{
  return value =
  {
    name: "James T. Kirk",
    starship: "Enterprise"
  };
}

function b() {
  return  value = {
      name: "James T. Kirk",
      starship: "Enterprise"
  };
}

console.log(a());
console.log(b());

// 2) function default parameter values
// function orderChickenWith(sideDish) {
//   sideDish = sideDish || "whatever!";
//   console.log("Chicken with " + sideDish);
// }

// orderChickenWith("noodles");
// orderChickenWith();

// 3) pass by ____
// function changePrimitive(primValue) {
//   console.log("in changePrimitive...");
//   console.log("before:");
//   console.log(primValue);

//   primValue = 5;
//   console.log("after:");
//   console.log(primValue);
// }

// var value = 7;
// changePrimitive(value); // primValue = value
// console.log("after changePrimitive, orig value:");
// console.log(value);

// 4) pass by ____
function changeObject(objValue) {
  console.log("in changeObject...");
  console.log("before:");
  console.log(objValue);

  objValue.x = 5;
  console.log("after:");
  console.log(objValue);
}

value = { x: 7 };
changeObject(value); // objValue = value
console.log("after changeObject, orig value:");
console.log(value);

// 5) Create an ES5 style class called Books that has three properties: title, author, and price. Include this in a separate JS file, then in a new JS file, use your book class as described here.

// var b1 = new Book(
//   "Harry Potter and the Deathly Hallows",
//   "J.K. Rowling",
//   10.49
//   )
// var b2 = new Book(
//   "Harry Potter and the Philosopher's Stone",
//   "J.K. Rowling",
//   10.62
// )
// var b3 = new Book(
//   "You Don't Know JS",
//   "Kyle Simpson",
//   2.99
// )
// var books = [b1, b2, b3];

// // sort by price ascending (lowest to highest)
// // display the books
// // sort by price descending (highest to lowest)
// // display the books
// // did everything work as expected???

// 13) Repeat 5, but now use a ES6-style class.
