// --- 1. GLOBAL STATE & CONSTANTS ---
const WORDS_PER_CHUNK = 10;
const SAVE_KEY_WORDS_GRE = 'eprepGreWords';
const SAVE_KEY_WORDS_PREVIOUS = 'eprepPreviousWords';
const SAVE_KEY_WORDS_RECENTGK = 'eprepRecentGkWords';
const DARK_MODE_KEY = 'eprepDarkMode';
const STUDY_HISTORY_KEY = 'eprepStudyHistory';

let vocabData = {
    gre: { list: [], words: [] },
    previous: { list: [], words: [] },
    recentgk: { list: [], words: [] }
};

let currentCategory = 'gre'; 
let wordsInCurrentChunk = [];
let currentQuizQuestionIndex = 0;
let quizScores = { correct: 0, incorrect: 0 };
let missedWords = [];
let isAnswered = false;
let isTestMode = false;
let selectedTestAnswer = null;
let masteryChart = null;

// --- 2. DOM ELEMENTS ---
const htmlElement = document.documentElement;
const sections = {
    welcome: document.getElementById('welcome-section'),
    learn: document.getElementById('learn-section'),
    test: document.getElementById('test-section'),
    results: document.getElementById('results-section'),
    dictionary: document.getElementById('dictionary-section'),
    stats: document.getElementById('stats-section'),
    about: document.getElementById('about-section'),
    recentgk: document.getElementById('recentgk-section')
};

// Header & Nav
const mainMenuButton = document.getElementById('main-menu-button');
const dictionaryButton = document.getElementById('dictionary-button');
const statsButton = document.getElementById('stats-button');
const aboutButton = document.getElementById('about-button');
const darkModeToggle = document.getElementById('dark-mode-toggle');
const darkIconMoon = document.getElementById('dark-icon-moon');
const darkIconSun = document.getElementById('dark-icon-sun');

// Mobile Nav
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const mobileMainMenuButton = document.getElementById('mobile-main-menu-button');
const mobileDictionaryButton = document.getElementById('mobile-dictionary-button');
const mobileStatsButton = document.getElementById('mobile-stats-button');
const mobileAboutButton = document.getElementById('mobile-about-button');

// Welcome
const categoryContainer = document.getElementById('category-container');
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


// --- 3. CORE FUNCTIONS ---

function debounce(func, delay) {
    let timeout;
    return function(...args) {
        const context = this;
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(context, args), delay);
    };
}

function showSection(sectionName) {
    Object.values(sections).forEach(section => {
        section.classList.remove('active');
    });
    if (sections[sectionName]) {
        sections[sectionName].classList.add('active');
        window.scrollTo(0, 0);
    }
    mobileMenu.classList.add('hidden');
}

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

function loadWelcome() {
    categoryContainer.innerHTML = ''; 
    
    const categories = [
        { id: 'gre', title: 'GRE 333', description: 'The essential 333 high-frequency words for the GRE.', bn_description: 'চাকরির পরীক্ষার জন্য অপরিহার্য ৩৩৩টি হাই-ফ্রিকোয়েন্সি ইংরেজি শব্দ।', icon: 'graduation-cap' },
        { id: 'previous', title: 'Previous Vocabulary', description: 'A supplementary vocabulary list for comprehensive learning.', bn_description: 'বিগত ১৫ বছরের ব্যাংক ও বিসিএস পরীক্ষার প্রশ্ন থেকে বাছাইকৃত শব্দভাণ্ডার।', icon: 'history' },
        { id: 'recentgk', title: 'Recent GK', description: 'A collection of recent general knowledge questions.', bn_description: 'দৈনিক পত্রিকা থেকে সংগৃহীত সাম্প্রতিক সাধারণ জ্ঞানের নিয়মিত আপডেট।', icon: 'newspaper' }
    ];

    categories.forEach(cat => {
        const catData = vocabData[cat.id];
        const masteredCount = catData.words ? catData.words.filter(w => w.strength >= 10).length : 0;
        const totalCount = catData.list.length;
        const percentage = totalCount > 0 ? Math.round((masteredCount / totalCount) * 100) : 0;

        const card = document.createElement('div');
        card.className = "bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl hover:scale-[1.03] transition-all duration-300 cursor-pointer flex flex-col";
        card.dataset.category = cat.id;

        card.innerHTML = `
            <div class="flex-grow">
                <div class="flex items-center mb-4">
                    <i data-lucide="${cat.icon}" class="w-8 h-8 text-indigo-500 dark:text-indigo-400 mr-4"></i>
                    <h3 class="text-xl font-bold text-slate-900 dark:text-white">${cat.title}</h3>
                </div>
                <p class="text-slate-600 dark:text-slate-400 mt-1 mb-2 text-sm">${cat.description}</p>
                <p class="lang-bn text-slate-600 dark:text-slate-400 mt-1 mb-4 text-sm">${cat.bn_description}</p>
            </div>
            <div class="w-full bg-slate-200 dark:bg-gray-700 rounded-full h-2.5 mt-auto">
                <div class="bg-indigo-600 h-2.5 rounded-full" style="width: ${percentage}%"></div>
            </div>
            <p class="text-sm text-slate-500 dark:text-slate-400 mt-2 text-right">${masteredCount} / ${totalCount} Mastered</p>
        `;
        
        card.addEventListener('click', () => {
            currentCategory = cat.id;
            if (cat.id === 'recentgk') {
                document.getElementById('recentgk-total-questions').textContent = `Total Questions: ${totalCount}`;
                showSection('recentgk');
            } else {
                const nextChunkIndex = Math.floor(masteredCount / WORDS_PER_CHUNK);
                if (nextChunkIndex * WORDS_PER_CHUNK >= totalCount && totalCount > 0) {
                    console.log("Congratulations! You've completed all lessons in this category.");
                    return;
                }
                loadLearnSection(nextChunkIndex);
            }
        });

        categoryContainer.appendChild(card);
    });
    
    lucide.createIcons();
    showSection('welcome');
}

