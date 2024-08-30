document.addEventListener("DOMContentLoaded", () => {
    const quizData = [
      {
        question: "რომელია დაბინძურების ძირითადი წყაროები?",
        options: ["სამრეწველო წარმოება", "ტყეების გაჩეხვა", "ელექტრო მანქანები", "ორგანული საკვები"],
        correct: "სამრეწველო წარმოება"
      },
      {
        question: "როგორ მოქმედებს პლასტიკური ნარჩენები ოკეანეებზე?",
        options: ["აუმჯობესებს წყალმცენარეების ზრდას", "ქმნის მიკროპლასტიკებს, რომლებიც საზღვაო ბინადრებს აზიანებს", "ზრდის თევზის რეპროდუქციას", "ამცირებს ზღვის დონის მატებას"],
        correct: " ქმნის მიკროპლასტიკებს, რომლებიც საზღვაო ბინადრებს აზიანებს"
      },
      {
        question: "როგორ შეიძლება თემების ჩართვა გარემოს დასუფთავებაში?",
        options: ["აქციების ორგანიზება", "ნარჩენების დაწვა", "მეტი ქიმიკატების გამოყენება", "ბუნებრივი რესურსების მოპოვება"],
        correct: "აქციების ორგანიზება"
      },
      {
        question: "როგორ მოქმედებს დაბინძურება ეკოსისტემებზე?",
        options: ["ზრდის ჰაბიტატების მრავალფეროვნებას", "ამცირებს მტკნარი წყლის ხელმისაწვდომობას", "ხელს უწყობს ცხოველთა გამრავლებას", "აუმჯობესებს ნიადაგის ხარისხს"],
        correct: "ამცირებს მტკნარი წყლის ხელმისაწვდომობას"
      },
      {
        question: "რა გავლენას ახდენს ჰაერის დაბინძურება ადამიანის ჯანმრთელობაზე?",
        options: ["აუმჯობესებს ძილის ხარისხს", "ზრდის რესპირატორული დაავადებების რისკს", "აძლიერებს იმუნიტეტს", "ხელს უწყობს სწრაფ მეტაბოლიზმს"],
        correct: "ზრდის რესპირატორული დაავადებების რისკს"
      },
      {
        question: "რა არის ცირკულარული ეკონომიკა?",
        options: ["ეკონომიკური სისტემა, სადაც ნარჩენები არ გროვდება", "ეკონომიკური წრე, სადაც ყველაფერი ნაგავსაყრელზე მიაქვს", "ეკონომიკა, რომელიც მიჯაჭვულია ბუნებრივი რესურსების გამოლევაზე", "ეკონომიკური მოდელი, სადაც ყველაფერი ერთხელ იწარმოება"],
        correct: "ეკონომიკური სისტემა, სადაც ნარჩენები არ გროვდება"
      },
      {
        question: "როგორ მოქმედებს ურბანული განვითარება ბუნებრივ გარემოზე?",
        options: ["ზრდის ტყეების ფართობს", "ამცირებს ბინადრობას", "ზრდის ცხოველთა მოსახლეობას", "აუმჯობესებს ეკოსისტემის მდგრადობას"],
        correct: "ამცირებს ბინადრობას"
      },
      {
        question: "რა როლი აქვთ მთავრობებს დაბინძურების შემცირებაში?",
        options: ["კანონების შემუშავება და რეგულაციები", "ტყეების უფრო სწრაფი გაჩეხვა", "გამონაბოლქვის გაზრდა", "დაბინძურების უგულებელყოფა"],
        correct: "კანონების შემუშავება და რეგულაციები"
      },
      {
        question: "როგორ მოქმედებს სოფლის მეურნეობა გარემოზე?",
        options: ["ზრდის ბიომრავალფეროვნებას", "ამცირებს ნიადაგის ეროზიას", "ზრდის ნარჩენების რაოდენობას და მიწის გაწყვეტას", "აუმჯობესებს წყლის ხარისხს"],
        correct: "ზრდის ნარჩენების რაოდენობას და მიწის გაწყვეტას"
      },
      {
        question: "როგორ უნდა მოვიქცეთ ნარჩენების გადამუშავებისას?",
        options: ["ყველა ნარჩენი ერთად უნდა ჩაიყაროს", "ნარჩენები უნდა გამოირჩეოდეს და ცალკე გადამუშავდეს", "მხოლოდ ჭიქები უნდა გადამუშავდეს", "ნარჩენები უნდა გადაწვის სადგურებზე გაგზავნოს"],
        correct: "ნარჩენები უნდა გამოირჩეოდეს და ცალკე გადამუშავდეს"
      }
      // Add more questions as needed
    ];
    let currentQuestionIndex = 0;
    let score = 0;
    let timerInterval;
    const userAnswers = [];
  
    const questionNumberElement = document.getElementById("question-number");
    const questionTextElement = document.getElementById("question-text");
    const optionsContainer = document.querySelector(".options");
    const nextButton = document.getElementById("next-button");
    const timerElement = document.getElementById("timer");
    const scoreElement = document.getElementById("score");
    const progressBar = document.getElementById("progress-bar");
    const scoreboardContainer = document.getElementById("scoreboard-container");
    const scoreboardBody = document.querySelector("#scoreboard tbody");
    const restartButton = document.getElementById("restart-button");
  
    // Function to save progress to localStorage
    function saveProgress() {
      localStorage.setItem(
        "quizProgress",
        JSON.stringify({
          currentQuestionIndex,
          score,
          userAnswers
        })
      );
    }
  
    // Function to retrieve progress from localStorage
    function retrieveProgress() {
      const savedProgress = localStorage.getItem("quizProgress");
      if (savedProgress) {
        const {
          currentQuestionIndex: savedIndex,
          score: savedScore,
          userAnswers: savedAnswers
        } = JSON.parse(savedProgress);
        if (savedIndex < quizData.length) {
          currentQuestionIndex = savedIndex;
          score = savedScore;
          userAnswers.push(...savedAnswers);
          loadQuestion();
        } else {
          displayResults();
        }
      } else {
        initializeQuiz();
      }
    }
  
    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    }
  
    function initializeQuiz() {
      shuffleArray(quizData);
      loadQuestion();
    }
  
    function loadQuestion() {
      const currentQuestion = quizData[currentQuestionIndex];
      questionNumberElement.textContent = `${currentQuestionIndex + 1}/${
        quizData.length
      }`;
      questionTextElement.textContent = currentQuestion.question;
  
      optionsContainer.innerHTML = "";
      const shuffledOptions = shuffleArray([...currentQuestion.options]);
      shuffledOptions.forEach((option) => {
        const label = document.createElement("label");
        const input = document.createElement("input");
        input.type = "radio";
        input.name = "answer";
        input.value = option;
  
        const span = document.createElement("span");
        span.textContent = option;
  
        label.appendChild(input);
        label.appendChild(span);
        optionsContainer.appendChild(label);
      });
  
      updateProgressBar();
      resetTimer();
    }
  
    function updateProgressBar() {
      const progress = (currentQuestionIndex / quizData.length) * 100;
      progressBar.style.width = `${progress}%`;
    }
  
    function resetTimer() {
      clearInterval(timerInterval);
      let timeLeft = 30;
      timerElement.textContent = timeLeft;
  
      timerInterval = setInterval(() => {
        timeLeft--;
        timerElement.textContent = timeLeft;
  
        // Color change when timer is running low
        if (timeLeft <= 10) {
          timerElement.style.color = "#e74c3c"; // Change to red
        }
  
        // Add additional visual cues as needed (e.g., animations, background color changes)
  
        if (timeLeft <= 0) {
          clearInterval(timerInterval);
          handleNextButtonClick(); // Automatically move to next question or end quiz
        }
      }, 1000);
    }
  
    function handleNextButtonClick() {
      const selectedOption = document.querySelector(
        'input[name="answer"]:checked'
      );
      if (selectedOption) {
        userAnswers.push({
          question: quizData[currentQuestionIndex].question,
          yourAnswer: selectedOption.value,
          correctAnswer: quizData[currentQuestionIndex].correct
        });
  
        if (selectedOption.value === quizData[currentQuestionIndex].correct) {
          score++;
          scoreElement.textContent = `Score: ${score}`;
        }
      } else {
        userAnswers.push({
          question: quizData[currentQuestionIndex].question,
          yourAnswer: "პასუხი არ დაფიქსირდა",
          correctAnswer: quizData[currentQuestionIndex].correct
        });
      }
  
      currentQuestionIndex++;
      if (currentQuestionIndex < quizData.length) {
        saveProgress(); // Save progress before loading next question
        loadQuestion();
      } else {
        saveProgress(); // Save progress before displaying results
        displayResults();
      }
  
      document
        .querySelectorAll('input[name="answer"]')
        .forEach((input) => (input.checked = false));
    }
  
    function displayResults() {
      clearInterval(timerInterval);
      questionNumberElement.textContent = "Quiz Completed";
      questionTextElement.textContent = `Your score is ${score}/${quizData.length}`;
  
      optionsContainer.innerHTML = "";
      nextButton.style.display = "none";
      scoreboardContainer.style.display = "block";
      renderScoreboard();
      localStorage.removeItem("quizProgress"); // Clear saved progress after displaying results
    }
  
    function renderScoreboard() {
      scoreboardBody.innerHTML = "";
      userAnswers.forEach((answer, index) => {
        const row = document.createElement("tr");
        const questionCell = document.createElement("td");
        const yourAnswerCell = document.createElement("td");
        const correctAnswerCell = document.createElement("td");
  
        questionCell.textContent = `Q${index + 1}: ${answer.question}`;
        yourAnswerCell.textContent = answer.yourAnswer;
        correctAnswerCell.textContent = answer.correctAnswer;
  
        row.appendChild(questionCell);
        row.appendChild(yourAnswerCell);
        row.appendChild(correctAnswerCell);
        scoreboardBody.appendChild(row);
      });
    }
  
    function restartQuiz() {
      currentQuestionIndex = 0;
      score = 0;
      userAnswers.length = 0;
      scoreElement.textContent = `Score: ${score}`;
      nextButton.textContent = "Continue";
      nextButton.style.display = "block";
      scoreboardContainer.style.display = "none";
      nextButton.removeEventListener("click", restartQuiz);
      nextButton.addEventListener("click", handleNextButtonClick);
      localStorage.removeItem("quizProgress"); // Clear saved progress on restart
      initializeQuiz();
    }
  
    nextButton.addEventListener("click", handleNextButtonClick);
    restartButton.addEventListener("click", restartQuiz);
  
    // Check localStorage for saved progress when DOM is loaded
    retrieveProgress();
  });

  // Country and City data
