console.log(document.querySelectorAll(".btns button "))
let temp1 = 0;
let temp2 = 0;
let symbolPressed = false ; 
let allBtns = document.querySelectorAll(".btns button")
let label = document.querySelector("#display") //document.getElementById("display")
allBtns.forEach((btn)=> {
    btn.addEventListener("click", (event)=>{
        console.log(label.textContent)
        label.textContent += event.target.textContent
        
        if (Number.isInteger( Number.parseInt(event.target.textContent) ) && symbolPressed == false )
            temp1 = Number(label.textContent)
        else if(Number.isInteger( Number.parseInt(event.target.textContent) ) && symbolPressed == true)  
            temp2 = Number(label.textContent)

        
        if (event.target.textContent === "+"){
            symbolPressed = true ;
            symbol = "+"
            label.textContent = "0"
        }

        if (event.target.textContent === "-"){
            symbolPressed = true ;
            symbol = "-"
            label.textContent = "0"
        }

        if (event.target.textContent === "X"){
            symbolPressed = true ;
            symbol = "X"
            label.textContent = "0"
        }

        if (event.target.textContent === "/"){
            symbolPressed = true ;
            symbol = "/"
            label.textContent = "0"
        }
      
        if (event.target.textContent === "="){
            if(symbol === "+")
                label.textContent = temp1 + temp2
            if(symbol === "-")  
                label.textContent = temp1 - temp2
            if(symbol === "X")
                label.textContent = temp1 * temp2
            if(symbol === "/"){
                if(temp2 === 0)
                    alert("Cant divide with 0 expected result: infinity")
                label.textContent = temp1 / temp2
            }
                
        }






    })
    
});