function resetQuizState() {
    isAnswered = false;
    selectedTestAnswer = null;
    feedbackContainer.style.display = 'none';
    quizOptionsContainer.innerHTML = '';
    quizQuestion.textContent = '';
    quizQuestionBengali.textContent = '';
    
    nextQuestionButton.disabled = false;
    nextQuestionButton.classList.remove('opacity-50', 'cursor-not-allowed');
    if (isTestMode) {
        nextQuestionButton.disabled = true; 
        nextQuestionButton.classList.add('opacity-50', 'cursor-not-allowed');
    }
}

function loadLearnSection(chunkIndex) {
    const catData = vocabData[currentCategory];
    const start = chunkIndex * WORDS_PER_CHUNK;
    const end = Math.min(start + WORDS_PER_CHUNK, catData.list.length);
    wordsInCurrentChunk = catData.list.slice(start, end);
    
    catData.currentChunkIndex = chunkIndex;

    learnHeader.textContent = `${catData.list.length > 0 ? catData.title : ''} Words ${start + 1}-${end}`;
    learnContainer.innerHTML = ''; 

    wordsInCurrentChunk.forEach((word, index) => {
        const card = document.createElement('div');
        card.className = "bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm border border-slate-200 dark:border-gray-700";
        card.style.animationDelay = `${index * 80}ms`;
        card.classList.add('fade-in-card');

        const synonymHTML = word.english ? `<p class="text-lg text-slate-600 dark:text-slate-400">${word.english}</p>` : '';

        card.innerHTML = `
            <div class="flex justify-between items-center mb-2">
                <h4 class="text-2xl font-bold text-indigo-600 dark:text-indigo-400">${word.word}</h4>
                <button class="speak-button p-2 rounded-full text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-gray-700" data-word="${word.word}" aria-label="Speak word">
                    <i data-lucide="volume-2" class="w-6 h-6"></i>
                </button>
            </div>
            <p class="lang-bn text-xl text-slate-800 dark:text-slate-200 mb-2">${word.bengali}</p>
            ${synonymHTML}
        `;
        learnContainer.appendChild(card);
    });

    lucide.createIcons();
    showSection('learn');
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function startTest() {
    if (wordsInCurrentChunk.length === 0) return;
    if (!isTestMode) {
        shuffleArray(wordsInCurrentChunk);
    }
    currentQuizQuestionIndex = 0;
    quizScores = { correct: 0, incorrect: 0 };
    missedWords = [];
    
    updateQuizStats();
    loadQuestion();
    showSection('test');
}

function loadQuestion() {
    if (currentQuizQuestionIndex >= wordsInCurrentChunk.length) {
        showQuizComplete();
        return;
    }
    resetQuizState();

    if (isTestMode) {
        if (currentQuizQuestionIndex === wordsInCurrentChunk.length - 1) {
            nextQuestionButton.innerHTML = 'Finish Test <i data-lucide="check-circle" class="w-5 h-5 ml-2"></i>';
        } else {
            nextQuestionButton.innerHTML = 'Next <i data-lucide="arrow-right" class="w-5 h-5 ml-2"></i>';
        }
        lucide.createIcons();
    }
    
    const currentItem = wordsInCurrentChunk[currentQuizQuestionIndex];

    document.querySelector('#test-section > div').classList.add('question-slide-in');
    setTimeout(() => {
        document.querySelector('#test-section > div').classList.remove('question-slide-in');
    }, 400);

    if (currentCategory === 'recentgk') {
        quizQuestion.textContent = '';
        quizQuestionBengali.textContent = currentItem.question;
        const options = [...currentItem.options]; 
        shuffleArray(options);
        options.forEach(option => {
            createOptionButton(option, option === currentItem.answer);
        });
        updateQuizStats();
        return;
    }

    const currentWord = currentItem;
    const hasSynonym = currentWord.english && currentWord.english.trim() !== '';

    const quizType = !hasSynonym
        ? (Math.random() > 0.5 ? 'word-to-bengali' : 'bengali-to-word')
        : (Math.random() > 0.5 ? 'word-to-def' : 'def-to-word');

    let question = '', correctAnswer = '', optionSourceKey = '';
    let questionIsBengali = false;
    let options = [currentWord];

    switch (quizType) {
        case 'word-to-bengali':
            question = currentWord.word;
            correctAnswer = currentWord.bengali;
            optionSourceKey = 'bengali';
            break;
        case 'bengali-to-word':
            question = currentWord.bengali;
            questionIsBengali = true;
            correctAnswer = currentWord.word;
            optionSourceKey = 'word';
            break;
        case 'word-to-def':
            question = currentWord.word;
            correctAnswer = currentWord.english;
            optionSourceKey = 'english';
            break;
        case 'def-to-word':
            question = currentWord.english;
            correctAnswer = currentWord.word;
            optionSourceKey = 'word';
            break;
    }

    let fullWordListForOptions = wordsInCurrentChunk.length > 4 ? wordsInCurrentChunk : vocabData[currentCategory].list;
    while (options.length < 4) {
        const randomWord = fullWordListForOptions[Math.floor(Math.random() * fullWordListForOptions.length)];
        if (randomWord.id !== currentWord.id && randomWord[optionSourceKey] && !options.some(opt => opt[optionSourceKey] === randomWord[optionSourceKey])) {
            options.push(randomWord);
        }
    }

    shuffleArray(options);
    
    if (questionIsBengali) {
        quizQuestionBengali.textContent = question;
    } else {
        quizQuestion.textContent = question;
    }
    
    options.forEach(option => createOptionButton(option[optionSourceKey], option[optionSourceKey] === correctAnswer));
    updateQuizStats();
}

function createOptionButton(text, isCorrect) {
    const button = document.createElement('button');
    button.dataset.correct = isCorrect;
    button.innerHTML = `<span class="font-medium text-lg">${text}</span>`;
    button.className = "option-card w-full text-left p-4 bg-white dark:bg-gray-700 border-2 border-slate-200 dark:border-gray-600 rounded-lg shadow-sm transition-all duration-150 transform active:scale-95";
    button.addEventListener('click', () => {
        if (isTestMode) {
            handleTestSelection(button);
        } else {
            checkAnswer(button);
        }
    });
    quizOptionsContainer.appendChild(button);
}

function handleTestSelection(selectedButton) {
    const allButtons = quizOptionsContainer.querySelectorAll('.option-card');
    allButtons.forEach(btn => btn.classList.remove('selected-test'));
    selectedButton.classList.add('selected-test');
    selectedTestAnswer = selectedButton;
    nextQuestionButton.disabled = false;
    nextQuestionButton.classList.remove('opacity-50', 'cursor-not-allowed');
}

function checkAnswer(selectedButton) {
    if (isAnswered) return;
    isAnswered = true;

    const isCorrect = selectedButton.dataset.correct === 'true';
    const allButtons = quizOptionsContainer.querySelectorAll('.option-card');
    const currentWord = wordsInCurrentChunk[currentQuizQuestionIndex];
    const wordInMasterList = vocabData[currentCategory].words.find(w => w.id === currentWord.id);

    if (!isTestMode) {
        allButtons.forEach(button => {
            button.classList.add('disabled');
            if (button.dataset.correct === 'true') {
                button.classList.add('correct-ui');
            }
        });
    }

    if (isCorrect) {
        quizScores.correct++;
        if (!isTestMode) {
            feedbackText.textContent = "Correct!";
            feedbackText.className = "text-2xl font-semibold text-green-600 dark:text-green-400";
            feedbackCorrectAnswer.textContent = '';
        }
        if (wordInMasterList) {
            wordInMasterList.strength = Math.min(12, wordInMasterList.strength + 1);
            wordInMasterList.lastReviewed = new Date().toISOString();
        }
    } else {
        quizScores.incorrect++;
        missedWords.push(currentWord);
        selectedButton.classList.add('wrong-ui');
        
        if (!isTestMode) {
            feedbackText.textContent = "Incorrect";
            feedbackText.className = "text-2xl font-semibold text-red-600 dark:text-red-400";
            
            let correctAnswerText;
            if (currentCategory === 'recentgk') {
                correctAnswerText = currentWord.answer;
            } else {
                correctAnswerText = currentWord.english 
                    ? `${currentWord.word} (${currentWord.english})` 
                    : `${currentWord.word} (${currentWord.bengali})`;
            }
            feedbackCorrectAnswer.textContent = `Correct: ${correctAnswerText}`;
        }
        
        if (wordInMasterList) {
            wordInMasterList.strength = Math.max(0, wordInMasterList.strength - 2);
            wordInMasterList.missedCount = (wordInMasterList.missedCount || 0) + 1;
        }
    }

    currentQuizQuestionIndex++; // The index is incremented here!
    if (!isTestMode) {
        feedbackContainer.style.display = 'block';
    }
    updateQuizStats();
    if (isTestMode) {
        selectedTestAnswer = null;
    }
}

function gradeTestAnswer() {
    if (!selectedTestAnswer) return;
    checkAnswer(selectedTestAnswer); 

    const allButtons = quizOptionsContainer.querySelectorAll('.option-card');
    allButtons.forEach(button => {
        button.classList.add('disabled');
        if (button.dataset.correct === 'true') {
            button.classList.add('correct-ui');
        }
    });
}

function updateQuizStats() {
    const total = wordsInCurrentChunk.length;
    const progress = currentQuizQuestionIndex;
    quizProgressText.textContent = `Question ${Math.min(progress + 1, total)} of ${total}`;
    quizProgressBar.style.width = `${((progress) / total) * 100}%`;
}

function showQuizComplete() {
    const total = wordsInCurrentChunk.length;
    const correct = quizScores.correct;
    const percentage = total > 0 ? Math.round((correct / total) * 100) : 0;
    const catData = vocabData[currentCategory];

    saveProgress();

    const today = new Date().toISOString().split('T')[0];
    let studyHistory = JSON.parse(localStorage.getItem(STUDY_HISTORY_KEY) || '[]');
    if (!studyHistory.includes(today)) {
        studyHistory.push(today);
        localStorage.setItem(STUDY_HISTORY_KEY, JSON.stringify(studyHistory));
    }
    
    resultsHeader.textContent = `Lesson Complete!`;
    finalScoreText.textContent = `${correct} / ${total}`;
    finalPercentageText.textContent = `(${percentage}%)`;

    if (percentage >= 80) finalScoreText.className = "text-6xl font-bold my-2 text-green-600 dark:text-green-400";
    else if (percentage >= 50) finalScoreText.className = "text-6xl font-bold my-2 text-yellow-500 dark:text-yellow-400";
    else finalScoreText.className = "text-6xl font-bold my-2 text-red-600 dark:text-red-400";

    if (missedWords.length > 0) {
        wordsToReviewList.innerHTML = missedWords.map(item => {
            if (currentCategory === 'recentgk') {
                return `
                <div class="bg-red-50 dark:bg-gray-700/50 p-3 rounded-md border border-red-200 dark:border-red-800/50 text-left">
                    <h4 class="font-bold text-red-800 dark:text-red-300 mb-1 text-base lang-bn">${item.question}</h4>
                    <p class="text-slate-700 dark:text-slate-300 text-sm">Correct: <span class="font-semibold text-green-700 dark:text-green-400">${item.answer}</span></p>
                </div>`;
            } else {
                return `
                <div class="bg-red-50 dark:bg-gray-700/50 p-3 rounded-md border border-red-200 dark:border-red-800/50">
                    <div class="flex justify-between items-center">
                        <h4 class="font-bold text-red-800 dark:text-red-300">${item.word}</h4>
                        <button class="speak-button p-1 rounded-full text-red-600 dark:text-red-300 hover:bg-red-100 dark:hover:bg-gray-600" data-word="${item.word}" aria-label="Speak word">
                            <i data-lucide="volume-2" class="w-5 h-5"></i>
                        </button>
                    </div>
                    <p class="lang-bn text-slate-700 dark:text-slate-300">${item.bengali}</p>
                    ${item.english ? `<p class="text-sm text-slate-500 dark:text-slate-400 italic">${item.english}</p>` : ''}
                </div>`;
            }
        }).join('');
        wordsToReviewContainer.style.display = 'block';
    } else {
        wordsToReviewContainer.style.display = 'none';
    }
    
    if (currentCategory === 'recentgk' || currentCategory === 'special') {
        continueButton.textContent = "Back to Categories";
        continueButton.onclick = loadWelcome;
    } else {
        const nextChunkIndex = catData.currentChunkIndex + 1;
        if ((nextChunkIndex * WORDS_PER_CHUNK) >= catData.list.length) {
            continueButton.textContent = "All Lessons Complete! Back to Categories";
            continueButton.onclick = loadWelcome;
        } else {
            continueButton.textContent = `Continue to Next Lesson`;
            continueButton.onclick = () => loadLearnSection(nextChunkIndex);
        }
    }
    
    lucide.createIcons();
    showSection('results');
}


// --- 4. DATA & PROGRESS MANAGEMENT ---

function getSaveKey(category) {
    if (category === 'gre') return SAVE_KEY_WORDS_GRE;
    if (category === 'previous') return SAVE_KEY_WORDS_PREVIOUS;
    if (category === 'recentgk') return SAVE_KEY_WORDS_RECENTGK;
    return null;
}

function loadProgress() {
    Object.keys(vocabData).forEach(cat => {
        const savedWords = localStorage.getItem(getSaveKey(cat));
        if (savedWords) {
            vocabData[cat].words = JSON.parse(savedWords);
            if (vocabData[cat].words.length !== vocabData[cat].list.length) {
                initializeWords(cat, true); 
            }
        } else {
            initializeWords(cat, false);
        }
    });
    loadWelcome();
}

function initializeWords(category, merge = false) {
    const catData = vocabData[category];
    const existingWords = merge ? new Map(catData.words.map(w => [w.id, w])) : new Map();

    catData.words = catData.list.map(v => {
        const existing = existingWords.get(v.id);
        if (existing) {
            return { ...v, ...existing, ...v };
        } else {
            return {
                id: v.id,
                strength: 0,
                lastReviewed: null,
                missedCount: 0,
                ...v
            };
        }
    });
    saveProgress(category);
}

function saveProgress(category = null) {
    if (category && getSaveKey(category)) {
        localStorage.setItem(getSaveKey(category), JSON.stringify(vocabData[category].words));
    } else if (!category) {
        Object.keys(vocabData).forEach(cat => {
            if (getSaveKey(cat)) {
                localStorage.setItem(getSaveKey(cat), JSON.stringify(vocabData[cat].words));
            }
        });
    }
}

function resetProgress() {
    const userConfirmed = confirm("Are you sure you want to reset all progress for all categories? This cannot be undone.");
    if (userConfirmed) {
        Object.keys(vocabData).forEach(cat => {
            if (getSaveKey(cat)) {
                localStorage.removeItem(getSaveKey(cat));
            }
            initializeWords(cat, false);
        });
        localStorage.removeItem(STUDY_HISTORY_KEY);
        loadWelcome();
    }
}

// --- 5. UI COMPONENTS & OTHER FEATURES ---

function loadDictionary() {
    const allVocab = [...vocabData.gre.list, ...vocabData.previous.list];
    allVocab.sort((a, b) => a.word.localeCompare(b.word));

    dictionaryListContainer.innerHTML = allVocab.map(word => {
        const searchData = `${word.word.toLowerCase()} ${word.bengali} ${word.english ? word.english.toLowerCase() : ''}`;
        return `
        <div class="dictionary-word-card bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-slate-200 dark:border-gray-700" data-word="${searchData}">
            <div class="flex justify-between items-center mb-1">
                <h4 class="text-xl font-bold text-indigo-600 dark:text-indigo-400">${word.word}</h4>
                <button class="speak-button p-2 rounded-full text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-gray-700" data-word="${word.word}" aria-label="Speak word">
                    <i data-lucide="volume-2" class="w-5 h-5"></i>
                </button>
            </div>
            <p class="lang-bn text-lg text-slate-800 dark:text-slate-200 mb-1">${word.bengali}</p>
            ${word.english ? `<p class="text-slate-600 dark:text-slate-400">${word.english}</p>` : ''}
        </div>`;
    }).join('');
    lucide.createIcons();
}

function filterDictionary() {
    const searchTerm = searchBar.value.toLowerCase();
    const allWords = dictionaryListContainer.querySelectorAll('.dictionary-word-card');
    allWords.forEach(card => {
        card.style.display = card.dataset.word.includes(searchTerm) ? 'block' : 'none';
    });
}

function toggleDarkMode() {
    htmlElement.classList.toggle('dark');
    const isDarkMode = htmlElement.classList.contains('dark');
    localStorage.setItem(DARK_MODE_KEY, isDarkMode);
    updateDarkModeIcons(isDarkMode);
    if (sections.stats.classList.contains('active')) {
        renderMasteryChart();
    }
}

function updateDarkModeIcons(isDarkMode) {
    darkIconMoon.classList.toggle('hidden', isDarkMode);
    darkIconSun.classList.toggle('hidden', !isDarkMode);
}

function loadDarkModeState() {
    const isDarkMode = localStorage.getItem(DARK_MODE_KEY) === 'true';
    if (isDarkMode) htmlElement.classList.add('dark');
    updateDarkModeIcons(isDarkMode);
}

function loadStatsPage() {
    showSection('stats');
    renderMasteryChart();
    renderDifficultWords();
    renderStudyStreak();
    renderCalendar();
}

function renderMasteryChart() {
    const allWords = [...vocabData.gre.words, ...vocabData.previous.words];
    if (!allWords.length) return;

    const mastered = allWords.filter(w => w.strength >= 10).length;
    const learning = allWords.filter(w => w.strength > 0 && w.strength < 10).length;
    const notSeen = allWords.length - mastered - learning;

    const ctx = document.getElementById('mastery-chart').getContext('2d');
    if (masteryChart) masteryChart.destroy();

    masteryChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: [`Mastered (${mastered})`, `Learning (${learning})`, `Not Seen (${notSeen})`],
            datasets: [{
                data: [mastered, learning, notSeen],
                backgroundColor: ['#16a34a', '#f59e0b', '#64748b'],
                borderColor: htmlElement.classList.contains('dark') ? '#1f2937' : '#ffffff',
                borderWidth: 4
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: { color: htmlElement.classList.contains('dark') ? '#cbd5e1' : '#475569', font: { size: 14, family: 'Inter' } }
                }
            }
        }
    });
}

