//to store the data in browser without using the sql, mysal.... etc
//click on (>>) application then local storage
//if you are not clear tha date to storage tha date 

let lstorage=localStorage.setItem("id",100); //to store the data
let lstorage1=localStorage.setItem("name","suma")
console.log(lstorage,lstorage1);

let lstorage2=localStorage.getItem("name");  //to get or see  the data
console.log(lstorage2);


// let lstorage3=localStorage.removeItem("name");  //to remove the perticular  key and value pair data
// console.log(lstorage3);

// let lstorage4=localStorage.clear()   //to clear the data all
// console.log(lstorage4);

//sessionstorage after the sesstion is close  or browser close means the data is also close
let session=sessionStorage.setItem("bike","honda");
console.log(session);

let session1=sessionStorage.getItem("bike");
console.log(session1);