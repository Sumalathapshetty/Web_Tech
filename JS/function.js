/*example of Anonymories function its gets Uncaught Error
function ()
{
    console.log("My name is Suma");
}
()*/

// example of Anonymories function
function suma ()
{
    console.log("My name is Suma");
}
suma()
suma()


// example with function with expresstion for eg (let a,var, const)
let a= function ()
{
    console.log("My sister name is Vidya");
}   //or a() both we can () or a()
a()

//Arrow function is very important
let b=()=>
{
    console.log("hello");
}  
b()

// rules 1 when we have single statement int he arrow function not necessary to take braces
let c=()=> 
console.log(); 
c()

//rules 2 mutiple statement must shld take arrow function
let d=()=>
console.log("hello");
console.log("hi");
d()

//rules when we have return keyword inside the function must shld take braces
let e=()=>{
    return "Sumalatha";
}

//when we have return keyword inside the arrow function must ang shld have log statrement ouside the function
let f=()=>{
    return"Good morning";
}
console.log(f());

//rule 5 when we have  log statement inside the arrow function no need to 
//take log statement outside the arrow function 

let g=()=>{
    console.log("vidya");
}
//g()
console.log(g()); //undefined

let h=()=>{
    console.log("Prema  ");
    return "hello";
}
// h()
console.log(h());

// extra 
// console.log(""Hello"");
// console.log(``hello``);
// console.log(''hello'');
 console.log(`"Suma"`);
console.log(`'hello'`);
var str="hello";
console.log(str);
let str1=str;
var str="goog morning";
console.log(str1);
console.log("My student are very good and answer every question correctly \n good students");


document.write("My student are very good and answer every question correctly <br> good students");
let v=prompt("enter the color");
document.body.style.backgroundColor=v;