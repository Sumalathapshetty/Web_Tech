console.log(document);

console.log(document.URL);

console.log(document.head);

console.log(document.title);

document.title="Web Tech"
console.log(document.title);

console.log(document.body);
console.log(document.all);

// DOM Method
// 1.Getelemrnt by ID
let id=document.getElementById("demo");
console.log(id);
id.innerHTML="Pakka ESCN"
id.style.backgroundColor="skyblue"
id.style.color="black"
id.style.fontSize="40px"
id.style.border="10px solid yellow"

let id1=document.getElementById("test");
console.log(id1);
id1.innerHTML="suma"
id1.style.backgroundColor="skyblue"
id1.style.color="black"
id1.style.fontSize="40px"
id1.style.border="10px solid yellow"

//get elenent by classname
let test=document.getElementsByClassName('rcb') //content
console.log(test);
test[2].style.backgroundColor="pink"  //through index we can color the single element
console.log(Array.isArray(test));

let rr= Array.from(test);
console.log(rr,typeof rr);
console.log(Array.isArray(rr));

//get element by tag name
let tag=document.getElementsByTagName("pre");
console.log(tag);
tag[1].style.backgroundColor="blue"
console.log(Array.isArray(tag));

let oo=Array.from(tag);
console.log(oo);
console.log(Array.isArray(oo));

//Query Selectors
let query=document.querySelector(".demo1");
console.log(query);
query.style.fontSize="30px"
query.style.backgroundColor="blue"

//Query Selector All
let queryAll=document.querySelectorAll(".demo2"); //its work as id and class both (its result with the nordlist)
console.log(queryAll);
queryAll[2].style.color="green"
console.log(Array.isArray(queryAll));

//how to create element withoutusing html
let create=document.createElement('h1');
console.log(create);    //o/p is h1
//adding id and class name we can create
create.id="demo1"
create.ClassName="test2"

//inserting the text
let text=document.createTextNode('Hello good morning everyone ');
console.log(text);

//appendchild it shows the text inside the tag
create.appendChild(text);
 
//gives the output in the document interface
document.body.append(create);
create.style.color="yellow"

let text1=document.getElementById('red');
console.log(text1);
text1.innerHTML="royal challengers bangalore";  //it shows only content
//  text1.innerText="kolkata knight riders";    //it shows content with tag name
//  text1.innerHTML="<h1> Virat Kohli </h1>";
//  text1.innerText="<h1> duplessis </h1>";