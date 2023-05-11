
let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor",4,10,12];

let colors = ["Red", "Green", "Black"];

/*for (let i = 0; i < products.length; i++) {
  //console.log(products[i]);
  if(typeof products[i]==='number'){
    document.write(` , ${products[i]}`)
    console.log(products[i]);

  }
 
  /*nestedLoop: for (let j = 0; j < colors.length; j++) {
    console.log(`- ${colors[j]}`);
    if (colors[j] === "Green") {
      break mainLoop;
    }
  }*/
//}/*


/*mainLoop: for (let i = 0; i < products.length; i++) {
    console.log(products[i]);
    nestedLoop: for (let j = 0; j < colors.length; j++) {
      console.log(`- ${colors[j]}`);
      if (colors[j] === "Green") {
        break mainLoop;
      }
    }
  }*/
  /*let i=0
  for(;;){
    console.log(`- ${products[i]}`);
    i++
    if(i===products.length) break;
  }*/
  // 
  /*let showCount=5;
  document.write(`<h1> show ${showCount}</h1>`)
  for(let i=0; i<showCount;i++){
   document.write(`<div>`);
   document.write(`<h3>  ${i+1} ${products[i]}</h3>`)
for(let j=0; j<colors.length;j++){
    document.write(`<p> ${colors[j]} </p>`);
}
document.write(`<p> ${colors.join("|")} </p>`);
   document.write(`</div>`);
  }*/

  // loop while 
  /*let index=0
  while(index<products.length){
   // console.log(index)
    console.log(`${products[index]}`)
    index++
  }*/
// loop DO while 
/*let i=0;
do {
    console.log(i)
    i++

}while(false);*/
 
/*function generateyeras(start,end,exclude)
{
    for(i=start; i<=end;i++){
        if(i==exclude){
            continue;

        }
        console.log(i);
    }
}
generateyeras(2020,2025,2021)*/

/*function calc(num1,num2){
    return num1+num2;   
}
    let result=calc(100,10)
    console.log(result);*/
  /*  function generate(start, end) {
        for (let i = start; i <= end; i++) {
          if (i === 15) {
            return `Interrupting`;
          }
          console.log(i);
        }
      }
      
      generate(10, 20);*/
      /*function sayHello(username = "Unknown", age = "Unknown") {
        // if (age === undefined) {
        //   age = "Unknown";
        // }
        // age = age || "Unknown";
        return `Hello ${username} Your Age Is ${age}`;
      }
      
      console.log(sayHello());*/

      /*function calc(...numbers) {
        // console.log(Array.isArray(numbers));
        let result = 0;
        for (let i = 0; i < numbers.length; i++) {
          result += numbers[i]; // result = result + numbers[i]
        }
        return `Final Result Is ${result}`;
      }
      
      console.log(calc(10, 20, 10, 30, 50, 30));*/
       /*
  Function Advanced Practice
  - Parameters
  - Default
  - Rest
  - Loop
  - Condition
*/

/*function showInfo(us = "Un", ag = "Un", rt = 0, show = "Yes", ...sk) {
  document.write(`<div>`);
  document.write(`<h2>Welcome, ${us}</h2>`);
  document.write(`<p>Age: ${ag}</p>`);
  document.write(`<p>Hour Rate: $${rt}</p>`);
  if (show === "Yes") {
    if (sk.length > 0) {
      document.write(`<p>Skills: ${sk.join(" | ")}</p>`);
    } else {
      document.write(`<p>Skills: No Skills</p>`);
    }
  } else {
    document.write(`<p>Skills Is Hidden</p>`);
  }
  document.write(`</div>`);
}

showInfo("Osama", 38, 20, "No", "Html", "CSS");9*/


/*
  Function
  - Anonymous Function
  - Calling Named Function vs Anonymous Function
  - Argument To Other Function
  - Task Without Name
  - SetTimeout
*/

/*let calculator = function (num1, num2) {
  return num1 + num2;
};

console.log(calculator(10, 20));

function sayHello() {
  console.log("Hello Osama");
}

document.getElementById("show").onclick = sayHello;

setTimeout(function elzero() {
  console.log("Good");
}, 2000);*/

