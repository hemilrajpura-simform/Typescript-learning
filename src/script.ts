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
    userId : number;
    userName ?: string;
}

let ee: Details ={userId:158,userName:"hemil"};

/* Union types */
export interface phone {
    name:string;
    number:number;
}
export interface email {
    name:string;
    email:string;
}

let unionInterface : email & phone = {
name:"hemil",
email:"hemil.r",
number:780
};
console.log(unionInterface.email);



/* functions */

function println(str:string){
console.log(str);
}

println("Hello by funciton");


// Type aliases
// allows to give a name to a type

type StringOrNumber = string | number;

type HasName = {name : string};

// extends
// how a interface can extends other one

export interface InternationalPhoneNumbers extends CountryPhoneNumber{
    countryCode: string;
}