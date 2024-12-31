const resultLabel = document.getElementById("result");
const checkButton = document.getElementById("check-btn");
const inputBox = document.getElementById("text-input");

function cleanInputString(str){
  const regex = /[^a-zA-Z0-9]/g;
  return str.replace(regex, "").toLowerCase();
}

function isPalindrome(str){
  if (str === ""){
    alert("Please input a value");
    return;
  }
  if (str.length === 1){
    return true;
  }
  else{
    let cleanString = cleanInputString(str);
    let stringArray = cleanString.split("");
    stringArray.reverse();
    let reverseString = stringArray.join("");
    return cleanString === reverseString;
  }
}

function setResult(){
  const userInput = inputBox.value;
  let resultString = isPalindrome(userInput) ? `${userInput} is a palindrome`:`${userInput} is not a palindrome`;
  resultLabel.textContent = resultString;
  console.log(resultString);
  return;
}

checkButton.addEventListener("click", setResult);
