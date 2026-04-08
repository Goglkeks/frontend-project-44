// src/index.js
import readlineSync from 'readline-sync'

const MAX_ROUNDS = 3

export const runGame = (gameDescription, generateRound) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${name}!`)
  console.log(gameDescription)

  for (let i = 0; i < MAX_ROUNDS; i += 1) {
    const { question, correctAnswer } = generateRound()
    
    console.log(`Question: ${question}`)
    const userAnswer = readlineSync.question('Your answer: ')

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
      console.log(`Let's try again, ${name}!`)
      return
    }
    
    console.log('Correct!')
  }

  console.log(`Congratulations, ${name}!`)
}