function renderDifficultWords() {
    const difficultWordsList = document.getElementById('difficult-words-list');
    const allWords = [...vocabData.gre.words, ...vocabData.previous.words];
    const sortedWords = allWords.filter(w => w.missedCount > 0).sort((a, b) => b.missedCount - a.missedCount).slice(0, 20);

    const createTestButton = document.getElementById('create-test-button');
    if (sortedWords.length === 0) {
        difficultWordsList.innerHTML = `<p class="text-slate-500 dark:text-slate-400 text-center italic text-sm">No difficult words yet. Keep practicing!</p>`;
        createTestButton.style.display = 'none';
        return;
    }
    
    difficultWordsList.innerHTML = sortedWords.map(word => `
        <div class="flex justify-between items-center text-sm">
            <span class="font-semibold text-slate-700 dark:text-slate-300">${word.word}</span>
            <span class="text-red-500 dark:text-red-400 font-bold">${word.missedCount} misses</span>
        </div>`).join('');
    createTestButton.style.display = 'flex';
}

function createDifficultWordsTest() {
    const allWords = [...vocabData.gre.words, ...vocabData.previous.words];
    const difficultWords = allWords.filter(w => w.missedCount > 0).sort((a, b) => b.missedCount - a.missedCount).slice(0, 20);
    
    if (difficultWords.length > 0) {
        wordsInCurrentChunk = difficultWords;
        currentCategory = 'special';
        isTestMode = false;
        startTest();
    }
}

