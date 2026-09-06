// ==========================================================
// CATEGORY METADATA (shown on the home screen)
// ==========================================================
const categories = [
  { id: "general",    name: "General Knowledge", icon: "🌍" },
  { id: "science",    name: "Science & Nature",  icon: "🔬" },
  { id: "technology", name: "Technology",        icon: "💻" },
  { id: "animals",    name: "Animals",           icon: "🐾" },
  { id: "history",    name: "History & Landmarks", icon: "🏛️" },
  { id: "sports",     name: "Sports & Fun",      icon: "⚽" }
];

// ==========================================================
// QUESTION BANKS — 500+ questions total across categories
// so a 10-question round never repeats within a session.
// ==========================================================
const categoryQuestions = {

  // ---------------------------------------------------------
  general: [
    { question: "Which is the largest country in the world by land area?", options: ["Canada", "China", "Russia", "USA"], answer: 2 },
    { question: "What is the official currency of Japan?", options: ["Yuan", "Yen", "Won", "Ringgit"], answer: 1 },
    { question: "Which country currently has the largest population in the world?", options: ["India", "China", "USA", "Indonesia"], answer: 0 },
    { question: "Which city is known as the 'City of Love'?", options: ["Rome", "Venice", "Paris", "Vienna"], answer: 2 },
    { question: "Which is the smallest country in the world?", options: ["Monaco", "Malta", "Vatican City", "San Marino"], answer: 2 },
    { question: "In which country is the famous Taj Mahal located?", options: ["Pakistan", "India", "Bangladesh", "Turkey"], answer: 1 },
    { question: "Which desert is the largest hot desert in the world?", options: ["Gobi Desert", "Kalahari Desert", "Sahara Desert", "Thar Desert"], answer: 2 },
    { question: "What is the capital city of Australia?", options: ["Sydney", "Melbourne", "Canberra", "Perth"], answer: 2 },
    { question: "Which is the largest ocean on Earth?", options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"], answer: 2 },
    { question: "What is the capital city of Japan?", options: ["Beijing", "Seoul", "Tokyo", "Bangkok"], answer: 2 },
    { question: "Which country gifted the Statue of Liberty to the USA?", options: ["France", "United Kingdom", "Germany", "Italy"], answer: 0 },
    { question: "Which European country is shaped like a boot?", options: ["Spain", "Greece", "Italy", "Portugal"], answer: 2 },
    { question: "Which city is split between two continents, Europe and Asia?", options: ["Istanbul", "Cairo", "Moscow", "Athens"], answer: 0 },
    { question: "What is the capital city of Canada?", options: ["Toronto", "Vancouver", "Ottawa", "Montreal"], answer: 2 },
    { question: "Which country is home to the kangaroo?", options: ["New Zealand", "Australia", "South Africa", "Brazil"], answer: 1 },
    { question: "What is the capital of France?", options: ["Lyon", "Marseille", "Paris", "Nice"], answer: 2 },
    { question: "What is the capital of Germany?", options: ["Munich", "Berlin", "Hamburg", "Frankfurt"], answer: 1 },
    { question: "What is the capital of Egypt?", options: ["Alexandria", "Giza", "Cairo", "Luxor"], answer: 2 },
    { question: "What is the capital of Russia?", options: ["St. Petersburg", "Moscow", "Kazan", "Sochi"], answer: 1 },
    { question: "What is the capital of China?", options: ["Shanghai", "Beijing", "Hong Kong", "Guangzhou"], answer: 1 },
    { question: "What is the capital of Italy?", options: ["Milan", "Naples", "Rome", "Turin"], answer: 2 },
    { question: "What is the capital of Spain?", options: ["Barcelona", "Madrid", "Seville", "Valencia"], answer: 1 },
    { question: "What is the capital of Brazil?", options: ["Rio de Janeiro", "Sao Paulo", "Brasilia", "Salvador"], answer: 2 },
    { question: "What is the capital of South Korea?", options: ["Busan", "Seoul", "Incheon", "Daegu"], answer: 1 },
    { question: "What is the capital of Pakistan?", options: ["Karachi", "Lahore", "Islamabad", "Peshawar"], answer: 2 },
    { question: "What is the capital of Saudi Arabia?", options: ["Jeddah", "Mecca", "Riyadh", "Medina"], answer: 2 },
    { question: "What is the capital of Turkey?", options: ["Istanbul", "Izmir", "Ankara", "Antalya"], answer: 2 },
    { question: "What is the capital of the United Kingdom?", options: ["Manchester", "Liverpool", "London", "Birmingham"], answer: 2 },
    { question: "What is the capital of the United States?", options: ["New York", "Washington D.C.", "Los Angeles", "Chicago"], answer: 1 },
    { question: "Which is the longest river in the world?", options: ["Amazon", "Nile", "Yangtze", "Mississippi"], answer: 1 },
    { question: "Which is the highest mountain in the world?", options: ["K2", "Kangchenjunga", "Mount Everest", "Lhotse"], answer: 2 },
    { question: "Which is the largest continent by area?", options: ["Africa", "Asia", "North America", "Europe"], answer: 1 },
    { question: "Which is the smallest continent?", options: ["Europe", "Antarctica", "Australia", "South America"], answer: 2 },
    { question: "How many continents are there on Earth?", options: ["5", "6", "7", "8"], answer: 2 },
    { question: "What is the official currency of China?", options: ["Yen", "Won", "Yuan", "Baht"], answer: 2 },
    { question: "What is the official currency of Russia?", options: ["Lira", "Ruble", "Dinar", "Krona"], answer: 1 },
    { question: "What is the national language of Pakistan?", options: ["Punjabi", "English", "Urdu", "Sindhi"], answer: 2 },
    { question: "Which language is most spoken natively in the world?", options: ["English", "Spanish", "Mandarin Chinese", "Hindi"], answer: 2 },
    { question: "The Great Barrier Reef is located in which country?", options: ["Indonesia", "Australia", "Philippines", "Fiji"], answer: 1 },
    { question: "Niagara Falls lies on the border of the USA and which other country?", options: ["Mexico", "Canada", "Cuba", "Bahamas"], answer: 1 },
    { question: "Which is the longest wall built by humans?", options: ["Berlin Wall", "Hadrian's Wall", "Great Wall of China", "Western Wall"], answer: 2 },
    { question: "Which currency is used by most countries in the European Union?", options: ["Pound", "Euro", "Franc", "Mark"], answer: 1 },
    { question: "Which is the largest island in the world?", options: ["Madagascar", "Borneo", "Greenland", "New Guinea"], answer: 2 },
    { question: "The Panama Canal connects which two oceans?", options: ["Indian & Pacific", "Atlantic & Pacific", "Arctic & Atlantic", "Indian & Atlantic"], answer: 1 },
    { question: "The Suez Canal connects the Mediterranean Sea to which sea?", options: ["Red Sea", "Black Sea", "Caspian Sea", "Arabian Sea"], answer: 0 },
    { question: "In which city is the United Nations headquarters located?", options: ["Geneva", "New York", "Paris", "Washington D.C."], answer: 1 },
    { question: "Which country has three capital cities (legislative, judicial & administrative)?", options: ["South Africa", "Bolivia", "Sri Lanka", "Netherlands"], answer: 0 },
    { question: "Which is the world's tallest building?", options: ["Shanghai Tower", "Burj Khalifa", "One World Trade Center", "Taipei 101"], answer: 1 },
    { question: "Which country is known as the 'Land of the Rising Sun'?", options: ["China", "Japan", "South Korea", "Thailand"], answer: 1 },
    { question: "Which country is famous for windmills and tulips?", options: ["Belgium", "Netherlands", "Denmark", "Switzerland"], answer: 1 },
    { question: "Which country is famous for producing maple syrup?", options: ["USA", "Canada", "Sweden", "Finland"], answer: 1 },
    { question: "In which city is the clock tower Big Ben located?", options: ["Paris", "London", "Dublin", "Edinburgh"], answer: 1 },
    { question: "How many states are there in the United States?", options: ["48", "49", "50", "52"], answer: 2 },
    { question: "Which is the deepest known ocean trench?", options: ["Java Trench", "Mariana Trench", "Puerto Rico Trench", "Tonga Trench"], answer: 1 },
    { question: "Which is the largest freshwater lake in the world by volume?", options: ["Lake Superior", "Lake Victoria", "Lake Baikal", "Lake Tanganyika"], answer: 2 },
    { question: "The Great Lakes lie between the USA and which other country?", options: ["Mexico", "Canada", "Cuba", "Greenland"], answer: 1 },
    { question: "Which country is known for having the most active volcanoes?", options: ["Japan", "Indonesia", "Philippines", "Iceland"], answer: 1 },
    { question: "Which country has the longest coastline in the world?", options: ["Russia", "Canada", "Indonesia", "Australia"], answer: 1 },
    { question: "What is the capital of Switzerland?", options: ["Zurich", "Geneva", "Bern", "Basel"], answer: 2 },
    { question: "What is the capital of Argentina?", options: ["Cordoba", "Buenos Aires", "Rosario", "Mendoza"], answer: 1 },
    { question: "What is the capital of Mexico?", options: ["Guadalajara", "Cancun", "Mexico City", "Monterrey"], answer: 2 },
    { question: "What is the administrative capital of South Africa?", options: ["Cape Town", "Johannesburg", "Pretoria", "Durban"], answer: 2 },
    { question: "What is the capital of Indonesia?", options: ["Bali", "Jakarta", "Surabaya", "Bandung"], answer: 1 },
    { question: "What is the capital of Thailand?", options: ["Phuket", "Chiang Mai", "Bangkok", "Pattaya"], answer: 2 },
    { question: "What is the capital of Greece?", options: ["Thessaloniki", "Athens", "Sparta", "Corinth"], answer: 1 },
    { question: "What is the capital of Portugal?", options: ["Porto", "Lisbon", "Faro", "Braga"], answer: 1 },
    { question: "What is the capital of Sweden?", options: ["Gothenburg", "Malmo", "Stockholm", "Uppsala"], answer: 2 },
    { question: "What is the capital of Norway?", options: ["Bergen", "Oslo", "Trondheim", "Stavanger"], answer: 1 },
    { question: "What is the capital of the Netherlands?", options: ["Rotterdam", "The Hague", "Amsterdam", "Utrecht"], answer: 2 },
    { question: "What is the capital of Nigeria?", options: ["Lagos", "Abuja", "Kano", "Ibadan"], answer: 1 },
    { question: "What is the capital of Kenya?", options: ["Mombasa", "Nairobi", "Kisumu", "Nakuru"], answer: 1 },
    { question: "What is the capital of New Zealand?", options: ["Auckland", "Wellington", "Christchurch", "Hamilton"], answer: 1 },
    { question: "What is the capital of Iran?", options: ["Isfahan", "Shiraz", "Tehran", "Mashhad"], answer: 2 },
    { question: "What is the capital of Iraq?", options: ["Basra", "Baghdad", "Mosul", "Erbil"], answer: 1 },
    { question: "What is the capital of Bangladesh?", options: ["Chittagong", "Dhaka", "Khulna", "Sylhet"], answer: 1 },
    { question: "What is the capital of Afghanistan?", options: ["Kandahar", "Herat", "Kabul", "Mazar-i-Sharif"], answer: 2 },
    { question: "What is the capital of the UAE?", options: ["Dubai", "Sharjah", "Abu Dhabi", "Ajman"], answer: 2 },
    { question: "Which is the largest hot desert located in Africa?", options: ["Kalahari", "Namib", "Sahara", "Sahel"], answer: 2 },
    { question: "Which country is often called the 'Land Down Under'?", options: ["New Zealand", "South Africa", "Australia", "Argentina"], answer: 2 },
    { question: "Which sea is the saltiest large body of water in the world?", options: ["Red Sea", "Dead Sea", "Caspian Sea", "Black Sea"], answer: 1 },
    { question: "Which country is famous for the Great Pyramid and the Sphinx?", options: ["Sudan", "Egypt", "Libya", "Morocco"], answer: 1 },
    { question: "Which country is home to the Amazon Rainforest's largest share?", options: ["Peru", "Colombia", "Brazil", "Venezuela"], answer: 2 },
    { question: "What is the currency of the United Kingdom?", options: ["Euro", "Pound Sterling", "Dollar", "Franc"], answer: 1 },
    { question: "Which country has both Africa's and Asia's landmasses connected by the Sinai Peninsula?", options: ["Israel", "Egypt", "Jordan", "Saudi Arabia"], answer: 1 },
    { question: "Which country is famous for the Eiffel Tower and the Louvre Museum?", options: ["Italy", "Spain", "France", "Belgium"], answer: 2 },
    { question: "Which body of water separates the UK from mainland Europe?", options: ["North Sea", "Irish Sea", "English Channel", "Celtic Sea"], answer: 2 }
  ],

  // ---------------------------------------------------------
  science: [
    { question: "Which planet is known as the Red Planet?", options: ["Venus", "Mars", "Jupiter", "Saturn"], answer: 1 },
    { question: "What is the hardest natural substance on Earth?", options: ["Gold", "Iron", "Diamond", "Platinum"], answer: 2 },
    { question: "What chemical element has the symbol 'O'?", options: ["Gold", "Oxygen", "Osmium", "Zinc"], answer: 1 },
    { question: "Which gas do plants absorb for photosynthesis?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"], answer: 1 },
    { question: "What is the speed of light in a vacuum?", options: ["300,000 km/s", "150,000 km/s", "1,000,000 km/s", "30,000 km/s"], answer: 0 },
    { question: "Which planet is known as the 'Morning Star'?", options: ["Mars", "Venus", "Mercury", "Jupiter"], answer: 1 },
    { question: "Which is the solar system's largest planet?", options: ["Saturn", "Jupiter", "Neptune", "Uranus"], answer: 1 },
    { question: "How long does light from the Sun take to reach Earth?", options: ["8 minutes", "12 minutes", "30 seconds", "1 hour"], answer: 0 },
    { question: "What force pulls objects toward the center of the Earth?", options: ["Friction", "Magnetism", "Gravity", "Tension"], answer: 2 },
    { question: "What is the hottest planet in our solar system?", options: ["Mercury", "Venus", "Mars", "Jupiter"], answer: 1 },
    { question: "Which metal is liquid at room temperature?", options: ["Gold", "Mercury", "Silver", "Copper"], answer: 1 },
    { question: "How many colors are in a standard rainbow?", options: ["5", "6", "7", "8"], answer: 2 },
    { question: "Which gas is most abundant in Earth's atmosphere?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"], answer: 2 },
    { question: "Which blood type is known as the universal donor?", options: ["A Positive", "B Negative", "AB Positive", "O Negative"], answer: 3 },
    { question: "What is the main component of the sun?", options: ["Liquid Lava", "Hydrogen", "Helium", "Oxygen"], answer: 1 },
    { question: "How many bones are in an adult human body?", options: ["206", "208", "300", "195"], answer: 0 },
    { question: "Which organ in the human body filters blood?", options: ["Heart", "Lungs", "Kidneys", "Liver"], answer: 2 },
    { question: "Which vitamin is produced when skin is exposed to sunlight?", options: ["Vitamin A", "Vitamin B12", "Vitamin C", "Vitamin D"], answer: 3 },
    { question: "What is the largest organ in the human body?", options: ["Liver", "Brain", "Skin", "Heart"], answer: 2 },
    { question: "Which blood vessel carries blood away from the heart?", options: ["Vein", "Capillary", "Artery", "Nerve"], answer: 2 },
    { question: "What gives plants their green color?", options: ["Melanin", "Chlorophyll", "Carotene", "Hemoglobin"], answer: 1 },
    { question: "Which part of the brain controls balance?", options: ["Cerebrum", "Cerebellum", "Brainstem", "Hypothalamus"], answer: 1 },
    { question: "How many chambers are in a human heart?", options: ["2", "3", "4", "5"], answer: 2 },
    { question: "What acid is present inside the human stomach?", options: ["Sulfuric Acid", "Nitric Acid", "Hydrochloric Acid", "Acetic Acid"], answer: 2 },
    { question: "Which is the smallest planet in our solar system?", options: ["Mars", "Mercury", "Venus", "Pluto"], answer: 1 },
    { question: "Which planet is best known for its prominent ring system?", options: ["Jupiter", "Uranus", "Saturn", "Neptune"], answer: 2 },
    { question: "Which galaxy do we live in?", options: ["Andromeda", "Milky Way", "Whirlpool", "Triangulum"], answer: 1 },
    { question: "Which star is closest to Earth?", options: ["Proxima Centauri", "Sirius", "The Sun", "Alpha Centauri"], answer: 2 },
    { question: "What is the SI unit of force?", options: ["Joule", "Newton", "Watt", "Pascal"], answer: 1 },
    { question: "What is the SI unit of electric current?", options: ["Volt", "Ohm", "Ampere", "Watt"], answer: 2 },
    { question: "What is the chemical symbol for gold?", options: ["Go", "Gd", "Au", "Ag"], answer: 2 },
    { question: "What is the chemical symbol for iron?", options: ["Ir", "Fe", "In", "I"], answer: 1 },
    { question: "What is the chemical symbol for sodium?", options: ["So", "Sd", "Na", "S"], answer: 2 },
    { question: "What is the chemical symbol for potassium?", options: ["Po", "Pt", "K", "P"], answer: 2 },
    { question: "What is the chemical formula for water?", options: ["CO2", "H2O", "O2", "NaCl"], answer: 1 },
    { question: "What is the pH value of pure water?", options: ["0", "5", "7", "14"], answer: 2 },
    { question: "What is the atomic number of hydrogen?", options: ["0", "1", "2", "8"], answer: 1 },
    { question: "How many chromosomes are present in a normal human cell?", options: ["23", "44", "46", "48"], answer: 2 },
    { question: "What is considered the basic structural unit of life?", options: ["Atom", "Molecule", "Cell", "Tissue"], answer: 2 },
    { question: "Which part of the cell is known as the 'powerhouse of the cell'?", options: ["Nucleus", "Ribosome", "Mitochondria", "Golgi Body"], answer: 2 },
    { question: "What is the scientific study of living organisms called?", options: ["Geology", "Biology", "Chemistry", "Physics"], answer: 1 },
    { question: "What is the scientific study of celestial objects called?", options: ["Astrology", "Astronomy", "Meteorology", "Geography"], answer: 1 },
    { question: "What is the scientific study of earthquakes called?", options: ["Seismology", "Volcanology", "Geology", "Petrology"], answer: 0 },
    { question: "What is the scientific study of weather and climate called?", options: ["Meteorology", "Climatology", "Astronomy", "Ecology"], answer: 0 },
    { question: "How many teeth does a typical adult human have?", options: ["28", "30", "32", "34"], answer: 2 },
    { question: "Which is the largest bone in the human body?", options: ["Humerus", "Femur", "Tibia", "Fibula"], answer: 1 },
    { question: "Which is the smallest bone in the human body?", options: ["Stapes", "Malleus", "Incus", "Patella"], answer: 0 },
    { question: "How many lungs does a normal human have?", options: ["1", "2", "3", "4"], answer: 1 },
    { question: "Which gas is used to fill balloons so they float in air?", options: ["Oxygen", "Nitrogen", "Helium", "Carbon Dioxide"], answer: 2 },
    { question: "What is the freezing point of water in Celsius?", options: ["-10", "0", "10", "32"], answer: 1 },
    { question: "What is the boiling point of water in Celsius at sea level?", options: ["90", "100", "110", "212"], answer: 1 },
    { question: "What is the process by which plants make their own food called?", options: ["Respiration", "Photosynthesis", "Digestion", "Transpiration"], answer: 1 },
    { question: "Which gas is released by plants during photosynthesis?", options: ["Carbon Dioxide", "Nitrogen", "Oxygen", "Hydrogen"], answer: 2 },
    { question: "Newton's First Law of Motion is also known as the law of what?", options: ["Momentum", "Inertia", "Gravity", "Energy"], answer: 1 },
    { question: "Which famous equation did Albert Einstein develop, relating mass and energy?", options: ["F = ma", "E = mc²", "PV = nRT", "a² + b² = c²"], answer: 1 },
    { question: "Which planet is closest to the Sun?", options: ["Venus", "Earth", "Mercury", "Mars"], answer: 2 },
    { question: "Which layer of the Earth do we live on?", options: ["Core", "Mantle", "Crust", "Outer Core"], answer: 2 },
    { question: "How many planets are there in our solar system?", options: ["7", "8", "9", "10"], answer: 1 },
    { question: "Which dwarf planet was reclassified from being the ninth planet?", options: ["Ceres", "Eris", "Pluto", "Makemake"], answer: 2 },
    { question: "What is the approximate speed of sound in air?", options: ["143 m/s", "243 m/s", "343 m/s", "543 m/s"], answer: 2 },
    { question: "Which instrument is used to measure temperature?", options: ["Barometer", "Thermometer", "Hygrometer", "Anemometer"], answer: 1 },
    { question: "Which instrument is used to measure atmospheric pressure?", options: ["Thermometer", "Barometer", "Seismograph", "Altimeter"], answer: 1 },
    { question: "Which instrument is used to record earthquakes?", options: ["Barometer", "Thermometer", "Seismograph", "Hydrometer"], answer: 2 },
    { question: "Which gas is mainly responsible for global warming?", options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Helium"], answer: 2 },
    { question: "What is Earth's only natural satellite called?", options: ["Titan", "Moon", "Europa", "Phobos"], answer: 1 },
    { question: "Which force keeps planets in orbit around the sun?", options: ["Magnetism", "Friction", "Gravity", "Tension"], answer: 2 },
    { question: "Which blood cells are mainly responsible for fighting infections?", options: ["Red Blood Cells", "White Blood Cells", "Platelets", "Plasma Cells"], answer: 1 },
    { question: "Which blood cells carry oxygen throughout the body?", options: ["White Blood Cells", "Platelets", "Red Blood Cells", "Stem Cells"], answer: 2 },
    { question: "Which organ pumps blood throughout the human body?", options: ["Lungs", "Liver", "Heart", "Kidney"], answer: 2 },
    { question: "Which sense organ is primarily used for seeing?", options: ["Ears", "Eyes", "Nose", "Skin"], answer: 1 },
    { question: "Which sense organ is primarily used for hearing?", options: ["Eyes", "Ears", "Tongue", "Skin"], answer: 1 },
    { question: "How many basic senses are commonly recognized in humans?", options: ["3", "4", "5", "6"], answer: 2 },
    { question: "Which part of a plant is responsible for reproduction?", options: ["Root", "Stem", "Leaf", "Flower"], answer: 3 },
    { question: "Which gas is essential for respiration in humans?", options: ["Carbon Dioxide", "Oxygen", "Nitrogen", "Methane"], answer: 1 },
    { question: "Which insect is famous for producing honey?", options: ["Ant", "Bee", "Wasp", "Fly"], answer: 1 },
    { question: "What is the scientific study of fossils called?", options: ["Archaeology", "Paleontology", "Anthropology", "Geology"], answer: 1 },
    { question: "Which is the largest mammal in the world?", options: ["African Elephant", "Blue Whale", "Giraffe", "Hippopotamus"], answer: 1 },
    { question: "What term describes animals that eat only plants?", options: ["Carnivores", "Omnivores", "Herbivores", "Insectivores"], answer: 2 },
    { question: "What term describes animals that eat only meat?", options: ["Herbivores", "Carnivores", "Omnivores", "Scavengers"], answer: 1 },
    { question: "What is the common chemical name for table salt?", options: ["Sodium Bicarbonate", "Sodium Chloride", "Potassium Chloride", "Calcium Carbonate"], answer: 1 },
    { question: "What does DNA stand for?", options: ["Deoxyribonucleic Acid", "Dinucleic Acid", "Diribose Nuclear Acid", "Deoxy Nuclear Amino"], answer: 0 },
    { question: "A deficiency of which vitamin causes the disease scurvy?", options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"], answer: 2 },
    { question: "Which organ produces the hormone insulin?", options: ["Liver", "Kidney", "Pancreas", "Spleen"], answer: 2 },
    { question: "What is the normal average human body temperature in Celsius?", options: ["35", "36", "37", "39"], answer: 2 },
    { question: "Which type of energy is stored in a stretched rubber band?", options: ["Kinetic Energy", "Potential Energy", "Thermal Energy", "Chemical Energy"], answer: 1 },
    { question: "What do we call water in its solid state?", options: ["Steam", "Vapor", "Ice", "Liquid"], answer: 2 }
  ],

  // ---------------------------------------------------------
  technology: [
    { question: "Which language runs natively inside web browsers?", options: ["Java", "C++", "Python", "JavaScript"], answer: 3 },
    { question: "What does 'HTTP' stand for in web addresses?", options: ["HyperText Transfer Protocol", "HighText Transfer Text", "HyperText Total Process", "Hyperlink Text Transfer Protocol"], answer: 0 },
    { question: "What does 'CPU' stand for?", options: ["Central Process Unit", "Central Processing Unit", "Computer Personal Unit", "Control Power Unit"], answer: 1 },
    { question: "What does 'WWW' stand for?", options: ["World Wide Web", "World Web Wide", "Wide World Web", "Web World Wide"], answer: 0 },
    { question: "Which programming language is used for styling web pages?", options: ["HTML", "Python", "CSS", "C++"], answer: 2 },
    { question: "What does 'PDF' stand for?", options: ["Portable Document Format", "Printable Data File", "Personal Document File", "Public Document Format"], answer: 0 },
    { question: "What does 'USB' stand for?", options: ["Universal Serial Bus", "Ultra Speed Bus", "Universal System Board", "United Serial Bus"], answer: 0 },
    { question: "Which company created the iPhone?", options: ["Samsung", "Google", "Microsoft", "Apple"], answer: 3 },
    { question: "What is the main function of a GPU?", options: ["Store Files", "Process Graphics & Images", "Connect to Internet", "Supply Power"], answer: 1 },
    { question: "Who is co-founder of Microsoft alongside Bill Gates?", options: ["Steve Jobs", "Paul Allen", "Larry Page", "Elon Musk"], answer: 1 },
    { question: "What does 'RAM' stand for?", options: ["Read Access Memory", "Random Access Memory", "Run Auto Memory", "Rapid Access Module"], answer: 1 },
    { question: "What does 'SQL' stand for?", options: ["Structured Query Language", "Simple Quick Language", "System Query Logic", "Sequential Query List"], answer: 0 },
    { question: "Who is considered the 'Father of Computers'?", options: ["Alan Turing", "Charles Babbage", "John von Neumann", "Steve Wozniak"], answer: 1 },
    { question: "Which data structure operates on a 'LIFO' basis?", options: ["Queue", "Stack", "Array", "Linked List"], answer: 1 },
    { question: "What was the first electronic general-purpose computer?", options: ["ENIAC", "UNIVAC", "IBM PC", "Altair 8800"], answer: 0 },
    { question: "Who is the founder of Facebook?", options: ["Jack Dorsey", "Mark Zuckerberg", "Elon Musk", "Tim Cook"], answer: 1 },
    { question: "Who is the founder of Amazon?", options: ["Jeff Bezos", "Bill Gates", "Larry Ellison", "Sundar Pichai"], answer: 0 },
    { question: "Who founded SpaceX and Tesla?", options: ["Jeff Bezos", "Elon Musk", "Sam Altman", "Peter Thiel"], answer: 1 },
    { question: "Who is the co-founder of Microsoft along with Paul Allen?", options: ["Bill Gates", "Steve Jobs", "Larry Page", "Jack Ma"], answer: 0 },
    { question: "Who are the founders of Google?", options: ["Bill Gates & Paul Allen", "Larry Page & Sergey Brin", "Steve Jobs & Steve Wozniak", "Jeff Bezos & Elon Musk"], answer: 1 },
    { question: "What does 'AI' stand for?", options: ["Automated Interface", "Artificial Intelligence", "Applied Informatics", "Advanced Integration"], answer: 1 },
    { question: "What does 'GUI' stand for?", options: ["General User Interface", "Graphical User Interface", "Global Unified Interface", "Guided User Instruction"], answer: 1 },
    { question: "What does 'URL' stand for?", options: ["Uniform Resource Locator", "Universal Reference Link", "Unified Retrieval Location", "User Response Log"], answer: 0 },
    { question: "What does 'HTML' stand for?", options: ["HyperText Markup Language", "HighText Machine Language", "Hyperlink Text Markup Language", "Home Tool Markup Language"], answer: 0 },
    { question: "What does 'IP' stand for in 'IP address'?", options: ["Internet Protocol", "Internal Process", "Internet Port", "Information Point"], answer: 0 },
    { question: "What does 'LAN' stand for?", options: ["Large Access Node", "Local Area Network", "Linked Area Node", "Long Access Network"], answer: 1 },
    { question: "Which company developed the Windows operating system?", options: ["Apple", "Microsoft", "Google", "IBM"], answer: 1 },
    { question: "Which company developed the Android operating system?", options: ["Apple", "Samsung", "Google", "Microsoft"], answer: 2 },
    { question: "Which company developed the iOS operating system?", options: ["Google", "Apple", "Samsung", "Nokia"], answer: 1 },
    { question: "Which is the most widely used search engine today?", options: ["Bing", "Yahoo", "Google", "DuckDuckGo"], answer: 2 },
    { question: "What is the name of Amazon's virtual voice assistant?", options: ["Siri", "Cortana", "Alexa", "Bixby"], answer: 2 },
    { question: "What is the name of Apple's virtual voice assistant?", options: ["Alexa", "Siri", "Google Assistant", "Cortana"], answer: 1 },
    { question: "In which year was Facebook founded?", options: ["2002", "2004", "2006", "2008"], answer: 1 },
    { question: "In which year was Google founded?", options: ["1995", "1996", "1998", "2000"], answer: 2 },
    { question: "How many bits are there in a byte?", options: ["4", "8", "16", "32"], answer: 1 },
    { question: "Which is larger, a Megabyte or a Gigabyte?", options: ["Megabyte", "Gigabyte", "They are equal", "Depends on device"], answer: 1 },
    { question: "What does 'VPN' stand for?", options: ["Virtual Private Network", "Verified Public Network", "Virtual Public Node", "Very Personal Network"], answer: 0 },
    { question: "What does 'OS' stand for in computing?", options: ["Online System", "Operating System", "Output Sequence", "Operation Software"], answer: 1 },
    { question: "Which part of a computer is often called its 'brain'?", options: ["Hard Drive", "RAM", "CPU", "Monitor"], answer: 2 },
    { question: "Which company owns YouTube?", options: ["Meta", "Google", "Microsoft", "Amazon"], answer: 1 },
    { question: "Which company owns Instagram?", options: ["Google", "Meta (Facebook)", "Twitter", "Snap Inc."], answer: 1 },
    { question: "Which company owns WhatsApp?", options: ["Google", "Apple", "Meta (Facebook)", "Microsoft"], answer: 2 },
    { question: "Which company created the AI chatbot ChatGPT?", options: ["Google", "Meta", "OpenAI", "Microsoft"], answer: 2 },
    { question: "Which company created the AI assistant Claude?", options: ["OpenAI", "Anthropic", "Google", "Meta"], answer: 1 },
    { question: "In programming, what is a 'bug'?", options: ["A hardware part", "An error in the code", "A type of virus", "A software license"], answer: 1 },
    { question: "What type of software is used to protect a computer from viruses?", options: ["Antivirus Software", "Compiler", "Operating System", "Browser"], answer: 0 },
    { question: "What does Wi-Fi mainly allow devices to do?", options: ["Charge wirelessly", "Print documents", "Connect wirelessly to the internet", "Cool down"], answer: 2 },
    { question: "What is Elon Musk's rocket company called?", options: ["Blue Origin", "SpaceX", "Virgin Galactic", "NASA"], answer: 1 },
    { question: "What does the term 'app' commonly refer to?", options: ["A hardware chip", "An application (software program)", "An antenna", "A network cable"], answer: 1 },
    { question: "What is cloud storage?", options: ["Storing data on a local hard disk only", "Storing data on remote internet servers", "A weather forecasting tool", "A type of RAM"], answer: 1 },
    { question: "What does '2FA' stand for?", options: ["Two-Factor Authentication", "Two-File Access", "Second Factor App", "Two-Function Adapter"], answer: 0 },
    { question: "What is a firewall mainly used for?", options: ["Speeding up internet", "Cooling the CPU", "Network security", "Increasing storage"], answer: 2 },
    { question: "Which company manufactures the PlayStation gaming console?", options: ["Microsoft", "Nintendo", "Sony", "Sega"], answer: 2 },
    { question: "Which company manufactures the Xbox gaming console?", options: ["Sony", "Microsoft", "Nintendo", "Sega"], answer: 1 },
    { question: "Which company manufactures the Nintendo Switch?", options: ["Sony", "Microsoft", "Nintendo", "Sega"], answer: 2 },
    { question: "What does 'QR' stand for in QR code?", options: ["Quick Read", "Quick Response", "Quality Rating", "Quantum Register"], answer: 1 },
    { question: "What is the full form of 'GPS'?", options: ["Global Positioning System", "General Public System", "Global Public Service", "Geo Positioning Software"], answer: 0 },
    { question: "Which language is commonly used for iOS app development?", options: ["Kotlin", "Swift", "Java", "C#"], answer: 1 },
    { question: "Which language is commonly used for Android app development?", options: ["Swift", "Objective-C", "Kotlin", "Ruby"], answer: 2 },
    { question: "What is an algorithm?", options: ["A type of hardware", "A step-by-step procedure to solve a problem", "A programming language", "A computer virus"], answer: 1 },
    { question: "What is a common term for unwanted, unsolicited emails?", options: ["Spam", "Cache", "Cookie", "Patch"], answer: 0 },
    { question: "What does the term 'bit' stand for?", options: ["Basic Internet Token", "Binary Digit", "Byte Interface Tool", "Basic Input Terminal"], answer: 1 },
    { question: "Who is known as the 'Father of the World Wide Web'?", options: ["Bill Gates", "Steve Jobs", "Tim Berners-Lee", "Vint Cerf"], answer: 2 },
    { question: "In which year was the first iPhone released?", options: ["2005", "2007", "2009", "2011"], answer: 1 },
    { question: "What does 'SaaS' stand for?", options: ["Software as a Service", "System as a Server", "Service and Software", "Software Access System"], answer: 0 },
    { question: "What is the common term for malicious software?", options: ["Firmware", "Malware", "Freeware", "Shareware"], answer: 1 },
    { question: "What does 'IoT' stand for?", options: ["Internet of Things", "Internet of Technology", "Input Output Terminal", "Integration of Tools"], answer: 0 },
    { question: "What term describes tricking people into revealing personal information online?", options: ["Phishing", "Streaming", "Caching", "Rendering"], answer: 0 },
    { question: "What does 'API' stand for?", options: ["Application Programming Interface", "Advanced Program Instruction", "Automated Process Integration", "Application Process Index"], answer: 0 },
    { question: "What software converts written code into machine language?", options: ["Browser", "Compiler", "Firewall", "Debugger"], answer: 1 },
    { question: "What is 'CAPTCHA' mainly used to verify?", options: ["That a file is virus-free", "That the user is human", "That a password is strong", "That an app is updated"], answer: 1 },
    { question: "In which year was the World Wide Web invented?", options: ["1985", "1989", "1993", "1999"], answer: 1 },
    { question: "What is a computer that provides data or services to other computers called?", options: ["Client", "Node", "Server", "Router"], answer: 2 },
    { question: "What does 'Bluetooth' technology mainly enable?", options: ["Long-distance calling", "Short-range wireless communication", "High-speed internet", "Satellite tracking"], answer: 1 },
    { question: "Which company developed the Linux kernel?", options: ["Bill Gates", "Linus Torvalds", "Steve Jobs", "Dennis Ritchie"], answer: 1 },
    { question: "What is the term for a computer program that repeats or duplicates itself to spread to other computers?", options: ["Firewall", "Virus", "Cookie", "Cache"], answer: 1 },
    { question: "What is the shortcut key combination commonly used to copy text on Windows?", options: ["Ctrl+V", "Ctrl+C", "Ctrl+X", "Ctrl+Z"], answer: 1 },
    { question: "What is the shortcut key combination commonly used to paste text on Windows?", options: ["Ctrl+P", "Ctrl+V", "Ctrl+C", "Ctrl+A"], answer: 1 },
    { question: "Which social media platform was originally known for 280-character posts and a bird logo?", options: ["Instagram", "Twitter (X)", "TikTok", "LinkedIn"], answer: 1 },
    { question: "Which company developed the ChatGPT rival Gemini AI model?", options: ["OpenAI", "Google", "Meta", "Amazon"], answer: 1 },
    { question: "What is the term for a temporary storage area that speeds up data access?", options: ["Cache", "Cloud", "Cookie", "Codec"], answer: 0 },
    { question: "Which company is best known for producing graphics processing units (GPUs) for gaming and AI?", options: ["Intel", "NVIDIA", "AMD", "Qualcomm"], answer: 1 },
    { question: "What is the term for the digital currency that operates using blockchain technology?", options: ["E-wallet", "Cryptocurrency", "Digital cheque", "Virtual card"], answer: 1 },
    { question: "Which is the most well-known cryptocurrency?", options: ["Ethereum", "Bitcoin", "Dogecoin", "Litecoin"], answer: 1 }
  ],

  // ---------------------------------------------------------
  animals: [
    { question: "Which animal has the largest brain in the world?", options: ["Elephant", "Blue Whale", "Sperm Whale", "Dolphin"], answer: 2 },
    { question: "How many hearts does an octopus have?", options: ["1", "2", "3", "4"], answer: 2 },
    { question: "Which creature is known to never sleep during its lifetime?", options: ["Bullfrog", "Ant", "Jellyfish", "Shark"], answer: 0 },
    { question: "What is the fastest land animal in the world?", options: ["Lion", "Cheetah", "Horse", "Leopard"], answer: 1 },
    { question: "Which mammal is capable of true flight?", options: ["Flying Squirrel", "Bat", "Ostrich", "Sugar Glider"], answer: 1 },
    { question: "Which bird can mimic human speech?", options: ["Eagle", "Parrot", "Peacock", "Penguin"], answer: 1 },
    { question: "Which continent has no native ant species?", options: ["Australia", "Europe", "Antarctica", "North America"], answer: 2 },
    { question: "Which animal is known as the 'Ship of the Desert'?", options: ["Horse", "Camel", "Donkey", "Goat"], answer: 1 },
    { question: "What is a group of lions called?", options: ["Herd", "Pack", "Pride", "Flock"], answer: 2 },
    { question: "Which animal can change its skin color to blend with its surroundings?", options: ["Chameleon", "Iguana", "Gecko", "Frog"], answer: 0 },
    { question: "What is the largest land animal in the world?", options: ["Rhino", "Hippopotamus", "African Elephant", "Giraffe"], answer: 2 },
    { question: "Which bird is the fastest animal in the world during a dive?", options: ["Eagle", "Falcon", "Peregrine Falcon", "Hawk"], answer: 2 },
    { question: "How many legs does a spider have?", options: ["6", "8", "10", "12"], answer: 1 },
    { question: "What is a baby kangaroo called?", options: ["Cub", "Kit", "Joey", "Pup"], answer: 2 },
    { question: "Which is the longest-living land animal?", options: ["Elephant", "Giant Tortoise", "Parrot", "Crocodile"], answer: 1 },
    { question: "Which is the tallest animal in the world?", options: ["Elephant", "Giraffe", "Camel", "Ostrich"], answer: 1 },
    { question: "Which is the largest fish in the world?", options: ["Great White Shark", "Whale Shark", "Manta Ray", "Blue Marlin"], answer: 1 },
    { question: "Which is the largest bird in the world?", options: ["Emperor Penguin", "Albatross", "Ostrich", "Eagle"], answer: 2 },
    { question: "Which flightless bird is famous for living in Antarctica?", options: ["Ostrich", "Penguin", "Kiwi", "Emu"], answer: 1 },
    { question: "Which bird has the largest wingspan of any living bird?", options: ["Bald Eagle", "Wandering Albatross", "Golden Eagle", "Condor"], answer: 1 },
    { question: "Which animal is popularly known as 'man's best friend'?", options: ["Cat", "Dog", "Horse", "Parrot"], answer: 1 },
    { question: "Which animal is famous for its black-and-white stripes?", options: ["Panda", "Zebra", "Skunk", "Penguin"], answer: 1 },
    { question: "Which animal is the national animal of China?", options: ["Red Panda", "Giant Panda", "Snow Leopard", "Golden Monkey"], answer: 1 },
    { question: "Which is the national animal of India?", options: ["Lion", "Elephant", "Bengal Tiger", "Peacock"], answer: 2 },
    { question: "Which bird is the national bird of the USA?", options: ["Turkey", "Bald Eagle", "Cardinal", "Robin"], answer: 1 },
    { question: "Which is the largest species of big cat?", options: ["Lion", "Tiger", "Jaguar", "Leopard"], answer: 1 },
    { question: "How many humps does a Bactrian camel typically have?", options: ["1", "2", "3", "0"], answer: 1 },
    { question: "How many humps does a dromedary camel typically have?", options: ["1", "2", "3", "0"], answer: 0 },
    { question: "Which animal is known to sleep for up to 20 hours a day?", options: ["Sloth", "Koala", "Panda", "Cat"], answer: 1 },
    { question: "What is a baby dog called?", options: ["Kitten", "Puppy", "Cub", "Foal"], answer: 1 },
    { question: "What is a baby cat called?", options: ["Puppy", "Cub", "Kitten", "Joey"], answer: 2 },
    { question: "What is a baby cow called?", options: ["Foal", "Kid", "Calf", "Lamb"], answer: 2 },
    { question: "What is a baby horse called?", options: ["Foal", "Calf", "Cub", "Kit"], answer: 0 },
    { question: "What is a baby sheep called?", options: ["Kid", "Lamb", "Calf", "Fawn"], answer: 1 },
    { question: "What is a group of wolves called?", options: ["Herd", "Pack", "Pride", "Colony"], answer: 1 },
    { question: "What is a group of fish called?", options: ["Herd", "Pod", "School", "Flock"], answer: 2 },
    { question: "What is a group of crows called?", options: ["Murder", "Parliament", "Congress", "Colony"], answer: 0 },
    { question: "Which animal is well known for its ability to regrow its tail?", options: ["Frog", "Lizard", "Snake", "Turtle"], answer: 1 },
    { question: "Which insect is famous for producing silk?", options: ["Spider", "Silkworm", "Beetle", "Bee"], answer: 1 },
    { question: "Which insect can lift many times its own body weight?", options: ["Bee", "Ant", "Beetle", "Fly"], answer: 1 },
    { question: "Which bird lays the largest egg of any living bird?", options: ["Eagle", "Ostrich", "Swan", "Peacock"], answer: 1 },
    { question: "What is a female fox commonly called?", options: ["Vixen", "Doe", "Hen", "Cow"], answer: 0 },
    { question: "What is a male deer commonly called?", options: ["Buck or Stag", "Bull", "Ram", "Boar"], answer: 0 },
    { question: "Which reptile is well known for living both on land and in water?", options: ["Snake", "Crocodile", "Lizard", "Tortoise"], answer: 1 },
    { question: "Which amphibian undergoes metamorphosis from a tadpole?", options: ["Salamander", "Frog", "Newt", "Toad"], answer: 1 },
    { question: "Which is the largest species of penguin?", options: ["King Penguin", "Emperor Penguin", "Adelie Penguin", "Gentoo Penguin"], answer: 1 },
    { question: "Which bird is commonly used as a symbol of peace?", options: ["Sparrow", "Dove", "Swan", "Owl"], answer: 1 },
    { question: "Besides the chameleon, which sea creature is famous for changing its skin color?", options: ["Jellyfish", "Octopus", "Starfish", "Crab"], answer: 1 },
    { question: "Which creature is known for having blue-colored blood?", options: ["Octopus", "Horseshoe Crab", "Starfish", "Jellyfish"], answer: 1 },
    { question: "Which is considered one of the most venomous snakes in the world?", options: ["King Cobra", "Inland Taipan", "Black Mamba", "Rattlesnake"], answer: 1 },
    { question: "Which is the longest snake species in the world?", options: ["Anaconda", "King Cobra", "Reticulated Python", "Boa Constrictor"], answer: 2 },
    { question: "Which is the heaviest snake species in the world?", options: ["Reticulated Python", "Green Anaconda", "King Cobra", "Black Mamba"], answer: 1 },
    { question: "Which big cat is known for being unable to roar?", options: ["Lion", "Tiger", "Cheetah", "Jaguar"], answer: 2 },
    { question: "Which animal, alongside the kangaroo, is a well-known symbol of Australia?", options: ["Panda", "Koala", "Lemur", "Sloth"], answer: 1 },
    { question: "Which bird is famous for its colorful, fan-like tail feathers?", options: ["Parrot", "Peacock", "Flamingo", "Toucan"], answer: 1 },
    { question: "Which animal is known for its excellent memory and is said to 'never forget'?", options: ["Dolphin", "Elephant", "Crow", "Octopus"], answer: 1 },
    { question: "Which sea mammal is well known for its intelligence and use of tools?", options: ["Seal", "Dolphin", "Walrus", "Sea Otter"], answer: 1 },
    { question: "Which is the largest living primate?", options: ["Chimpanzee", "Orangutan", "Gorilla", "Baboon"], answer: 2 },
    { question: "Which primate shares roughly 98% of its DNA with humans?", options: ["Gorilla", "Chimpanzee", "Orangutan", "Baboon"], answer: 1 },
    { question: "Which big cat is well known for living and hunting in prides?", options: ["Tiger", "Leopard", "Lion", "Jaguar"], answer: 2 },
    { question: "What is a group of elephants called?", options: ["Herd", "Pack", "Pod", "Troop"], answer: 0 },
    { question: "Which animal is known for being able to sleep while standing up?", options: ["Cow", "Horse", "Goat", "Camel"], answer: 1 },
    { question: "Which farm animal is the main source of wool?", options: ["Goat", "Cow", "Sheep", "Pig"], answer: 2 },
    { question: "In folklore, which bird is said to deliver babies?", options: ["Swan", "Stork", "Crane", "Heron"], answer: 1 },
    { question: "Which insect undergoes complete metamorphosis from egg to larva to pupa to adult?", options: ["Grasshopper", "Butterfly", "Cockroach", "Dragonfly"], answer: 1 },
    { question: "Which colorful bird is the national bird of India?", options: ["Parrot", "Peacock", "Kingfisher", "Sparrow"], answer: 1 },
    { question: "Which animal produces one of the loudest calls in the animal kingdom?", options: ["Lion", "Elephant", "Blue Whale", "Howler Monkey"], answer: 2 },
    { question: "Which animal is famous for playing dead when threatened?", options: ["Opossum", "Raccoon", "Squirrel", "Rabbit"], answer: 0 },
    { question: "How many arms does a typical starfish usually have?", options: ["3", "4", "5", "6"], answer: 2 },
    { question: "Which animal is often called the 'King of the Jungle'?", options: ["Tiger", "Lion", "Leopard", "Elephant"], answer: 1 },
    { question: "What is a baby rabbit commonly called?", options: ["Cub", "Kit", "Pup", "Joey"], answer: 1 },
    { question: "Which nocturnal bird is often used as a symbol of wisdom?", options: ["Crow", "Owl", "Bat", "Nightingale"], answer: 1 },
    { question: "What term describes animals that are mainly active at night?", options: ["Diurnal", "Nocturnal", "Crepuscular", "Hibernal"], answer: 1 },
    { question: "What term describes animals that are mainly active during the day?", options: ["Nocturnal", "Diurnal", "Aquatic", "Migratory"], answer: 1 },
    { question: "Which is considered the fastest marine animal?", options: ["Dolphin", "Sailfish", "Orca", "Tuna"], answer: 1 },
    { question: "Which shark is widely regarded as the most feared by humans?", options: ["Whale Shark", "Great White Shark", "Nurse Shark", "Hammerhead Shark"], answer: 1 },
    { question: "Which is the only mammal known to lay eggs?", options: ["Kangaroo", "Platypus", "Anteater", "Armadillo"], answer: 1 },
    { question: "Which flightless bird is native to New Zealand and is also its national symbol?", options: ["Emu", "Ostrich", "Kiwi", "Cassowary"], answer: 2 },
    { question: "Which insect is famous for its highly organized hive structure and teamwork?", options: ["Ant", "Bee", "Termite", "Wasp"], answer: 1 },
    { question: "Which is the largest living reptile in the world?", options: ["Komodo Dragon", "Saltwater Crocodile", "Green Anaconda", "Nile Crocodile"], answer: 1 },
    { question: "Which sea creature is known for having three hearts?", options: ["Octopus", "Squid", "Crab", "Jellyfish"], answer: 0 },
    { question: "Which animal is famous for its distinctive black-and-white coloring and bamboo diet?", options: ["Koala", "Giant Panda", "Red Panda", "Sloth Bear"], answer: 1 },
    { question: "Which bird is known for building the largest nests among birds of prey?", options: ["Golden Eagle", "Bald Eagle", "Osprey", "Hawk"], answer: 1 }
  ],

  // ---------------------------------------------------------
  history: [
    { question: "In which country can you find the Pyramids of Giza?", options: ["Greece", "Egypt", "Sudan", "Jordan"], answer: 1 },
    { question: "Who was the first person to walk on the Moon?", options: ["Buzz Aldrin", "Yuri Gagarin", "Neil Armstrong", "Michael Collins"], answer: 2 },
    { question: "Which ancient civilization built Machu Picchu?", options: ["Aztecs", "Mayans", "Incas", "Romans"], answer: 2 },
    { question: "Which war took place between 1914 and 1918?", options: ["World War I", "World War II", "Cold War", "Vietnam War"], answer: 0 },
    { question: "Who was credited with inventing the telephone?", options: ["Thomas Edison", "Alexander Graham Bell", "Nikola Tesla", "Albert Einstein"], answer: 1 },
    { question: "Which famous ship sank in 1912 after hitting an iceberg?", options: ["Britannic", "Titanic", "Olympic", "Lusitania"], answer: 1 },
    { question: "Which ancient civilization built the Colosseum?", options: ["Greeks", "Egyptians", "Romans", "Persians"], answer: 2 },
    { question: "Which is the highest waterfall in the world?", options: ["Niagara Falls", "Angel Falls", "Victoria Falls", "Iguazu Falls"], answer: 1 },
    { question: "Which country has the most natural lakes?", options: ["Canada", "USA", "Russia", "Brazil"], answer: 0 },
    { question: "The Great Wall of China was mainly built to do what?", options: ["Mark trade routes", "Defend against invasions", "Honor emperors", "Control floods"], answer: 1 },
    { question: "Which ancient wonder of the world still stands today?", options: ["Colossus of Rhodes", "Great Pyramid of Giza", "Hanging Gardens of Babylon", "Lighthouse of Alexandria"], answer: 1 },
    { question: "Who was the first Emperor of Rome?", options: ["Julius Caesar", "Nero", "Augustus", "Constantine"], answer: 2 },
    { question: "In which year did World War II end?", options: ["1943", "1944", "1945", "1946"], answer: 2 },
    { question: "Which country was formerly known as Persia?", options: ["Iraq", "Iran", "Turkey", "Syria"], answer: 1 },
    { question: "The Eiffel Tower is located in which city?", options: ["London", "Rome", "Paris", "Berlin"], answer: 2 },
    { question: "Which country built the Great Wall of China?", options: ["Mongolia", "China", "Japan", "Korea"], answer: 1 },
    { question: "Who is traditionally credited with discovering America in 1492?", options: ["Ferdinand Magellan", "Christopher Columbus", "Vasco da Gama", "Marco Polo"], answer: 1 },
    { question: "In which year did Columbus first reach the Americas?", options: ["1482", "1492", "1502", "1512"], answer: 1 },
    { question: "Who was the first President of the United States?", options: ["Abraham Lincoln", "Thomas Jefferson", "George Washington", "John Adams"], answer: 2 },
    { question: "Which vast empire was ruled by Genghis Khan?", options: ["Roman Empire", "Ottoman Empire", "Mongol Empire", "Persian Empire"], answer: 2 },
    { question: "Which ancient civilization was ruled by pharaohs?", options: ["Greece", "Egypt", "Rome", "Persia"], answer: 1 },
    { question: "Which war was fought between the North and South regions of the USA?", options: ["Revolutionary War", "American Civil War", "War of 1812", "Spanish-American War"], answer: 1 },
    { question: "Who was the primary author of the American Declaration of Independence?", options: ["George Washington", "Benjamin Franklin", "Thomas Jefferson", "John Adams"], answer: 2 },
    { question: "Which explorer's expedition was the first to circumnavigate the globe?", options: ["Christopher Columbus", "Vasco da Gama", "Ferdinand Magellan", "James Cook"], answer: 2 },
    { question: "In which city was Julius Caesar assassinated?", options: ["Athens", "Rome", "Alexandria", "Carthage"], answer: 1 },
    { question: "Which British queen ruled for over 60 years during the 19th century?", options: ["Queen Elizabeth I", "Queen Victoria", "Queen Anne", "Queen Mary"], answer: 1 },
    { question: "Which modern country was home to the ancient civilization of Mesopotamia?", options: ["Egypt", "Iraq", "Turkey", "Iran"], answer: 1 },
    { question: "Which region is often called the 'cradle of civilization'?", options: ["Nile Valley", "Indus Valley", "Mesopotamia", "Yangtze Valley"], answer: 2 },
    { question: "Who led Nazi Germany during World War II?", options: ["Joseph Stalin", "Adolf Hitler", "Benito Mussolini", "Winston Churchill"], answer: 1 },
    { question: "Which country dropped atomic bombs on Japan during World War II?", options: ["United Kingdom", "Soviet Union", "United States", "Germany"], answer: 2 },
    { question: "In which year did India gain independence from British rule?", options: ["1945", "1946", "1947", "1950"], answer: 2 },
    { question: "Who is known as the Father of the Nation in India?", options: ["Jawaharlal Nehru", "Mahatma Gandhi", "Sardar Patel", "Subhas Chandra Bose"], answer: 1 },
    { question: "Who is regarded as the founder of Pakistan?", options: ["Liaquat Ali Khan", "Allama Iqbal", "Muhammad Ali Jinnah", "Sir Syed Ahmad Khan"], answer: 2 },
    { question: "In which year was Pakistan created as an independent nation?", options: ["1945", "1946", "1947", "1948"], answer: 2 },
    { question: "Which wall famously divided East and West Germany during the Cold War?", options: ["Great Wall", "Berlin Wall", "Hadrian's Wall", "Atlantic Wall"], answer: 1 },
    { question: "In which year did the Berlin Wall fall?", options: ["1985", "1987", "1989", "1991"], answer: 2 },
    { question: "Which ship carried the Pilgrims from England to America in 1620?", options: ["Santa Maria", "Mayflower", "Beagle", "Endeavour"], answer: 1 },
    { question: "Which ancient wonder of the world was located in Alexandria, Egypt?", options: ["Hanging Gardens", "Colossus of Rhodes", "Lighthouse of Alexandria", "Temple of Artemis"], answer: 2 },
    { question: "Which ancient civilization built the city of Chichen Itza?", options: ["Aztec", "Maya", "Inca", "Olmec"], answer: 1 },
    { question: "Which modern country was home to the Aztec Empire?", options: ["Peru", "Mexico", "Guatemala", "Colombia"], answer: 1 },
    { question: "Which emperor is credited with first unifying China?", options: ["Kublai Khan", "Qin Shi Huang", "Sun Yat-sen", "Emperor Wu"], answer: 1 },
    { question: "Which war is remembered for extensive trench warfare on the Western Front?", options: ["World War I", "World War II", "Korean War", "Vietnam War"], answer: 0 },
    { question: "Which country was the French military leader Napoleon Bonaparte from?", options: ["Italy", "Spain", "France", "Belgium"], answer: 2 },
    { question: "At which famous battle was Napoleon finally defeated?", options: ["Battle of Trafalgar", "Battle of Waterloo", "Battle of Austerlitz", "Battle of Leipzig"], answer: 1 },
    { question: "Which empire was historically described as one 'on which the sun never sets'?", options: ["Roman Empire", "Ottoman Empire", "British Empire", "Spanish Empire"], answer: 2 },
    { question: "Which revolution began in France in the year 1789?", options: ["Industrial Revolution", "French Revolution", "Russian Revolution", "American Revolution"], answer: 1 },
    { question: "Which queen was executed during the French Revolution?", options: ["Catherine the Great", "Marie Antoinette", "Elizabeth I", "Isabella I"], answer: 1 },
    { question: "Which modern country was the center of the Ottoman Empire?", options: ["Egypt", "Turkey", "Greece", "Syria"], answer: 1 },
    { question: "Which prehistoric monument of standing stones is located in England?", options: ["Stonehenge", "Avebury Circle", "Callanish Stones", "Newgrange"], answer: 0 },
    { question: "Which explorer discovered a sea route to India by sailing around Africa?", options: ["Christopher Columbus", "Vasco da Gama", "Ferdinand Magellan", "James Cook"], answer: 1 },
    { question: "Which country's explorers were the first to reach the South Pole in 1911?", options: ["United Kingdom", "Norway", "United States", "France"], answer: 1 },
    { question: "Who was the first human to travel into outer space?", options: ["Neil Armstrong", "Yuri Gagarin", "John Glenn", "Buzz Aldrin"], answer: 1 },
    { question: "Which country launched Sputnik, the first artificial satellite?", options: ["United States", "Soviet Union", "China", "United Kingdom"], answer: 1 },
    { question: "Which US President was assassinated in Dallas in 1963?", options: ["Abraham Lincoln", "John F. Kennedy", "Franklin D. Roosevelt", "Theodore Roosevelt"], answer: 1 },
    { question: "Which is generally regarded as one of the world's oldest known civilizations?", options: ["Sumerians", "Romans", "Greeks", "Aztecs"], answer: 0 },
    { question: "Which ancient Greek city-state was known for its strict military discipline?", options: ["Athens", "Sparta", "Corinth", "Thebes"], answer: 1 },
    { question: "Who was the famous philosopher who tutored Alexander the Great?", options: ["Socrates", "Plato", "Aristotle", "Pythagoras"], answer: 2 },
    { question: "Which empire did Alexander the Great rule and expand?", options: ["Roman Empire", "Macedonian Empire", "Persian Empire", "Egyptian Empire"], answer: 1 },
    { question: "Which region did the Vikings originally come from?", options: ["Western Europe", "Scandinavia", "Eastern Europe", "British Isles"], answer: 1 },
    { question: "In which century is the Renaissance generally considered to have begun?", options: ["12th century", "14th century", "16th century", "18th century"], answer: 1 },
    { question: "Which explorer is credited with discovering the Pacific Ocean from the New World?", options: ["Hernan Cortes", "Vasco Nunez de Balboa", "Francisco Pizarro", "Juan Ponce de Leon"], answer: 1 },
    { question: "What was the name of the ship on which Charles Darwin made his famous voyage?", options: ["HMS Victory", "HMS Beagle", "HMS Endeavour", "HMS Bounty"], answer: 1 },
    { question: "Which country was formerly known as Ceylon?", options: ["Sri Lanka", "Myanmar", "Thailand", "Malaysia"], answer: 0 },
    { question: "Which country was formerly known as Burma?", options: ["Cambodia", "Myanmar", "Laos", "Vietnam"], answer: 1 },
    { question: "Which empire built the Colosseum in Rome?", options: ["Greek Empire", "Roman Empire", "Byzantine Empire", "Ottoman Empire"], answer: 1 },
    { question: "In which country are the ancient ruins of Petra located?", options: ["Egypt", "Jordan", "Syria", "Lebanon"], answer: 1 },
    { question: "In which country are the ancient ruins of Angkor Wat located?", options: ["Thailand", "Vietnam", "Cambodia", "Laos"], answer: 2 },
    { question: "Which Mughal emperor built the Taj Mahal?", options: ["Akbar", "Humayun", "Shah Jahan", "Aurangzeb"], answer: 2 },
    { question: "Which war is remembered for the famous D-Day invasion?", options: ["World War I", "World War II", "Korean War", "Vietnam War"], answer: 1 },
    { question: "In which country did the D-Day landings take place?", options: ["Germany", "France", "Belgium", "Netherlands"], answer: 1 },
    { question: "Which country was divided into North and South after World War II along the 38th parallel?", options: ["Vietnam", "China", "Korea", "Germany"], answer: 2 },
    { question: "In which year did World War I begin?", options: ["1912", "1914", "1916", "1918"], answer: 1 },
    { question: "Which treaty officially ended World War I?", options: ["Treaty of Paris", "Treaty of Versailles", "Treaty of Vienna", "Treaty of Tordesillas"], answer: 1 },
    { question: "Which country's anti-apartheid independence movement was led by Nelson Mandela?", options: ["Zimbabwe", "South Africa", "Kenya", "Nigeria"], answer: 1 },
    { question: "What system of racial segregation did Nelson Mandela fight against in South Africa?", options: ["Colonialism", "Apartheid", "Feudalism", "Monarchy"], answer: 1 },
    { question: "Which famous ancient library was located in Egypt?", options: ["Library of Baghdad", "Library of Alexandria", "Library of Pergamon", "Library of Athens"], answer: 1 },
    { question: "Which explorer is credited with being the first European to reach India by sea in 1498?", options: ["Christopher Columbus", "Vasco da Gama", "Ferdinand Magellan", "Marco Polo"], answer: 1 },
    { question: "Which country's revolution in 1917 led to the rise of the Soviet Union?", options: ["Germany", "Russia", "China", "Cuba"], answer: 1 },
    { question: "Who was the leader of the Soviet Union during most of World War II?", options: ["Vladimir Lenin", "Joseph Stalin", "Nikita Khrushchev", "Leon Trotsky"], answer: 1 },
    { question: "Which explorer, sailing for Portugal, is known for exploring the coast of Africa in the 15th century?", options: ["Bartolomeu Dias", "James Cook", "Amerigo Vespucci", "Henry Hudson"], answer: 0 },
    { question: "After whom is the continent 'America' believed to be named?", options: ["Christopher Columbus", "Amerigo Vespucci", "Ferdinand Magellan", "John Cabot"], answer: 1 },
    { question: "Which was the first country to grant women the right to vote nationally?", options: ["United States", "United Kingdom", "New Zealand", "France"], answer: 2 }
  ],

  // ---------------------------------------------------------
  sports: [
    { question: "How many rings are on the official Olympic flag?", options: ["4", "5", "6", "7"], answer: 1 },
    { question: "Which famous artist painted the 'Mona Lisa'?", options: ["Pablo Picasso", "Vincent van Gogh", "Leonardo da Vinci", "Claude Monet"], answer: 2 },
    { question: "How many players are on the field for one team in Cricket?", options: ["9", "10", "11", "12"], answer: 2 },
    { question: "Which game uses pieces like 'Knight', 'Rook', and 'Pawn'?", options: ["Ludo", "Chess", "Carrom", "Checkers"], answer: 1 },
    { question: "In football, how long is a standard full match?", options: ["80 minutes", "90 minutes", "100 minutes", "60 minutes"], answer: 1 },
    { question: "What has hands but cannot clap?", options: ["A Clock", "A Robot", "A Tree", "A Mirror"], answer: 0 },
    { question: "What gets wetter the more it dries?", options: ["Sponge", "Towel", "Water", "Ice"], answer: 1 },
    { question: "What has to be broken before you can use it?", options: ["Glass", "Coconut", "An Egg", "A Lock"], answer: 2 },
    { question: "What belongs to you, but other people use it more than you do?", options: ["Your Money", "Your Name", "Your Phone", "Your Car"], answer: 1 },
    { question: "Which country has won the most FIFA World Cups?", options: ["Germany", "Argentina", "Italy", "Brazil"], answer: 3 },
    { question: "What color is the flight recorder (black box) on an airplane?", options: ["Black", "Bright Orange", "Yellow", "Red"], answer: 1 },
    { question: "Which food item never spoils and can last thousands of years?", options: ["White Rice", "Honey", "Dried Beans", "Salt"], answer: 1 },
    { question: "How many players are on a basketball court per team?", options: ["4", "5", "6", "7"], answer: 1 },
    { question: "Which sport is known as 'The Beautiful Game'?", options: ["Basketball", "Cricket", "Football (Soccer)", "Tennis"], answer: 2 },
    { question: "In which sport would you perform a 'slam dunk'?", options: ["Volleyball", "Basketball", "Badminton", "Handball"], answer: 1 },
    { question: "How many players are on a volleyball team on the court?", options: ["5", "6", "7", "8"], answer: 1 },
    { question: "How many players are on a rugby union team on the field?", options: ["11", "13", "15", "17"], answer: 2 },
    { question: "How often are the Summer Olympic Games typically held?", options: ["Every 2 years", "Every 3 years", "Every 4 years", "Every 5 years"], answer: 2 },
    { question: "In which country were the first modern Olympic Games held in 1896?", options: ["Italy", "France", "Greece", "United Kingdom"], answer: 2 },
    { question: "Which major tennis tournament is held annually at Wimbledon?", options: ["US Open", "French Open", "Wimbledon Championships", "Australian Open"], answer: 2 },
    { question: "How many holes are there in a standard round of golf?", options: ["9", "16", "18", "21"], answer: 2 },
    { question: "Which country is credited with inventing the sport of cricket?", options: ["Australia", "India", "England", "South Africa"], answer: 2 },
    { question: "What is the maximum score possible from a single dart on a standard board?", options: ["50", "60", "100", "180"], answer: 1 },
    { question: "In tennis, what is a score of zero commonly called?", options: ["Nil", "Zero", "Love", "Duck"], answer: 2 },
    { question: "How many players from each team are on the ice at once in ice hockey?", options: ["5", "6", "7", "8"], answer: 1 },
    { question: "Which country has won the most Cricket World Cups?", options: ["India", "West Indies", "Australia", "England"], answer: 2 },
    { question: "How many rounds are typically contested in a professional championship boxing match?", options: ["8", "10", "12", "15"], answer: 2 },
    { question: "Which sport uses a shuttlecock?", options: ["Tennis", "Badminton", "Squash", "Table Tennis"], answer: 1 },
    { question: "What is the term for scoring three goals in a single soccer match by one player?", options: ["Double", "Hat-trick", "Triple Play", "Grand Slam"], answer: 1 },
    { question: "Which country hosted the 2016 Summer Olympics?", options: ["China", "United Kingdom", "Brazil", "Japan"], answer: 2 },
    { question: "Which country hosted the Summer Olympics held in 2021 (originally scheduled for 2020)?", options: ["South Korea", "Japan", "China", "France"], answer: 1 },
    { question: "In which sport is a mallet used to hit a ball while riding a horse?", options: ["Croquet", "Polo", "Golf", "Cricket"], answer: 1 },
    { question: "Which is considered the national sport of Japan?", options: ["Judo", "Karate", "Sumo Wrestling", "Baseball"], answer: 2 },
    { question: "Which is the official national winter sport of Canada?", options: ["Skiing", "Ice Hockey", "Curling", "Figure Skating"], answer: 1 },
    { question: "What is the maximum number of clubs a golfer is allowed to carry in a round?", options: ["10", "12", "14", "16"], answer: 2 },
    { question: "How many players from each team are on the field in baseball?", options: ["7", "8", "9", "10"], answer: 2 },
    { question: "What is the trophy awarded to the winner of the FIFA World Cup called?", options: ["Champions Cup", "FIFA World Cup Trophy", "Golden Boot", "World Shield"], answer: 1 },
    { question: "Which country won the very first FIFA World Cup in 1930?", options: ["Brazil", "Argentina", "Uruguay", "Italy"], answer: 2 },
    { question: "How many players are on a Kabaddi team on the field?", options: ["5", "6", "7", "8"], answer: 2 },
    { question: "Which sport is Michael Jordan most famous for?", options: ["Football", "Basketball", "Baseball", "Tennis"], answer: 1 },
    { question: "Which sport is Muhammad Ali most famous for?", options: ["Wrestling", "Boxing", "Football", "Athletics"], answer: 1 },
    { question: "Which sport is Serena Williams most famous for?", options: ["Golf", "Athletics", "Tennis", "Swimming"], answer: 2 },
    { question: "Which sport is Usain Bolt most famous for?", options: ["Long Jump", "Sprinting", "Swimming", "Cycling"], answer: 1 },
    { question: "Which sport is Lionel Messi most famous for?", options: ["Basketball", "Football (Soccer)", "Tennis", "Cricket"], answer: 1 },
    { question: "Which sport is Sachin Tendulkar most famous for?", options: ["Hockey", "Football", "Cricket", "Badminton"], answer: 2 },
    { question: "Which sport is Tiger Woods most famous for?", options: ["Tennis", "Golf", "Baseball", "Cricket"], answer: 1 },
    { question: "Which sport is Michael Phelps most famous for?", options: ["Diving", "Swimming", "Rowing", "Sailing"], answer: 1 },
    { question: "Which country does footballer Cristiano Ronaldo represent internationally?", options: ["Spain", "Brazil", "Portugal", "Italy"], answer: 2 },
    { question: "How many Grand Slam tournaments are there in tennis each year?", options: ["2", "3", "4", "5"], answer: 2 },
    { question: "Which is considered the oldest tennis tournament in the world?", options: ["US Open", "French Open", "Wimbledon", "Australian Open"], answer: 2 },
    { question: "In snooker, which colored ball is worth the most points?", options: ["Blue", "Pink", "Black", "Green"], answer: 2 },
    { question: "How many red balls are on a snooker table at the start of a frame?", options: ["10", "12", "15", "20"], answer: 2 },
    { question: "What is the maximum possible break in a single frame of snooker?", options: ["100", "120", "147", "155"], answer: 2 },
    { question: "In which board game would you say 'checkmate' to win?", options: ["Checkers", "Chess", "Backgammon", "Carrom"], answer: 1 },
    { question: "Which chess piece is known for moving in an L-shape?", options: ["Bishop", "Rook", "Knight", "Queen"], answer: 2 },
    { question: "How many total squares are there on a standard chessboard?", options: ["36", "49", "64", "81"], answer: 2 },
    { question: "In American Football, how many points is a touchdown worth?", options: ["3", "5", "6", "7"], answer: 2 },
    { question: "Which country is generally credited with inventing table tennis?", options: ["China", "Japan", "England", "USA"], answer: 2 },
    { question: "In golf, what is the term for scoring one under par on a hole?", options: ["Eagle", "Birdie", "Bogey", "Ace"], answer: 1 },
    { question: "In golf, what is the term for scoring one over par on a hole?", options: ["Birdie", "Eagle", "Bogey", "Par"], answer: 2 },
    { question: "What is the answer to this riddle: The more you take, the more you leave behind. What am I?", options: ["Time", "Footsteps", "Memories", "Money"], answer: 1 },
    { question: "What is the answer to this riddle: I speak without a mouth and hear without ears. What am I?", options: ["A Ghost", "An Echo", "A Shadow", "A Dream"], answer: 1 },
    { question: "What is the answer to this riddle: What has a neck but no head?", options: ["A Shirt", "A Bottle", "A Guitar", "A Road"], answer: 1 },
    { question: "What is the answer to this riddle: What can travel around the world while staying in a corner?", options: ["A Clock", "A Stamp", "A Map", "The Wind"], answer: 1 },
    { question: "What is the answer to this riddle: What has keys but cannot open any locks?", options: ["A Map", "A Piano", "A Keyboard", "A Safe"], answer: 1 },
    { question: "What is the answer to this riddle: Which building in a city usually has the most stories?", options: ["A Bank", "A Library", "A School", "A Hospital"], answer: 1 },
    { question: "What is the answer to this riddle: I'm tall when I'm young and short when I'm old. What am I?", options: ["A Tree", "A Candle", "A Person", "A Shadow"], answer: 1 },
    { question: "What is the answer to this riddle: What has one eye but cannot see?", options: ["A Needle", "A Storm", "A Potato", "A Camera"], answer: 0 },
    { question: "What is the answer to this riddle: What comes down but never goes up?", options: ["A Ball", "Rain", "A Kite", "Smoke"], answer: 1 },
    { question: "Which board game involves buying, selling, and trading properties?", options: ["Scrabble", "Monopoly", "Cluedo", "Risk"], answer: 1 },
    { question: "How many cards are in a standard deck of playing cards, excluding jokers?", options: ["48", "50", "52", "54"], answer: 2 },
    { question: "The US Open Grand Slam tournament is most famously associated with which sport?", options: ["Golf", "Tennis", "Swimming", "Athletics"], answer: 1 },
    { question: "Which country is regarded as the birthplace of the ancient Olympic Games?", options: ["Italy", "Egypt", "Greece", "Turkey"], answer: 2 },
    { question: "What color medal is awarded to the winner in most Olympic events?", options: ["Silver", "Gold", "Bronze", "Platinum"], answer: 1 },
    { question: "What color medal is awarded for third place in most Olympic events?", options: ["Gold", "Silver", "Bronze", "Copper"], answer: 2 },
    { question: "Which sport is associated with the term 'love-all' at the start of a game?", options: ["Badminton", "Tennis", "Squash", "Table Tennis"], answer: 1 },
    { question: "Which sport features events like the 100m sprint and the marathon?", options: ["Swimming", "Athletics", "Cycling", "Gymnastics"], answer: 1 },
    { question: "In which sport do players use a bat shaped differently from cricket, hitting a small ball over a net using rules similar to volleyball height?", options: ["Badminton", "Table Tennis", "Squash", "Racquetball"], answer: 1 },
    { question: "Which martial art, originating in Japan, focuses on grappling and throws rather than strikes?", options: ["Karate", "Judo", "Taekwondo", "Kung Fu"], answer: 1 },
    { question: "Which martial art, originating in Korea, is known for its emphasis on high, fast kicks?", options: ["Judo", "Karate", "Taekwondo", "Aikido"], answer: 2 }
  ]

};

// ==========================================================
// CONFIG
// ==========================================================
const QUESTION_LIMIT = 10; // Exactly 10 questions per round
const TIME_PER_QUESTION = 15;

// ==========================================================
// STATE
// ==========================================================
let selectedCategory = null;
let activeQuestions = [];
let currentPlayer = "";
let currentIndex = 0;
let score = 0;
let correctAnswers = 0;
let wrongAnswers = 0;
let timer;
let timeLeft = TIME_PER_QUESTION;

// ==========================================================
// DOM ELEMENTS
// ==========================================================
const categoryScreen = document.getElementById("category-screen");
const categoryGrid = document.getElementById("category-grid");

const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");

const backToCategoriesBtn = document.getElementById("back-to-categories");
const selectedCategoryChip = document.getElementById("selected-category-chip");
const quizCategoryChip = document.getElementById("quiz-category-chip");

const usernameInput = document.getElementById("username-input");
const startBtn = document.getElementById("start-btn");

const playerDisplay = document.getElementById("player-display");
const questionEl = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const currentQuestionEl = document.getElementById("current-question");
const totalQuestionsEl = document.getElementById("total-questions");

const scoreEl = document.getElementById("score-count");
const correctEl = document.getElementById("correct-count");
const wrongEl = document.getElementById("wrong-count");
const timerEl = document.getElementById("timer");
const nextBtn = document.getElementById("next-btn");

const finalPlayerName = document.getElementById("final-player-name");
const finalCorrect = document.getElementById("final-correct");
const finalWrong = document.getElementById("final-wrong");
const finalScore = document.getElementById("final-score");
const leaderboardCategoryName = document.getElementById("leaderboard-category-name");
const leaderboardList = document.getElementById("leaderboard-list");
const restartBtn = document.getElementById("restart-btn");
const homeBtn = document.getElementById("home-btn");

// ==========================================================
// SCREEN HELPERS
// ==========================================================
function showScreen(screen) {
  [categoryScreen, startScreen, quizScreen, resultScreen].forEach(s => s.classList.add("hidden"));
  screen.classList.remove("hidden");
}

function getCategoryById(id) {
  return categories.find(c => c.id === id);
}

// ==========================================================
// BUILD CATEGORY GRID ON HOME SCREEN
// ==========================================================
function renderCategoryGrid() {
  categoryGrid.innerHTML = "";
  categories.forEach(cat => {
    const total = (categoryQuestions[cat.id] || []).length;
    const card = document.createElement("div");
    card.classList.add("category-card");
    card.innerHTML = `
      <span class="cat-icon">${cat.icon}</span>
      <span class="cat-name">${cat.name}</span>
      <span class="cat-count">${total} questions</span>
    `;
    card.addEventListener("click", () => selectCategory(cat.id));
    categoryGrid.appendChild(card);
  });
}

function selectCategory(catId) {
  selectedCategory = catId;
  const cat = getCategoryById(catId);
  selectedCategoryChip.textContent = `${cat.icon} ${cat.name}`;
  usernameInput.value = "";
  showScreen(startScreen);
  usernameInput.focus();
}

backToCategoriesBtn.addEventListener("click", () => {
  showScreen(categoryScreen);
});

// ==========================================================
// START GAME
// ==========================================================
startBtn.addEventListener("click", () => {
  const name = usernameInput.value.trim();
  if (name === "") {
    alert("Please enter your name first!");
    return;
  }
  if (!selectedCategory) {
    alert("Please choose a category first!");
    showScreen(categoryScreen);
    return;
  }

  currentPlayer = name;
  playerDisplay.textContent = currentPlayer;

  const cat = getCategoryById(selectedCategory);
  quizCategoryChip.textContent = `${cat.icon} ${cat.name}`;

  showScreen(quizScreen);

  setupQuizRound();
  loadQuestion();
});

function setupQuizRound() {
  currentIndex = 0;
  score = 0;
  correctAnswers = 0;
  wrongAnswers = 0;

  const pool = categoryQuestions[selectedCategory] || [];

  // Shuffle the category's question pool randomly (no repeats within a round)
  const shuffled = [...pool].sort(() => Math.random() - 0.5);

  // Pick exactly QUESTION_LIMIT questions (or fewer if the pool is smaller)
  activeQuestions = shuffled.slice(0, QUESTION_LIMIT);

  totalQuestionsEl.textContent = activeQuestions.length;

  updateStatsDisplay();
}

function updateStatsDisplay() {
  scoreEl.textContent = score;
  correctEl.textContent = correctAnswers;
  wrongEl.textContent = wrongAnswers;
}

function loadQuestion() {
  resetState();
  const q = activeQuestions[currentIndex];
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
  timeLeft = TIME_PER_QUESTION;
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
      wrongAnswers++;
      autoDisableOptions();
      updateStatsDisplay();
      nextBtn.classList.remove("hidden");
    }
  }, 1000);
}

