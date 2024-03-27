const questions = [
    {
        question : "Most used Programing language in the world is",
        answers: [
            {text: "Java", correct: false},
            {text: "Python", correct: true},
            {text: "C++", correct: false},
            {text: "javaScript", correct: false},
        ]
    },
    {
        question : "Most used language for web development",
        answers: [
            {text: "PHP", correct: false},
            {text: "javaScript", correct: true},
            {text: "Python", correct: false},
            {text: "Node js", correct: false},
        ]  
    },
    {
        question : "Most demanded Field currently in the world",
        answers: [
            {text: "Data Science", correct: false},
            {text: "Artificial Intelligence", correct: true},
            {text: "Cyber Security", correct: false},
            {text: "Big data engineer", correct: false},
        ]
    },
    {
        question : "which is the most used programing language in Pakistan",
        answers: [
            {text: "Java", correct: false},
            {text: "Python", correct: true},
            {text: "JavaScript", correct: false},
            {text: "PHP", correct: false},
        ]
    }
];


const questionElement= document.querySelector("h2");
const Ans_btns= document.querySelector("#answer_button");
const next_btn= document.querySelector(".next_btn");
let time_Element = document.querySelector(".timer");
let restart =document.querySelector(".restart");
restart.style.display = "none";
// console.log(timer);
// console.log(questionElement);
let curr_Ques_Index= 0;
let score= 0;
let time;
const totalTime = 10;
let sec = totalTime;

function timer(){
    time_Element.innerText=`Available time   ${sec}`;
    sec--;
    if(sec==0){
        sec = totalTime;
        clearInterval(time);
        curr_Ques_Index++;
        showQuestion();
    }
}

function startQuiz(){
curr_Ques_Index = 0;
score= 0;
next_btn.innerHTML= "Next";
showQuestion();
}

function showQuestion(){
    sec = totalTime;
    clearInterval(time);
    timer();
    time= setInterval(timer, 1000);
    resetState();
    let curr_Ques = questions[curr_Ques_Index];
    let ques_No = curr_Ques_Index +1 ;
    questionElement.innerHTML = ques_No + ". "+curr_Ques.question;
    // questionElement.innerText= "Q2";

    curr_Ques.answers.forEach(answer =>{
    const btn= document.createElement("button");
    btn.innerText= answer.text;
    btn.classList.add("btn");
    Ans_btns.appendChild(btn);
    if(answer.correct){
        btn.dataset.correct=answer.correct;
    }
    btn.addEventListener("click", selectAns);
    });
}
startQuiz();
function resetState(){
    next_btn.style.display = "none";
    while(Ans_btns.firstChild){
        Ans_btns.removeChild(Ans_btns.firstChild);
    }
}

function selectAns(e){
    const selectBtn= e.target;
    console.log(selectBtn)
    const isCorrect= selectBtn.dataset.correct === 'true';
    if( isCorrect){
        selectBtn.classList.add("correct");
        score++;
    }else{
        selectBtn.classList.add("incorrect");
    }
    Array.from(Ans_btns.children).forEach(btn =>{
        if(btn.dataset.correct==="true"){
            btn.classList.add("correct");
        }
        btn.disabled = true;
    });
    next_btn.style.display= "block";
}

function showScore(){
    clearInterval(time);
    restart.style.display= "block";
    next_btn.style.display = "none";
    resetState();
    questionElement.innerText=`You scored  ${score}/${questions.length}!`;
    time_Element.style.display="none";
}
function handleNextBtn(){
    curr_Ques_Index++;
    if(curr_Ques_Index<questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

next_btn.addEventListener('click', ()=>{
    if(curr_Ques_Index<questions.length){
        handleNextBtn();
    }else{
        startQuiz();
    }
})