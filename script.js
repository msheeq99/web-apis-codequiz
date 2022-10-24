//variables
const startQuiz = document.querySelector("#startBtn");
const infoBox = document.querySelector(".info-box");
const exitBtn = document.querySelector("#quit");
const continueBtn = document.querySelector("#restart");
const resultsBox = document.querySelector("#results-box")
const quizBox = document.querySelector("#quiz-box");
const replayBtn = document.querySelector("#replay");
const options_list = document.querySelector(".option-list");
const quitBtn = document.querySelector("#exit-btn");
const timeCount = quizBox.querySelector(".timer .timer-sec");
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
    showQuestions(0);
    queCounter(1);
    startTimer(15);
})

let que_count = 0;
let que_numb = 1;
let counter;
let timeValue = 15;

const next_btn = document.querySelector("#next-btn");

//if next button gets clicked
next_btn.onclick = ()=> {
    if(que_count < questions.length - 1){
        que_count++;
        que_numb++;
        showQuestions(que_count);
        queCounter(que_numb);
        clearInterval(counter);
        startTimer(timeValue);
    }else {
        console.log("Questions completed");
    }


}

//Getting questions and options from array
function showQuestions(index){
    const que_text = document.querySelector(".que-text");
    let que_tag = '<span>'+questions[index].numb+ '.' + questions[index].question + '</span>';
    let option_tag = '<div class= "option">'+ questions[index].options[0] +'<span></span></div>'
                     + '<div class= "option">'+ questions[index].options[1] +'<span></span></div>'
                     + '<div class= "option">'+ questions[index].options[2] +'<span></span></div>'
                     + '<div class= "option">'+ questions[index].options[3] +'<span></span></div>';
    que_text.innerHTML = que_tag
    options_list.innerHTML = option_tag;
    const option = options_list.querySelectorAll(".option");
    for (let i = 0; i < option.length; i++) {
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}

let tick = '<div class="tick"><i class="fas fa-check"></i></div>';
let cross = '<div class="cross"><i class="fas fa-times"></i></div>';

function optionSelected(answer){
    clearInterval(counter);
    let userAns = answer.textContent;
    let correctAns = questions[que_count].answer;
    let allOptions = options_list.children.length;
    if(userAns == correctAns){
        answer.classList.add("correct");
        console.log ("Answer is Correct");
        answer.insertAdjacentHTML("beforeend", tick);
    }else{
        answer.classList.add("incorrect");
        console.log("Answer is Wrong");
        answer.insertAdjacentHTML("beforeend", cross);
        //if answer is incorrect then automatically selected the correct answer
        for (let i = 0; i < allOptions; i++) {
            if(options_list.children[i].textContent == correctAns) {
                options_list.children[i].setAttribute("class", "option correct");
            }
        }
    }

    //once user selected disabled all options
    for (let i = 0; i < allOptions; i++){
        options_list.children[i].classList.add("disabled");
    }
}

function startTimer(time){
    counter = setInterval(timer, 1000);
    function timer(){
        timeCount.textContent = time;
        time--;
    }
}



 

function queCounter(index){
    const bottom_ques_counter = quizBox.querySelector(".total-que");
    let totalQuesCountTag = '<span><p>' + que_count + '</p>of<p>' + questions.length + '</p>Questions</span>';
    bottom_ques_counter.innerHTML = totalQuesCountTag;
}