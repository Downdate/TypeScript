 let age: number = 5;
 let name: string = "Fera";
 let flag: boolean = true;

 let nameNull: string | null = null;

// Undefined

let a :number;
a = 12;
console.log(a);

let b : bigint = 12212132n;

// Symbol

const sym1 = Symbol();

const sym2 = Symbol();

const id = Symbol("id") ;
let User = {
    name: "Jax",
    [id]: 123
};

console.log(User.name);


// enums 
enum Status{
    online = "ONLINE",
    offline = "OFFLINE",
    away = "AWAY",
    donotdisturb = "DO_NOT_DISTURB"
};

let userStatus: Status = Status.online;

console.log(userStatus);

console.log("user logged off!");

userStatus = Status.offline;

console.log(userStatus);

// explicit function

function add(a: number, b: number): number {
    return a + b;
}

function print(message: string ="Hello world!"): void {
    console.log(message);
}

function greet(name: string, numberOfGreetings: number): void{
    for(let i = 0; i < numberOfGreetings; i++){
        console.log(`Hello ${name}! ${i + 1}`);
    }
}

greet("Dani", 2);


// REST parameters

function sum(...numbers: number[]): number {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum(1, 2, 3, 4, 5)); // Output: 15
console.log(sum(10, 20)); // Output: 30

// infinite functions using 'never' type

function throwError(message: string): never {
    throw new Error(message);
}

// generics 

function identity<T>(arg: T): T {
    return arg;
}

console.log(identity<string>("Hello")); // Output: Hello
console.log(identity<number>(42)); // Output: 42

function swap<T>(a: T, b: T): [T, T] {
    return [b, a];
}

console.log(swap("Hello", "World")); // Output: ["World", "Hello"]
console.log(swap(42, 24)); // Output: [24, 42]

function printSomething<T,U,V>(a: T, b: U, c: V): void {
    console.log(`Printing value 'a': ${a}, Printing value 'b': ${b}, Printing value 'c': ${c}`);

}

printSomething<string, number, boolean>("Hello", 42, true);
printSomething<number,boolean,boolean>(123, true, false);


//classes and constructor

class Car {

    // properties of the class
    brand: string;
    model: string;
    price: number;

    //constructor to initialize the car object
    constructor(brand: string, model: string, price: number){
        this.brand = brand;
        this.model = model;
        this.price = price;
    }

    // method to display car information
    displayInformation(): void {
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

    batteryCapacity: number;
    distancePerCharge: number;

    constructor(brand: string, model: string, price: number, batteryCapacity: number, distancePerCharge: number){
        super(brand, model, price);
        this.batteryCapacity = batteryCapacity;
        this.distancePerCharge = distancePerCharge;
    }

    displayInformation(): void {
        console.log("=====================================");
        super.displayInformation();
        console.log(`Battery Capacity: ${this.batteryCapacity}`);
        console.log(`Distance Per Charge: ${this.distancePerCharge}`);
        console.log("=====================================");
    }
     
    chargeBattery(): void {
        console.log("=====================================");
        console.log(`Charging the battery of ${this.brand} ${this.model}...`);
        console.log("=====================================");
    }


}

let tesla = new ElectricCar("Tesla", "Model S", 80000, 100, 370);
tesla.displayInformation();
tesla.chargeBattery();

// interfaces

interface Person {
    name: string;
    age: number;
    greet(): void;
}

class Student implements Person {

    name: string;
    age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }

    greet(): void {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }

}

let student1 = new Student("Alice", 20);
student1.greet();       

// modules

import { addNumbers, PI } from "./math";

console.log(addNumbers(5, 3));
console.log(PI);