function selectOption(selectedBtn, index) {
  clearInterval(timer);
  const correctIndex = activeQuestions[currentIndex].answer;
  const buttons = optionsContainer.querySelectorAll(".option-btn");

  buttons.forEach(btn => btn.disabled = true);

  if (index === correctIndex) {
    selectedBtn.classList.add("correct");
    score += 10;
    correctAnswers++;
  } else {
    selectedBtn.classList.add("wrong");
    buttons[correctIndex].classList.add("correct");
    wrongAnswers++;
  }

  updateStatsDisplay();
  nextBtn.classList.remove("hidden");
}

function autoDisableOptions() {
  const correctIndex = activeQuestions[currentIndex].answer;
  const buttons = optionsContainer.querySelectorAll(".option-btn");
  buttons.forEach(btn => btn.disabled = true);
  buttons[correctIndex].classList.add("correct");
}

nextBtn.addEventListener("click", () => {
  currentIndex++;
  if (currentIndex < activeQuestions.length) {
    loadQuestion();
  } else {
    showFinalResult();
  }
});

function showFinalResult() {
  showScreen(resultScreen);

  const cat = getCategoryById(selectedCategory);
  leaderboardCategoryName.textContent = `${cat.name}`;

  finalPlayerName.textContent = currentPlayer;
  finalCorrect.textContent = correctAnswers;
  finalWrong.textContent = wrongAnswers;
  finalScore.textContent = score;

  saveScore(selectedCategory, currentPlayer, score);
  updateLeaderboard(selectedCategory);
}

