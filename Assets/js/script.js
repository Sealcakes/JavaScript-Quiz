var startBtn = document.querySelector('#quiz-start');
var landingPage = document.querySelector('.landing-page');
var question1 = document.querySelector('.question-1');


function startQuiz(event) {
    event.preventDefault();

    landingPage.style.display = "none";
    question1.style.display = "flex";
}

function quizTimer() {
    
}

startBtn.addEventListener('click', startQuiz);