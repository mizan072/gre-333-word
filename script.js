// --- 1. VOCABULARY DATA ---
const vocabList = [
    { "id": 1, "word": "Abate", "bengali": "দূর করা, হ্রাস পাওয়া, কমা, প্রশমিত করা", "english": "subside, or moderate" },
    { "id": 2, "word": "Aberrant", "bengali": "বিচ্যুত, বিপথগামী", "english": "abnormal, or deviant" },
    { "id": 3, "word": "Abeyance", "bengali": "মুলতবি অবস্থা, সাময়িক অক্রিয়তা", "english": "suspended action" },
    { "id": 4, "word": "Abscond", "bengali": "পলাতক হওয়া, আত্মগোপন করিয়া থাকা", "english": "depart secretly and hide" },
    { "id": 5, "word": "Abstemious", "bengali": "সংযমী, মিতাচারী", "english": "sparing in eating and drinking; temperate" },
    { "id": 6, "word": "Admonish", "bengali": "সতর্ক করা, সাবধান করে দেওয়া", "english": "warn; reprove" },
    { "id": 7, "word": "Adulterate", "bengali": "বিশুদ্ধতা নষ্ট করা, ভেজালমিশ্রিত, ব্যভিচা", "english": "make impure by adding inferior or tainted substances" },
    { "id": 8, "word": "Aesthetic", "bengali": "নান্দনিক, সৌন্দর্যবোধ সংক্রান্ত", "english": "artistic; dealing with or capable of appreciating the beautiful" },
    { "id": 9, "word": "Aggregate", "bengali": "সমষ্টিগত, একত্র করা", "english": "gather; accumulate" },
    { "id": 10, "word": "Alacrity", "bengali": "উৎসাহ, সানন্দ, ব্যগ্রতা, উদ্দীপনা", "english": "cheerful promptness; eagerness" },
    // ... (Your other 323 words) ...
    { "id": 333, "word": "Zealot", "bengali": "অতি গোঁড়া লোক, ধর্মান্ধ", "english": "fanatic; person who shows excessive zeal" }
];

// --- 2. GLOBAL STATE ---
const WORDS_PER_CHUNK = 10;
const DAILY_TEST_COUNT = 20; // --- NEW ---
const SAVE_KEY = 'gre333Progress'; 
const DARK_MODE_KEY = 'gre333DarkMode'; 
let currentChunkIndex = 0; 
let totalMasteredCount = 0;
let wordsInCurrentChunk = [];
let currentQuizQuestionIndex = 0;
let quizScores = { correct: 0, incorrect: 0 };
let missedWords = []; 
let isAnswered = false;

// --- 3. DOM ELEMENTS ---
const htmlElement = document.documentElement; 
const sections = {
    welcome: document.getElementById('welcome-section'),
    learn: document.getElementById('learn-section'),
    test: document.getElementById('test-section'),
    results: document.getElementById('results-section'),
    dictionary: document.getElementById('dictionary-section'),
    about: document.getElementById('about-section') // --- NEW ---
};
const progressBarFill = document.getElementById('progress-bar-fill');
const progressBarText = document.getElementById('progress-bar-text');

// Header Buttons
const mainMenuButton = document.getElementById('main-menu-button');
const dictionaryButton = document.getElementById('dictionary-button');
const aboutButton = document.getElementById('about-button'); // --- NEW ---
const darkModeToggle = document.getElementById('dark-mode-toggle');
const darkIconMoon = document.getElementById('dark-icon-moon');
const darkIconSun = document.getElementById('dark-icon-sun');

// Welcome Screen Buttons
const startLearningButton = document.getElementById('start-learning-button');
const reviewMasteredButton = document.getElementById('review-mastered-button');
const dailyRandomTestButton = document.getElementById('daily-random-test-button'); // --- NEW ---
const resetProgressButton = document.getElementById('reset-progress-button');

// Learn
const learnHeader = document.getElementById('learn-header');
const learnContainer = document.getElementById('learn-container');
const startTestButton = document.getElementById('start-test-button');

