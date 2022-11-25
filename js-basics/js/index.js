//console.log(document.querySelectorAll(".btns button "))
let num1 = 0;
let num2 = 0;
let temp = "";
let symbolPressed = false;
let symbol = "";
let body = document.body
let repeat = false;
let allBtns = document.querySelectorAll("button");
const display = document.querySelector("#display"); //document.getElementById("display")
const symbolAllowance = ["1","2","3","4","5","6","7","8","9","0","-","+","/","x","*","Enter","^","%"]
const symbolAllowance1 =  '1234567890-+*/'.split('')  //["1","2","3","4","5","6","7","8","9","0","-","+","/","x","*","Enter","^","%"]




body.addEventListener("keydown", event => {
 // console.log(event.key)
  if (event.key === "Backspace"){
    if (symbol === "") {
      display.textContent = num1 
      if(display.textContent.length === 1){
        display.textContent = 0
        num1 = 0
      }else{
        display.textContent = display.textContent.substr(0,display.textContent.length-1)
        num1 = display.textContent
      }   
    } 
    else{
      display.textContent = num2
      if(display.textContent.length === 1){
        display.textContent = 0
        num2 = 0
      }else{
        display.textContent = display.textContent.substr(0,display.textContent.length-1)
        num2 = display.textContent
      }
    }
  }else if(event.key === "Delete"){
      repeat = false;
      num1 = 0;
      num2 = 0;
      symbol = "";
      symbolPressed = false;
      display.textContent = "";
  } 
})


body.addEventListener("keypress",(event) => {
    const key = event.key; 
    if(symbolAllowance.includes(key)){
      if(Number.isInteger(Number(key)))
        display.textContent += key;
      if ( display.textContent.startsWith("0") && display.textContent.length >= 2) {
        display.textContent = display.textContent.substr( 1, display.textContent.length);
        console.log("happens");
      }
      if (Number.isInteger(Number(key)) && symbolPressed == false)
          num1 = Number(display.textContent);
      else if (Number.isInteger(Number(key)) && symbolPressed == true)
          num2 = Number(display.textContent);

      switch (key) {
        case "+":
          symbolPressed = true;
          symbol = "+";
          display.textContent = "0";
          console.log(symbol);
          break;
        case "-":
          symbolPressed = true;
          symbol = "-";
          display.textContent = "0";
          console.log(symbol);
          break;
        case "x":
          symbolPressed = true;
          symbol = "x";
          display.textContent = "0";
          console.log(symbol);
          break;
        case "/":
          symbolPressed = true;
          symbol = "/";
          display.textContent = "0";
          console.log(symbol);
          break;
        case "^":
          symbolPressed = true;
          symbol = "x^2";
          display.textContent = num1 ** 2;
          console.log(symbol);
          num1 = num1 ** 2;
          break;
        case "%":
          symbolPressed = true;
          symbol = "%";
          display.textContent = num1 * 100;
          console.log(symbol);
          break;
        default:
          break;
      }

      if (key === "Enter" && symbolPressed === true && repeat === false) {
        console.log("=");
        symbolPressed = false;
        switch (symbol) {
          case "+":
            console.log(`${num1}+${num2}`);
            display.textContent = num1 + num2;
            num1 += num2;
            break;
          case "-":
            console.log(`${num1}-${num2}`);
            display.textContent = num1 - num2;
            num1 -= num2;
            break;
          case "x":
            console.log(`${num1}x${num2}`);
            display.textContent = num1 * num2;
            num1 = num1 * num2;
            break;
          case "/":
            console.log(`${num1}/${num2}`);
            if (num2 === 0) {
              alert("Cant divide with 0 expected result: infinity");
              display.textContent = num1 / num2;
              num1 = num1 / num2;
            }
            display.textContent = num1 / num2;
            num1 = num1 / num2;
            break;
        }
      }

      if (key === "Enter" && symbolPressed === false && repeat === true) {
        console.log("=");
        switch (symbol) {
          case "+":
            console.log(`${num1}+${num2}`);
            display.textContent = num1 + num2;
            num1 += num2;
            break;
          case "-":
            console.log(`${num1}-${num2}`);
            display.textContent = num1 - num2;
            num1 -= num2;
            break;
          case "x":
            console.log(`${num1}x${num2}`);
            display.textContent = num1 * num2;
            num1 = num1 * num2;
            break;
          case "/":
            console.log(`${num1}/${num2}`);
            if (num2 === 0) {
              alert("Cant divide with 0 expected result: infinity");
              display.textContent = num1 / num2;
              num1 = num1 / num2;
            }
            display.textContent = num1 / num2;
            num1 = num1 / num2;
            break;
        }
      }

      if (key === "Enter")
        repeat = true;
      else 
        repeat = false;
    }
  
  console.log(event.key);
})




