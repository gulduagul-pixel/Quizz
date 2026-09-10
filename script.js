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
// QUESTION BANKS — one array per category (15+ each so a
// 10-question round never repeats a question)
// ==========================================================
const categoryQuestions = {

  general: [
    { question: "Which is the largest country in the world by land area?", options: ["Canada", "China", "Russia", "USA"], answer: 2 },
    { question: "What is the official currency of Japan?", options: ["Yuan", "Yen", "Won", "Ringgit"], answer: 1 },
    { question: "Which country has the largest population in the world?", options: ["India", "China", "USA", "Indonesia"], answer: 0 },
    { question: "Which city is known as the 'City of Love'?", options: ["Rome", "Venice", "Paris", "Vienna"], answer: 2 },
    { question: "Which is the smallest country in the world?", options: ["Monaco", "Malta", "Vatican City", "San Marino"], answer: 2 },
    { question: "In which country is the famous Taj Mahal located?", options: ["Pakistan", "India", "Bangladesh", "Turkey"], answer: 1 },
    { question: "Which desert is the largest hot desert in the world?", options: ["Gobi Desert", "Kalahari Desert", "Sahara Desert", "Thar Desert"], answer: 2 },
    { question: "What is the capital city of Australia?", options: ["Sydney", "Melbourne", "Canberra", "Perth"], answer: 2 },
    { question: "Which is the largest ocean on Earth?", options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"], answer: 2 },
    { question: "What is the capital city of Japan?", options: ["Beijing", "Seoul", "Tokyo", "Bangkok"], answer: 2 },
    { question: "Which country gifted the Statue of Liberty to the USA?", options: ["France", "United Kingdom", "Germany", "Italy"], answer: 0 },
    { question: "Which European country is shaped like a boot?", options: ["Spain", "Greece", "Italy", "Portugal"], answer: 2 },
    { question: "Which city is split between two continents (Europe & Asia)?", options: ["Istanbul", "Cairo", "Moscow", "Athens"], answer: 0 },
    { question: "What is the capital city of Canada?", options: ["Toronto", "Vancouver", "Ottawa", "Montreal"], answer: 2 },
    { question: "Which country is home to the Kangaroo?", options: ["New Zealand", "Australia", "South Africa", "Brazil"], answer: 1 },

    { question: "What is the capital of France?", options: ["Paris", "Berlin", "Madrid", "Rome"], answer: 0 },
    { question: "What is the capital of Germany?", options: ["Berlin", "Vienna", "Munich", "Frankfurt"], answer: 0 },
    { question: "What is the capital of Italy?", options: ["Rome", "Milan", "Naples", "Venice"], answer: 0 },
    { question: "What is the capital of Spain?", options: ["Madrid", "Barcelona", "Seville", "Valencia"], answer: 0 },
    { question: "What is the capital of Russia?", options: ["Moscow", "St. Petersburg", "Kiev", "Minsk"], answer: 0 },
    { question: "What is the capital of China?", options: ["Beijing", "Shanghai", "Hong Kong", "Guangzhou"], answer: 0 },
    { question: "What is the capital of the United Kingdom?", options: ["London", "Manchester", "Liverpool", "Birmingham"], answer: 0 },
    { question: "What is the capital of Pakistan?", options: ["Karachi", "Lahore", "Islamabad", "Peshawar"], answer: 2 },
    { question: "What is the capital of India?", options: ["Mumbai", "New Delhi", "Kolkata", "Bangalore"], answer: 1 },
    { question: "What is the capital of Egypt?", options: ["Cairo", "Alexandria", "Giza", "Luxor"], answer: 0 },
    { question: "What is the capital of Brazil?", options: ["Rio de Janeiro", "São Paulo", "Brasília", "Salvador"], answer: 2 },
    { question: "What is the capital of South Korea?", options: ["Seoul", "Busan", "Incheon", "Daegu"], answer: 0 },
    { question: "What is the capital of Turkey?", options: ["Istanbul", "Ankara", "Izmir", "Antalya"], answer: 1 },
    { question: "What is the capital of Saudi Arabia?", options: ["Jeddah", "Riyadh", "Mecca", "Medina"], answer: 1 },
    { question: "What is the capital of the United Arab Emirates?", options: ["Dubai", "Abu Dhabi", "Sharjah", "Ajman"], answer: 1 },
    { question: "What is the official language of Brazil?", options: ["Spanish", "Portuguese", "French", "Italian"], answer: 1 },
    { question: "What is the national currency of the United Kingdom?", options: ["Euro", "Dollar", "Pound Sterling", "Franc"], answer: 2 },
    { question: "What is the national currency of the USA?", options: ["Dollar", "Peso", "Pound", "Yen"], answer: 0 },
    { question: "Which continent is the Sahara Desert located on?", options: ["Asia", "Africa", "Australia", "South America"], answer: 1 },
    { question: "Which is the longest river in the world?", options: ["Amazon", "Nile", "Yangtze", "Mississippi"], answer: 1 },
    { question: "Which is the largest island in the world?", options: ["Madagascar", "Greenland", "Borneo", "Iceland"], answer: 1 },
    { question: "Which mountain is the tallest in the world?", options: ["K2", "Mount Everest", "Kangchenjunga", "Makalu"], answer: 1 },
    { question: "Which country has the most time zones due to overseas territories?", options: ["Russia", "USA", "France", "China"], answer: 2 },
    { question: "Which country is known as the Land of the Rising Sun?", options: ["China", "Japan", "South Korea", "Thailand"], answer: 1 },
    { question: "Which country is nicknamed the Land of the Free?", options: ["Canada", "UK", "USA", "Australia"], answer: 2 },
    { question: "Which is the longest wall in the world?", options: ["Great Wall of China", "Hadrian's Wall", "Berlin Wall", "Western Wall"], answer: 0 },
    { question: "Which country claims to have the most islands in the world?", options: ["Norway", "Sweden", "Finland", "Indonesia"], answer: 1 },
    { question: "Which African country was never colonized by a European power?", options: ["Kenya", "Ethiopia", "Nigeria", "Ghana"], answer: 1 },
    { question: "Which is the largest continent by area?", options: ["Africa", "Asia", "Europe", "North America"], answer: 1 },
    { question: "Which is the smallest continent?", options: ["Europe", "Antarctica", "Australia", "South America"], answer: 2 },
    { question: "What is the official currency of China?", options: ["Yen", "Won", "Yuan", "Ringgit"], answer: 2 },
    { question: "Which sea is famous for having no coastline at all?", options: ["Red Sea", "Sargasso Sea", "Dead Sea", "Caspian Sea"], answer: 1 },
    { question: "Which country lies in both Europe and Asia?", options: ["Russia", "Germany", "France", "Spain"], answer: 0 },
    { question: "Which is currently the tallest building in the world?", options: ["Shanghai Tower", "Burj Khalifa", "Taipei 101", "Empire State Building"], answer: 1 },
    { question: "In which country is the Great Barrier Reef located?", options: ["Australia", "Indonesia", "Philippines", "Thailand"], answer: 0 },
    { question: "Which country has the longest coastline in the world?", options: ["Canada", "Russia", "Indonesia", "Australia"], answer: 0 },
    { question: "What is the official language of Pakistan?", options: ["Hindi", "Urdu", "Punjabi", "Arabic"], answer: 1 },
    { question: "Which country is known as the 'Land of a Thousand Hills'?", options: ["Rwanda", "Uganda", "Kenya", "Tanzania"], answer: 0 },
    { question: "Which is the driest desert in the world?", options: ["Sahara", "Gobi", "Atacama", "Namib"], answer: 2 },
    { question: "Which country is the largest producer of coffee in the world?", options: ["Colombia", "Vietnam", "Brazil", "Ethiopia"], answer: 2 },
    { question: "What is the national sport of Japan?", options: ["Judo", "Karate", "Sumo Wrestling", "Kendo"], answer: 2 },
    { question: "What is the national animal of China?", options: ["Giant Panda", "Red Panda", "Tiger", "Dragon"], answer: 0 },
    { question: "What is the capital of Bangladesh?", options: ["Dhaka", "Chittagong", "Khulna", "Sylhet"], answer: 0 },
    { question: "What is the capital of Afghanistan?", options: ["Kabul", "Kandahar", "Herat", "Mazar-i-Sharif"], answer: 0 },
    { question: "Which is the coldest continent on Earth?", options: ["Arctic", "Antarctica", "Siberia", "Greenland"], answer: 1 },
    { question: "Which is the largest desert in the world (including cold deserts)?", options: ["Sahara", "Arabian Desert", "Antarctica", "Gobi"], answer: 2 },
    { question: "Which river flows through Egypt?", options: ["Nile", "Congo", "Niger", "Zambezi"], answer: 0 },
    { question: "In which country is Mount Kilimanjaro located?", options: ["Kenya", "Tanzania", "Uganda", "Ethiopia"], answer: 1 },
    { question: "Which is the most populous city in the world?", options: ["Shanghai", "Tokyo", "Delhi", "Mexico City"], answer: 1 },
    { question: "Which country is the world's largest archipelago (island nation)?", options: ["Philippines", "Indonesia", "Japan", "Malaysia"], answer: 1 }
  ],

  science: [
    { question: "Which planet is known as the Red Planet?", options: ["Venus", "Mars", "Jupiter", "Saturn"], answer: 1 },
    { question: "What is the hardest natural substance on Earth?", options: ["Gold", "Iron", "Diamond", "Platinum"], answer: 2 },
    { question: "What chemical element has the symbol 'O'?", options: ["Gold", "Oxygen", "Osmium", "Zinc"], answer: 1 },
    { question: "Which gas do plants absorb for photosynthesis?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"], answer: 1 },
    { question: "What is the speed of light in a vacuum?", options: ["300,000 km/s", "150,000 km/s", "1,000,000 km/s", "30,000 km/s"], answer: 0 },
    { question: "Which planet is known as the 'Morning Star'?", options: ["Mars", "Venus", "Mercury", "Jupiter"], answer: 1 },
    { question: "What is the solar system's largest planet?", options: ["Saturn", "Jupiter", "Neptune", "Uranus"], answer: 1 },
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

    { question: "What is the chemical symbol for gold?", options: ["Ag", "Au", "Gd", "Go"], answer: 1 },
    { question: "What is the chemical symbol for iron?", options: ["Fe", "Ir", "In", "Fr"], answer: 0 },
    { question: "What is the chemical symbol for sodium?", options: ["So", "Sd", "Na", "Nu"], answer: 2 },
    { question: "What is the chemical symbol for potassium?", options: ["Po", "K", "Pt", "Ps"], answer: 1 },
    { question: "What is the chemical symbol for silver?", options: ["Si", "Sv", "Ag", "Sr"], answer: 2 },
    { question: "Which planet currently has the most known moons?", options: ["Jupiter", "Saturn", "Uranus", "Neptune"], answer: 1 },
    { question: "Which planet is closest to the Sun?", options: ["Venus", "Earth", "Mercury", "Mars"], answer: 2 },
    { question: "Which planet is farthest from the Sun?", options: ["Uranus", "Neptune", "Pluto", "Saturn"], answer: 1 },
    { question: "What is the freezing point of water in Celsius?", options: ["0°C", "10°C", "-10°C", "5°C"], answer: 0 },
    { question: "What is the boiling point of water in Celsius?", options: ["90°C", "100°C", "110°C", "120°C"], answer: 1 },
    { question: "What is known as the 'powerhouse of the cell'?", options: ["Nucleus", "Mitochondria", "Ribosome", "Cytoplasm"], answer: 1 },
    { question: "What gas do humans mainly exhale?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"], answer: 1 },
    { question: "What is the study of living organisms called?", options: ["Chemistry", "Physics", "Biology", "Geology"], answer: 2 },
    { question: "What is the study of celestial objects called?", options: ["Astrology", "Astronomy", "Geology", "Meteorology"], answer: 1 },
    { question: "What is the study of earthquakes called?", options: ["Seismology", "Volcanology", "Geology", "Meteorology"], answer: 0 },
    { question: "What is the chemical formula for water?", options: ["H2O", "CO2", "O2", "H2O2"], answer: 0 },
    { question: "What is the chemical formula for table salt?", options: ["NaCl", "KCl", "CaCl2", "NaOH"], answer: 0 },
    { question: "How many planets are there in our solar system?", options: ["7", "8", "9", "10"], answer: 1 },
    { question: "Which planet rotates in the opposite direction to most others?", options: ["Venus", "Mars", "Earth", "Mercury"], answer: 0 },
    { question: "What is the process by which plants make their own food called?", options: ["Respiration", "Photosynthesis", "Digestion", "Transpiration"], answer: 1 },
    { question: "Which gland is known as the 'master gland' of the body?", options: ["Thyroid", "Pituitary Gland", "Adrenal", "Pancreas"], answer: 1 },
    { question: "Which organ pumps blood throughout the body?", options: ["Lungs", "Liver", "Heart", "Kidney"], answer: 2 },
    { question: "What is the normal human body temperature in Celsius?", options: ["35°C", "37°C", "39°C", "40°C"], answer: 1 },
    { question: "Which type of blood cells mainly fight infection?", options: ["Red Blood Cells", "White Blood Cells", "Platelets", "Plasma"], answer: 1 },
    { question: "What is the basic unit of life called?", options: ["Atom", "Molecule", "Cell", "Tissue"], answer: 2 },
    { question: "What does DNA stand for?", options: ["Deoxyribonucleic Acid", "Dioxyribo Nucleic Acid", "Deoxyribose Nucleic Acid", "Denatured Nucleic Acid"], answer: 0 },
    { question: "Who proposed the theory of relativity?", options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Stephen Hawking"], answer: 1 },
    { question: "Who is credited with discovering the law of gravity?", options: ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Nikola Tesla"], answer: 1 },
    { question: "Who discovered penicillin?", options: ["Louis Pasteur", "Alexander Fleming", "Marie Curie", "Charles Darwin"], answer: 1 },
    { question: "Who is often called the 'father of modern physics'?", options: ["Isaac Newton", "Albert Einstein", "Max Planck", "Niels Bohr"], answer: 1 },
    { question: "What natural phenomenon is caused by the Earth's rotation?", options: ["Earth's Rotation causes Day and Night", "Seasons", "Tides", "Eclipses"], answer: 0 },
    { question: "What is the unit of electrical resistance?", options: ["Volt", "Ampere", "Ohm", "Watt"], answer: 2 },
    { question: "What is the unit of electric current?", options: ["Volt", "Ampere", "Ohm", "Coulomb"], answer: 1 },
    { question: "What is the unit of force?", options: ["Joule", "Newton", "Pascal", "Watt"], answer: 1 },
    { question: "What is the unit of energy?", options: ["Joule", "Newton", "Watt", "Ohm"], answer: 0 },
    { question: "Which layer of the Earth lies molten just below the crust?", options: ["Core", "Mantle", "Crust", "Lithosphere"], answer: 1 },
    { question: "Which is the most abundant metal in the Earth's crust?", options: ["Iron", "Aluminum", "Copper", "Zinc"], answer: 1 },
    { question: "What is the pH value of pure water?", options: ["5", "6", "7", "8"], answer: 2 },
    { question: "Which subatomic particle carries a negative charge?", options: ["Proton", "Neutron", "Electron", "Nucleus"], answer: 2 },
    { question: "Which subatomic particle carries a positive charge?", options: ["Proton", "Neutron", "Electron", "Ion"], answer: 0 },
    { question: "What is the Earth's only natural satellite called?", options: ["Sun", "Moon", "Mars", "Star"], answer: 1 },
    { question: "Which planet is famous for its prominent rings?", options: ["Jupiter", "Saturn", "Uranus", "Neptune"], answer: 1 },
    { question: "What is an animal that eats only plants called?", options: ["Carnivore", "Herbivore", "Omnivore", "Insectivore"], answer: 1 },
    { question: "What is an animal that eats both plants and meat called?", options: ["Herbivore", "Carnivore", "Omnivore", "Scavenger"], answer: 2 },
    { question: "What is the process of a caterpillar turning into a butterfly called?", options: ["Photosynthesis", "Metamorphosis", "Pollination", "Germination"], answer: 1 },
    { question: "A deficiency of which vitamin causes scurvy?", options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"], answer: 2 },
    { question: "Which gas fuels the nuclear fusion inside the Sun?", options: ["Helium", "Hydrogen", "Oxygen", "Nitrogen"], answer: 1 },
    { question: "What is the path an object takes as it orbits another body in space called?", options: ["Orbit", "Rotation", "Revolution", "Axis"], answer: 0 },
    { question: "Which instrument is used to measure atmospheric pressure?", options: ["Thermometer", "Barometer", "Hygrometer", "Anemometer"], answer: 1 },
    { question: "Which instrument is used to measure temperature?", options: ["Barometer", "Thermometer", "Anemometer", "Hygrometer"], answer: 1 }
  ],

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

    { question: "What does 'AI' stand for?", options: ["Automated Intelligence", "Artificial Intelligence", "Advanced Interface", "Applied Informatics"], answer: 1 },
    { question: "What does 'URL' stand for?", options: ["Uniform Resource Locator", "Universal Reference Link", "Unified Resource Link", "Uniform Reference Locator"], answer: 0 },
    { question: "What does 'HTML' stand for?", options: ["HyperText Markup Language", "HighText Machine Language", "HyperText Making Language", "HyperText Modern Language"], answer: 0 },
    { question: "What does 'GIF' stand for?", options: ["Graphics Interchange Format", "Graphic Image File", "General Image Format", "Graphics Internet File"], answer: 0 },
    { question: "What does 'Wi-Fi' commonly refer to?", options: ["Wireless Fidelity", "Wireless Finder", "Wide Fiber", "Wireless File"], answer: 0 },
    { question: "Who is the founder of Microsoft?", options: ["Steve Jobs", "Bill Gates", "Mark Zuckerberg", "Jeff Bezos"], answer: 1 },
    { question: "Who is the founder of Facebook?", options: ["Bill Gates", "Jack Dorsey", "Mark Zuckerberg", "Elon Musk"], answer: 2 },
    { question: "Who is the founder of Amazon?", options: ["Jeff Bezos", "Elon Musk", "Bill Gates", "Larry Page"], answer: 0 },
    { question: "Who is the founder of Tesla and SpaceX?", options: ["Jeff Bezos", "Elon Musk", "Bill Gates", "Tim Cook"], answer: 1 },
    { question: "What does 'OS' stand for in computing?", options: ["Operating System", "Online Server", "Output System", "Optical Storage"], answer: 0 },
    { question: "Which company developed the Android operating system?", options: ["Apple", "Google", "Microsoft", "Samsung"], answer: 1 },
    { question: "Which company developed the Windows operating system?", options: ["Apple", "Microsoft", "Google", "IBM"], answer: 1 },
    { question: "What does 'IP' stand for in networking?", options: ["Internet Protocol", "Internal Process", "Internet Provider", "Information Protocol"], answer: 0 },
    { question: "What is the full form of 'ATM'?", options: ["Automated Teller Machine", "Automatic Transfer Machine", "Authorized Teller Machine", "Automated Transaction Machine"], answer: 0 },
    { question: "What does 'LED' stand for?", options: ["Light Emitting Diode", "Low Energy Device", "Light Electric Display", "Long Energy Diode"], answer: 0 },
    { question: "What does Bluetooth technology mainly enable?", options: ["Wireless data transfer over short distances", "High-speed internet access", "Data storage", "Video streaming"], answer: 0 },
    { question: "What is the name of Apple's voice assistant?", options: ["Alexa", "Siri", "Cortana", "Bixby"], answer: 1 },
    { question: "What is the name of Amazon's voice assistant?", options: ["Siri", "Alexa", "Google Assistant", "Cortana"], answer: 1 },
    { question: "What is Twitter now officially called?", options: ["X", "Threads", "Meta", "Bluesky"], answer: 0 },
    { question: "Which company owns YouTube?", options: ["Meta", "Google", "Microsoft", "Amazon"], answer: 1 },
    { question: "Which company owns Instagram and WhatsApp?", options: ["Google", "Meta", "Microsoft", "Twitter"], answer: 1 },
    { question: "What does 'VPN' stand for?", options: ["Virtual Private Network", "Verified Public Network", "Virtual Public Network", "Verified Private Node"], answer: 0 },
    { question: "What is unwanted or malicious software commonly called?", options: ["Malware", "Firmware", "Freeware", "Shareware"], answer: 0 },
    { question: "What is unsolicited bulk email commonly called?", options: ["Spam", "Junk", "Trash", "Scrap"], answer: 0 },
    { question: "What does 'FAQ' stand for?", options: ["Frequently Asked Questions", "Fast Answer Queries", "Frequent Answer Question", "Formal Asked Query"], answer: 0 },
    { question: "Who is credited with inventing the computer mouse?", options: ["Douglas Engelbart", "Steve Jobs", "Alan Turing", "Tim Berners-Lee"], answer: 0 },
    { question: "Which programming language is famous for using a snake as its logo?", options: ["Java", "Python", "Ruby", "C++"], answer: 1 },
    { question: "What does 'API' stand for?", options: ["Application Programming Interface", "Automated Program Interaction", "Applied Programming Instruction", "Application Process Integration"], answer: 0 },
    { question: "What is Google's cloud file storage service called?", options: ["Google Drive", "iCloud", "OneDrive", "Dropbox"], answer: 0 },
    { question: "In which year was Facebook founded?", options: ["2002", "2004", "2006", "2008"], answer: 1 },
    { question: "What does 'ROM' stand for?", options: ["Read Only Memory", "Random Output Memory", "Read Output Module", "Rapid Only Memory"], answer: 0 },
    { question: "Who are the co-founders of Google?", options: ["Larry Page & Sergey Brin", "Bill Gates & Paul Allen", "Steve Jobs & Steve Wozniak", "Jeff Bezos & Elon Musk"], answer: 0 },
    { question: "What does '5G' refer to in mobile networks?", options: ["Fifth generation mobile network technology", "Fifth gigabyte of data", "A type of Wi-Fi router", "A type of processor"], answer: 0 },
    { question: "What is the main purpose of a firewall?", options: ["To block unauthorized network access", "To speed up the internet", "To store passwords", "To create backups"], answer: 0 },
    { question: "What does 'JPEG' stand for?", options: ["Joint Photographic Experts Group", "Java Picture Encoding Group", "Joint Picture Export Group", "Java Photo Expert Group"], answer: 0 },
    { question: "What does the file format 'MP3' commonly refer to?", options: ["A video file format", "An audio file format", "An image file format", "A document file format"], answer: 1 },
    { question: "Which company created the PlayStation gaming console?", options: ["Microsoft", "Sony", "Nintendo", "Sega"], answer: 1 },
    { question: "Which company created the Xbox gaming console?", options: ["Sony", "Microsoft", "Nintendo", "Sega"], answer: 1 },
    { question: "What term describes a computer program that replicates itself and spreads?", options: ["Bug", "Virus", "Patch", "Cookie"], answer: 1 },
    { question: "What does 'GB' stand for in data storage?", options: ["Gigabyte", "Global Byte", "Giga Bit", "General Byte"], answer: 0 },
    { question: "The binary number system is based on which digits?", options: ["0s and 1s", "1s and 2s", "0s to 9s", "A to Z"], answer: 0 },
    { question: "What does 'QR' in QR code stand for?", options: ["Quick Response", "Quality Rating", "Query Result", "Quick Registration"], answer: 0 },
    { question: "Which company developed the ChatGPT AI model?", options: ["Google", "OpenAI", "Microsoft", "Meta"], answer: 1 },
    { question: "Which company developed the Claude AI model?", options: ["OpenAI", "Google", "Anthropic", "Meta"], answer: 2 },
    { question: "What is the visible part of a website that users interact with called?", options: ["Backend", "User Interface (UI)", "Server", "Database"], answer: 1 },
    { question: "What does 'SaaS' stand for?", options: ["Software as a Service", "System as a Server", "Software Access Service", "Server as a Software"], answer: 0 },
    { question: "Which code-sharing platform is owned by Microsoft?", options: ["GitLab", "GitHub", "Bitbucket", "SourceForge"], answer: 1 },
    { question: "What does a Wi-Fi router primarily do?", options: ["Distributes internet connection wirelessly", "Stores files", "Charges devices", "Blocks viruses"], answer: 0 },
    { question: "What is the term for storing data online instead of on a local device?", options: ["Cloud storage", "Local storage", "Disk storage", "Cache storage"], answer: 0 },
    { question: "What does 'CC' stand for when sending an email?", options: ["Carbon Copy", "Copy Content", "Chat Contact", "Cloud Copy"], answer: 0 }
  ],

  animals: [
    { question: "Which animal has the largest brain in the world?", options: ["Elephant", "Blue Whale", "Sperm Whale", "Dolphin"], answer: 2 },
    { question: "How many hearts does an Octopus have?", options: ["1", "2", "3", "4"], answer: 2 },
    { question: "Which creature is known to never sleep during its lifetime?", options: ["Bullfrog", "Ant", "Jellyfish", "Shark"], answer: 0 },
    { question: "What is the fastest land animal in the world?", options: ["Lion", "Cheetah", "Horse", "Leopard"], answer: 1 },
    { question: "Which mammal is capable of true flight?", options: ["Flying Squirrel", "Bat", "Ostrich", "Sugar Glider"], answer: 1 },
    { question: "Which bird can mimic human speech?", options: ["Eagle", "Parrot", "Peacock", "Penguin"], answer: 1 },
    { question: "Which continent has no native ant species?", options: ["Australia", "Europe", "Antarctica", "North America"], answer: 2 },
    { question: "Which animal is known as the 'Ship of the Desert'?", options: ["Horse", "Camel", "Donkey", "Goat"], answer: 1 },
    { question: "What is a group of lions called?", options: ["Herd", "Pack", "Pride", "Flock"], answer: 2 },
    { question: "Which animal can change its color to blend with its surroundings?", options: ["Chameleon", "Iguana", "Gecko", "Frog"], answer: 0 },
    { question: "What is the largest land animal in the world?", options: ["Rhino", "Hippopotamus", "African Elephant", "Giraffe"], answer: 2 },
    { question: "Which bird is the fastest animal in the world during a dive?", options: ["Eagle", "Falcon", "Peregrine Falcon", "Hawk"], answer: 2 },
    { question: "How many legs does a spider have?", options: ["6", "8", "10", "12"], answer: 1 },
    { question: "What is a baby kangaroo called?", options: ["Cub", "Kit", "Joey", "Pup"], answer: 2 },
    { question: "Which is the longest-living land animal?", options: ["Elephant", "Giant Tortoise", "Parrot", "Crocodile"], answer: 1 },

    { question: "What is the largest species of shark in the world?", options: ["Great White Shark", "Whale Shark", "Hammerhead Shark", "Tiger Shark"], answer: 1 },
    { question: "What is the tallest animal in the world?", options: ["Elephant", "Giraffe", "Camel", "Ostrich"], answer: 1 },
    { question: "Which animal is known as the 'King of the Jungle'?", options: ["Tiger", "Lion", "Leopard", "Cheetah"], answer: 1 },
    { question: "What is a baby dog called?", options: ["Kitten", "Puppy", "Cub", "Pup"], answer: 1 },
    { question: "What is a baby cat called?", options: ["Puppy", "Kitten", "Cub", "Kid"], answer: 1 },
    { question: "What is a baby cow called?", options: ["Foal", "Lamb", "Calf", "Kid"], answer: 2 },
    { question: "What is a baby sheep called?", options: ["Calf", "Lamb", "Kid", "Foal"], answer: 1 },
    { question: "What is a baby horse called?", options: ["Foal", "Calf", "Colt", "Fawn"], answer: 0 },
    { question: "What is a group of wolves called?", options: ["Herd", "Pack", "Pride", "Flock"], answer: 1 },
    { question: "What is a group of fish called?", options: ["Herd", "School", "Pod", "Flock"], answer: 1 },
    { question: "What is a group of crows called?", options: ["Flock", "Murder", "Pack", "Herd"], answer: 1 },
    { question: "Which animal is famous for its black and white stripes?", options: ["Zebra", "Tiger", "Panda", "Skunk"], answer: 0 },
    { question: "Which bird is famous for laying its eggs in other birds' nests?", options: ["Cuckoo", "Sparrow", "Pigeon", "Crow"], answer: 0 },
    { question: "Which insect is best known for producing honey?", options: ["Wasp", "Honeybee", "Ant", "Beetle"], answer: 1 },
    { question: "Which is the largest bird in the world by weight?", options: ["Eagle", "Ostrich", "Emu", "Peacock"], answer: 1 },
    { question: "Which sea creature has eight arms and can squirt ink?", options: ["Octopus", "Squid", "Jellyfish", "Starfish"], answer: 0 },
    { question: "On which continent are penguins mostly found natively in the wild?", options: ["Arctic", "Antarctica", "Africa", "Australia"], answer: 1 },
    { question: "Which animal is famous for being able to regenerate its lost limbs?", options: ["Starfish", "Crab", "Lobster", "Shrimp"], answer: 0 },
    { question: "What is a group of elephants called?", options: ["Herd", "Pack", "Pride", "Troop"], answer: 0 },
    { question: "Which of these animals has an exceptionally strong sense of smell?", options: ["Cat", "Dog", "Horse", "Rabbit"], answer: 1 },
    { question: "Which bird is the national bird of the USA?", options: ["Bald Eagle", "Turkey", "Hawk", "Falcon"], answer: 0 },
    { question: "Which is the fastest fish in the ocean?", options: ["Tuna", "Sailfish", "Shark", "Marlin"], answer: 1 },
    { question: "Which reptile is famous for regrowing its tail after losing it?", options: ["Lizard", "Snake", "Turtle", "Crocodile"], answer: 0 },
    { question: "Which is the largest living reptile in the world?", options: ["Komodo Dragon", "Saltwater Crocodile", "Green Anaconda", "King Cobra"], answer: 1 },
    { question: "Which animal is known to sleep while standing up?", options: ["Horse", "Cow", "Pig", "Dog"], answer: 0 },
    { question: "Which is considered the loudest animal on Earth?", options: ["Blue Whale", "Lion", "Elephant", "Howler Monkey"], answer: 0 },
    { question: "Which animal has a tongue longer than its own body?", options: ["Chameleon", "Frog", "Anteater", "Lizard"], answer: 0 },
    { question: "Which is the slowest-moving mammal on land?", options: ["Sloth", "Snail", "Turtle", "Koala"], answer: 0 },
    { question: "What is a group of owls called?", options: ["Parliament", "Flock", "Wisdom", "Colony"], answer: 0 },
    { question: "Which large cat has orange fur with black stripes?", options: ["Lion", "Tiger", "Leopard", "Jaguar"], answer: 1 },
    { question: "Which gentle aquatic mammal is often called a 'sea cow'?", options: ["Manatee", "Dolphin", "Seal", "Otter"], answer: 0 },
    { question: "Which animal is famous for playing dead when it feels threatened?", options: ["Opossum", "Raccoon", "Skunk", "Armadillo"], answer: 0 },
    { question: "Which bird is widely known as a symbol of peace?", options: ["Dove", "Sparrow", "Swan", "Pigeon"], answer: 0 },
    { question: "Which egg-laying mammal is native to Australia?", options: ["Platypus", "Kangaroo", "Koala", "Echidna"], answer: 0 },
    { question: "Which insect can lift objects many times heavier than its own body?", options: ["Ant", "Bee", "Beetle", "Grasshopper"], answer: 0 },
    { question: "Which animal is famously believed to 'never forget'?", options: ["Elephant", "Dolphin", "Crow", "Octopus"], answer: 0 },
    { question: "Which is the only marsupial found natively in North America?", options: ["Opossum", "Kangaroo", "Koala", "Wombat"], answer: 0 },
    { question: "What is a baby goat called?", options: ["Kid", "Foal", "Calf", "Fawn"], answer: 0 },
    { question: "What is a baby deer called?", options: ["Fawn", "Kid", "Calf", "Cub"], answer: 0 },
    { question: "Which fish is capable of giving a powerful electric shock?", options: ["Electric Eel", "Catfish", "Stingray", "Piranha"], answer: 0 },
    { question: "Which animal is famous for building dams in rivers and streams?", options: ["Beaver", "Otter", "Muskrat", "Groundhog"], answer: 0 },
    { question: "What color is a polar bear's skin beneath its white fur?", options: ["White", "Black", "Pink", "Grey"], answer: 1 },
    { question: "Which bird is famous for its colorful tail feathers used in courtship display?", options: ["Peacock", "Parrot", "Pheasant", "Turkey"], answer: 0 },
    { question: "Which big cat is unable to fully retract its claws?", options: ["Lion", "Tiger", "Cheetah", "Leopard"], answer: 2 },
    { question: "Which small reptile is famous for its ability to run across the surface of water?", options: ["Basilisk Lizard", "Water Strider", "Gecko", "Frog"], answer: 0 },
    { question: "Which mammal is known to have one of the longest lifespans, living up to 200 years?", options: ["Bowhead Whale", "Blue Whale", "Elephant", "Tortoise"], answer: 0 },
    { question: "Which insect has one of the shortest adult lifespans, living for about a day?", options: ["Mayfly", "Housefly", "Mosquito", "Dragonfly"], answer: 0 },
    { question: "Which animal can survive the longest without drinking water?", options: ["Camel", "Horse", "Cow", "Goat"], answer: 0 },
    { question: "Which bird lays the largest egg of any living bird species?", options: ["Ostrich", "Eagle", "Swan", "Emu"], answer: 0 },
    { question: "Which land mammal is known for having the thickest skin?", options: ["Elephant", "Rhino", "Hippopotamus", "Buffalo"], answer: 1 }
  ],

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

    { question: "Who is credited with discovering America in 1492?", options: ["Christopher Columbus", "Vasco da Gama", "Ferdinand Magellan", "Marco Polo"], answer: 0 },
    { question: "Which empire was ruled by Genghis Khan?", options: ["Ottoman Empire", "Mongol Empire", "Roman Empire", "Persian Empire"], answer: 1 },
    { question: "Who was the first President of the United States?", options: ["Abraham Lincoln", "George Washington", "Thomas Jefferson", "John Adams"], answer: 1 },
    { question: "Who wrote the American Declaration of Independence?", options: ["George Washington", "Thomas Jefferson", "Benjamin Franklin", "John Adams"], answer: 1 },
    { question: "In which year did the Berlin Wall fall?", options: ["1985", "1987", "1989", "1991"], answer: 2 },
    { question: "Which country was the first to reach the South Pole?", options: ["UK", "Norway", "USA", "France"], answer: 1 },
    { question: "Who was the leader of Nazi Germany during World War II?", options: ["Adolf Hitler", "Benito Mussolini", "Joseph Stalin", "Winston Churchill"], answer: 0 },
    { question: "In which country were the ancient Olympic Games first held?", options: ["Rome", "Greece", "Egypt", "Persia"], answer: 1 },
    { question: "Who painted the ceiling of the Sistine Chapel?", options: ["Leonardo da Vinci", "Michelangelo", "Raphael", "Donatello"], answer: 1 },
    { question: "Which ancient civilization is credited with inventing writing (cuneiform)?", options: ["Egyptians", "Sumerians", "Greeks", "Romans"], answer: 1 },
    { question: "Who was the famous queen of ancient Egypt known for her alliance with Rome?", options: ["Nefertiti", "Cleopatra", "Hatshepsut", "Isis"], answer: 1 },
    { question: "Which explorer led the first expedition to circumnavigate the globe?", options: ["Christopher Columbus", "Ferdinand Magellan", "Vasco da Gama", "James Cook"], answer: 1 },
    { question: "Who was the British Prime Minister during most of World War II?", options: ["Winston Churchill", "Neville Chamberlain", "Clement Attlee", "Anthony Eden"], answer: 0 },
    { question: "Which historic document was signed in 1215 to limit the power of English kings?", options: ["Magna Carta", "Bill of Rights", "Treaty of Versailles", "Declaration of Independence"], answer: 0 },
    { question: "Which war was fought between the North and South regions of the USA?", options: ["American Revolution", "American Civil War", "War of 1812", "Cold War"], answer: 1 },
    { question: "Which ancient wonder of the world was located in Babylon?", options: ["Hanging Gardens of Babylon", "Colossus of Rhodes", "Lighthouse of Alexandria", "Temple of Artemis"], answer: 0 },
    { question: "Which country did Nelson Mandela become president of?", options: ["South Africa", "Zimbabwe", "Kenya", "Nigeria"], answer: 0 },
    { question: "Which ancient civilization built the city of Chichen Itza?", options: ["Aztec", "Maya", "Inca", "Olmec"], answer: 1 },
    { question: "In which year did India gain independence from British rule?", options: ["1945", "1947", "1950", "1952"], answer: 1 },
    { question: "In which year did Pakistan gain independence?", options: ["1945", "1947", "1950", "1971"], answer: 1 },
    { question: "Which country launched Sputnik, the first artificial satellite?", options: ["USA", "Soviet Union", "China", "UK"], answer: 1 },
    { question: "Which explorer is credited as the first European to reach India by sea?", options: ["Vasco da Gama", "Christopher Columbus", "Ferdinand Magellan", "James Cook"], answer: 0 },
    { question: "Who was known as the 'Maid of Orléans' in French history?", options: ["Joan of Arc", "Marie Antoinette", "Catherine de Medici", "Eleanor of Aquitaine"], answer: 0 },
    { question: "Which ancient empire was ruled by Julius Caesar?", options: ["Roman Empire", "Greek Empire", "Persian Empire", "Egyptian Empire"], answer: 0 },
    { question: "In which city was President John F. Kennedy assassinated?", options: ["Dallas", "Houston", "Washington D.C.", "Chicago"], answer: 0 },
    { question: "Which country was physically divided by the Berlin Wall?", options: ["Germany", "Poland", "Austria", "Hungary"], answer: 0 },
    { question: "Which ancient Greek philosopher taught Alexander the Great?", options: ["Plato", "Aristotle", "Socrates", "Pythagoras"], answer: 1 },
    { question: "Which ancient country was ruled by the Pharaohs?", options: ["Ancient Egypt", "Ancient Greece", "Mesopotamia", "Persia"], answer: 0 },
    { question: "Which conflict is historically known as 'The Great War'?", options: ["World War I", "World War II", "Cold War", "Korean War"], answer: 0 },
    { question: "Who led the Soviet Union during the Cuban Missile Crisis?", options: ["Joseph Stalin", "Nikita Khrushchev", "Leonid Brezhnev", "Vladimir Lenin"], answer: 1 },
    { question: "The Vikings originally came from which region?", options: ["Scandinavia", "Germany", "Britain", "Russia"], answer: 0 },
    { question: "Which US president issued the Emancipation Proclamation, ending slavery?", options: ["Abraham Lincoln", "George Washington", "Theodore Roosevelt", "Andrew Jackson"], answer: 0 },
    { question: "Which country's flag features a red circle known as the 'Rising Sun'?", options: ["Japan", "China", "South Korea", "Vietnam"], answer: 0 },
    { question: "Which ancient civilization is credited with inventing the wheel?", options: ["Sumerians", "Egyptians", "Greeks", "Romans"], answer: 0 },
    { question: "Who founded the Mughal Empire in India?", options: ["Akbar", "Babur", "Humayun", "Shah Jahan"], answer: 1 },
    { question: "Which Mughal emperor built the Taj Mahal?", options: ["Akbar", "Babur", "Shah Jahan", "Aurangzeb"], answer: 2 },
    { question: "Which ship carried the Pilgrims to America in 1620?", options: ["Mayflower", "Santa Maria", "Endeavour", "Beagle"], answer: 0 },
    { question: "Which country was formerly known as Siam?", options: ["Thailand", "Vietnam", "Cambodia", "Laos"], answer: 0 },
    { question: "Who led the Indian independence movement through non-violence?", options: ["Jawaharlal Nehru", "Mahatma Gandhi", "Subhas Chandra Bose", "Sardar Patel"], answer: 1 },
    { question: "Who is regarded as the founder of Pakistan (Quaid-e-Azam)?", options: ["Liaquat Ali Khan", "Muhammad Ali Jinnah", "Allama Iqbal", "Ayub Khan"], answer: 1 },
    { question: "In which century did the Renaissance begin?", options: ["12th century", "14th century", "16th century", "18th century"], answer: 1 },
    { question: "Which country was the first to grant women the right to vote?", options: ["New Zealand", "USA", "UK", "France"], answer: 0 },
    { question: "Which empire was ruled by Suleiman the Magnificent?", options: ["Ottoman Empire", "Persian Empire", "Mughal Empire", "Byzantine Empire"], answer: 0 },
    { question: "Which city served as the capital of the Byzantine Empire?", options: ["Constantinople", "Rome", "Athens", "Alexandria"], answer: 0 },
    { question: "In which year did the French Revolution begin?", options: ["1776", "1789", "1799", "1804"], answer: 1 },
    { question: "Who was the first emperor to unify China?", options: ["Qin Shi Huang", "Kublai Khan", "Sun Yat-sen", "Mao Zedong"], answer: 0 },
    { question: "Which war officially ended with the Treaty of Versailles?", options: ["World War I", "World War II", "Napoleonic Wars", "Franco-Prussian War"], answer: 0 },
    { question: "Which explorer is commonly credited with being first to reach the North Pole?", options: ["Robert Peary", "Roald Amundsen", "Ernest Shackleton", "James Cook"], answer: 0 },
    { question: "Which ancient people built the city of Petra in modern-day Jordan?", options: ["Nabataeans", "Egyptians", "Persians", "Phoenicians"], answer: 0 },
    { question: "Who was the longest-reigning monarch in British history?", options: ["Queen Victoria", "Queen Elizabeth II", "King George III", "King Henry VIII"], answer: 1 }
  ],

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

    { question: "How many players are in a volleyball team on court?", options: ["5", "6", "7", "8"], answer: 1 },
    { question: "In which sport is the term 'love' used for a zero score?", options: ["Tennis", "Badminton", "Squash", "Table Tennis"], answer: 0 },
    { question: "How many holes are there in a standard round of golf?", options: ["9", "18", "27", "36"], answer: 1 },
    { question: "In which country did the sport of Judo originate?", options: ["China", "Japan", "Korea", "Thailand"], answer: 1 },
    { question: "Which country hosted the 2016 Summer Olympics?", options: ["China", "UK", "Brazil", "Japan"], answer: 2 },
    { question: "Which country hosted the 2022 FIFA World Cup?", options: ["Russia", "Qatar", "USA", "France"], answer: 1 },
    { question: "How many players are on a soccer team on the field for one side?", options: ["9", "10", "11", "12"], answer: 2 },
    { question: "What is the maximum score possible in a single frame of ten-pin bowling?", options: ["10", "20", "30", "40"], answer: 2 },
    { question: "In cricket, what is it called when a bowler takes three wickets on three consecutive balls?", options: ["Hat-trick", "Century", "Duck", "Maiden"], answer: 0 },
    { question: "Which sport uses a shuttlecock?", options: ["Tennis", "Badminton", "Squash", "Table Tennis"], answer: 1 },
    { question: "How many players are on a field hockey team per side?", options: ["9", "10", "11", "12"], answer: 2 },
    { question: "Which belt color represents the highest rank in Karate?", options: ["White", "Brown", "Black", "Red"], answer: 2 },
    { question: "How many rounds are typically in a professional championship boxing match?", options: ["8", "10", "12", "15"], answer: 2 },
    { question: "Which country is credited with inventing table tennis?", options: ["China", "England", "Japan", "USA"], answer: 1 },
    { question: "What is the national sport of Pakistan?", options: ["Cricket", "Field Hockey", "Squash", "Kabaddi"], answer: 1 },
    { question: "What has a face and two hands but no arms or legs?", options: ["A Clock", "A Doll", "A Robot", "A Watch"], answer: 0 },
    { question: "The more you take, the more you leave behind. What am I?", options: ["Footsteps", "Time", "Memories", "Shadows"], answer: 0 },
    { question: "What can travel around the world while staying in a corner?", options: ["A Stamp", "A Coin", "A Letter", "A Map"], answer: 0 },
    { question: "I have keys but no locks, and space but no room. What am I?", options: ["A Keyboard", "A Piano", "A Map", "A House"], answer: 0 },
    { question: "What comes once in a minute, twice in a moment, but never in a thousand years?", options: ["The letter M", "Time", "A Second", "Nothing"], answer: 0 },
    { question: "I speak without a mouth and hear without ears. What am I?", options: ["An Echo", "A Ghost", "A Shadow", "The Wind"], answer: 0 },
    { question: "In which sport would you perform a 'birdie' or 'eagle'?", options: ["Golf", "Archery", "Badminton", "Tennis"], answer: 0 },
    { question: "Which country is credited with inventing the sport of Kabaddi?", options: ["India", "Pakistan", "Bangladesh", "Sri Lanka"], answer: 0 },
    { question: "What is the maximum break possible in a single visit in snooker?", options: ["100", "120", "147", "155"], answer: 2 },
    { question: "Which sport is played at Wimbledon?", options: ["Tennis", "Badminton", "Cricket", "Golf"], answer: 0 },
    { question: "In American Football, how many points is a touchdown worth?", options: ["3", "6", "7", "10"], answer: 1 },
    { question: "Which board game uses the term 'checkmate'?", options: ["Chess", "Checkers", "Backgammon", "Go"], answer: 0 },
    { question: "What is the standard distance of a marathon race?", options: ["26.2 miles", "20 miles", "30 miles", "24 miles"], answer: 0 },
    { question: "Which country won the first-ever FIFA World Cup in 1930?", options: ["Brazil", "Argentina", "Uruguay", "Italy"], answer: 2 },
    { question: "In which sport do players use a mallet to hit a ball while on horseback?", options: ["Polo", "Croquet", "Hockey", "Golf"], answer: 0 },
    { question: "How many players are on a rugby union team?", options: ["11", "13", "15", "17"], answer: 2 },
    { question: "What is a score of zero in cricket called?", options: ["Duck", "Zero", "Blank", "Nil"], answer: 0 },
    { question: "Which sport awards the winner a Green Jacket at the Masters Tournament?", options: ["Golf", "Tennis", "Boxing", "Athletics"], answer: 0 },
    { question: "In which sport is the 'Ashes' trophy contested between England and Australia?", options: ["Cricket", "Rugby", "Football", "Hockey"], answer: 0 },
    { question: "What gets bigger the more you take away from it?", options: ["A Hole", "A Balloon", "A Shadow", "A River"], answer: 0 },
    { question: "Which sport uses the terms 'strike' and 'spare'?", options: ["Bowling", "Cricket", "Baseball", "Golf"], answer: 0 },
    { question: "How many players are on a baseball team on the field?", options: ["8", "9", "10", "11"], answer: 1 },
    { question: "Which sport is Michael Jordan famous for?", options: ["Basketball", "Baseball", "Football", "Tennis"], answer: 0 },
    { question: "Which sport is Serena Williams famous for?", options: ["Tennis", "Golf", "Badminton", "Squash"], answer: 0 },
    { question: "Which sport is Usain Bolt famous for?", options: ["Athletics (Sprinting)", "Swimming", "Cycling", "Football"], answer: 0 },
    { question: "In which sport would you find a 'pommel horse'?", options: ["Gymnastics", "Equestrian", "Athletics", "Diving"], answer: 0 },
    { question: "What is the maximum number of clubs a golfer can carry in a bag during a round?", options: ["10", "12", "14", "16"], answer: 2 },
    { question: "Which sport is played on a pitch with 22 yards between the wickets?", options: ["Cricket", "Baseball", "Rugby", "Hockey"], answer: 0 },
    { question: "What is full of holes but still able to hold water?", options: ["A Sponge", "A Net", "A Sieve", "A Bucket"], answer: 0 },
    { question: "Which country is credited with inventing the modern sport of Cricket?", options: ["England", "Australia", "India", "South Africa"], answer: 0 },
    { question: "What is it called when a tennis player wins all four Grand Slam titles in one calendar year?", options: ["Grand Slam", "Triple Crown", "Golden Slam", "Perfect Season"], answer: 0 },
    { question: "Which sport is contested inside 'The Ring'?", options: ["Boxing", "Wrestling", "Fencing", "Judo"], answer: 0 },
    { question: "In which sport do cyclists compete for the 'Yellow Jersey' at the Tour de France?", options: ["Cycling", "Running", "Swimming", "Skiing"], answer: 0 },
    { question: "How many periods are there in a standard ice hockey game?", options: ["2", "3", "4", "5"], answer: 1 },
    { question: "Which sport uses the terms 'love-thirty' and 'deuce'?", options: ["Tennis", "Badminton", "Squash", "Table Tennis"], answer: 0 }
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
