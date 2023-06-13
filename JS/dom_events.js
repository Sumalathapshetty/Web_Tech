/*let button=document.querySelector("button");
// let button=document.querySelector("#button");    when we take in html as id then we have to use the # complusolory
console.log(button);
button.onclick=()=>{
    document.body.style.backgroundColor="skyblue"
    //when i click on these it should be happened as skyblue
}*/

/*function demo1()
{
    document.body.style.backgroundColor="green";
}*/

//add event listener
let bt=document.querySelector('button');
console.log(bt);
bt.addEventListener('click',()=>{
    document.body.style.backgroundColor='pink';
})