// Test
const quizProgressText = document.getElementById('quiz-progress-text');
const quizProgressBar = document.getElementById('quiz-progress-bar');
const quizQuestion = document.getElementById('quiz-question');
const quizQuestionBengali = document.getElementById('quiz-question-bengali');
const quizOptionsContainer = document.getElementById('quiz-options-container');
const feedbackContainer = document.getElementById('quiz-feedback-container');
const feedbackText = document.getElementById('quiz-feedback-text');
const feedbackCorrectAnswer = document.getElementById('quiz-feedback-correct-answer');
const nextQuestionButton = document.getElementById('next-question-button');

// Results
const resultsHeader = document.getElementById('results-header');
const finalScoreText = document.getElementById('final-score-text');
const finalPercentageText = document.getElementById('final-percentage-text');
const wordsToReviewContainer = document.getElementById('words-to-review-container');
const wordsToReviewList = document.getElementById('words-to-review-list');
const continueButton = document.getElementById('continue-button');

// Dictionary
const searchBar = document.getElementById('search-bar');
const dictionaryListContainer = document.getElementById('dictionary-list-container');

// --- NEW: Footer Buttons ---
const footerMenuButton = document.getElementById('footer-menu-button');
const footerAboutButton = document.getElementById('footer-about-button');


// --- 4. CORE FUNCTIONS ---

/**
 * Switches the visible section
 * @param {string} sectionName - 'welcome', 'learn', 'test', 'results', 'dictionary', 'about'
 */
function showSection(sectionName) {
    Object.values(sections).forEach(section => {
        section.classList.remove('active');
    });
    if (sections[sectionName]) {
        sections[sectionName].classList.add('active');
        window.scrollTo(0, 0); 
    }
}

/**
 * Pronounces the given word using Web Speech API
 * @param {string} word - The word to speak
 */
function speakWord(word) {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(word);
        utterance.lang = 'en-US'; 
        utterance.rate = 0.9;   
        window.speechSynthesis.speak(utterance);
    } else {
        console.warn("Browser does not support Speech Synthesis.");
    }
}

/**
 * Updates the main progress bar and review button
 */
function updateMainProgress() {
    const percentage = (totalMasteredCount / vocabList.length) * 100;
    progressBarFill.style.width = `${percentage}%`;
    progressBarText.textContent = `Mastered: ${totalMasteredCount} of 333 words`;

    if (totalMasteredCount > 0) {
        reviewMasteredButton.textContent = `Review Mastered Words (${totalMasteredCount})`;
        reviewMasteredButton.style.display = 'block';
    } else {
        reviewMasteredButton.style.display = 'none';
    }
}

/**
 * Loads the Welcome/Main Menu screen
 */
function loadWelcome() {
    updateMainProgress();
    const nextChunkIndex = Math.floor(totalMasteredCount / WORDS_PER_CHUNK);
    const startWord = (nextChunkIndex * WORDS_PER_CHUNK) + 1;
    const endWord = Math.min(startWord + WORDS_PER_CHUNK - 1, vocabList.length);
    
    if (startWord > vocabList.length) {
        startLearningButton.textContent = "Congratulations! You've completed all lessons!";
        startLearningButton.disabled = true;
        startLearningButton.classList.add('bg-green-700', 'opacity-70');
    } else {
        startLearningButton.textContent = `Begin Lesson ${nextChunkIndex + 1} (Words ${startWord}-${endWord})`;
        startLearningButton.disabled = false;
        startLearningButton.classList.remove('bg-green-700', 'opacity-70');
    }
    
    showSection('welcome');
}

/**
 * Loads the Learn section for a specific chunk
 * @param {number} chunkIndex - The index of the chunk (0 = words 1-10)
 */
