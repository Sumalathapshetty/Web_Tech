/* on click
let btn=document.querySelector('button')
btn.addEventListener("click",()=>{
    let un=document.getElementById('user').value;
    let pass=document.getElementById('pass').value;
    let div=document.querySelector('div')
//     console.log(div);
//    document.write(`${un} and ${pass}`);
    div.innerText=(`${un} Bestfriends ${pass}`)
    div.style.border="5px solid black"
    div.style.width="220px"
    div.style.height="50px"
    div.style.backgroundColor="skyblue"
    div.style.color="red"
})         
  //addEventlistener means it takes 2 arguments
  //1st is method and 2nd is function

  */

  //on  submit event
let form=document.querySelector('form')
  form.addEventListener('submit',(e)=>{
    let un=document.getElementById('user').value;
    let pass=document.getElementById('pass').value;
    console.log(un,pass);
    e.preventDefault()
  })
  //prevent defalut is not go to the server it revent the data 
  //submit is used only in the forms

/*
  //key event  (keyup keydown keypress they are 3 values)
  let input=document.querySelector('input')
  input.addEventListener("keyup", ()=>{
    console.log("keyup");
     let rc=Math.ceil(Math.random()*100000).toString(16);
     console.log(rc);
     document.body.style.backgroundColor=`#${rc}`
  })*/