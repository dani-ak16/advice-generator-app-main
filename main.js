const adviceId = document.getElementById("advice-id") 
const advice = document.getElementById("advice")
const url = "https://api.adviceslip.com/advice"
let adviceData

const diceBtn = document.querySelector(".dice-btn")
diceBtn.addEventListener("click", function(){
    fetch(url)
    .then(response =>{
        if (!response.ok) {
            throw new Error("Network response was not ok")
        }
        return response.json()
    })
    .then(data => {
        advice.textContent = data.slip.advice 
        adviceId.textContent = data.slip.id
    })
})
fetch(url)
    .then(response =>{
        if (!response.ok) {
            throw new Error("Network response was not ok")
        }
        return response.json()
    })
    .then(data => {
        advice.textContent = data.slip.advice 
        adviceId.textContent = data.slip.id
    })
    