function loadLearnSection(chunkIndex) {
    currentChunkIndex = chunkIndex;
    const start = chunkIndex * WORDS_PER_CHUNK;
    const end = Math.min(start + WORDS_PER_CHUNK, vocabList.length);
    wordsInCurrentChunk = vocabList.slice(start, end);

    learnHeader.textContent = `Learning Set: Words ${start + 1}-${end}`;
    
    let html = '';
    wordsInCurrentChunk.forEach(word => {
        html += `
        <div class="bg-white dark:bg-slate-800 p-5 rounded-lg shadow-md border border-slate-200 dark:border-slate-700">
            <div class="flex justify-between items-center mb-1">
                <h4 class="text-2xl font-bold text-indigo-800 dark:text-indigo-300">${word.id}. ${word.word}</h4>
                <button class="speak-button p-2 rounded-full text-indigo-600 dark:text-indigo-300 hover:bg-indigo-100 dark:hover:bg-slate-700 active:bg-indigo-200 dark:active:bg-slate-600 transition-colors" data-word="${word.word}" aria-label="Pronounce word">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                      <path d="M12 14a3 3 0 0 0 3-3V5a3 3 0 0 0-6 0v6a3 3 0 0 0 3 3Z" />
                      <path d="M17 11a1 1 0 0 1 1 1v.5a6 6 0 0 1-12 0V12a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v.5a3 3 0 0 0 6 0V12a1 1 0 0 1 1-1h1Z" />
                    </svg>
                </button>
            </div>
            <p class="lang-bn text-xl text-slate-700 dark:text-slate-300 mb-2">${word.bengali}</p>
            <p class="text-md text-slate-500 dark:text-slate-400 italic">${word.english}</p>
        </div>
        `;
    });
    learnContainer.innerHTML = html;
    showSection('learn');
}

/**
 * Shuffles an array in place (Fisher-Yates)
 * @param {Array} array - The array to shuffle
 */
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

/**
 * Starts the quiz for the current chunk (or review)
 */
function startTest() {
    shuffleArray(wordsInCurrentChunk);
    currentQuizQuestionIndex = 0;
    quizScores = { correct: 0, incorrect: 0 };
    missedWords = [];
    
    updateQuizStats();
    loadQuestion();
    showSection('test');
}

/**
 * Loads the current quiz question
 */
function loadQuestion() {
    if (currentQuizQuestionIndex >= wordsInCurrentChunk.length) {
        showQuizComplete();
        return;
    }

    isAnswered = false;
    feedbackContainer.style.display = 'none';
    quizOptionsContainer.innerHTML = '';
    quizQuestion.textContent = '';
    quizQuestionBengali.textContent = '';
    
    const currentWord = wordsInCurrentChunk[currentQuizQuestionIndex];
    
    const quizType = Math.random() > 0.5 ? 'word-to-def' : 'def-to-word';
    
    let question = '';
    let questionIsBengali = false;
    let correctAnswer = '';
    let options = [];

    if (quizType === 'word-to-def') {
        if (Math.random() > 0.5) {
            question = currentWord.word;
        } else {
            question = currentWord.bengali;
            questionIsBengali = true;
        }
        correctAnswer = currentWord.english;
        options.push(currentWord);
    } else { // def-to-word
        question = currentWord.english;
        correctAnswer = currentWord.word;
        options.push(currentWord);
    }

    // Get 3 random wrong answers
    let fullWordListForOptions = wordsInCurrentChunk.length > 4 ? wordsInCurrentChunk : vocabList;
    while (options.length < 4) {
        const randomWord = fullWordListForOptions[Math.floor(Math.random() * fullWordListForOptions.length)];
        if (!options.some(opt => opt.id === randomWord.id)) {
            options.push(randomWord);
        }
    }

    shuffleArray(options);
    
    if (questionIsBengali) {
        quizQuestionBengali.textContent = question;
    } else {
        quizQuestion.textContent = question;
    }
    
    options.forEach(option => {
        let text = (quizType === 'word-to-def') ? option.english : option.word;
        let isCorrect = (text === correctAnswer);
        createOptionButton(text, isCorrect);
    });

    updateQuizStats();
}

/**
 * Creates an option button for the quiz
 * @param {string} text - The text to display on the button
 * @param {boolean} isCorrect - Whether this is the correct answer
 */
function createOptionButton(text, isCorrect) {
    const button = document.createElement('button');
    button.dataset.correct = isCorrect;
    button.innerHTML = `<span class="font-medium">${text}</span>`;
    button.className = "quiz-option-button w-full text-left p-4 bg-white dark:bg-slate-700 border-2 border-slate-200 dark:border-slate-600 rounded-lg shadow-sm hover:bg-slate-50 dark:hover:bg-slate-600 transition-all duration-150 text-lg dark:text-slate-100";
    
    button.addEventListener('click', () => checkAnswer(button));
    quizOptionsContainer.appendChild(button);
}