function calculateStudyStreak() {
    const studyHistory = JSON.parse(localStorage.getItem(STUDY_HISTORY_KEY) || '[]');
    if (studyHistory.length === 0) return 0;
    studyHistory.sort((a, b) => new Date(b) - new Date(a));

    const today = new Date();
    const todayStr = today.toISOString().split('T')[0];
    const lastStudyDay = new Date(studyHistory[0]);

    const diffDays = (today.getTime() - lastStudyDay.getTime()) / (1000 * 3600 * 24);
    
    if (diffDays > 1.5) return 0;
    
    let streak = 0;
    let currentDay = today;
    
    if (studyHistory[0] !== todayStr) {
        currentDay.setDate(today.getDate() - 1);
    }
    
    for (const dateStr of studyHistory) {
        const expectedDateStr = currentDay.toISOString().split('T')[0];
        if (dateStr === expectedDateStr) {
            streak++;
            currentDay.setDate(currentDay.getDate() - 1);
        } else if (new Date(dateStr) < new Date(expectedDateStr)) {
            break;
        }
    }
    return streak;
}

function renderStudyStreak() {
    const streak = calculateStudyStreak();
    const streakDisplay = document.getElementById('streak-display');
    streakDisplay.innerHTML = `
        <p class="text-6xl font-bold text-green-600 dark:text-green-400">${streak}</p>
        <p class="text-slate-600 dark:text-slate-400">Day Streak</p>
        ${streak === 0 ? `<p class="text-xs text-slate-500 mt-2">Study today to start a streak!</p>` : ''}
    `;
}

