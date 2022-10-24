//variables
const startQuiz = document.querySelector("#startBtn");
const infoBox = document.querySelector(".info-box");
const exitBtn = document.querySelector("#quit");
const continueBtn = document.querySelector("#restart");
const resultsBox = document.querySelector("#results-box")
const quizBox = document.querySelector("#quiz-box");
const options_list = document.querySelector(".option-list");
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
let userScore = 0;

const next_btn = document.querySelector("#next-btn");
const quitQuiz = resultsBox.querySelector("#exit-Btn");

quitQuiz.addEventListener('click', () =>  {
    resultsBox.style.display = "none";
    startQuiz.style.display = "block";
});

//if next button gets clicked
next_btn.onclick = ()=> {
    if(que_count < questions.length - 1){
        que_count++;
        que_numb++;
        showQuestions(que_count);
        queCounter(que_numb);
        clearInterval(counter);
        startTimer(timeValue);
        next_btn.style.display = "none";
    }else {
        console.log("Questions completed");
        showResultBox();
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
        userScore += 1;
        console.log(userScore)
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
    next_btn.style.display = "block";
}

function showResultBox(){
    resultsBox.style.display = "block";
    startQuiz.style.display = "none";
    infoBox.style.display = "none";
    quizBox.style.display = "none";
    const scoreText = resultsBox.querySelector(".score-text");
    if(userScore > 3){
        let scoreTag = ' <span>and sorry, You got only <p>'+userScore+'</p> out of <p>'+questions.length+'</p></span>';
        scoreText.innerHTML = scoreTag;
    }

    else if(userScore > 6){
        let scoreTag = ' <span>Nice, You got only <p>'+userScore+'</p> out of <p>'+questions.length+'</p></span>';
        scoreText.innerHTML = scoreTag;
    }

    else {
        let scoreTag = ' <span>Awesome, You got only <p>'+userScore+'</p> out of <p>'+questions.length+'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
    

}

function startTimer(time){
    counter = setInterval(timer, 1000);
    function timer(){
        timeCount.textContent = time;
        time--;
        if(time < 9){
            let addZero = timeCount.textContent;
            timeCount.textContent = "0" + addZero;
        }
        if(time < 0){
            clearInterval(counter);
            timeCount.textContent = "00"
        }

    }
}





 

function queCounter(index){
    const bottom_ques_counter = quizBox.querySelector(".total-que");
    let totalQuesCountTag = '<span><p>' + que_count + '</p>of<p>' + questions.length + '</p>Questions</span>';
    bottom_ques_counter.innerHTML = totalQuesCountTag;
}