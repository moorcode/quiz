/* eslint-disable strict */
const store = {
  questions: [
    {
      question: 'Who was the first "coder"?',
      answers: ['Ada Lovelace', 'Al Gore', 'Albert Einstien', 'John Backus'],
      correctAnswer: 'Ada Lovelace',
    },
    {
      question: 'When was the first computer virus created?',
      answers: ['1994', '1983', '1956', '1899'],
      correctAnswer: '1983',
    },
    {
      question: 'When was the first computer game created?',
      answers: ['1973', '1994', '2003', '1961'],
      correctAnswer: '1961',
    },
    {
      question: 'What was the first programming language?',
      answers: ['Java', 'Java Script', 'C#', 'Fortran'],
      correctAnswer: 'Fortran',
    },
    {
      question: 'When was the first known usage of the word "computer"?',
      answers: ['1921', '1897', '1613', '1952'],
      correctAnswer: '1613',
    }
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0,
};



/**
 * 
 * Technical requirements:
 * 
 * Your app should include a render() function, that regenerates the view each time the store is updated. 
 * See your course material and access support for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
 * 
 */

/********** TEMPLATE GENERATION FUNCTIONS **********/

// These functions return HTML templates
function startPage(){
  let startPage = `
  <section class="card center">
    <h2>Welcome to our quiz</h2>
    <p>Test your coding knowledge!</p>
    <button id="start">Start Quiz</button>
  </section>`;
  return startPage;
}

function questionPage(){
  let question = store.questions[store.questionNumber];
  let answersTemp = `<ul>
  <li>Question ${store.questionNumber + 1} out of ${store.questions.length}</li>
  <li>Score: ${store.score}</li>
  </ul>`;
  for(let i =0; i<question.answers.length;i++){
    answersTemp += `
    <div class="answers">
    <label> ${question.answers[i]}</label>  
    <input type="radio" name="answer" value="${question.answers[i]}" required>
    </div>`;    
  }
  let questionPage = `
    <section class = "card">
      <form>
      <h2>${question.question}</h2>
        ${answersTemp}
        <button type="submit">Submit</button>
      </form>
    </section>`;
  return questionPage;
}

function checkAnswer(){
  let correctAnswer = store.questions[store.questionNumber - 1].correctAnswer;
  let userInput = $('input[type="radio"]:checked').val();
  console.log(correctAnswer, userInput);
  if(correctAnswer === userInput){
    store.score++;
    $('main').html(`
    <section class="right">
      <h2>Correct!</h2>
      <p>Way to go!</p>
      <button id="continue">Continue</button>
    </section>`);
  } else {
    console.log('incorrect');
    $('main').html(`
    <section class="wrong">
      <h2>Incorrect!</h2>
      <p>The correct answer is: ${correctAnswer}</p>
      <button id="continue">Continue</button>
    </section>`);
  }
}
/********** RENDER FUNCTION(S) **********/
// This function conditionally replaces the contents of the <main> tag based on the state of the store
function render(){
  if(store.quizStarted === false){
    $('main').html(startPage());
  }else if(store.quizStarted){
    $('main').html(questionPage());
  }
}

/********** EVENT HANDLER FUNCTIONS **********/

function handleStartQuiz(){
  $('main').on('click', '#start', function(){
    store.quizStarted=true;
    render();
  });
}

function handleAnswerSubmit(){
  $('main').on('submit', 'form', function(evt){
    evt.preventDefault();
    store.questionNumber++;
    checkAnswer();
  });
}

function handleContinue(){
  $('main').on('click', '#continue', function(evt){
    if(store.questionNumber === 5){
      $('main').html(`
    <section class="card center wrong">
      <h2>Quiz Over</h2>
      <p>Your final score: ${store.score} out of ${store.questions.length}</p>
      <button id="restart">Restart</button>
    </section>`);
    }else{
      questionPage();
      render();
    }
  });
}

function handleRestart(){
  $('main').on('click', '#restart', function(evt){
    store.quizStarted = false;
    store.questionNumber = 0;
    store.score = 0;
    $('main').html(startPage());

  });
}


function main (){
  render();
  handleStartQuiz();
  handleAnswerSubmit();
  handleContinue();
  handleRestart();
}

$(main);