/**
 * Checks the selected answer
 * @param {HTMLButtonElement} selectedButton - The button that was clicked
 */
function checkAnswer(selectedButton) {
    if (isAnswered) return;
    isAnswered = true;

    const isCorrect = selectedButton.dataset.correct === 'true';
    const allButtons = quizOptionsContainer.querySelectorAll('button');
    const currentWord = wordsInCurrentChunk[currentQuizQuestionIndex];

    allButtons.forEach(button => {
        button.disabled = true;
        const correct = button.dataset.correct === 'true';
        if (correct) {
            button.classList.remove('bg-white', 'dark:bg-slate-700', 'border-slate-200', 'dark:border-slate-600');
            button.classList.add('bg-green-100', 'dark:bg-green-900', 'border-green-500', 'dark:border-green-600', 'ring-2', 'ring-green-400');
        }
    });

    if (isCorrect) {
        quizScores.correct++;
        feedbackText.textContent = "Correct!";
        feedbackText.className = "text-2xl font-semibold text-green-600 dark:text-green-400";
        feedbackCorrectAnswer.textContent = '';
    } else {
        quizScores.incorrect++;
        missedWords.push(currentWord); 
        
        selectedButton.classList.remove('bg-white', 'dark:bg-slate-700', 'border-slate-200', 'dark:border-slate-600');
        selectedButton.classList.add('bg-red-100', 'dark:bg-red-900', 'border-red-500', 'dark:border-red-600', 'ring-2', 'ring-red-400');
        
        feedbackText.textContent = "Incorrect";
        feedbackText.className = "text-2xl font-semibold text-red-600 dark:text-red-400";
        
        feedbackCorrectAnswer.textContent = `Correct: ${currentWord.word} (${currentWord.english})`;
    }

    currentQuizQuestionIndex++;
    updateQuizStats();
    feedbackContainer.style.display = 'block';
}

/**
 * Updates the quiz progress bar and text
 */
function updateQuizStats() {
    const total = wordsInCurrentChunk.length;
    const progress = currentQuizQuestionIndex;
    
    quizProgressText.textContent = `Question ${Math.min(progress + 1, total)} of ${total}`;
    quizProgressBar.style.width = `${((progress) / total) * 100}%`; 
}

/**
 * Shows the quiz completion (Results) screen
 */
