const computerChoiceDisplay=document.getElementById("computer-choice")
const userChoiceDisplay=document.getElementById("user-choice")
const resultDisplay=document.getElementById("result")
const possibleChoices=document.querySelectorAll("button")
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener("click",(e)=>{
    userChoice=e.target.id
    userChoiceDisplay.innerHTML=userChoice

    generateComputerChoice()
    getResult()

}))

function generateComputerChoice(){

  const randomNumber=Math.floor(Math.random()*3 + 1) // αντι για 3 μπορω να βαλω την possibleChoices.lenght

  //console.log(randomNumber)

  if(randomNumber===1){computerChoice="rock"}
  if(randomNumber===2){computerChoice="scissors"}
  if(randomNumber===3){computerChoice="paper"}

  computerChoiceDisplay.innerHTML=computerChoice

 

}


function getResult(){
   
    if(computerChoice===userChoice){result="Draw!"}

    if(computerChoice==="rock"&& userChoice==="paper"){result="Win!"}
    if(computerChoice==="rock"&& userChoice==="scissors"){result="Loose!"}

    if(computerChoice==="paper"&& userChoice==="rock"){result="Loose!"}
    if(computerChoice==="paper"&& userChoice==="scissors"){result="Loose!"}

    if(computerChoice==="scissors"&& userChoice==="rock"){result="Win!"}
    if(computerChoice==="scissors"&& userChoice==="paper"){result="Loose!"}

    resultDisplay.innerHTML=result
}


