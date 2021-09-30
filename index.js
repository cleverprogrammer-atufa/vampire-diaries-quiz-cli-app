var readlineSync = require("readline-sync");
var chalk = require("chalk");

var score = 0;

function welcome(){
   var userName = readlineSync.question("What's your name? ");

  console.log("Welcome "+ userName + "  let's see if you know Vampire Diaries");
}


function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) { // branching
    console.log(chalk.green("yess its right!"));
    score = score + 1;
    
  } else {
    console.log(chalk.red(" oops its wrong!"));
   
  }

  console.log("current score of quiz is : ", score);
  console.log("-------------------------------------");

}

// questions 
var questionOne ={
  question: "Who is daman salvatore ? ",
  answer:"vampire",}


  
var questionTwo ={

  question: "elena loves ? ",
  answer:"damon"
}

var questionThree ={
  question: "stefan bestfriend name ? ",
  answer:"lexi"
}
var questionFour ={
  question: "elena brother name? ",
  answer :"jeremy"
}

var questions =  [questionOne ,questionTwo,questionThree,  questionFour ];

function game() {
  for (var i=0; i<questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}
function showScores() {
  console.log (chalk.red(" You SCORED: ", score));
}

welcome();

game();
showScores();