// ==========================================================
// LEADERBOARD (stored per-category in localStorage)
// ==========================================================
function leaderboardKey(catId) {
  return `brainbolt_scores_${catId}`;
}

function saveScore(catId, name, score) {
  let leaderboard = JSON.parse(localStorage.getItem(leaderboardKey(catId))) || [];
  leaderboard.push({ name: name, score: score });

  leaderboard.sort((a, b) => b.score - a.score);
  leaderboard = leaderboard.slice(0, 10);

  localStorage.setItem(leaderboardKey(catId), JSON.stringify(leaderboard));
}

function updateLeaderboard(catId) {
  leaderboardList.innerHTML = "";
  const leaderboard = JSON.parse(localStorage.getItem(leaderboardKey(catId))) || [];

  if (leaderboard.length === 0) {
    const li = document.createElement("li");
    li.classList.add("empty-row");
    li.textContent = "No scores yet — be the first!";
    leaderboardList.appendChild(li);
    return;
  }

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

// ==========================================================
// RESTART / HOME NAVIGATION
// ==========================================================
restartBtn.addEventListener("click", () => {
  // Play again in the SAME category
  usernameInput.value = currentPlayer;
  showScreen(startScreen);
});

homeBtn.addEventListener("click", () => {
  // Back to category selection
  selectedCategory = null;
  showScreen(categoryScreen);
});

// ==========================================================
// INIT
// ==========================================================
renderCategoryGrid();
showScreen(categoryScreen);
