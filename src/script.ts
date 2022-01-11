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