function renderCalendar() {
    const container = document.getElementById('calendar-container');
    const studyHistory = new Set(JSON.parse(localStorage.getItem(STUDY_HISTORY_KEY) || '[]'));
    const today = new Date();
    const month = today.getMonth();
    const year = today.getFullYear();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const startDayOfWeek = new Date(year, month, 1).getDay();

    const weekdays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
    let html = `<div class="grid grid-cols-7 gap-1 text-center text-xs text-slate-500 dark:text-slate-400 font-medium">${weekdays.map(d => `<div>${d}</div>`).join('')}</div>`;
    html += `<div class="grid grid-cols-7 gap-1 text-center text-xs text-slate-700 dark:text-slate-300 mt-2">`;
    html += Array(startDayOfWeek).fill('<div></div>').join('');
    for (let i = 1; i <= daysInMonth; i++) {
        const dateStr = new Date(year, month, i).toISOString().split('T')[0];
        let classes = 'w-6 h-6 rounded-full flex items-center justify-center mx-auto ';
        if (i === today.getDate()) classes += 'bg-indigo-600 text-white font-bold ';
        else if (studyHistory.has(dateStr)) classes += 'bg-green-200 dark:bg-green-800 text-green-800 dark:text-green-200 ';
        else classes += 'bg-slate-200 dark:bg-gray-700 ';
        html += `<div><span class="${classes}">${i}</span></div>`;
    }
    html += '</div>';
    container.innerHTML = html;
}

