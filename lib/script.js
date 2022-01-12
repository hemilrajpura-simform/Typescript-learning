"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.emplyoee = void 0;
console.log("hello");
var a = 12;
var b = "hello world";
console.log(b);
/* arrays */
var aa = [];
aa.push(12);
/* tuple */
let oneTuple = [
    158,
    "Hemil Rajpura"
];
let twoTuple = [
    158
]; // '?' means Studentname maybe there or may not be there
let ee = { userId: 158, userName: "hemil" };
let unionInterface = {
    name: "hemil",
    email: "hemil.r",
    number: 780
};
console.log(unionInterface.email);
/* functions */
function println(str) {
    console.log(str);
}
println("Hello by funciton");
// classes
class emplyoee {
    constructor(name, email) {
        this.email = email;
        this.name = name;
    }
}
exports.emplyoee = emplyoee;
//abstract class
class AbsClass {
    constructor(name) {
        this.name = name;
        this.name = name;
    }
}
class childClass extends AbsClass {
    constructor(name) {
        super(name);
    }
    sendSms() {
        console.log("child class implemented");
        this.phone = 5;
    }
}
const obj = new childClass("hemil");
//# sourceMappingURL=script.js.map