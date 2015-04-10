$(document).ready(function(){

 function getGuess() {
  (".button").click(function() {
   return (".answer-list").val();
  });
 }

 function getAnswer() {
  if (guess = "Fort Sumter") {
   return "Correct!";
  }
  else {
   return "Incorrect";
  }
 })

 guess = getGuess();
 answer = getAnswer();

 document.getElementById("guessResult").innerHTML = produceMessage() {
  return answer;
 }
}