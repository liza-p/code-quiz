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
    a: ['indefined','NaN', 'object'],
    correct: 2
}, {
    q:'What is the value of variable carName? var carName;',
    a: ['null', 'undefined', 'NaN'],
    correct:1
}];

var startButton = document.querySelector("#start");
var introElem = document.querySelector("#intro");
var mainElem = document.querySelector("#main");



startButton.addEventListener('click', function() {
    introElem.remove();
    var questionDiv = document.createElement("div");
    var question = questionsList[0];
    var questionTitle = document.createElement("h3");
    questionTitle.innerText = question.q;
    questionDiv.append(questionTitle);
    mainElem.append(questionDiv);
    var answerList = document.createElement("ol");
   
    for(let i = 0; i < question.a.length; i++) {
        var answer = document.createElement("li");
        answer.innerHTML = `<button type="button" class="btn btn-primary option" ></button>`
        answer.querySelector("button").innerText = question.a[i];
        answerList.append(answer);
    }
        questionDiv.append(answerList);



});
    
