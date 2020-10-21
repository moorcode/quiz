/* eslint-disable strict */
const store = {
  questions: [
    {
      question: 'Who was the first "coder"?',
      answers: ["Ada Lovelace", "Al Gore", "Albert Einstien", "John Backus"],
      correctAnswer: "Ada Lovelace",
    },
    {
      question: "When was the first computer virus created?",
      answers: ["1994", "1983", "1956", "1899"],
      correctAnswer: "1983",
    },
    {
      question: "When was the first computer game created?",
      answers: ["1973", "1994", "2003", "1961"],
      correctAnswer: "1961",
    },
    {
      question: "What was the first programming language?",
      answers: ["Java", "Java Script", "C#", "Fortran"],
      correctAnswer: "Fortran",
    },
    {
      question: 'When was the first known usage of the word "computer"?',
      answers: ["1921", "1897", "1613", "1952"],
      correctAnswer: "1613",
    },
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0,
};

//page shows start button
function startPage() {
  let startPage = `
  <section class ='card'>
  <h2 class="center">Welcome to my Quiz!</h2>
  <p class="center">Take this quiz to test your coding knowledge.</p>
  <button class="center" id="start">Start Quiz</button>
  </section>`;
  return startPage;
}

//start button yields question page via render()
function handleStartQuiz() {
  $('main').on('click', '#start', function () {
    store.quizStarted = true;
    render();
  });
}

//page shows question/answer choices, submit button...
function questionPage() {
  let question = store.questions[store.questionNumber]; //yields entire questions array object

  let questionPage = `
    <section class="card">
    <h2 class="center">${question.question}</h2>
    <ul class="metric">
    <li>Question ${store.questionNumber + 1} out of ${store.questions.length}</li>
    <li>Current score: ${store.score}</li>
    </ul>
    <form class="-"> 
      <label>${question.answers[0]}</label>
      <input type="radio" name="answer" value="${question.answers[0]}"
      <label>${question.answers[1]}</label>
      <input type="radio" name="answer" value="${question.answers[1]}"
      <label>${question.answers[2]}</label>
      <input type="radio" name="answer" value="${question.answers[2]}"
      <label>${question.answers[3]}</label>
      <input type="radio" name="answer" value="${question.answers[3]}"
      </form>
      <button class="submit">Submit</button>
    </section>`; //shouldnt hardcode
  return questionPage;
}

//submit yields feedback page
function handleAnswerSubmit() {
  $('input').on('click', 'input value', function () {
    const userAnswer = $(event.currentTarget).find('input value');
    console.log(userAnswer);
  });
  $('main').on('click', '#submit', function () {
    event.preventDefault();
    $(".js-display-user-text").text(`user text is:  ${userTextElement.val()}`);
    userTextElement;
    // const score =;
    render();
  });
}

//page shows correct answer if 
//wrong answer chosen & feedback
function feedbackPage() {
  let feedbackPage = `
  `;
  return feedbackPage;
}

function handleFeedbackPage() {
//next button yields question page
}

function render() {
  if (store.quizStarted === false) {
    $('main').html(startPage);
  } else if (store.quizStarted === true) {
    $('main').html(questionPage()); //yields question page
    store.questionNumber++; //go to next question 
    
    handleAnswerSubmit();
  }
}

function main() {
  render();
  startPage();
  handleStartQuiz();
}

$(main);










// function renderStartPage(){
//   if(store.quizStarted === false){
//     $('main').html(startPage);
//   }
  
//   function renderQuizPage(){
//     if(store.quizStarted === true){
//     $('main').html(quizPage);
//     }
//   }
