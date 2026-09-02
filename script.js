const questions = [
  {
    question: "Which language runs in a web browser?",
    options: ["Java", "C", "Python", "JavaScript"],
    answer: 3
  },
  {
    question: "What does CSS stand for?",
    options: ["Central Style Sheets", "Cascading Style Sheets", "Cascading Simple Sheets", "Cars SUVs Sailboats"],
    answer: 1
  },
  {
    question: "What year was JavaScript launched?",
    options: ["1996", "1995", "1994", "None of the above"],
    answer: 1
  }
];

let currentIndex = 0;
let score = 0;
let streak = 0;
let timer;
let timeLeft = 15;

const questionEl = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const currentQuestionEl = document.getElementById("current-question");
const totalQuestionsEl = document.getElementById("total-questions");
const scoreEl = document.getElementById("score-count");
const streakEl = document.getElementById("streak-count");
const timerEl = document.getElementById("timer");
const nextBtn = document.getElementById("next-btn");

totalQuestionsEl.textContent = questions.length;

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
  nextBtn.style.display = "none";
  optionsContainer.innerHTML = "";
}

function startTimer() {
  timer = setInterval(() => {
    timeLeft--;
    timerEl.textContent = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(timer);
      autoDisableOptions();
      nextBtn.style.display = "block";
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
    scoreEl.textContent = score;
    streakEl.textContent = streak;
  } else {
    selectedBtn.classList.add("wrong");
    buttons[correctIndex].classList.add("correct");
    streak = 0;
    streakEl.textContent = streak;
  }

  nextBtn.style.display = "block";
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
    showFinalScore();
  }
});

function showFinalScore() {
  resetState();
  questionEl.textContent = `Quiz Completed! 🎉 Your final score is ${score}.`;
  timerEl.style.display = "none";
}

loadQuestion();