function startPracticeMode() {
    isTestMode = false;
    currentCategory = 'recentgk';
    wordsInCurrentChunk = [...vocabData.recentgk.list];
    shuffleArray(wordsInCurrentChunk);
    currentQuizQuestionIndex = 0;
    quizScores = { correct: 0, incorrect: 0 };
    missedWords = [];
    loadPracticeQuestion();
    showSection('test'); 
}

function loadPracticeQuestion() {
    if (currentQuizQuestionIndex >= wordsInCurrentChunk.length) {
        showQuizComplete();
        return;
    }
    resetQuizState();

    quizQuestionBengali.textContent = wordsInCurrentChunk[currentQuizQuestionIndex].question;

    const currentQuestion = wordsInCurrentChunk[currentQuizQuestionIndex];
    const options = [...currentQuestion.options];
    shuffleArray(options);
    options.forEach(option => {
        createOptionButton(option, option === currentQuestion.answer);
    });

    quizProgressText.textContent = `Practice Question ${currentQuizQuestionIndex + 1} of ${wordsInCurrentChunk.length}`;
    quizProgressBar.style.width = `${((currentQuizQuestionIndex) / wordsInCurrentChunk.length) * 100}%`;
}

function startTestMode() {
    const activeLimitButton = document.querySelector('#gk-limit-buttons .limit-btn.active');
    const limit = activeLimitButton.dataset.limit;
    
    let numQuestions;
    const allGkQuestions = [...vocabData.recentgk.list];

    if (limit === 'all') {
        numQuestions = allGkQuestions.length;
    } else {
        numQuestions = parseInt(limit, 10);
    }

    if (numQuestions > allGkQuestions.length) {
        numQuestions = allGkQuestions.length;
    }
    
    shuffleArray(allGkQuestions);
    wordsInCurrentChunk = allGkQuestions.slice(0, numQuestions);
    
    currentCategory = 'recentgk';
    isTestMode = true;
    selectedTestAnswer = null;
    startTest(); 
}

