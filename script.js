// Questions Bank
const questions = [
  // General Knowledge & World Trivia
  {
    question: "Which is the largest ocean on Earth?",
    options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"],
    answer: 2
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
    answer: 1
  },
  {
    question: "What is the capital city of Japan?",
    options: ["Beijing", "Seoul", "Tokyo", "Bangkok"],
    answer: 2
  },
  {
    question: "Which country gifted the Statue of Liberty to the USA?",
    options: ["France", "United Kingdom", "Germany", "Italy"],
    answer: 0
  },
  {
    question: "What is the hardest natural substance on Earth?",
    options: ["Gold", "Iron", "Diamond", "Platinum"],
    answer: 2
  },

  // Science & Nature
  {
    question: "What chemical element has the symbol 'O'?",
    options: ["Gold", "Oxygen", "Osmium", "Zinc"],
    answer: 1
  },
  {
    question: "How many gas giant planets are in our solar system?",
    options: ["2", "3", "4", "5"],
    answer: 2
  },
  {
    question: "Which gas do plants absorb from the atmosphere for photosynthesis?",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    answer: 1
  },

  // Tech & Programming
  {
    question: "Which language runs natively inside web browsers?",
    options: ["Java", "C++", "Python", "JavaScript"],
    answer: 3
  },
  {
    question: "What does 'HTTP' stand for in web addresses?",
    options: ["HyperText Transfer Protocol", "HighText Transfer Text", "HyperText Total Process", "Hyperlink Text Transfer Protocol"],
    answer: 0
  },

  // History & Geography
  {
    question: "Which is the longest river in the world?",
    options: ["Amazon River", "Nile River", "Yangtze River", "Mississippi River"],
    answer: 1
  },
  {
    question: "In which year did World War II end?",
    options: ["1918", "1939", "1945", "1950"],
    answer: 2
  },
  {
    question: "Which continent is known as the 'Dark Continent'?",
    options: ["Asia", "Africa", "South America", "Australia"],
    answer: 1
  },

  // Pop Culture & Fun Facts
  {
    question: "How many total elements are on the Periodic Table?",
    options: ["118", "100", "120", "108"],
    answer: 0
  },
  {
    question: "Which animal is known as the 'Ship of the Desert'?",
    options: ["Elephant", "Camel", "Horse", "Llama"],
    answer: 1
  },
  {
    question: "Which is the largest country in the world by land area?",
    options: ["Canada", "China", "Russia", "USA"],
    answer: 2
  },
  {
    question: "What is the official currency of Japan?",
    options: ["Yuan", "Yen", "Won", "Ringgit"],
    answer: 1
  },
  {
    question: "Which country has the largest population in the world?",
    options: ["India", "China", "USA", "Indonesia"],
    answer: 0
  },
  {
    question: "Which city is known as the 'City of Love'?",
    options: ["Rome", "Venice", "Paris", "Vienna"],
    answer: 2
  },
  {
    question: "Which is the smallest country in the world?",
    options: ["Monaco", "Malta", "Vatican City", "San Marino"],
    answer: 2
  },

  // Science, Space & Nature
  {
    question: "Which gas is most abundant in Earth's atmosphere?",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    answer: 2
  },
  {
    question: "What is the speed of light in a vacuum?",
    options: ["300,000 km/s", "150,000 km/s", "1,000,000 km/s", "30,000 km/s"],
    answer: 0
  },
  {
    question: "Which blood type is known as the universal donor?",
    options: ["A Positive", "B Negative", "AB Positive", "O Negative"],
    answer: 3
  },
  {
    question: "What is the main component of the sun?",
    options: ["Liquid Lava", "Hydrogen", "Helium", "Oxygen"],
    answer: 1
  },
  {
    question: "How many bones are there in an adult human body?",
    options: ["206", "208", "300", "195"],
    answer: 0
  },

  // Tech, AI & Digital
  {
    question: "What does 'CPU' stand for in computer hardware?",
    options: ["Central Process Unit", "Central Processing Unit", "Computer Personal Unit", "Control Power Unit"],
    answer: 1
  },
  {
    question: "Who is co-founder of Microsoft alongside Bill Gates?",
    options: ["Steve Jobs", "Paul Allen", "Larry Page", "Elon Musk"],
    answer: 1
  },
  {
    question: "What does 'RAM' stand for?",
    options: ["Read Access Memory", "Random Access Memory", "Run Auto Memory", "Rapid Access Module"],
    answer: 1
  },
  {
    question: "Which company developed the Android Operating System?",
    options: ["Apple", "Nokia", "Android Inc. (acquired by Google)", "Samsung"],
    answer: 2
  },
  {
    question: "What does 'SQL' stand for?",
    options: ["Structured Query Language", "Simple Quick Language", "System Query Logic", "Sequential Query List"],
    answer: 0
  },

  // History & Wonders
  {
    question: "In which country can you find the Great Pyramids of Giza?",
    options: ["Greece", "Egypt", "Sudan", "Jordan"],
    answer: 1
  },
  {
    question: "Who was the first person to walk on the Moon?",
    options: ["Buzz Aldrin", "Yuri Gagarin", "Neil Armstrong", "Michael Collins"],
    answer: 2
  },
  {
    question: "Which ancient civilization built the Machu Picchu in Peru?",
    options: ["Aztecs", "Mayans", "Incas", "Romans"],
    answer: 2
  },
  {
    question: "Which war took place between 1914 and 1918?",
    options: ["World War I", "World War II", "Cold War", "Vietnam War"],
    answer: 0
  },

  // Pop Culture, Sports & Fun
  {
    question: "How many rings are on the official Olympic flag?",
    options: ["4", "5", "6", "7"],
    answer: 1
  },
  {
    question: "Which sport uses terms like 'Strike', 'Spare', and 'Turkey'?",
    options: ["Cricket", "Bowling", "Baseball", "Tennis"],
    answer: 1
  },
  {
    question: "What is the primary color of an emerald gemstone?",
    options: ["Red", "Blue", "Green", "Yellow"],
    answer: 2
  },
  {
    question: "Which famous artist painted the 'Mona Lisa'?",
    options: ["Pablo Picasso", "Vincent van Gogh", "Leonardo da Vinci", "Claude Monet"],
    answer: 2
  },
  {
    question: "How many sides does a Heptagon have?",
    options: ["6", "7", "8", "9"],
    answer: 1
  },
  // World Geography & Landmarks
  {
    question: "In which country is the famous Taj Mahal located?",
    options: ["Pakistan", "India", "Bangladesh", "Turkey"],
    answer: 1
  },
  {
    question: "Which desert is the largest hot desert in the world?",
    options: ["Gobi Desert", "Kalahari Desert", "Sahara Desert", "Thar Desert"],
    answer: 2
  },
  {
    question: "What is the capital city of Australia?",
    options: ["Sydney", "Melbourne", "Canberra", "Perth"],
    answer: 2
  },

  // Space & Astronomy
  {
    question: "Which planet is known as the 'Evening Star' or 'Morning Star'?",
    options: ["Mars", "Venus", "Mercury", "Jupiter"],
    answer: 1
  },
  {
    question: "What is the solar system's largest planet?",
    options: ["Saturn", "Jupiter", "Neptune", "Uranus"],
    answer: 1
  },
  {
    question: "How long does light from the Sun take to reach Earth?",
    options: ["8 minutes", "12 minutes", "30 seconds", "1 hour"],
    answer: 0
  },

  // Technology & Internet
  {
    question: "What does 'WWW' stand for in a website address?",
    options: ["World Wide Web", "World Web Wide", "Wide World Web", "Web World Wide"],
    answer: 0
  },
  {
    question: "Which programming language is mainly used for styling web pages?",
    options: ["HTML", "Python", "CSS", "C++"],
    answer: 2
  },
  {
    question: "What does 'PDF' stand for?",
    options: ["Portable Document Format", "Printable Data File", "Personal Document File", "Public Document Format"],
    answer: 0
  },

  // Science & Human Body
  {
    question: "Which organ in the human body filters blood?",
    options: ["Heart", "Lungs", "Kidneys", "Liver"],
    answer: 2
  },
  {
    question: "What is the chemical formula for water?",
    options: ["CO2", "H2O", "O2", "NaCl"],
    answer: 1
  },
  {
    question: "Which vitamin is produced when human skin is exposed to sunlight?",
    options: ["Vitamin A", "Vitamin B12", "Vitamin C", "Vitamin D"],
    answer: 3
  },

  // Sports & Games
  {
    question: "How many players are on the field for one team in a Cricket match?",
    options: ["9", "10", "11", "12"],
    answer: 2
  },
  {
    question: "Which game uses pieces like 'Knight', 'Rook', and 'Pawn'?",
    options: ["Ludo", "Chess", "Carrom", "Checkers"],
    answer: 1
  },
  {
    question: "In football (soccer), how long is a standard full match?",
    options: ["80 minutes", "90 minutes", "100 minutes", "60 minutes"],
    answer: 1
  },

  // Fun Riddles & Logic
  {
    question: "What has hands but cannot clap?",
    options: ["A Clock", "A Robot", "A Tree", "A Mirror"],
    answer: 0
  },
  {
    question: "What gets wetter the more it dries?",
    options: ["Sponge", "Towel", "Water", "Ice"],
    answer: 1
  },
  {
    question: "What has to be broken before you can use it?",
    options: ["Glass", "Coconut", "An Egg", "A Lock"],
    answer: 2
  },

  // Art, Nature & Food
  {
    question: "Which bird is known for its ability to mimic human speech?",
    options: ["Eagle", "Parrot", "Peacock", "Penguin"],
    answer: 1
  },
  {
    question: "What is the primary ingredient in traditional Italian Pizza dough?",
    options: ["Rice Flour", "Wheat Flour", "Cornmeal", "Oatmeal"],
    answer: 1
  },
  {
    question: "Which metal is liquid at room temperature?",
    options: ["Gold", "Mercury", "Silver", "Copper"],
    answer: 1
  },
  {
    question: "How many colors are there in a standard rainbow?",
    options: ["5", "6", "7", "8"],
    answer: 2
  },
  {
    question: "Which continent has no native ant species?",
    options: ["Australia", "Europe", "Antarctica", "North America"],
    answer: 2
  },
  {
    question: "What is the fastest land animal in the world?",
    options: ["Lion", "Cheetah", "Horse", "Leopard"],
    answer: 1
  },
  {
    question: "Which fruit is known as the 'King of Fruits' in Southeast Asia?",
    options: ["Mango", "Durian", "Banana", "Apple"],
    answer: 1
  },
  // World Geography & Nations
  {
    question: "Which country is home to the Kangaroo?",
    options: ["New Zealand", "Australia", "South Africa", "Brazil"],
    answer: 1
  },
  {
    question: "What is the capital city of Canada?",
    options: ["Toronto", "Vancouver", "Ottawa", "Montreal"],
    answer: 2
  },
  {
    question: "Which European country is shaped like a boot?",
    options: ["Spain", "Greece", "Italy", "Portugal"],
    answer: 2
  },
  {
    question: "Which city is split between two continents (Europe & Asia)?",
    options: ["Istanbul", "Cairo", "Moscow", "Athens"],
    answer: 0
  },

  // Space, Physics & Nature
  {
    question: "What is the hottest planet in our solar system?",
    options: ["Mercury", "Venus", "Mars", "Jupiter"],
    answer: 1
  },
  {
    question: "What force pulls objects toward the center of the Earth?",
    options: ["Friction", "Magnetism", "Gravity", "Tension"],
    answer: 2
  },
  {
    question: "What is the primary gas found in the Sun?",
    options: ["Helium", "Oxygen", "Hydrogen", "Nitrogen"],
    answer: 2
  },
  {
    question: "Which mammal is capable of true flight?",
    options: ["Flying Squirrel", "Bat", "Ostrich", "Sugar Glider"],
    answer: 1
  },

  // Tech, Gadgets & Gaming
  {
    question: "What does 'USB' stand for?",
    options: ["Universal Serial Bus", "Ultra Speed Bus", "Universal System Board", "United Serial Bus"],
    answer: 0
  },
  {
    question: "Which company created the iPhone?",
    options: ["Samsung", "Google", "Microsoft", "Apple"],
    answer: 3
  },
  {
    question: "What is the main function of a GPU in a computer?",
    options: ["Store Files", "Process Graphics & Images", "Connect to Internet", "Supply Power"],
    answer: 1
  },
  {
    question: "In gaming, what does 'FPS' usually stand for?",
    options: ["Fast Processing Speed", "First Person Shooter", "Frames Per Second", "Both B and C"],
    answer: 3
  },

  // Inventions & History
  {
    question: "Who is credited with inventing the telephone?",
    options: ["Thomas Edison", "Alexander Graham Bell", "Nikola Tesla", "Albert Einstein"],
    answer: 1
  },
  {
    question: "Which famous ship sank after hitting an iceberg in 1912?",
    options: ["Britannic", "Titanic", "Olympic", "Lusitania"],
    answer: 1
  },
  {
    question: "Which ancient civilization built the Colosseum?",
    options: ["Greeks", "Egyptians", "Romans", "Persians"],
    answer: 2
  },

  // General Knowledge & Mind Teasers
  {
    question: "How many primary colors are there?",
    options: ["2", "3", "4", "5"],
    answer: 1
  },
  {
    question: "What color do you get when you mix Red and Blue?",
    options: ["Green", "Purple", "Orange", "Brown"],
    answer: 1
  },
  {
    question: "What is the square root of 64?",
    options: ["6", "7", "8", "9"],
    answer: 2
  },
  {
    question: "How many days are there in a leap year?",
    options: ["365", "366", "364", "367"],
    answer: 1
  },
  {
    question: "What belongs to you, but other people use it more than you do?",
    options: ["Your Money", "Your Name", "Your Phone", "Your Car"],
    answer: 1
  },

  // Food, Culture & Brands
  {
    question: "From which country does Sushi originate?",
    options: ["China", "Korea", "Japan", "Thailand"],
    answer: 2
  },
  {
    question: "What soft drink brand features a polar bear in its holiday ads?",
    options: ["Pepsi", "Coca-Cola", "Sprite", "Fanta"],
    answer: 1
  },
  {
    question: "Which country is famous for inventing Chocolate?",
    options: ["Switzerland", "Belgium", "Mexico (Mesoamerica)", "France"],
    answer: 2
  },

  // Biology & Human Body
  {
    question: "What is the largest organ in the human body?",
    options: ["Liver", "Brain", "Skin", "Heart"],
    answer: 2
  },
  {
    question: "Which blood vessel carries blood away from the heart?",
    options: ["Vein", "Capillary", "Artery", "Nerve"],
    answer: 2
  },
  {
    question: "What gives plants their green color?",
    options: ["Melanin", "Chlorophyll", "Carotene", "Hemoglobin"],
    answer: 1
  },

  // Sports & World Records
  {
    question: "In which sport can you score a 'Hole in One'?",
    options: ["Golf", "Tennis", "Basketball", "Billiards"],
    answer: 0
  },
  {
    question: "Which country has won the most FIFA World Cups in football?",
    options: ["Germany", "Argentina", "Italy", "Brazil"],
    answer: 3
  },
  {
    question: "How many minutes is a quarter in an NBA basketball game?",
    options: ["10 minutes", "12 minutes", "15 minutes", "20 minutes"],
    answer: 1
  },
  {
    question: "What is the highest mountain peak above sea level on Earth?",
    options: ["K2", "Mount Everest", "Kilimanjaro", "Mount Fuji"],
    answer: 1
  },
  // World Geography & Nations
  {
    question: "Which country is home to the Kangaroo?",
    options: ["New Zealand", "Australia", "South Africa", "Brazil"],
    answer: 1
  },
  {
    question: "What is the capital city of Canada?",
    options: ["Toronto", "Vancouver", "Ottawa", "Montreal"],
    answer: 2
  },
  {
    question: "Which European country is shaped like a boot?",
    options: ["Spain", "Greece", "Italy", "Portugal"],
    answer: 2
  },
  {
    question: "Which city is split between two continents (Europe & Asia)?",
    options: ["Istanbul", "Cairo", "Moscow", "Athens"],
    answer: 0
  },

  // Space, Physics & Nature
  {
    question: "What is the hottest planet in our solar system?",
    options: ["Mercury", "Venus", "Mars", "Jupiter"],
    answer: 1
  },
  {
    question: "What force pulls objects toward the center of the Earth?",
    options: ["Friction", "Magnetism", "Gravity", "Tension"],
    answer: 2
  },
  {
    question: "What is the primary gas found in the Sun?",
    options: ["Helium", "Oxygen", "Hydrogen", "Nitrogen"],
    answer: 2
  },
  {
    question: "Which mammal is capable of true flight?",
    options: ["Flying Squirrel", "Bat", "Ostrich", "Sugar Glider"],
    answer: 1
  },

  // Tech, Gadgets & Gaming
  {
    question: "What does 'USB' stand for?",
    options: ["Universal Serial Bus", "Ultra Speed Bus", "Universal System Board", "United Serial Bus"],
    answer: 0
  },
  {
    question: "Which company created the iPhone?",
    options: ["Samsung", "Google", "Microsoft", "Apple"],
    answer: 3
  },
  {
    question: "What is the main function of a GPU in a computer?",
    options: ["Store Files", "Process Graphics & Images", "Connect to Internet", "Supply Power"],
    answer: 1
  },
  {
    question: "In gaming, what does 'FPS' usually stand for?",
    options: ["Fast Processing Speed", "First Person Shooter", "Frames Per Second", "Both B and C"],
    answer: 3
  },

  // Inventions & History
  {
    question: "Who is credited with inventing the telephone?",
    options: ["Thomas Edison", "Alexander Graham Bell", "Nikola Tesla", "Albert Einstein"],
    answer: 1
  },
  {
    question: "Which famous ship sank after hitting an iceberg in 1912?",
    options: ["Britannic", "Titanic", "Olympic", "Lusitania"],
    answer: 1
  },
  {
    question: "Which ancient civilization built the Colosseum?",
    options: ["Greeks", "Egyptians", "Romans", "Persians"],
    answer: 2
  },

  // General Knowledge & Mind Teasers
  {
    question: "How many primary colors are there?",
    options: ["2", "3", "4", "5"],
    answer: 1
  },
  {
    question: "What color do you get when you mix Red and Blue?",
    options: ["Green", "Purple", "Orange", "Brown"],
    answer: 1
  },
  {
    question: "What is the square root of 64?",
    options: ["6", "7", "8", "9"],
    answer: 2
  },
  {
    question: "How many days are there in a leap year?",
    options: ["365", "366", "364", "367"],
    answer: 1
  },
  {
    question: "What belongs to you, but other people use it more than you do?",
    options: ["Your Money", "Your Name", "Your Phone", "Your Car"],
    answer: 1
  },

  // Food, Culture & Brands
  {
    question: "From which country does Sushi originate?",
    options: ["China", "Korea", "Japan", "Thailand"],
    answer: 2
  },
  {
    question: "What soft drink brand features a polar bear in its holiday ads?",
    options: ["Pepsi", "Coca-Cola", "Sprite", "Fanta"],
    answer: 1
  },
  {
    question: "Which country is famous for inventing Chocolate?",
    options: ["Switzerland", "Belgium", "Mexico (Mesoamerica)", "France"],
    answer: 2
  },

  // Biology & Human Body
  {
    question: "What is the largest organ in the human body?",
    options: ["Liver", "Brain", "Skin", "Heart"],
    answer: 2
  },
  {
    question: "Which blood vessel carries blood away from the heart?",
    options: ["Vein", "Capillary", "Artery", "Nerve"],
    answer: 2
  },
  {
    question: "What gives plants their green color?",
    options: ["Melanin", "Chlorophyll", "Carotene", "Hemoglobin"],
    answer: 1
  },

  // Sports & World Records
  {
    question: "In which sport can you score a 'Hole in One'?",
    options: ["Golf", "Tennis", "Basketball", "Billiards"],
    answer: 0
  },
  {
    question: "Which country has won the most FIFA World Cups in football?",
    options: ["Germany", "Argentina", "Italy", "Brazil"],
    answer: 3
  },
  {
    question: "How many minutes is a quarter in an NBA basketball game?",
    options: ["10 minutes", "12 minutes", "15 minutes", "20 minutes"],
    answer: 1
  },
  {
    question: "What is the highest mountain peak above sea level on Earth?",
    options: ["K2", "Mount Everest", "Kilimanjaro", "Mount Fuji"],
    answer: 1
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
  
  // Questions ko shuffle (randomize) karne ke liye:
questions.sort(() => Math.random() - 0.5);

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