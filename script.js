var questionsList = [{
    q:'Inside which HTML element do we put JavaScript code?',
    a:['<script>', '<js>', '<src>'],
    correct:0
}, {
    q: 'How do you create a function in JavaScript?',
    a: ['function Myfunction()', 'function = Myfunction()', 'var = Myfunction'],
    correct:0
}, {
    q:'How does the While loop work?',
    a:['loops through a block of code a number of times', 'loops through a block of code as long as a specified condition is true', 'loops through the properties of an object'],
    correct:1
}, {
    q:'What is typeof of null?',
    a: ['undefined','NaN', 'object'],
    correct: 2
}, {
    q:'What is the value of variable carName? var carName;',
    a: ['null', 'undefined', 'NaN'],
    correct:1
}];

var startButton = document.querySelector("#start");
var introElem = document.querySelector("#intro");
var mainElem = document.querySelector("#main");
var timer = document.querySelector("#timer");
var score = 0;
var time ;
var countdown;


var currentQuestionNum = 0;

function startTimer(duration, display) {
    time = duration;
    countdown = setInterval(function () {
        var minutes = parseInt(time / 60, 10);
        var seconds = parseInt(time % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        time--;
        if (time < 0) {
            time = duration;
        }
    }, 1000);
}

window.onload = function () {
    
    // startTimer(fiveMinutes, timer);
};



function onSelectOption(event){
  var userChoice = parseInt(event.target.getAttribute("data-option"), 10);
  var question = questionsList[currentQuestionNum];
  if(userChoice === question.correct) {
      alert("Correct!");
      score = score + 10;
  } else{
      alert("Wrong!");
  }
  if(currentQuestionNum === questionsList.length-1){
      clearInterval(countdown);
     showFinalResults();
  }else{
    currentQuestionNum++;
    showQuestion();
    time=time - 10;
  }
  

}
function showFinalResults(){
    mainElem.innerHTML= "";
    var resultsDiv = document.createElement("div");
    var resultTitle = document.createElement("h3");
    resultTitle.innerText = "All done!";
    var resultParagraph = document.createElement("p");
    resultParagraph.innerText = "Your final score is " + score + "/50";
    var initialsInput = document.createElement("input");
    initialsInput.placeholder = "Enter Initials here";
    resultsDiv.append(resultTitle);
    resultsDiv.append(resultParagraph);
    resultsDiv.append(initialsInput);
    mainElem.append(resultsDiv);
    var buttonContainer = document.createElement("span");
    buttonContainer.innerHTML= `<button type="button" class="btn btn-primary btn-sm ml-1">Submit</button>`
    resultsDiv.append(buttonContainer);
    var submitButton = buttonContainer.querySelector('button');
    submitButton.addEventListener('click', function(){
        var highscores = JSON.parse(localStorage.getItem('highscores'));
        if (highscores === null) {
            highscores = [];
        }
        var result = {
            name: initialsInput.value,
            score: score
        };
        highscores.push(result);
        localStorage.setItem('highscores', JSON.stringify(highscores));
        location.href = 'highscores.html';
    });


}

function showQuestion(){
    var questionDiv = document.createElement("div");
    var question = questionsList[currentQuestionNum];
    var questionTitle = document.createElement("h3");
    questionTitle.innerText = question.q;
    questionDiv.append(questionTitle);
    mainElem.innerHTML= "";
    mainElem.append(questionDiv);
    var answerList = document.createElement("ol");
   
    for(let i = 0; i < question.a.length; i++) {
        var answer = document.createElement("li");
        answer.innerHTML = `<button type="button" class="btn btn-primary option" data-option="${i}" ></button>`
        var choiceButton = answer.querySelector("button");
        choiceButton.innerText = question.a[i];
        answerList.append(answer);
        choiceButton.addEventListener('click', onSelectOption);
    }
    
    questionDiv.append(answerList);



}

startButton.addEventListener('click', function() {
    introElem.remove();
    showQuestion();
    var twoMinutes = 60 * 2;
    startTimer(twoMinutes, timer);
    
    

});
    
