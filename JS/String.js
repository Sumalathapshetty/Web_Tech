let str="Suma Latha Shetty";
console.log(str.length);
console.log(str.toLowerCase());
console.log(str.toUpperCase());
console.log(str.indexOf('L'));
console.log(str.charAt(1000));
console.log(str.slice(2,7));
console.log(str.split("+ ").reverse().join("+"));
console.log(str.endsWith('y'));
console.log(str.startsWith('S'));
console.log(str.substring(10));


let d="Web";
let d1="technology";
let d2="I'm suma"
console.log(d.concat(d1));
console.log(d.concat(d2));
console.log(`${d}  ${d1}`);
console.log(d+d1+d2);

// extra
console.log(d.concat(d1,d2));
console.log(`${d} ${d1} ${d2} `);
console.log(d+" "+d2+" "+d1);

// extra
console.log((d1.lastIndexOf('o')));
console.log(d.repeat(5));
console.log(d1.replace("logy","latha"));
console.log(d1.includes("ch"));//true
console.log(d.includes("ym"));// false

// extra
console.log(d2.replaceAll("suma","*"));