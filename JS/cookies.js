//how to set the cookies
console.log(document.cookie="name=Suma");
//we can update tha cookies  with the same keywords
console.log(document.cookie="name=Vidya");


//promises
// let promise=new Promise((resolve,reject )=>{
//     let a=1+1;
//     if(a==2){
//         resolve("promise is fulffilled")
//     }
//     else{
//     reject("promise is rejected")
//     }
// })
// promise.then((success)=>{
//     console.log(success);
// }).catch((error)=>{
//     console.log(error);
// })  // that condition is statisfy promises is fulfilled


let promise=new Promise((resolve,reject )=>{
    let a=1+5;
    if(a==2){
        resolve("promise is fulffilled");
    }
    else{
    reject("promise is rejected")
    }
})
promise.then((success)=>{
    console.log(success);
})
.catch((error)=>{
    console.log(error);
})      //it is rejected