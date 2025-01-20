const userInput = document.getElementById("user-input");
const checkButton = document.getElementById("check-btn");
const clearButton = document.getElementById("clear-btn");
const resultsDiv = document.getElementById("results-div");

function validInput(str){
  let regex = /^(1\s?)?(\(\d{3}\)|\d{3})(\s|-)?(\d{3})(\s|-)?(\d{4})$/g;
  return(regex.test(str));
}

function checkInput(){
  let input = userInput.value;
  if (input === ""){
    alert("Please provide a phone number");
  }
  let result = validInput(input)?  `Valid US number: ${input}`: `Invalid US number: ${input}`;
  resultsDiv.textContent = result;
  userInput.value = "";
}

function clearInput(){
  resultsDiv.textContent = "";
}


checkButton.addEventListener("click", checkInput);
clearButton.addEventListener("click", clearInput);
