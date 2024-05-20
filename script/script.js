let celsius = document.getElementsByTagName("input")[0]
let convert = document.getElementsByClassName('convert')[0]
let answer = document.getElementsByClassName('fahrenheit')[0]


convert.addEventListener('click', () =>{
    answer.innerText = (9/5 * celsius.value ) + 32 
})



// function convertTemperature() {
    
//     let celsius = parseFloat(document.getElementById("degreesC").value);
//     let  = (celsius * 9/5) + 32;
//     document.getElementsByClassName('result').innerText = fahrenheit.toFixed(2) + "°F";
// }