const cityData = {
    USA: ['ჩოლოყაშვილის ქუჩა', 'ერეკლე მეორის ქუჩა', 'ჭადრის ქუჩა N2'],
    UK: ['იოსებ ნონეშვილის ქუჩა', 'სარაჯიშვილის ქუჩა', 'ჩუმლაყი'],
    Canada: ['წნორი', 'ვაქირი', 'ტიბაანი']
  };
  
  // Store the selected city
  let selectedCity = '';
  let cityScores = {}; // To store scores for cities
  
  // DOM Elements
  const countrySelect = document.getElementById('country');
  const citySelect = document.getElementById('city');
  const startQuizButton = document.getElementById('start-quiz-button');
  const locationContainer = document.getElementById('location-container');
  const quizContainer = document.getElementById('quiz-container');
  const scoreboardContainer = document.getElementById('scoreboard-container');
  const scoreButton = document.getElementById('score-button');
  
  // Populate cities when a country is selected
  countrySelect.addEventListener('change', function () {
    const selectedCountry = this.value;
    if (selectedCountry) {
      citySelect.disabled = false;
      citySelect.innerHTML = '<option value="">აირჩიე უბანი</option>';
      cityData[selectedCountry].forEach(city => {
        const option = document.createElement('option');
        option.value = city;
        option.textContent = city;
        citySelect.appendChild(option);
      });
    } else {
      citySelect.disabled = true;
      startQuizButton.disabled = true;
    }
  });
  
  // Enable the start button when a city is selected
  citySelect.addEventListener('change', function () {
    if (this.value) {
      startQuizButton.disabled = false;
      selectedCity = this.value;
    } else {
      startQuizButton.disabled = true;
    }
  });
  
  // Start the quiz
  startQuizButton.addEventListener('click', function () {
    locationContainer.style.display = 'none';
    quizContainer.style.display = 'block';
  });
  
  // Handle the end of the quiz and saving score
  function endQuiz(finalScore) {
    // Store the score for the selected city
    if (!cityScores[selectedCity]) {
      cityScores[selectedCity] = [];
    }
    cityScores[selectedCity].push(finalScore);
  
    quizContainer.style.display = 'none';
    scoreboardContainer.style.display = 'block';
  }
  
  // View scores for the selected city
  scoreButton.addEventListener('click', function () {
    if (cityScores[selectedCity] && cityScores[selectedCity].length > 0) {
      alert(`Scores for ${selectedCity}: ${cityScores[selectedCity].join(', ')}`);
    } else {
      alert(`No scores recorded for ${selectedCity}.`);
    }
  });
  
  // Restart the quiz
  document.getElementById('restart-button').addEventListener('click', function () {
    scoreboardContainer.style.display = 'none';
    locationContainer.style.display = 'block';
  });


//    loader
document.addEventListener("DOMContentLoaded", function() {
    // Show the loader initially
    document.querySelector('.loader').style.display = 'block';
  
    // Simulate loading (e.g., fetching data, loading images, etc.)
    setTimeout(function() {
      // Hide the loader
      document.querySelector('.loader').style.display = 'none';
      
      // Show the quiz content
      document.querySelector('.location-container').style.display = 'block';
    }, 2000); // Adjust the time as needed (2000 ms = 2 seconds)
  });
  