function showQuizComplete() {
    const total = wordsInCurrentChunk.length;
    const correct = quizScores.correct;
    const percentage = total > 0 ? Math.round((correct / total) * 100) : 0;
    
    // --- UPDATED: Check for review mode or daily test ---
    // A "lesson" is only when the chunk size is the default.
    const isLesson = wordsInCurrentChunk.length === WORDS_PER_CHUNK;
    
    if (isLesson) {
        if (percentage >= 80) { // If they pass
            totalMasteredCount = (currentChunkIndex + 1) * WORDS_PER_CHUNK;
        }
        totalMasteredCount = Math.min(totalMasteredCount, vocabList.length);
        localStorage.setItem(SAVE_KEY, totalMasteredCount);
        updateMainProgress();
    }
    
    // --- Update Results Card Header ---
    if (isLesson) {
        resultsHeader.textContent = `Lesson ${currentChunkIndex + 1} Complete!`;
    } else {
        resultsHeader.textContent = `Test Complete!`;
    }

    finalScoreText.textContent = `${correct} / ${total}`;
    finalPercentageText.textContent = `(${percentage}%)`;

    if (percentage >= 80) {
        finalScoreText.className = "text-7xl font-bold text-green-600 dark:text-green-400 my-4";
    } else if (percentage >= 50) {
        finalScoreText.className = "text-7xl font-bold text-yellow-600 dark:text-yellow-400 my-4";
    } else {
        finalScoreText.className = "text-7xl font-bold text-red-600 dark:text-red-400 my-4";
    }

    // --- Populate Corrective Feedback ---
    if (missedWords.length > 0) {
        let html = '';
        missedWords.forEach(word => {
            html += `
            <div class="bg-red-50 dark:bg-slate-700 p-4 rounded-lg border border-red-200 dark:border-red-700">
                <div class="flex justify-between items-center mb-1">
                    <h4 class="text-xl font-bold text-red-800 dark:text-red-300">${word.word}</h4>
                    <button class="speak-button p-2 rounded-full text-red-700 dark:text-red-300 hover:bg-red-100 dark:hover:bg-slate-600" data-word="${word.word}" aria-label="Pronounce word">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                          <path d="M12 14a3 3 0 0 0 3-3V5a3 3 0 0 0-6 0v6a3 3 0 0 0 3 3Z" />
                          <path d="M17 11a1 1 0 0 1 1 1v.5a6 6 0 0 1-12 0V12a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v.5a3 3 0 0 0 6 0V12a1 1 0 0 1 1-1h1Z" />
                        </svg>
                    </button>
                </div>
                <p class="lang-bn text-lg text-slate-700 dark:text-slate-300 mb-1">${word.bengali}</p>
                <p class="text-md text-slate-500 dark:text-slate-400 italic">${word.english}</p>
            </div>
            `;
        });
        wordsToReviewList.innerHTML = html;
        wordsToReviewContainer.style.display = 'block';
    } else {
        wordsToReviewList.innerHTML = '';
        wordsToReviewContainer.style.display = 'none';
    }
    
    // --- Configure Continue Button ---
    if (!isLesson) {
        // If it was a review or daily test, button just goes to main menu.
        continueButton.textContent = "Return to Main Menu";
        continueButton.onclick = () => loadWelcome();
    } else {
        // Original lesson logic
        let nextChunkIndex = currentChunkIndex;
        if (percentage < 80) {
            continueButton.textContent = `Retry Lesson ${currentChunkIndex + 1}`;
            continueButton.onclick = () => loadLearnSection(currentChunkIndex);
        } else {
            nextChunkIndex = currentChunkIndex + 1;
            const nextStartWord = nextChunkIndex * WORDS_PER_CHUNK;

            if (nextStartWord >= vocabList.length) {
                continueButton.textContent = "All Lessons Complete! Return to Menu";
                continueButton.onclick = () => loadWelcome();
            } else {
                const nextEndWord = Math.min(nextStartWord + WORDS_PER_CHUNK, vocabList.length);
                continueButton.textContent = `Continue to Lesson ${nextChunkIndex + 1} (Words ${nextStartWord + 1}-${nextEndWord})`;
                continueButton.onclick = () => loadLearnSection(nextChunkIndex);
            }
        }
    }
    
    showSection('results');
}

// --- 5. NEW FUNCTIONS ---

/**
 * Loads saved progress from localStorage
 */
function loadProgress() {
    const savedProgress = localStorage.getItem(SAVE_KEY);
    if (savedProgress) {
        totalMasteredCount = parseInt(savedProgress, 10);
    } else {
        totalMasteredCount = 0;
    }
    loadWelcome(); 
}

/**
 * Loads and populates the dictionary section
 */
function loadDictionary() {
    let html = '';
    vocabList.forEach(word => {
        html += `
        <div class="dictionary-word-card bg-white dark:bg-slate-800 p-5 rounded-lg shadow-md border border-slate-200 dark:border-slate-700" data-word="${word.word.toLowerCase()} ${word.bengali} ${word.english.toLowerCase()}">
            <div class="flex justify-between items-center mb-1">
                <h4 class="text-2xl font-bold text-indigo-800 dark:text-indigo-300">${word.id}. ${word.word}</h4>
                <button class="speak-button p-2 rounded-full text-indigo-600 dark:text-indigo-300 hover:bg-indigo-100 dark:hover:bg-slate-700" data-word="${word.word}" aria-label="Pronounce word">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                      <path d="M12 14a3 3 0 0 0 3-3V5a3 3 0 0 0-6 0v6a3 3 0 0 0 3 3Z" />
                      <path d="M17 11a1 1 0 0 1 1 1v.5a6 6 0 0 1-12 0V12a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v.5a3 3 0 0 0 6 0V12a1 1 0 0 1 1-1h1Z" />
                    </svg>
                </button>
            </div>
            <p class="lang-bn text-xl text-slate-700 dark:text-slate-300 mb-2">${word.bengali}</p>
            <p class="text-md text-slate-500 dark:text-slate-400 italic">${word.english}</p>
        </div>
        `;
    });
    dictionaryListContainer.innerHTML = html;
}

