
const display = document.querySelector("#display")
const incre = document.querySelector("#incre")
const decr = document.querySelector("#decr")
const reset = document.querySelector("#reset")
const icon1 = document.querySelector("#icon1")
// const icon2 = document.querySelector("#icon2")
// const icon3 = document.querySelector("#icon3")
// const icon4 = document.querySelector("#icon4")
console.log(display,incre,decr,reset)

let start = 0
 
// icon2.style.display = "none"
// icon3.style.display = "none"
// icon4.style.display = "none"
// increment

incre.addEventListener("click", () =>{
    start ++
    display.innerHTML = start
    if(start == 10){
          icon1.innerHTML = "👌"
        display.style.color = "red"

       
         icon1.addEventListener("mouseover", () => {
             icon1.style.scale = "2"
        })
          icon1.addEventListener("mouseout", () => {
             icon1.innerHTML = "👌"
        })
    }else if(start == 20){
        icon1.innerHTML = "🙌"
    }else if(start == 30){
        icon1.innerHTML = "✌️"
    }else if(start == 40){
        icon1.innerHTML = "🙌"
    }else if(start == 50){
        icon1.innerHTML = "🤞"
    }else if(start == 60){
        icon1.innerHTML = "🙌"
    }else if(start == 70){
        icon1.innerHTML = "🙌"
    }else if(start == 100){
        icon1.innerHTML = "🤖"
    }else{
         display.style.color = "black" 
              icon1.innerHTML = " "
         
    }

 
})

// decriment
decr.addEventListener("click", () =>{
     
 
  if(start > 0 ){

     start --  
    display.innerHTML = start 
     if(start == 10){
          icon1.innerHTML = "👌"
        display.style.color = "red"
       
         
    }else if(start == 20){
        icon1.innerHTML = "🙌"
        
    }else if(start == 30){
        icon1.innerHTML = "✌️"
    }else if(start == 40){
        icon1.innerHTML = "🙌"
    }else if(start == 50){
        icon1.innerHTML = "🤞"
    }else if(start == 60){
        icon1.innerHTML = "🙌"
    }else if(start == 70){
        icon1.innerHTML = "🙌"
    }else if(start == 100){
        icon1.innerHTML = "🤖"
    }else{
         display.style.color = "black" 
              icon1.innerHTML = " "
         
    }
  }
    
})


// reset

reset.addEventListener("click", () =>{

    start = 0
 display.innerHTML = start 
 icon1.innerHTML = ""
})