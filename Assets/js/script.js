// HTML Elements converted to JS Variables
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
var scoreText = document.querySelector('#score');
var correctButton = document.querySelectorAll('.correct');
var incorrectButtons = document.querySelectorAll('.incorrect');
var userInitialsInput = document.querySelector('#initials');
var submitScoreBtn = document.querySelector('#submit-score');
var scoreConfirm = document.querySelector('.confirm-score-submit');
var homeBtn = document.querySelector('#home-button');
var message = document.querySelector('.message');
var viewHighscores = document.querySelector('#highscores');
var highscoresList = document.querySelector('#highscoresList');
var highscoresBtn = document.querySelector('#highscores-btn');
var highscoresPage = document.querySelector('.highscores-page');
var backBtn = document.querySelector('#back-btn');

// Global Function Variables
var secondsLeft = 75;
var currentIndex = 0;
var questionScreens = [question1, question2, question3, question4, question5];
var timerInterval = null;
var score = 0;
var highscores = [];

// Function to Start Quiz/Timer/Questions after Start Button is clicked
function startQuiz(event) {
    event.preventDefault();
    secondsLeft = 75;
    landingPage.style.display = "none";
    questionScreens[0].style.display = "flex";
    timerEl.style.display = "block";
    quizTimer();
    rightOrWrongButton();
}

// Function to create a timer for quiz, it is started within startQuiz function
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

/* This function handles hiding/showing quiz questions, uses DOM to access display
property and either hides or shows display */
function displayQuestion() {
    questionScreens[currentIndex].style.display = 'none';
    currentIndex += 1;
    
    if (currentIndex == 5) {
        endQuiz();
    } else {
        questionScreens[currentIndex].style.display = 'flex';
    }
}

/* Determines if the button the user clicks on to answer the question is right or wrong,
if the user selects the wrong answer it subtracks 10 seconds from the timer.  Both
correct and incorrect will advance the quiz to the next question.  This function
will also inform the user of a correct or incorrect answer. */

function rightOrWrongButton() {
    
    for (i = 0; i < correctButton.length; i++) {
        correctButton[i].addEventListener('click', function(event) {
            event.preventDefault();
            displayQuestion();
            message.style.cssText = 'font-weight: 500; color: green';
            message.textContent = "Correct!";
            setTimeout(() => {
                message.style.display = 'none';
            }, 1000);
        })
    }
    
    for (x = 0; x < incorrectButtons.length; x++) {
        incorrectButtons[x].addEventListener('click', function(event){
            event.preventDefault();
            secondsLeft -= 10;
            displayQuestion();
            message.style.cssText = 'font-weight: 500; color: red';
            message.textContent = "Incorrect!";
            setTimeout(() => {
                message.style.display = 'none';
            }, 1000);
        })
    }
}
/* This function displays the end of the quiz screen and shows the user's score */
function endQuiz() {
    questionScreens[0].style.display = 'none';
    questionScreens[1].style.display = 'none';
    questionScreens[2].style.display = 'none';
    questionScreens[3].style.display = 'none';
    questionScreens[4].style.display = 'none';
    scoreReport.style.display = 'flex';
    clearInterval(timerInterval);
    scoreText.textContent = secondsLeft;
    score = secondsLeft;
}

// TODO: CREATE SUBMIT SCORE FUNCTION
function submitScore(event) {
    event.preventDefault();

    if (userInitialsInput.value == "") {
        message.style.cssText = 'font-weight: 500; color: red';
        message.textContent = "Cannot submit highscore without initials";
        setTimeout(() => {
            message.style.display = 'none';
        }, 2000);
        return;
    }
    
    scoreReport.style.display = "none";
    scoreConfirm.style.display = "flex";
    userInitialsInput.textContent = "";
    renderHighscores();
}
// TODO: LINK SCORE TO HIGHSCORES PAGE
// function renderHighscores() {
//     let storedHighscores = {initials: userInitialsInput.value, score: score};
//     var highScoreString = localStorage.getItem('highscores');
//     var highscoreArray = JSON.parse(highScoreString);
//     if (highscoreArray === null) {
//         highscoreArray = []
//     }
//     highscoreArray.push(storedHighscores);
//     localStorage.setItem("highscores", JSON.stringify(storedHighscores));
//     var highscores = JSON.parse(localStorage.getItem('highscores'));

//     for (x=0; x<highscores.length; x++) {
//         var li = document.createElement("li");
//         li.textContent = highscores[x];

//         highscoresList.appendChild(li);
//     }
// };

function displayHighscores(event) {
    event.preventDefault();
    landingPage.style.display = 'none';
    highscoresPage.style.display = 'flex';
}

// Event Listener to start quiz
startBtn.addEventListener('click', startQuiz);


// Event listener for submit score button
submitScoreBtn.addEventListener('click', submitScore); 

// Event listener for home button
homeBtn.addEventListener('click', function(event) {
    event.preventDefault();
    scoreConfirm.style.display = 'none';
    landingPage.style.display = 'flex';
    timerEl.style.display = 'none';
})
// Event Listener for Highscores Button on Confirmation screen
viewHighscores.addEventListener('click', function(event) {
    scoreConfirm.style.display = 'none';
    highscoresPage.style.display = 'flex';
})


// Event Listener for Top Left Highscores Button
highscoresBtn.addEventListener('click', displayHighscores);

backBtn.addEventListener('click', function(event) {
    event.preventDefault();
    highscoresPage.style.display = 'none';
    landingPage.style.display = 'flex';
})