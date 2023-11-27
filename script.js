const quizData = [
    {
      question: "Question 1: Who won fifa wc 2023?",
      options: ["France", "Argentina", "Brazil", "Spain"],
      answer: 1
    },
    {
      question: "Question 2: Which Club won most ucl titles?",
      options: ["Lyon", "Real Madrid", "FCB", "Manchester Utd"],
      answer: 1
    },
    {
        question: "Question 3: Who scored most goals in Laliga individually?",
        options: ["Leo Messi", "Ronaldo", "Suarez", "Gareth Bale"],
        answer: 0
    },
    {
        question: "Question 4: How many ballon dor's Messi has won?",
        options: ["Six", "Seven", "Eight", "Nine"],
        answer: 2
    },
    // Add more questions here
  ];
  
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const submitButton = document.getElementById("submit");
  const scoreElement = document.getElementById("score");
  
  let currentQuestion = 0;
  let score = 0;
  
  function loadQuestion() {
    const currentQuizData = quizData[currentQuestion];
    questionElement.innerText = currentQuizData.question;
  
    optionsElement.innerHTML = "";
    currentQuizData.options.forEach((option, index) => {
      const optionElement = document.createElement("input");
      optionElement.type = "radio";
      optionElement.name = "option";
      optionElement.value = index;
      optionsElement.appendChild(optionElement);
  
      const labelElement = document.createElement("label");
      labelElement.innerText = option;
      optionsElement.appendChild(labelElement);
    });
  }
  
  function checkAnswer() {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (selectedOption) {
      const answer = parseInt(selectedOption.value);
      if (answer === quizData[currentQuestion].answer) {
        score++;
      }
      currentQuestion++;
      if (currentQuestion < quizData.length) {
        loadQuestion();
      } else {
        showScore();
      }
    }
  }
  
  function showScore() {
    questionElement.style.display = "none";
    optionsElement.style.display = "none";
    submitButton.style.display = "none";
    scoreElement.innerText = `Your score: ${score}/${quizData.length}`;
    scoreElement.style.display = "block";
  }
  
  loadQuestion();
  
  submitButton.addEventListener("click", checkAnswer);
  