// Inplicit type casting
let a=100;
console.log(a,typeof a);
// typeof is a keyword which tells what data type a variable holds

let b="hi";
console.log(b,typeof b);
console.log("10"+10+10+10);
console.log("10"-10-10-10);
console.log("10"*10*10*10);
// no double or floot or decimal is not comes under the java script
//it always number only
let t=10.5;
console.log(t,typeof t);
let u=10/20;
console.log(u,typeof u);

// Explicit type casting
let c=String(10);
console.log(c,typeof c);

let d=Number("hi");
console.log(d,typeof d); //imp

let e=Boolean("suma");
console.log(e, typeof e);

let f=Boolean(0) //imp
console.log(f, typeof f);

// representating the String
let str="hello";
console.log(str, typeof str);

let str1='good morning';
console.log(str1, typeof str1);

let str2=`had your tiffin`;
console.log(str2, typeof str2);

// reference
console.log("10"+10-10); //output is 1000 because it concaat first then it is subtract
let g= Boolean("0");
console.log(g,typeof g); //true

let h=String(0);    //0 string
console.log(h, typeof h);

let z=Number(true);  //output is 1 number
console.log(z, typeof z); 

let j=Number(false);  //output is 0 number
console.log(j, typeof j); 

console.log("20"+40-205); //1835
console.log("20"*40-205); //595
console.log("20"/40-205); //-204.5
console.log(20+"20"+40-40);

// extra revision
console.log(("hi"-12));
console.log(120-"12");
console.log(120+"12");
console.log(120+"12"+20);