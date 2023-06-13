let gp=document.querySelector('.gp')
let p=document.querySelector('.p')
let c=document.querySelector('.c')

gp.addEventListener("click", e=>{
    console.log("grand parent capture");

})
gp.addEventListener('click', e=>{
    console.log("grand parent bubbling");
})

p.addEventListener("click", e=>{
    console.log("parent caturing");
    // e.stopPropagation()   //its imp it stop the traceing it wont go for gparent 
})

// p.addEventListener("click", e=>{
//     console.log("parent caturing");
// },capture="true")  //cpture="true" it means parent come first go & see the o/p click the you know
//if you know the differences give for other

p.addEventListener("click", e=>{
    console.log("parent bubbling");
})

c.addEventListener("click", e=>{
    console.log("child capturing");
})

c.addEventListener("click", e=>{
    console.log("child bubbling");
})

//this see for after above 3
document.addEventListener("click",e=>{
    console.log("document ");
})

document.addEventListener("click",e=>{
    console.log("document capturing"); //document means html 
    e.stopPropagation()  //it wont show the o/p it stops that event 
})

document.addEventListener("click",e=>{
    console.log("document bubbling");
})