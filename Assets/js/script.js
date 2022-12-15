var startBtn = document.querySelector('#quiz-start');
var landingPage = document.querySelector('.landing-page');



function startGame(event) {
    event.preventDefault();

    landingPage.style.display = "none";
}


startBtn.addEventListener('click', startGame);