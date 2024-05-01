// my questions witht the answers
const quizData = [
    {
        question: "Fill in the blank: Erm, what the ______",
        a: "Heck",
        b: "Sigma",
        c: "Rizz",
        d: "Beta",
        correct: "b. Sigma",
    },
    {
        question: "What kind of tax is it when someone takes your food?",
        a: "Food tax of 1873",
        b: "Fanum tax",
        c: "Phantom tax",
        d: "Ohio tax",
        correct: "b. Fanum tax",
    },
    {
        question: "Who is the Supreme Overlord of Rizz?",
        a: "IshowSpeed",
        b: "Baby Gronk",
        c: "Saturo Gojo",
        d: "Duke Dennis",
        correct: "d. Duke Dennis",
    },
    {
        question: "What song played at the TikTok Rizz Party?",
        a: "Carnival",
        b: "You are my sunshine",
        c: "Say so",
        d: "Give Me Everything",
        correct: "a. Carnival",
    },
    {
        question: "What is it called when you want to appear more attractive?",
        a: "Jelk Maxing",
        b: "Rizz Maxing",
        c: "Looks Maxing",
        d: "Mog Maxing",
        correct: "c. Looks Maxing"
    },    

];
// grabs the elements form the html doc
const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz(){

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d

}

function deselectAnswers() {
    answerEls.forEach(answerEls => answerEls.checked = false)
}

function getSelected(){
    let answerEls
    answerEls.forEach(answerEls => {
        if(answerEls.checked){
            answer = answerEls.id
        }
    })
    return answer
}