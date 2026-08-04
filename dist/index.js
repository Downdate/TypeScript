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
//# sourceMappingURL=index.js.map