document.write("<h1>mon titre</h1>")
document.querySelector("h1").style.color="blue"
window.alert("bonjour jiji")
document.write("<p>fgd yrdrdgr sgdgfd      sedsherswgrz    rqzezq</p>")
console.log(typeof "jihen");
console.log(typeof 5000);
console.log(typeof 50.900);
console.log(typeof [100, 41,55]);
console.log(typeof ["jj", "aa","tt"]);
console.log(typeof {name: "jihen", age: 28, contry: "tunisie"});
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);

console.log("jihen\nweb\nschool");
let a="we love";
let b="javascript"

//document.write(a+" "+b);
console.log(a, b);
 // code de format ecma script6
let marupj=`
<div>
<div>
<h1>${a} </h1>
<p> ${b} ${a}  </p>
</div>
</div>
`
document.write(marupj);
console.log(+"100")
console.log(-"100")
console.log(-"-100")
console.log(+"false")
console.log(10+2+true)
console.log(Number("100"))

let j=10
j=j+10
a+=50 // a=a+50
a-=10
//console.log(1_000_000);
//console.log(1e6) // 1 000 000 
console.log(10 ** 6) //10*10*10*10*10*10*10 =1000000
//console.log(Number.MIN_SAFE_INTEGER)
//console.log(Number.MAX_VALUE)
//console.log((100).toString())
console.log(100.10.toString())
//console.log(100.55555.toFixed(2))
/*console.log(parseInt("100 jiji"))
console.log(parseFloat("999.50 jjj"))
console.log(Math.round(99.2))
console.log(Math.round(99.5))
console.log(Math.ceil(99.2))
console.log(Math.floor(99.9))
console.log(Math.max(99, 10, 100, 101))
console.log(Math.min(99, 10, 100, 101))
console.log(Math.pow(2,4))
console.log(Math.trunc(99.555))
console.log(Math.random())
console.log(Math.ceil(Math.round(99.5)))
/*
let myname=" jihene " ;

console.log(myname)
console.log(myname[1])
console.log(myname.charAt(1))
console.log(myname.length)
console.log(myname.trim())
console.log(myname.toUpperCase())
console.log(myname.toLocaleLowerCase())
console.log(myname.charAt(1).toUpperCase())
*/
let myval="web school jihen"
//console.log(myval.indexOf("sch"))// position de chaine 

//console.log(myval.lastIndexOf("e"))
//console.log(myval.slice(1,5))
//console.log(myval.slice(-1,-5))
/*console.log(myval.repeat(5))
console.log(myval.split(" "))
console.log(myval.split(" ",2))*/

//console.log(myval.substring(0,10))
/*console.log(myval.substring(-10,10))
console.log(myval.substring(myval.length-10))
console.log(myval.includes("web",8))
console.log(myval.startsWith("w"))
console.log(myval.startsWith("w",3))
console.log(myval.endsWith("l",10))
console.log(myval.endsWith("n"))*/
//// != not egal //

/*console.log(10=="10") //egal
console.log(10 !="10") // not egal
console.log(10 !=="10") // not identical 
console.log(10 ==="10") // identical
//console.log(10 >="10") // not egal
console.log(!(10 =="10") )  */ //  ! not 
/* 
! not 
&& and 
 || or 
*/
// condition  ? if true : if false 

/*let namef="jihen";
let namem="aymen";
let age =30;
namef==="jihen" ? console.log("Md") : console.log("Ms")

let resultat = namef==="jihen" ? "Md"  : "Ms";
//document.write(resultat);
document.write(`Hellow  ${resultat} ${namef}`)
age<20 
? console.log(20)
: age>20 && age<60 
? console.log("20 to 60")
: age>60 
? console.log("larger than 60")
: console.log("Unknown")


let price=0 
document.write(`the price is ${price || 200}`)
document.write(`the price is ${price ?? 200}`)*/
let myfriends=["Ahmed","jihen","emna",["Aymen","fatma"]]
document.write(`Hellow ${myfriends[0][2]}`)
//`<br>`

document.write(`Hellow ${myfriends[3]}`)
document.write(`Hellow ${myfriends[3][0]}`)
document.write(`Hellow ${myfriends[3][0][0]}`)
myfriends[1]="jihen rebai"
console.log(` ${myfriends}`)
console.log(Array.isArray(myfriends))