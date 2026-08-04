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