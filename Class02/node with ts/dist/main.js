"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Hello from typescript");
const message = "Hello, typescript";
console.log(message);
// Basic types
let isDone = true;
let isCompleted;
isCompleted = false;
let color = "blue";
const currentYear = 2024;
// Type inference
let fullName = "John Doe";
fullName = "Bob Bobski";
// fullName = 1231; // error
// Types on functions
const addNumber = (numberOne, numberTwo) => {
    // :number => means, the return type of this function is of type number
    return numberOne + numberTwo;
};
console.log(addNumber(4, 10));
const personOne = {
    firstName: "John",
    lastName: "Doe",
    age: 29,
    isAdult: true,
    address: "Some address",
    buildingName: undefined,
};
console.log(personOne);
const animal = {
    name: "Milka",
    type: "cow",
};
console.log(animal);
const orderID = "2";
const secondOrderID = 2;
const myPet = {
    name: "Bubi",
    type: "small angry dog",
    breed: "chiwawa",
};
// ANY => It is not recommended
let randomValue;
randomValue = 5;
randomValue = "some else";
randomValue = false;
// Typescript with arrays
const basket = ["Bread", "Milk", "Cherries"]; // string[] => the values in the array are going to be string
