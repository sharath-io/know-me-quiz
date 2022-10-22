const chalk = require('chalk');
const read = require('readline-sync');

var score = 0;

var scores = [
  {
    name: 'sharath',
    userScore: 10,
  },
  {
    name: 'ravi',
    userScore: 6,
  },
]

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
  {
    question: 'which college I am from ? ',
    answer: 'Gitam',
  },
  {
    question: 'what is my branch in my Btech ? ',
    answer: 'CSE',
  },
  {
    question: 'whats my fav movie of all time ? ',
    answer: 'RRR',
  },
  {
    question: ' who is my fav film director ? ',
    answer: 'Sukumar',
  },
  {
    question: 'what is my birthday month ? ',
    answer: 'December',
  },
];


function quiz(question, answer) {
  var userAnswer = read.question(question);
  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    score = score + 1;
    console.log(chalk.green('right! 👏'));
  } else {
    console.log(chalk.red('wrong! 👎'));
  }
}


function call_quiz() {
  for (var i = 0; i < questions.length; i++) {
    console.log('-------------');

    if (!(i === 5 && score < 3)) //checking minimum score at 6th question 
    {
      if (i == 5) {
        console.log(chalk.green('🎉🎉 You have entered level 1'));
      }
      quiz(questions[i].question, questions[i].answer);
    }
    else {
      console.log('You didnt score minimum in level 1 so not qualified for level2');
      break;
    }
  }
}

function call_high_scores() {
  for (var i = 0; i < scores.length; i++) {
    if (score > scores[i].userScore) {
      console.log(chalk.red.underline('Congrats you have beaten the highest score of ' + scores[i].name));
      console.log('send your score screenshot will udpate in the data ');
      break;
    }
  }

}



function play() {
  const userName = read.question('Whats your name ');
  console.log(chalk.blue('Welcome to Do-You-Know-Me-Quiz ') +
    chalk.green.bold.underline(userName));
  console.log('lets start the game: This game has 2 levels \neach having 5 questions, you need to score minimum 3 in level1 to go to level 2 ');
  call_quiz();
  console.log('----------------------');
  call_high_scores();
  console.log(chalk.blue('Your final score is ') + chalk.green.bold(score));
}

play();