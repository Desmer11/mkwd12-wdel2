console.log("Hello from typescript");

const message: string = "Hello, typescript";
console.log(message);

// Basic types
let isDone: boolean = true;
let isCompleted: boolean;
isCompleted = false;

let color: string = "blue";

const currentYear: number = 2024;

// Type inference
let fullName = "John Doe";
fullName = "Bob Bobski";

// fullName = 1231; // error

// Types on functions
const addNumber = (numberOne: number, numberTwo: number): number => {
  // :number => means, the return type of this function is of type number
  return numberOne + numberTwo;
};

console.log(addNumber(4, 10));

// Complex types
interface Person {
  firstName: string;
  lastName: string;
  age: number;
  isAdult: boolean;
  address: null | string; // union of 2 types, meaning the value may be of type null OR string
  buildingName: undefined | string;

  gender?: string; // ? => this property is optional, meaning this property may exist or may not exist in the object using this interface
}

const personOne: Person = {
  firstName: "John",
  lastName: "Doe",
  age: 29,
  isAdult: true,

  address: "Some address",
  buildingName: undefined,
};

console.log(personOne);

type Animal = {
  name: string;
  type: string;
};

const animal: Animal = {
  name: "Milka",
  type: "cow",
};

console.log(animal);

type UniqueID = string | number; // cannot be achieved with interfaces

const orderID: UniqueID = "2";
const secondOrderID: UniqueID = 2;

type Dog = Animal & {
  breed: string;
};

const myPet: Dog = {
  name: "Bubi",
  type: "small angry dog",
  breed: "chiwawa",
};

// ANY => It is not recommended
let randomValue: any;
randomValue = 5;
randomValue = "some else";
randomValue = false;

// Typescript with arrays

const basket: string[] = ["Bread", "Milk", "Cherries"]; // string[] => the values in the array are going to be string
