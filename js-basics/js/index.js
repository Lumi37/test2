//console.log(document.querySelectorAll(".btns button "))
let num1 = 0;
let num2 = 0;
let symbolPressed = false ; 
repeat= false;
let allBtns = document.querySelectorAll(".btns button")
let display = document.querySelector("#display") //document.getElementById("display")
allBtns.forEach((btn)=> {
    btn.addEventListener("click", (event)=>{
       // console.log(label.textContent)
        const text = event.target.textContent ;
        display.textContent += text

        
       //if ( (Number.isInteger(parseInt(text)) ) && symbolPressed == false && Number.isInteger(Number(display.textContent))){  
        if ( (Number.isInteger(Number(text)) ) && symbolPressed == false)
            num1 = Number(display.textContent)
        else if(Number.isInteger( Number.parseInt(text) ) && symbolPressed == true)  
            num2 = Number(display.textContent)
        
        if (text === "+"){
            symbolPressed = true ;
            symbol = "+";
            display.textContent = "0";
            console.log("+")
            
        }

        if (text === "-"){
            symbolPressed = true ;
            symbol = "-";
            display.textContent = "0";
            console.log("-")
        }

        if (text === "X"){
            symbolPressed = true ;
            symbol = "X";
            display.textContent = "0";
            console.log("X")
        }

        if (text === "/"){
            symbolPressed = true ;
            symbol = "/";
            display.textContent = "0";
            console.log("/")
        }
        if (text === "x^2"){
            symbolPressed = true ;
            symbol = "x^2";
            display.textContent = num1**2;
            num1 = num1**2;
            console.log("x^2")
        }
        if (text === "sqrt"){
            symbolPressed = true ;
            symbol = "sqrt";
            display.textContent = Math.sqrt(num1);
            console.log("sqrt")
        }
        if(text === "1/x"){
            symbolPressed = true;
            symbol = "1/x";
            display.textContent = 1/num1;
            console.log("1/x")
        }
        if(text === "%"){
            symbolPressed = true;
            symbol = "%";
            display.textContent = num1*100;
            console.log("%")
        }
        if(text === "+/-"){
            if (num1>=0 && symbolPressed == false){
                console.log("happens");
                num1 = -num1;
                display.textContent = num1;
            }
            else{
                console.log("happens2");
                num1 = Math.abs(num1);
                display.textContent = num1;
            }
            if (num2>=0 && symbolPressed == true ){
                console.log("happens3");
                num2 = -num2;
                display.textContent = num2;
            }
            else if( symbolPressed==true ){
                console.log("happens4");
                num2 = Math.abs(num2);
                display.textContent = num2;
            }
            
        }


        if (text === "=" && symbolPressed === true && repeat === false){
            symbolPressed = false ; 
            if(symbol === "+"){
                console.log(num1 , num2 , 1/num1)
                display.textContent = num1 + num2
                num1+= num2
            }
            if(symbol === "-"){ 
                display.textContent = num1 - num2
                num1-= num2   
            }        
            if(symbol === "X"){
                display.textContent = num1 * num2
                num1 = num1 * num2
            }
            if(symbol === "/"){
                if(num2 === 0){
                    alert("Cant divide with 0 expected result: infinity")
                    display.textContent = num1 / num2
                    num1 = num1 /num2
                }
            display.textContent = num1 / num2
            num1 = num1 /num2
            }    
        }
        
        if (text === "=" && symbolPressed === false && repeat === true){
            if(symbol === "+"){
                console.log(num1 , num2 , 1/num1)
                display.textContent = num1 + num2
                num1+= num2
            }
            if(symbol === "-"){ 
                display.textContent = num1 - num2
                num1-= num2   
            }        
            if(symbol === "X"){
                display.textContent = num1 * num2
                num1 = num1 * num2
            }
            if(symbol === "/"){
                if(num2 === 0){
                    alert("Cant divide with 0 expected result: infinity")
                    display.textContent = num1 / num2
                    num1 = num1 /num2
                }
            display.textContent = num1 / num2
            num1 = num1 /num2
            }    
        }
        if(text === "=")
            repeat = true
        else
            repeat = false 
        
            if (text === "CE" || text === "C"){
            repeat = false;
            num1 = 0;
            num2 = 0;
            symbol = "";
            symbolPressed = false;
            display.textContent = "";
        }
    })   
});