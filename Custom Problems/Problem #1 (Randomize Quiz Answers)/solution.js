/* Task:: --> is to create a function that shuffles an array */

/* let Quizzes = [
  ...,
  {
    question: 'Sample quiz question',
    answers: [correctAnswer, wrongAnswer1, wrongAnswer2, wrongAnswer3]
  },
  ...
] */

const h = [1, 2, 3];

function shuffle (array) {
  array = Array.from(array);
  const randomIndex = Math.ceil(Math.random() * array.length);

  const startingPortion = array.splice(randomIndex);
  return startingPortion.concat(array)
}

console.log(shuffle(h))