// Function excecution context
/*
let b=200;
var c=300;
console.log(b);
console.log(c);
function a(){
    let b1=100;
    const c1=202;
    console.log(b1);
    console.log(c1);
}
a()
*/

/*
// Nested function
let u=500;
var r=1000;    //local
console.log(u);
console.log(r);
function cc() {     //closure holds previous GEC address(1000)
    const i=1000;   //it is local scope ..and this holds window..
        function ff(){  //call stack
            var o=2000;
            console.log(i);
                function hh() {
                    console.log(o);
                }
                return hh;
        }
    return ff;
}
cc()()()    //3 function 

// Window 
  //  (method) Console.log(...data: any[]): void
console.log(window);
// console.log(window.alert());
console.log(alert());

// extra 
function demo() {
    var t=500;
    console.log(t);
    console.log(t);
    
}
demo() 

// 7. Higher Order Function

function HOF(p,q,test){
    let y=test(p,q)
    console.log(y);
}
HOF(10,20,add)
HOF(20,10,sub)
HOF(40,20,div)
HOF(40,20,mul)

function add(p,q) {
    return p+q;
 }
 
 function sub(p,q) {
     return p-q;
  }
 
  function div(p,q) {
    return p/q;
 }
 function mul(p,q) {
    return p*q;
 }
*/

 //   Call Back Function

 function test() {
    console.log("pmc");
 }
 function demo(){
    console.log("idfc");
 }
 demo(test())

//syncronized
 function demo1(name,callback){
    //  callback()
    console.log("hi student "+name);
   callback()
 }
 function test1(){
    console.log("bye students");
 }
demo1("poorvaj", test1)