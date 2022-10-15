/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const containerBtn = document.getElementById("container-btn")
const containerInput = document.getElementById("container-input")
const feetEl = document.getElementById("feet")
const gallonEl = document.getElementById("gallon")
const poundsEl = document.getElementById("pounds")
let MTFC = 3.281 // where MTFC stand for 1meter = 3.281
let LTGC = 0.264 // where LTGC stands for 1liter = 0.264
let KTPC = 2.204 // where KTPC stands for 1liter = 2.204


containerBtn.addEventListener("click", function() {
   
   outputValue = containerInput.value
   feetEl.textContent = `${outputValue} meters =  ${(outputValue * MTFC).toFixed(2)} feet | ${outputValue} feet = ${(outputValue / MTFC).toFixed(2)} meters` 
   
   gallonEl.textContent = `${outputValue} liters = ${(outputValue * LTGC).toFixed(2)} gallons | ${outputValue} gallons ${(outputValue / LTGC).toFixed(2)} liters`
   
   poundsEl.textContent = `${outputValue} kilo = ${(outputValue * KTPC).toFixed(2)} pounds | ${outputValue} pounds = ${(outputValue / KTPC).toFixed(2)} kilo`
   
})

// triggers an event
const event = new Event("click");
containerBtn.dispatchEvent(event)