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