document.addEventListener('DOMContentLoaded', async () => {
    try {
        const [greResponse, preVocabResponse, recentGkResponse] = await Promise.all([
            fetch('vocabulary.json'),
            fetch('pre-vocabulary.json'),
            fetch('recentgk.json')
        ]);
        
        if (!greResponse.ok) throw new Error(`Failed to load vocabulary.json: ${greResponse.statusText}`);
        if (!preVocabResponse.ok) throw new Error(`Failed to load pre-vocabulary.json: ${preVocabResponse.statusText}`);
        if (!recentGkResponse.ok) throw new Error(`Failed to load recentgk.json: ${recentGkResponse.statusText}`);
        
        vocabData.gre.list = await greResponse.json();
        vocabData.gre.title = "GRE 333";
        vocabData.previous.list = await preVocabResponse.json();
        vocabData.previous.title = "Previous Vocabulary";
        vocabData.recentgk.list = await recentGkResponse.json();
        vocabData.recentgk.title = "Recent GK";

        loadDarkModeState();
        loadProgress();
        loadDictionary();
        lucide.createIcons();

        mainMenuButton.addEventListener('click', loadWelcome);
        dictionaryButton.addEventListener('click', () => showSection('dictionary'));
        statsButton.addEventListener('click', loadStatsPage);
        aboutButton.addEventListener('click', () => showSection('about'));
        darkModeToggle.addEventListener('click', toggleDarkMode);
        
        mobileMenuButton.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));
        mobileMainMenuButton.addEventListener('click', loadWelcome);
        mobileDictionaryButton.addEventListener('click', () => showSection('dictionary'));
        mobileStatsButton.addEventListener('click', loadStatsPage);
        mobileAboutButton.addEventListener('click', () => showSection('about'));
        
        resetProgressButton.addEventListener('click', resetProgress);
        document.getElementById('create-test-button').addEventListener('click', createDifficultWordsTest);
        
        startTestButton.addEventListener('click', () => {
            isTestMode = false;
            startTest();
        });

        nextQuestionButton.addEventListener('click', () => {
            if (isTestMode) {
                if (!selectedTestAnswer) return;
                
                // BUG FIX: REMOVE "isAnswered = true" FROM HERE. 
                // It prevents checkAnswer() from running properly.
                
                nextQuestionButton.disabled = true;
                nextQuestionButton.classList.add('opacity-50', 'cursor-not-allowed');

                gradeTestAnswer(); 
                
                setTimeout(() => {
                    loadQuestion();
                }, 1200);

            } else if (currentCategory === 'recentgk' && !isTestMode) {
                loadPracticeQuestion();
            } else {
                loadQuestion();
            }
        });

        searchBar.addEventListener('input', debounce(filterDictionary, 300));

        document.getElementById('practice-mode-button').addEventListener('click', startPracticeMode);
        document.getElementById('test-mode-button').addEventListener('click', startTestMode);
        document.getElementById('back-to-categories-gk').addEventListener('click', loadWelcome);

        const confirmAndLoadWelcome = () => {
            const userConfirmed = confirm("Are you sure you want to exit? Your current test progress will be lost.");
            if (userConfirmed) {
                loadWelcome();
            }
        };
        document.getElementById('back-to-categories-test').addEventListener('click', confirmAndLoadWelcome);
        
        document.getElementById('back-to-categories-results').addEventListener('click', loadWelcome);

        document.getElementById('gk-limit-buttons').addEventListener('click', (event) => {
            const clickedButton = event.target.closest('.limit-btn');
            if (clickedButton) {
                document.querySelectorAll('#gk-limit-buttons .limit-btn').forEach(btn => btn.classList.remove('active'));
                clickedButton.classList.add('active');
            }
        });

        document.body.addEventListener('click', (event) => {
            const speakButton = event.target.closest('.speak-button');
            if (speakButton) {
                speakWord(speakButton.dataset.word);
            }
        });

    } catch (error) {
        console.error("Failed to initialize app:", error);
        document.body.innerHTML = `<div class="text-red-500 text-center p-8">Failed to load critical app data. Please check your network connection and refresh the page. <br><small>${error.message}</small></div>`;
    }
});
