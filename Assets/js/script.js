var startBtn = document.querySelector('#quiz-start');
var landingPage = document.querySelector('.landing-page');
var question1 = document.querySelector('.question-1');
var question2 = document.querySelector('.question-2');
var question3 = document.querySelector('.question-3');
var question4 = document.querySelector('.question-4');
var question5 = document.querySelector('.question-5');
var timerSpanEl = document.querySelector('#timer-number');
var timerEl = document.querySelector('#timer');
var scoreReport = document.querySelector('.score-report');
var score = document.querySelector('#score');
var correctButton = document.querySelectorAll('.correct');
var incorrectButtons = document.querySelectorAll('.incorrect');
var timerInterval = null;


var secondsLeft = 75;
var currentIndex = 0;
var questionScreens = [question1, question2, question3, question4, question5];

function startQuiz(event) {
    event.preventDefault();

    landingPage.style.display = "none";
    questionScreens[0].style.display = "flex";
    timerEl.style.display = "block";
    quizTimer();
    questions();
}

function quizTimer() {
    timerInterval = setInterval(function () {
        secondsLeft--;
        timerSpanEl.textContent = secondsLeft;

        if (secondsLeft <= 0) {
            clearInterval(timerInterval);
            endQuiz();
        }
    }, 1000);
}

function displayQuestion() {
    questionScreens[currentIndex].style.display = 'none';
    currentIndex += 1;
    
    if (currentIndex == currentIndex.length) {
        endQuiz();
    } else {
        questionScreens[currentIndex].style.display = 'flex';
    }
}

function questions() {
    
    for (i = 0; i < correctButton.length; i++) {
        correctButton[i].addEventListener('click', function(event) {
            event.preventDefault();
            displayQuestion();
        })
    }
    
    for (x = 0; x < incorrectButtons.length; x++) {
        incorrectButtons[x].addEventListener('click', function(event){
            event.preventDefault();
            secondsLeft -= 10;
            displayQuestion();
        })
    }
}

function endQuiz() {
    questionScreens[4].style.display = 'none';
    scoreReport.style.display = 'flex';
    clearInterval(timerInterval);
    score.textContent = secondsLeft;
}

startBtn.addEventListener('click', startQuiz);