/**
 * Filters the dictionary list based on search bar input
 */
function filterDictionary() {
    const searchTerm = searchBar.value.toLowerCase();
    const allWords = dictionaryListContainer.querySelectorAll('.dictionary-word-card');
    
    allWords.forEach(card => {
        const wordText = card.dataset.word;
        if (wordText.includes(searchTerm)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

/**
 * Toggles dark mode
 */
function toggleDarkMode() {
    htmlElement.classList.toggle('dark');
    const isDarkMode = htmlElement.classList.contains('dark');
    localStorage.setItem(DARK_MODE_KEY, isDarkMode);
    updateDarkModeIcons(isDarkMode);
}

/**
 * Updates the dark mode icons
 * @param {boolean} isDarkMode
 */
function updateDarkModeIcons(isDarkMode) {
    if (isDarkMode) {
        darkIconMoon.classList.add('hidden');
        darkIconSun.classList.remove('hidden');
    } else {
        darkIconMoon.classList.remove('hidden');
        darkIconSun.classList.add('hidden');
    }
}

/**
 * Loads saved dark mode state
 */
function loadDarkModeState() {
    const isDarkMode = localStorage.getItem(DARK_MODE_KEY) === 'true';
    if (isDarkMode) {
        htmlElement.classList.add('dark');
    }
    updateDarkModeIcons(isDarkMode);
}

/**
 * Starts the review mode
 */
function startReviewMode() {
    const reviewWords = vocabList.slice(0, totalMasteredCount);
    if (reviewWords.length === 0) {
        alert("You haven't mastered any words yet!");
        return;
    }
    wordsInCurrentChunk = reviewWords;
    startTest();
}

/**
 * --- NEW: Starts the daily random test ---
 */
function startDailyRandomTest() {
    const shuffledList = [...vocabList]; // Create a copy
    shuffleArray(shuffledList); // Shuffle the copy
    
    // Get the first N words
    wordsInCurrentChunk = shuffledList.slice(0, DAILY_TEST_COUNT); 
    
    startTest();
}

/**
 * Resets all saved progress
 */
function resetProgress() {
    if (confirm("Are you sure you want to reset all your progress? This cannot be undone.")) {
        localStorage.removeItem(SAVE_KEY);
        totalMasteredCount = 0;
        loadWelcome();
    }
}


// --- 6. EVENT LISTENERS ---
document.addEventListener('DOMContentLoaded', () => {
    // Initial Load
    loadDarkModeState();
    loadProgress(); 
    loadDictionary(); 
    
    // --- UPDATED: Navigation ---
    mainMenuButton.addEventListener('click', loadWelcome);
    dictionaryButton.addEventListener('click', () => showSection('dictionary'));
    aboutButton.addEventListener('click', () => showSection('about')); // --- NEW ---
    darkModeToggle.addEventListener('click', toggleDarkMode);

    // --- Welcome Screen ---
    startLearningButton.addEventListener('click', () => {
        const nextChunkIndex = Math.floor(totalMasteredCount / WORDS_PER_CHUNK);
        loadLearnSection(nextChunkIndex);
    });
    reviewMasteredButton.addEventListener('click', startReviewMode);
    dailyRandomTestButton.addEventListener('click', startDailyRandomTest); // --- NEW ---
    resetProgressButton.addEventListener('click', resetProgress);

    // --- Learn Section ---
    startTestButton.addEventListener('click', startTest);
    
    // --- Test Section ---
    nextQuestionButton.addEventListener('click', loadQuestion);

    // --- Dictionary ---
    searchBar.addEventListener('input', filterDictionary);

    // --- NEW: Footer ---
    footerMenuButton.addEventListener('click', loadWelcome);
    footerAboutButton.addEventListener('click', () => showSection('about'));

    // --- Global: Event Delegation for Speak Buttons ---
    document.body.addEventListener('click', function(event) {
        const speakButton = event.target.closest('.speak-button');
        if (speakButton) {
            const wordToSpeak = speakButton.dataset.word;
            if (wordToSpeak) {
                speakWord(wordToSpeak);
            }
        }
    });
});