allBtns.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    const text = event.target.textContent; 
    display.textContent += text;
    if ( display.textContent.startsWith("0") && display.textContent.length >= 2) {
      display.textContent = display.textContent.substr( 1, display.textContent.length);
      console.log("happens");
    }
    if (Number.isInteger(Number(text)) && symbolPressed == false)
        num1 = Number(display.textContent);
    else if (Number.isInteger(Number(text)) && symbolPressed == true)
        num2 = Number(display.textContent);

    switch (text) {
      case "+":
        symbolPressed = true;
        symbol = "+";
        display.textContent = "0";
        console.log(symbol);
        break;
      case "-":
        symbolPressed = true;
        symbol = "-";
        display.textContent = "0";
        console.log(symbol);
        break;
      case "x":
        symbolPressed = true;
        symbol = "x";
        display.textContent = "0";
        console.log(symbol);
        break;
      case "/":
        symbolPressed = true;
        symbol = "/";
        display.textContent = "0";
        console.log(symbol);
        break;
      case "x^2":
        symbolPressed = true;
        symbol = "x^2";
        display.textContent = num1 ** 2;
        console.log(symbol);
        num1 = num1 ** 2;
        break;
      case "sqrt":
        symbolPressed = true;
        symbol = "sqrt";
        display.textContent = Math.sqrt(num1);
        num1 = Math.sqrt(num1);
        console.log(symbol);
        break;
      case "1/x":
        symbolPressed = true;
        symbol = "1/x";
        display.textContent = 1 / num1;
        console.log(symbol);
        break;
      case "%":
        symbolPressed = true;
        symbol = "%";
        display.textContent = num1 * 100;
        console.log(symbol);
        break;
      case "+/-":
        symbol = "+/-";
        console.log(symbol);
        if (num1 >= 0 && symbolPressed == false) {
          num1 = -num1;
          display.textContent = num1;
        } else {
          console.log(`${num1}-${num2}`);
          num1 = Math.abs(num1);
          display.textContent = num1;
        }
        if (num2 >= 0 && symbolPressed == true) {
          console.log(`${num1}-${num2}`);
          num2 = -num2;
          display.textContent = num2;
        } else if (symbolPressed == true) {
          console.log(`${num1}-${num2}`);
          num2 = Math.abs(num2);
          display.textContent = num2;
        }
        break;
      case "erase":
        console.log("happens erase");
        if (symbol === "") {
          display.textContent = num1 
          if(display.textContent.length === 1){
            display.textContent = 0
            num1 = 0
          }else{
            display.textContent = display.textContent.substr(0,display.textContent.length-1)
            num1 = display.textContent
          }   
        } 
        else{
          display.textContent = num2
          if(display.textContent.length === 1){
            display.textContent = 0
            num2 = 0
          }else{
            display.textContent = display.textContent.substr(0,display.textContent.length-1)
            num2 = display.textContent
          }
        }
        break;
      default:
        break;
    }

    if (text === "=" && symbolPressed === true && repeat === false) {
      console.log("=");
      symbolPressed = false;
      switch (symbol) {
        case "+":
          console.log(`${num1}+${num2}`);
          display.textContent = num1 + num2;
          num1 += num2;
          break;
        case "-":
          console.log(`${num1}-${num2}`);
          display.textContent = num1 - num2;
          num1 -= num2;
          break;
        case "x":
          console.log(`${num1}x${num2}`);
          display.textContent = num1 * num2;
          num1 = num1 * num2;
          break;
        case "/":
          console.log(`${num1}/${num2}`);
          if (num2 === 0) {
            alert("Cant divide with 0 expected result: infinity");
            display.textContent = num1 / num2;
            num1 = num1 / num2;
          }
          display.textContent = num1 / num2;
          num1 = num1 / num2;
          break;
      }
    }

    if (text === "=" && symbolPressed === false && repeat === true) {
      console.log("=");
      switch (symbol) {
        case "+":
          console.log(`${num1}+${num2}`);
          display.textContent = num1 + num2;
          num1 += num2;
          break;
        case "-":
          console.log(`${num1}-${num2}`);
          display.textContent = num1 - num2;
          num1 -= num2;
          break;
        case "x":
          console.log(`${num1}x${num2}`);
          display.textContent = num1 * num2;
          num1 = num1 * num2;
          break;
        case "/":
          console.log(`${num1}/${num2}`);
          if (num2 === 0) {
            alert("Cant divide with 0 expected result: infinity");
            display.textContent = num1 / num2;
            num1 = num1 / num2;
          }
          display.textContent = num1 / num2;
          num1 = num1 / num2;
          break;
      }
    }

    if (text === "=")
      repeat = true;
    else 
      repeat = false;

    if (text === "CE" || text === "C") {
      repeat = false;
      num1 = 0;
      num2 = 0;
      symbol = "";
      symbolPressed = false;
      display.textContent = "";
    }
  });
});
