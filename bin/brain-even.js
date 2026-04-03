#!/usr/bin/env node

import readlineSync from 'readline-sync'

const brainEven = () => {
  console.log('Welcome to the Brain Games!')
  const name = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${name}!`)
  console.log('Answer "yes" if the number is even, otherwise answer "no".')

  for (let i = 0; i < 3; i += 1) {
    const rand = Math.floor(Math.random() * 100)
    console.log(`Question: ${rand}`)
    const userAnswer = readlineSync.question('Your answer: ')

    const correctAnswer = rand % 2 === 0 ? 'yes' : 'no'

    if (userAnswer === correctAnswer) {
      console.log('Correct!')
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
      console.log(`Let's try again, ${name}!`)
      return
    }
  }

  console.log(`Congratulations, ${name}!`)
}

brainEven()