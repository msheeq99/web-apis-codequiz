const startQuiz = document.querySelector("#startBtn");
const infoBox = document.querySelector(".info-box");
const exitBtn = document.querySelector("#quit");
const continueBtn = document.querySelector("#restart");
const quizBox = document.querySelector("#quiz-")

startQuiz.addEventListener('click', () =>  {
    startQuiz.style.display = "none";
    infoBox.style.display = "block";
})

exitBtn.addEventListener('click', () => {
    infoBox.style.display = "none";
    startQuiz.style.display = "block";
})

continueBtn.addEventListener('click', () => {
    infoBox.style.display = "none";
    
})

function setNextQuestion() {

}