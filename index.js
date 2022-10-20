const read = require('readline-sync');
const userName = read.question('Whats your name ');
console.log('Welcome to Do-You-Know-Me-Quiz ' + userName);
console.log('lets start the game: ');

var score = 0;

const questions = [
  {
    question: 'where do I live ? ',
    answer: 'Hyderabad',
  },
  {
    question: 'which is my fav city in India ? ',
    answer: 'Visakhapatnam',
  },
  {
    question: 'who is my fav Marvel hero ? ',
    answer: 'ironman',
  },
  {
    question: 'what is my fav food ? ',
    answer: 'biryani',
  },
  {
    question: 'Which app i use the most ? ',
    answer: 'whatsapp',
  },
];

for (var i = 0; i < questions.length; i++) {
  console.log('-------------');
  play(questions[i].question, questions[i].answer);
}

function play(question, answer) {
  var userAnswer = read.question(question);
  if (userAnswer === answer) {
    score = score + 1;
    console.log('right!');
  } else {
    console.log('wrong!');
  }
}
console.log('----------------------');
console.log('Your final score is ' + score);