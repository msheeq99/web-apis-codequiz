//variables
const startQuiz = document.querySelector("#startBtn");
const infoBox = document.querySelector(".info-box");
const exitBtn = document.querySelector("#quit");
const continueBtn = document.querySelector("#restart");
const quizBox = document.querySelector("#quiz-box");

//start button clicked
startQuiz.addEventListener('click', () =>  {
    startQuiz.style.display = "none";
    infoBox.style.display = "block";
})

//exit button clicked
exitBtn.addEventListener('click', () => {
    infoBox.style.display = "none";
    startQuiz.style.display = "block";
})

//continue button clicked
continueBtn.addEventListener('click', () => {
    infoBox.style.display = "none";
    quizBox.style.display = "block";
    
});
 
   
//Quiz data
const quizData = [
    {
        question: "inside which HTML element do we put the JavaScript?",
        a: "<js>",
        b: "<scripting>",
        c: "<javascript>",
        d: "<script>",
        correct: "d",
    },

    {
        question: "Where is the correct place to insert a JavaScript?",
        a: "Both the <head> section and the <body> section are correct",
        b: "the <head> section",
        c: "the <body> section",
        d: "the <footer> section",
        correct: "a",
    },

    {
        question: "What is the correct syntax for referring to an external script called 'xxx.js'?",
        a: "<script name= 'xxx.js'>",
        b: "<script href= 'xxx.js'>",
        c: "<script scr= 'xxx.js'>",
        d: "<script = 'xxx.js'>",
        correct: "c",
    },

    {
        question: "How do you write 'Hello World' in an alert box?",
        a: "alert('Hello World');",
        b: "alertBox('Hello World');",
        c: "msgBox('Hello World');",
        d: "msg('Hello World');",
        correct: "a",
    },

    {
        question: "How do you create a function in JavaScript?",
        a: "function:myFunction()",
        b: "function = myFunction()",
        c: "function myFunction()",
        d: "function: Function()",
        correct: "c",
    },

    {
        question: "How do you call a function named 'myFunction'?",
        a: "myFunction()",
        b: "call myFunction()",
        c: "call function myFunction",
        d: "call function()",
        correct: "a",
    },

    {
        question: "How to write an IF statement in JavaScript?",
        a: "if(i == 5)",
        b: "if i == 5 then",
        c: "if i = 5 then",
        d: "if i = 5",
        correct: "a",
    },

    {
        question: "How does a WHILE loop start?",
        a: "while (i <= 10)",
        b: "while (i <= 10;i++)",
        c: "while ic= 1 to 10",
        d: "while (i <== 10,i+++)",
        correct: "a",
    },

    {
        question: "How can you add a comment in a JavaScript?",
        a: "///This is a comment",
        b: "<!--This is a comment -->",
        c: "//This is a comment",
        d: "<-- This is a comment -->",
        correct: "c",
    },

    {
        question: "What is the correct way to write a JavaScript array?",
        a: "var color = ['red', 'green', 'blue']",
        b: "var color = 1=('red'), 2=('green'), 3=('blue')",
        c: "var color = (1:'red', 'green', 'blue')",
        d: "var color = 'red', 'green', 'blue'",
        correct: "a",
    },
]
//Quiz data variables
const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const aText = document.getElementById('a-text');
const bText = document.getElementById('b-text');
const cText = document.getElementById('c-text');
const dText = document.getElementById('d-text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0
let score = 0

loadQuiz()

  function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    aText.innerText= currentQuizData.a
    bText.innerText= currentQuizData.b
    cText.innerText= currentQuizData.c
    dText.innerText= currentQuizData.d
}

function deselectAnswers(){
    answerEls.forEach(answerEls => answerEls.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEls => {
        answer = answerEls.id
    })
    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++ 
        
        if(currentQuiz < quizData.length) {
            loadQuiz()
        } 
        else {
         
        
        }

    }
});