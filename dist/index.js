"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let age = 5;
let name = "Fera";
let flag = true;
let nameNull = null;
// Undefined
let a;
a = 12;
console.log(a);
let b = 12212132n;
// Symbol
const sym1 = Symbol();
const sym2 = Symbol();
const id = Symbol("id");
let User = {
    name: "Jax",
    [id]: 123
};
console.log(User.name);
// enums 
var Status;
(function (Status) {
    Status["online"] = "ONLINE";
    Status["offline"] = "OFFLINE";
    Status["away"] = "AWAY";
    Status["donotdisturb"] = "DO_NOT_DISTURB";
})(Status || (Status = {}));
;
let userStatus = Status.online;
console.log(userStatus);
console.log("user logged off!");
userStatus = Status.offline;
console.log(userStatus);
// explicit function
function add(a, b) {
    return a + b;
}
function print(message = "Hello world!") {
    console.log(message);
}
function greet(name, numberOfGreetings) {
    for (let i = 0; i < numberOfGreetings; i++) {
        console.log(`Hello ${name}! ${i + 1}`);
    }
}
greet("Dani", 2);
// REST parameters
function sum(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}
console.log(sum(1, 2, 3, 4, 5)); // Output: 15
console.log(sum(10, 20)); // Output: 30
// infinite functions using 'never' type
function throwError(message) {
    throw new Error(message);
}
// generics 
function identity(arg) {
    return arg;
}
console.log(identity("Hello")); // Output: Hello
console.log(identity(42)); // Output: 42
function swap(a, b) {
    return [b, a];
}
console.log(swap("Hello", "World")); // Output: ["World", "Hello"]
console.log(swap(42, 24)); // Output: [24, 42]
function printSomething(a, b, c) {
    console.log(`Printing value 'a': ${a}, Printing value 'b': ${b}, Printing value 'c': ${c}`);
}
printSomething("Hello", 42, true);
printSomething(123, true, false);
//classes and constructor
class Car {
    // properties of the class
    brand;
    model;
    price;
    //constructor to initialize the car object
    constructor(brand, model, price) {
        this.brand = brand;
        this.model = model;
        this.price = price;
    }
    // method to display car information
    displayInformation() {
        console.log(`Car Brand: ${this.brand}`);
        console.log(`Model: ${this.model}`);
        console.log(`Price: ${this.price}`);
    }
}
console.log("=====================================");
let myCar = new Car("Toyota", "Camry", 30000);
myCar.displayInformation();
console.log("=====================================");
let carNumberTwo = new Car("Mazda", "Mayata", 20000);
carNumberTwo.displayInformation();
console.log("=====================================");
// inheritance
class ElectricCar extends Car {
    batteryCapacity;
    distancePerCharge;
    constructor(brand, model, price, batteryCapacity, distancePerCharge) {
        super(brand, model, price);
        this.batteryCapacity = batteryCapacity;
        this.distancePerCharge = distancePerCharge;
    }
    displayInformation() {
        console.log("=====================================");
        super.displayInformation();
        console.log(`Battery Capacity: ${this.batteryCapacity}`);
        console.log(`Distance Per Charge: ${this.distancePerCharge}`);
        console.log("=====================================");
    }
    chargeBattery() {
        console.log("=====================================");
        console.log(`Charging the battery of ${this.brand} ${this.model}...`);
        console.log("=====================================");
    }
}
let tesla = new ElectricCar("Tesla", "Model S", 80000, 100, 370);
tesla.displayInformation();
tesla.chargeBattery();
//# sourceMappingURL=index.js.map