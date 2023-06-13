let jobj={
    id:101,
    name:"suma"
}
console.log(jobj);

jstr=JSON.stringify(jobj);
console.log(jstr, typeof jstr);     //send the data in the form of string 

jpar=JSON.parse(jstr);
console.log(jpar, typeof jpar);     //recieved the data in the form of object

let api=fetch("https://cataas.com/api/cats?tags=cute");
api.then((a)=>{
    console.log(a.ok);      //if it is their it give true in the form of boolean
    return a.json()         //we can take n number of then() [data is there or not to check and hold the data if (promise) send/ return the data]
}).then((b)=>{
    console.log(b);         //then is for show the data (promises is succesful) else rejected
})