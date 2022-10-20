const chalk = require('chalk');
const read = require('readline-sync');

const userName = read.question('Whats your name ');
console.log(chalk.blue('Welcome to Do-You-Know-Me-Quiz ') + chalk.green.underline(userName));
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
  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    score = score + 1;
    console.log(chalk.green('right! 👏'));
  } else {
    console.log(chalk.red('wrong! 👎'));
  }
}
console.log('----------------------');
console.log(chalk.blue('Your score is ') + chalk.green(score));