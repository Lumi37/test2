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
        
        if (Number.isInteger( Number.parseInt(text) ) && symbolPressed == false )
            num1 = Number(display.textContent)
        else if(Number.isInteger( Number.parseInt(text) ) && symbolPressed == true)  
            num2 = Number(display.textContent)

        
        if (text === "+"){
            symbolPressed = true ;
            symbol = "+"
            display.textContent = "0"
        }

        if (text === "-"){
            symbolPressed = true ;
            symbol = "-"
            display.textContent = "0"
        }

        if (text === "X"){
            symbolPressed = true ;
            symbol = "X"
            display.textContent = "0"
        }

        if (text === "/"){
            symbolPressed = true ;
            symbol = "/"
            display.textContent = "0"
        }
      
        if (text === "="){
            if(symbol === "+")
                display.textContent = num1 + num2
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