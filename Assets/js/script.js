var startBtn = document.querySelector('#quiz-start');
var landingPage = document.querySelector('.landing-page');
var question1 = document.querySelector('.question-1');
var question2 = document.querySelector('.question-2')
var question3 = document.querySelector('.question-3')
var question4 = document.querySelector('.question-4')
var question5 = document.querySelector('.question-5')
var timerSpanEl = document.querySelector('#timer-number');
var timerEl = document.querySelector('#timer');
var scorePage = document.querySelector('.score-report');
var score = document.querySelector('#score');
var correctButton = document.querySelector('.correct');
var incorrectButtons = document.querySelectorAll('.incorrect');

var secondsLeft = 75;


function startQuiz(event) {
    event.preventDefault();

    landingPage.style.display = "none";
    question1.style.display = "flex";
    timerEl.style.display = "block";
    quizTimer();
    questions();
}

function quizTimer() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timerSpanEl.textContent = secondsLeft;

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            alert("You are out of time.");
        }
    }, 1000);
}

function questions() {
    

    for (x = 0; x < incorrectButtons.length; x++) {
        incorrectButtons[i].addEventListener('click', function(event){
            event.preventDefault();
            secondsLeft -= 10;
        })
    }
}



function displayScore() {
    score.textContent = secondsLeft;
}

startBtn.addEventListener('click', startQuiz);