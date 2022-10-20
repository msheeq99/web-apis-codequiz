const startQuiz = document.querySelector("#startBtn");
const infoBox = document.querySelector(".info-box");
const exitBtn = document.querySelector("#quit");
const continueBtn = document.querySelector("#restart");
const quizBox = document.querySelector("#quiz-box");

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
    quizBox.style.display = "block";
    
})

function setNextQuestion() [
   

const quizData = {
    {
        question: "inside which HTML element do we put the JavaScript?",
        a: ,
        b: ,
        c: ,
        d: ,
        correct: ,
    },

    {
        question: "inside which HTML element do we put the JavaScript?",
        a: ,
        b: ,
        c: ,
        d: ,
        correct: ,
    },

    {
        question: "inside which HTML element do we put the JavaScript?",
        a: ,
        b: ,
        c: ,
        d: ,
        correct: ,
    },

    {
        question: "inside which HTML element do we put the JavaScript?",
        a: ,
        b: ,
        c: ,
        d: ,
        correct: ,
    },

    {
        question: "inside which HTML element do we put the JavaScript?",
        a: ,
        b: ,
        c: ,
        d: ,
        correct: ,
    },

    {
        question: "inside which HTML element do we put the JavaScript?",
        a: ,
        b: ,
        c: ,
        d: ,
        correct: ,
    },

    {
        question: "inside which HTML element do we put the JavaScript?",
        a: ,
        b: ,
        c: ,
        d: ,
        correct: ,
    },

    {
        question: "inside which HTML element do we put the JavaScript?",
        a: ,
        b: ,
        c: ,
        d: ,
        correct: ,
    },

    {
        question: "inside which HTML element do we put the JavaScript?",
        a: ,
        b: ,
        c: ,
        d: ,
        correct: ,
    },

    {
        question: "inside which HTML element do we put the JavaScript?",
        a: ,
        b: ,
        c: ,
        d: ,
        correct: ,
    },
]