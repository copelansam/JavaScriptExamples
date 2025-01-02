const inputContainer = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");
convertBtn.addEventListener("click",displayResult);

function displayResult(){
  const decimalNum = inputContainer.value;
   if (inputContainer.value === ""){
    
    output.innerText = "Please enter a valid number";
  } 
  else if (decimalNum <= 0){
    output.innerText = "Please enter a number greater than or equal to 1";
  }   
  else if(decimalNum >= 4000){
    output.innerText = "Please enter a number less than or equal to 3999";
  } 
  else{
    convertToRoman(decimalNum);
  }
}
function convertToRoman(number){
  const romanMap = [
    {value: 1000, symbol : "M"},
    {value : 900, symbol: "CM"},
    {value: 500,  symbol: "D"},
    {value: 400,  symbol: "CD"},   
    {value: 100,  symbol: "C"},
    {value: 90,   symbol: "XC"},
    {value: 50,   symbol: "L"},
    {value: 40,   symbol: "XL"},
    {value: 10,   symbol: "X"},
    {value: 9,    symbol: "IX"},
    {value: 5,    symbol: "V"},
    {value: 4,    symbol: "IV"},
    {value: 1,    symbol: "I"}
    ]

let romanString = "";

for (let i = 0; i < romanMap.length; i++){
  while (number >= romanMap[i].value){
    romanString += romanMap[i].symbol;
    number -= romanMap[i].value;
  }
}
output.innerText = romanString;
}