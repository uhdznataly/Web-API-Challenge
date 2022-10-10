const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'What is the biggest country in the world?',
    answers: [
      { text: 'Russia', correct: true },
      { text: 'Canada', correct: false },
      { text: 'United States', correct: false },
      { text: 'China', correct: false }
    ]
  },
  {
    question: 'What was the first state in the United States?',
    answers: [
      { text: 'Virginia', correct: false },
      { text: 'Pennsylvania', correct: false },
      { text: 'Deleware', correct: true },
      { text: 'Massachusetts', correct: false }
    ]
  },
  {
    question: 'Who was the first president to visit all 50 states?',
    answers: [
      { text: 'John F. Kennedy', correct: false },
      { text: 'Richard Nixon', correct: true },
      { text: 'Lyndon B. Johnson', correct: false },
      { text: 'Jimmy Carter', correct: false }
    ]
  },
  {
    question: 'Which U.S state grows coffee beans?',
    answers: [
      { text: 'Washington', correct: false },
      { text: 'Hawaii', correct: true },
      { text: 'Florida', correct: false },
      { text: 'California', correct: false }
    ]
  }
]


// let timeSecond = 59;
// const timeH = document.querySelector("h3");

// displayTime(timeSecond);

// const countDown = setInterval(() => {
//   timeSecond--;
//   displayTime(timeSecond);
//   if (timeSecond == 0 || timeSecond < 1) {
//     endCount();
//     clearInterval(countDown);
//   }
// }, 1000);

// function displayTime(second) {
//   const min = Math.floor(second / 60);
//   const sec = Math.floor(second % 60);
//   timeH.innerHTML = `
//   ${min < 10 ? "0" : ""}${min}:${sec < 10 ? "0" : ""}${sec}
//   `;
// }

// function endCount() {
//   timeH.innerHTML = "Time's Up!!!";
// }


