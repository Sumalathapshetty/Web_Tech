

// we can create Object in 2ways
// 1.literals ways
let obj={
    id:500,
    name:"suma",
    salary:1000
}
console.log(obj, typeof obj);

//way to access an object.........
console.log(obj.salary);
console.log(obj["salary"]);


//adding an key and value pair for an existing object
obj["address"]="bangalore";   //1st ways
obj.pincode=560091;           //2nd ways
console.log(obj);

//creating object inside another object or n numberb of object
let obj1={
    color:"red",
    shape:"square",
computer:{
    Ram:"4gb",
    color:"grey",
    processor:"i5"
}
}
console.log(obj1["computer"]["Ram"]);
console.log(obj1.computer.processor);

//cretaing function inside the another function
let ob={
    sports:"Cricket",
    stadium:"Chinnaswamy",
    players:function(){
            let pname="Dhoni";
            let jno=18;
            return `${pname} ${jno}`
         //  return pname,jno
        }
}
console.log(ob.players());      //undifined

//creating in the arrow function 
let ob1={
    sports:"Cricket",
    stadium:"Chinnaswamy",
    players:()=>{
            let pname="Dhoni";
            let jno=18;
            return `${pname} ${jno}`
         //  return pname,jno
        }
}
console.log(ob1.players());      //undifined

let ob2={
    sports:"Cricket",
    stadium:"Chinnaswamy",
    players:function(){
        let sports="foodball"
        console.log(this.sports); //this is poting to the current object
                                // using the log statement we get undifind in the output
    }
}
console.log(ob2.players());

let ob3={
    sports:"Cricket",
    stadium:"Chinnaswamy",
    players:function(){
        return this.sports; //when we are using this keyword inside the normal function that this keyword pointing to the current object
    }
}
console.log(ob3.players());

// by suing arrow function
let ob4={
    sports:"Cricket",
    stadium:"Chinnaswamy",
    players:()=>{
        return this.sports; //when this keyword inside the arrow fuction its not pointing to the current object throughing an undifined.
    }
}
console.log(ob4.players());

//Revision
//function method g

course="java";
let y1={
    course:"web tech",
    place:"banglore",
    color:function()
    {
        let course="sql"
        return this.course;
    }
}
console.log(y1.color());

//arrow function   ouput as java because it is an outer scope of the function 
course="java";
let y2={
    course:"web tech",
    place:"banglore",
    color:()=>
    {
        let course="sql"
        return this.course;
    }
}
console.log(y2.color());

//another way of creating multiple object
// we can create object inside the array

let emp=[
    {
        id:101,
        ename:"Suma"
},
{
    id:102,
    ename:"vidya"
}]
console.log(emp, typeof emp);
console.log(emp[0].ename);
console.log(emp[1].id);

// 2. with new keyword
let yy=new Object()
console.log(yy, typeof yy);
yy["id"]=110;
yy["name"]="Sudeep Reddy";
console.log(yy.id);
console.log(yy);

//why object are mutable
let mute={
    Pcolor:"White",
    Pheight:"30inch"  //if you give [,] in this line it ends the code
}
console.log(mute);
mute.Pcolor="red";
console.log(mute);

//keys is interms of Numbers......
let k={
    1:"duster",
    2:"marker"
}
console.log(k);
console.log(k[2]);
console.log(k[1]);

//object method
// 1.Freeze

let free={
    name:"Suma",
    place:"Banglore"
}
free["name"]="Sunil"

console.log(free);

// Object.freeze(free);

free["name"]="vidya";       //its won't undate the value becuase its freeze
console.log(free);
Object.freeze(free);

//Assign
let ab={
    company:"ty",
}
console.log(ab);

ab.company="Infosys";
console.log(ab);

let bb={
    name:"pradeep sir"
}
console.log(bb);

let cc=Object.assign(bb,ab)
console.log(cc);

// keys and values we can fetch
let key=Object.keys(mute)
console.log(key);

let value=Object.values(mute)   //by values method we anfetch only  values
console.log(value);

//entries 
//throw entries method we can convert from object to array
let enter={
    sName:"Abc",
    sId:200
}
console.log("before entries");
console.log(enter);
console.log("After entries");
console.log(Object.entries(enter));
console.log(enter);


// math object
let oo=122.1
let math=Math.ceil(oo);
console.log(math);

let math1=Math.floor(oo);
console.log(math1);

let random=Math.ceil(Math.random()*100000).toString(16)
console.log(random);
// let body=document.querySelector('h1');       //it takes only content
let body=document.querySelector('body');  //to takes the whole wb pages
 console.log(body);
body.style.backgroundColor=`#${random}`;

let u=5/2;
let v=8;
console.log(`the min value ${Math.min(u,v)}`);
console.log(`the max value ${Math.max(u,v)}`);
console.log(`the pow value ${Math.pow(u,v)}`);
console.log(`the sqrt value ${Math.sqrt(v)}`);
console.log(`the cbrt value ${Math.cbrt(v)}`);
console.log(`the round value ${Math.round(u)}`);
console.log(`the trunc value ${Math.trunc(u)}`);
console.log(`the PI value ${Math.PI}`);

//Date object 

let date= new Date();
console.log(date);

console.log(Date());
console.log(date.getDate());
console.log(date.getDay());
console.log(date.getMonth ());
console.log(date.getFullYear());
console.log(date.getHours());
console.log(date.getMinutes());

//We can set the date also in date object
let date1= new Date
 (2023,3,3,10,10,10)
console.log(date1);
