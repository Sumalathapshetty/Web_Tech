let array= [1, undefined, true, "string", null, function (){} , 2n]
console.log(array);
console.log(typeof array);

console.log(Array.isArray(array));
console.log(array instanceof Array);

// type to create an array
// liternal way

let a=[100,200,300]
console.log(a, typeof a);

let a1=[];
console.log(a1);

// constructor way
let b=new Array(100,200,300);
console.log(b, typeof b);

// how to access and moditify the array 
// access
const bus=[10,20,30,56,43,70];
console.log(bus);
console.log(bus[3]);

// modify
console.log(bus[5]="hi");
console.log(bus);

// Array method
// 1. push
let pu=[ "hello","good evening",100,200,300]
console.log(pu);
console.log(pu.push(500,700,900));
console.log(pu);

// 2. unshift
let pu1=[ "hello","good morning",100,200,300]
console.log(pu1);
console.log(pu1.unshift(10));
console.log(pu1);

// 3. Pop
let pu2=[ "hello","good morning",100,200,421]
console.log(pu2.pop()); // delete the end value is 421
console.log(pu2);

//4.shift  
let pu3=[ "hello","good morning",100,200,421]
console.log(pu3.shift());
console.log(pu3);

// 5.slice
let pu4=[ "hello","good morning",100,200,421]
console.log(pu4.slice(2,4));
console.log(pu4);

//6. splice
let pu5=[ "hello","good morning",100,200,421]
console.log(pu5.splice(1,2,"virat","rohit")); //
console.log(pu5);

//7. Split
let pu7= "hello";
console.log(pu7);
console.log(pu7.split("").reverse());
console.log(pu7.split("").reverse().join(""));
console.log(pu7.split("").reverse().join());
console.log(pu7.split("+").reverse().join("+"));

let array1=[100,200,300,400,500]
for(index in array1){
    console.log(index);
}

for(values of array1){
    console.log(values);
}

let f= array1.forEach((values,index)=>{
    console.log(values,index);
});

// Filter condition
let ar=[10,20,30,40]

let ar1=ar.filter((x)=>{
    // return x>10;
    return x>20;
})
console.log(ar1);

// map means adding the gst to the existing value
let ar2=ar.map((p)=>{
    return p+p*0.18;
})
console.log(ar2);

// reduced method accepts th two values 1. values 2.accum
//Accum means to store the values 
let ar3=ar.reduce((value,accum)=>{
    return value+accum
})
console.log(ar3);



