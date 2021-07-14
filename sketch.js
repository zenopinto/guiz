var canvas, backgroundImage;

var gameState = 0;
var contestantCount;
var allContestants;
var answer;
var database;

var question, quiz,contestant;


function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();
  quiz = new Quiz();
  question= new Question();
  contestant=new Contestant();
  quiz.gameState();
  quiz.start();
}


function draw(){
  background("pink");
  if(contestantCount === 4){
    quiz.update(1);
  }
  if(gameState === 1){
  
    quiz.play();
  }
  question.display();
}