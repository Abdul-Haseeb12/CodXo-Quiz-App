// script.js
const questions = {
    html: [
        { question: "What does HTML stand for?", options: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language"], answer: "Hyper Text Markup Language" },
        { question: "Who is making the Web standards?", options: ["Mozilla", "Google", "The World Wide Web Consortium"], answer: "The World Wide Web Consortium" }
    ],
    css: [
        { question: "What does CSS stand for?", options: ["Colorful Style Sheets", "Cascading Style Sheets", "Creative Style Sheets"], answer: "Cascading Style Sheets" },
        { question: "Which HTML attribute is used to define inline styles?", options: ["class", "style", "font"], answer: "style" }
    ],
    javascript: [
        { question: "Inside which HTML element do we put the JavaScript?", options: ["<js>", "<script>", "<javascript>"], answer: "<script>" },
        { question: "What is the correct syntax for referring to an external script called 'xxx.js'?", options: ["<script href='xxx.js'>", "<script name='xxx.js'>", "<script src='xxx.js'>"], answer: "<script src='xxx.js'>" }
    ]
};

let currentCategory;
let currentQuestionIndex = 0;
let score = 0;

function startQuiz(category) {
    currentCategory = category;
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById('category-selection').style.display = 'none';
    document.getElementById('quiz').style.display = 'block';
    showQuestion();
}

function showQuestion() {
    const questionData = questions[currentCategory][currentQuestionIndex];
    document.getElementById('question').innerText = questionData.question;
    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = '';
    questionData.options.forEach(option => {
        const button = document.createElement('button');
        button.className = 'option';
        button.innerText = option;
        button.onclick = () => selectOption(option);
        optionsContainer.appendChild(button);
    });
}

function selectOption(option) {
    const questionData = questions[currentCategory][currentQuestionIndex];
    if (option === questionData.answer) {
        score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions[currentCategory].length) {
        showQuestion();
    } else {
        showResult();
    }
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions[currentCategory].length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById('quiz').style.display = 'none';
    document.getElementById('result').style.display = 'block';
    document.getElementById('score').innerText = `${score} / ${questions[currentCategory].length}`;
}

function restartQuiz() {
    document.getElementById('result').style.display = 'none';
    document.getElementById('category-selection').style.display = 'block';
}
