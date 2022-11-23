console.log(document.querySelectorAll(".btns button "))
let num1 = 0;
let num2 = 0;
let symbolPressed = false ; 
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
        }

        if (text === "-"){
            symbolPressed = true ;
            symbol = "-";
            display.textContent = "0";
        }

        if (text === "X"){
            symbolPressed = true ;
            symbol = "X";
            display.textContent = "0";
        }

        if (text === "/"){
            symbolPressed = true ;
            symbol = "/";
            display.textContent = "0";
        }
        if (text === "x^2"){
            symbolPressed = true ;
            symbol = "x^2";
            display.textContent = num1**2;
            num1 = num1**2;
        }
        if (text === "sqrt"){
            symbolPressed = true ;
            symbol = "sqrt";
            display.textContent = Math.sqrt(num1);
        }
        if(text === "1/x"){
            symbolPressed = true;
            symbol = "1/x";
            display.textContent = 1/num1;
        }
        if(text === "%"){
            symbolPressed = true;
            symbol = "%";
            display.textContent = num1*100;
        }
        // if(text === "+/-"){
        //     if (num1=>0 && symbolPressed == false){
        //         console.log("happens");
        //         num1 = -num1;
        //         display.textContent = num1;
        //     }
        //     else{
        //         console.log("happens2");
        //         num1 = Math.abs(num1);
        //         display.textContent = num1;
        //     }
        //     if (num2=>0 && symbolPressed == true ){
        //         console.log("happens3");
        //         num2 = -num2;
        //         display.textContent = num2;
        //     }
        //     else{
        //         console.log("happens4");
        //         num2 = Math.abs(num2);
        //         display.textContent = num2;
        //     }
            
        // }


        if (text === "=" && symbolPressed === true){
            if(symbol === "+"){
                console.log(num1 , num2 , 1/num1)
                display.textContent = num1 + num2
            }
            if(symbol === "-")  
                display.textContent = num1 - num2
            if(symbol === "X")
                display.textContent = num1 * num2
            if(symbol === "/"){
                if(num2 === 0)
                    alert("Cant divide with 0 expected result: infinity")
                display.textContent = num1 / num2
            }


        }

        if (text === "CE" || text === "C"){
            num1 = 0;
            num2 = 0;
            symbol = "";
            symbolPressed = false;
            display.textContent = "";
        }





    })
    
});