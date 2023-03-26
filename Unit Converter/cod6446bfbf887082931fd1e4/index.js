/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
1 feet = 0.3048 meter
1 gallon = 3.78541 liter
1 pound = 0.453592 kilogram
*/

const btnEl = document.getElementById("btn-el")
const numEl = document.getElementById("num-el")
const lengthAns = document.getElementById("length-ans")
const volumeAns = document.getElementById("volume-ans")
const massAns = document.getElementById("mass-ans")

const meterFeet = 3.281
const literGallon = 0.264
const kiloPound = 2.204

const feetMeter = 0.3048
const gallonLiter = 3.78541
const poundKilo = 0.453592


btnEl.addEventListener("click", function() {
    lengthTotal()
    volumeTotal()
    massTotal()
})

function lengthTotal() {
    let value = numEl.value
    lengthAns.textContent = `${value} meter = ${(value * meterFeet).toFixed(3)} feet | ${value} feet = ${(value * feetMeter).toFixed(3)} meter`
}

function volumeTotal(){
    let value = numEl.value
    volumeAns.textContent = `${value} liter = ${(value * literGallon).toFixed(3)} gallon | ${value} gallon = ${(value * gallonLiter).toFixed(3)} liter`
}

function massTotal() {
    let value = numEl.value
    massAns.textContent = `${value} kilogram = ${(value * kiloPound).toFixed(3)} pound | ${value} pound = ${(value * poundKilo).toFixed(3)} kilogram`
}