/**
 * VAriables and Values
 */
let age: number = 6;
// age = "salam"; // ERROR ===> Not assignable to number

/**
 * Functions
 */

// function add(a: number, b: number): number {
//   return a + b;
// }

// console.log(add(4, 6));

// function add2(a: number, b: number) {
//   return a + b;
// }

// console.log(add2(2, add2(5, 10)));

/**
 * Objects
 */

let car: {
  name: string;
  model: string;
  price: number;
  isSold: boolean;
};

/**
 * Optional Properities
 */

let car2: {
  name: string;
  model: string;
  price: number;
  isSold: boolean;
  chargeVoltage?: number; // Optional Part
};

car2.chargeVoltage = 220;

// car2.name = 23; // ERROR ===> Not assignable to string

// Key and value decleration

const phones: { [key: string]: string } = {
  country: "azerbaijan",
  area: "baku",
  number: "123456",
};

/**
 * Arrays
 */

const fileExtensions: string[] = ["html", "css", "js"];

const cars = [
  {
    make: "audi",
    model: "r8",
    year: 2019,
  },
];

/**
 *Structural vs Nominal Typing
 */

// Structural Typing

class Car {
  make: string;
  model: string;
  year: number;
  isElectric: boolean;
}

class Truck {
  make: string;
  model: string;
  year: number;
  towingCapacity: number;
}
const veichle = {
  make: "audi",
  model: "r8",
  year: 2019,
  isElectric: false,
};

/**
 * Union Types
 */

// Union meaning that a variable can be one of the types in the union
// Union types are denoted with a pipe (|) between the types
// let x: number | string; ( | ) pipe means or

/**
 * Intersection Types
 */

// Intersection types are : meaning that a variable must be all of the types in the intersection
