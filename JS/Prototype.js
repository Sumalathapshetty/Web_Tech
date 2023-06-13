let a={
    name:"suma",
    // name1:"kavi",
    id:21,
    test:()=>{
    alert("hi how are you");
    }
}
console.log(a);
let b={
    // name1:"latha",
    id:24
}
console.log(b);

let c={
    // name1:"manasa",
}


let d={
    name1:"poorvaj",
}

a.__proto__=b       //a prototype is b it searches in the b only
b.__proto__=c
c.__proto__=d

// b.__proto__={
//     name3:"vinod"
// }
// console.log(b.name1);  //vinod
console.log(a.name1);   //kavi bzs it is prasent in the a only so that it gives kavi as answer
                        //if name1 is not prasent in that means it searches in the let b and it gives the answer as latha.
                        //it act likes the chain connection of the function....