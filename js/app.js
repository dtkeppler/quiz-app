$(document).ready(function(){


//first set is the set of question; following sets are the answer set for each question; last is an answer key
questionArray [5][6];
questionArray [0][0] = "The bombing of this fort in April of 1861 started the Civil War";
questionArray [0][1] = "This is the name of the president of the Confederate States of America";
questionArray [0][2] = "With over 3,000 killed, this battle near Sharpsburg, MD, was the bloodiest single day of the war";
questionArray [0][3] = "Referred to as a 'cheese box on a raft', this ironclad defeated the Merrimack at the Battle of Hampton Roads";
questionArray [0][4] = "General Robert E. Lee formally Surrendered to General Ulysses S. Grant on April 9, 1865 at this location";

questionArray [1][0] = "Fort Wagner";
questionArray [1][1] = "Fort Sumter";
questionArray [1][2] = "Fort Ticonderoga";
questionArray [1][3] = "Fort Mitchell";
questionArray [1][4] = "Fort Sumter";

questionArray [2][0] = "James Longstreet";
questionArray [2][1] = "Stephen Adams";
questionArray [2][2] = "Jefferson Davis";
questionArray [2][3] = "George McClellan";
questionArray [2][4] = "Jefferson Davis";

questionArray [3][0] = "Antietam";
questionArray [3][1] = "Gettysburg";
questionArray [3][2] = "Vicksburg";
questionArray [3][3] = "Bull Run";
questionArray [3][4] = "Antietam";

questionArray [4][0] = "USS Niagara";
questionArray [4][1] = "USS Monitor";
questionArray [4][2] = "CSS Alabama";
questionArray [4][3] = "CSS H.L. Hunley";
questionArray [4][4] = "USS Monitor";

questionArray [3][0] = "New York City";
questionArray [3][1] = "Blackburn's Ford";
questionArray [3][2] = "Harper's Ferry";
questionArray [3][3] = "Appomattox";
questionArray [3][4] = "Appomattox"

/*
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
 }

 guess = getGuess();
 answer = getAnswer();

 document.getElementById("guessResult").innerHTML = produceMessage() {
  return answer;
 }
}
*/

function displayQuestion(position) {
  return questionArray[0][position];
}

function displayAnswer(questionPosition, answerPosition) {
  return questionArray[questionPosition][answerPosition];
}

function compareAnswer(userAnswer, correctAnswer) {
  if (userAnswer == correctAnswer) {
    return true;
  }  
  else {
    return false;
  }
}

$("#question").child().remove();
$("#question").append('<p>' + quiz[i].question + "</p>");

$("#submit").click()




})
