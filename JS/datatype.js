// Datatype  of Primitive data type have 6 they are 
// 1.number
let num=1000;
console.log(num);
console.log(typeof num);
let num1=20.5;
console.log(num1, typeof num1);
let num2=1/2;
console.log(num2, typeof num2);

// 2.String
let str="Suma";
console.log(str, typeof str);
let str1='Vidya';
console.log(str1, typeof str1);
let str2=`Vinod`;
console.log(str2, typeof str2);

let Empname="Suma";
let Empsal="5000";
let Empid="121";
console.log(`The Employee ${Empname} has Salary ${Empsal} And  the Id number is ${Empid}`);

let n=null;
console.log(n, typeof n);


// BigInt
let c1=100n;
console.log(c1, typeof c1);

let c2=BigInt("20");
console.log(c2, typeof c2);

let c3=BigInt(true);
console.log(c3, typeof c3);

let c4=BigInt(false);
console.log(c4, typeof c4);

let c5=BigInt(" ");
console.log(c5,typeof c5);

let c6=BigInt(1);
console.log(c6, typeof c6);

// let c7=BigInt("hi");
// console.log(c7, typeof c7);  //we can't convert the string to number

// undefined
var s1;
console.log(s1);
let s2;
console.log(s2);
// const s1;
// console.log(s1);     not possible

// boolean
console.log(!true);
console.log(!false);

let y=Boolean(1);
console.log(y, typeof y);
let t=Boolean(0);
console.log(t, typeof t);
let u=Boolean("suma");
console.log(u, typeof u);
let h=Boolean(1n);
console.log(h, typeof h);
let q= Boolean(0n);
console.log(q, typeof q);
let e=Boolean("0n");
console.log(e, typeof e); //important bcz

