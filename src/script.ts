console.log("hello");

var a: number = 12;
var b: string = "hello world";
console.log(b);

/* arrays */

var aa: number[] = [];
aa.push(12);


/* tuple */

let oneTuple: [number, string] = [
    158,
    "Hemil Rajpura"
];

let twoTuple: [rollNumber: number, Studentname?: string] = [
    158
];   // '?' means Studentname maybe there or may not be there


/* Interafces */
interface Details {
    userId: number;
    userName?: string;
}

let ee: Details = { userId: 158, userName: "hemil" };

/* Union types */
export interface phone {
    name: string;
    number: number;
}
export interface email {
    name: string;
    email: string;
}

let unionInterface: email & phone = {
    name: "hemil",
    email: "hemil.r",
    number: 780
};
console.log(unionInterface.email);



/* functions */

function println(str: string) {
    console.log(str);
}

println("Hello by funciton");


// Type aliases
// allows to give a name to a type

type StringOrNumber = string | number;

type HasName = { name: string };

// extends
// how a interface can extends other one
interface CountryPhoneNumber {
    code: number;
    contact: number;
}

export interface InternationalPhoneNumbers extends CountryPhoneNumber {
    countryCode: string;
}

// classes
export class emplyoee {
    public email: string;
    public name: string;

    constructor(name: string, email: string) {
        this.email = email;
        this.name = name;
    }
}

//abstract class
abstract class AbsClass {
    public abstract phone: number;

    constructor(
        public name: string
    ) { this.name = name; }
    abstract sendSms(): void; //it must be implemented by any child class
}


class childClass extends AbsClass {
    phone:number;
    constructor(name:string) {
        super(name);
    }
    sendSms(): void {
        console.log("child class implemented");
        this.phone = 5;
    }
}

const obj = new childClass("hemil");
console.log(obj.phone);
obj.sendSms();
console.log(obj.phone);

