let userName = '';

userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');

const userQuestion = 'How do I touch my toes?';

console.log(userQuestion);

let randomNumber = Math.floor(Math.random() * 8);

let eightBall = '';

const isRolled = () => {
  if (randomNumber === 1)
  return 'it is certain';
else {
  return 'ello ello';
}
};

console.log(isRolled());