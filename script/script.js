let celsius = document.getElementsByClassName("degreesC")
let calculate = document.getElementsByClassName('convert')



function convertTemperature() {
    
    let celsius = parseFloat(document.getElementById("degreesC").value);
    let fahrenheit = (celsius * 9/5) + 32;
    document.getElementsByClassName("result").innerText = fahrenheit.toFixed(2) + "°F";
}