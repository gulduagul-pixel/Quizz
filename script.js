// Questions Bank
const questions = [
  {
    question: "Which language runs in a web browser?",
    options: ["Java", "C", "Python", "JavaScript"],
    answer: 3
  },
  {
    question: "What does CSS stand for?",
    options: ["Central Style Sheets", "Cascading Style Sheets", "Cascading Simple Sheets", "Control Style Sheets"],
    answer: 1
  },
  {
    question: "Which HTML tag is used to define an internal style sheet?",
    options: ["<script>", "<css>", "<style>", "<link>"],
    answer: 2
  },
  {
    question: "Which symbol is used for single-line comments in JavaScript?",
    options: ["//", "/*", "<!--", "#"],
    answer: 0
  },
  {
    question: "What is the correct way to write a JavaScript array?",
    options: ["var colors = (1:'red', 2:'green')", "var colors = ['red', 'green']", "var colors = 'red', 'green'", "var colors = 1=('red'), 2=('green')"],
    answer: 1
  },
  {
    question: "Which property is used to change the background color in CSS?",
    options: ["color", "bgColor", "background-color", "canvas-color"],
    answer: 2
  },
  {
    question: "How do you call a function named 'myFunction' in JS?",
    options: ["call myFunction()", "myFunction()", "call function myFunction()", "execute myFunction()"],
    answer: 1
  },
  {
    question: "How to write an IF statement in JavaScript?",
    options: ["if i = 5 then", "if i == 5 then", "if (i == 5)", "if i = 5"],
    answer: 2
  },
  {
    question: "Which HTML element is used to specify a footer for a document?",
    options: ["<bottom>", "<footer>", "<section>", "<aside>"],
    answer: 1
  },
  {
    question: "Which event occurs when the user clicks on an HTML element?",
    options: ["onchange", "onmouseover", "onclick", "onmouseclick"],
    answer: 2
  }
];

// Variables
let currentPlayer = "";
let currentIndex = 0;
let score = 0;
let streak = 0;
let timer;
let timeLeft = 15;

// DOM Elements
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");

const usernameInput = document.getElementById("username-input");
const startBtn = document.getElementById("start-btn");

const playerDisplay = document.getElementById("player-display");
const questionEl = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const currentQuestionEl = document.getElementById("current-question");
const totalQuestionsEl = document.getElementById("total-questions");
const scoreEl = document.getElementById("score-count");
const streakEl = document.getElementById("streak-count");
const timerEl = document.getElementById("timer");
const nextBtn = document.getElementById("next-btn");

const finalPlayerName = document.getElementById("final-player-name");
const finalScore = document.getElementById("final-score");
const leaderboardList = document.getElementById("leaderboard-list");
const restartBtn = document.getElementById("restart-btn");

totalQuestionsEl.textContent = questions.length;

// Start Game Event
startBtn.addEventListener("click", () => {
  const name = usernameInput.value.trim();
  if (name === "") {
    alert("Please enter your name first!");
    return;
  }
  currentPlayer = name;
  playerDisplay.textContent = currentPlayer;
  
  startScreen.classList.add("hidden");
  quizScreen.classList.remove("hidden");
  
  resetGame();
  loadQuestion();
});

function resetGame() {
  currentIndex = 0;
  score = 0;
  streak = 0;
  scoreEl.textContent = score;
  streakEl.textContent = streak;
}

function loadQuestion() {
  resetState();
  const q = questions[currentIndex];
  questionEl.textContent = q.question;
  currentQuestionEl.textContent = currentIndex + 1;

  q.options.forEach((option, index) => {
    const btn = document.createElement("button");
    btn.classList.add("option-btn");
    btn.textContent = option;
    btn.addEventListener("click", () => selectOption(btn, index));
    optionsContainer.appendChild(btn);
  });

  startTimer();
}

function resetState() {
  clearInterval(timer);
  timeLeft = 15;
  timerEl.textContent = timeLeft;
  nextBtn.classList.add("hidden");
  optionsContainer.innerHTML = "";
}

function startTimer() {
  timer = setInterval(() => {
    timeLeft--;
    timerEl.textContent = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(timer);
      autoDisableOptions();
      nextBtn.classList.remove("hidden");
    }
  }, 1000);
}

function selectOption(selectedBtn, index) {
  clearInterval(timer);
  const correctIndex = questions[currentIndex].answer;
  const buttons = optionsContainer.querySelectorAll(".option-btn");

  buttons.forEach(btn => btn.disabled = true);

  if (index === correctIndex) {
    selectedBtn.classList.add("correct");
    score += 10;
    streak++;
  } else {
    selectedBtn.classList.add("wrong");
    buttons[correctIndex].classList.add("correct");
    streak = 0;
  }

  scoreEl.textContent = score;
  streakEl.textContent = streak;
  nextBtn.classList.remove("hidden");
}

function autoDisableOptions() {
  const correctIndex = questions[currentIndex].answer;
  const buttons = optionsContainer.querySelectorAll(".option-btn");
  buttons.forEach(btn => btn.disabled = true);
  buttons[correctIndex].classList.add("correct");
}

nextBtn.addEventListener("click", () => {
  currentIndex++;
  if (currentIndex < questions.length) {
    loadQuestion();
  } else {
    showFinalResult();
  }
});

function showFinalResult() {
  quizScreen.classList.add("hidden");
  resultScreen.classList.remove("hidden");

  finalPlayerName.textContent = currentPlayer;
  finalScore.textContent = score;

  saveScore(currentPlayer, score);
  updateLeaderboard();
}

// LocalStorage Leaderboard Functionality
function saveScore(name, score) {
  let leaderboard = JSON.parse(localStorage.getItem("brainbolt_scores")) || [];
  leaderboard.push({ name: name, score: score });
  
  // High scores pehle aayein (Descending Order)
  leaderboard.sort((a, b) => b.score - a.score);
  
  // Top 10 scores save hongi
  leaderboard = leaderboard.slice(0, 10);
  
  localStorage.setItem("brainbolt_scores", JSON.stringify(leaderboard));
}

function updateLeaderboard() {
  leaderboardList.innerHTML = "";
  const leaderboard = JSON.parse(localStorage.getItem("brainbolt_scores")) || [];

  leaderboard.forEach((entry, index) => {
    const li = document.createElement("li");
    
    let medal = "";
    if (index === 0) medal = "🥇 ";
    else if (index === 1) medal = "🥈 ";
    else if (index === 2) medal = "🥉 ";
    else medal = `#${index + 1} `;

    li.innerHTML = `
      <span><span class="medal">${medal}</span><strong>${entry.name}</strong></span>
      <span>${entry.score} pts</span>
    `;
    leaderboardList.appendChild(li);
  });
}

restartBtn.addEventListener("click", () => {
  resultScreen.classList.add("hidden");
  startScreen.classList.remove("hidden");
  usernameInput.value = "";
});