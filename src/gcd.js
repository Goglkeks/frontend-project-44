import { runGame } from '../index.js'

const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min //NOSONAR
}

const findGCD = (a, b) => {
  while (b !== 0) {
    const temp = b
    b = a % b
    a = temp
  }
  return a
}

const generateRound = () => {
  const a = getRandomNumber(1, 100)
  const b = getRandomNumber(1, 100)
  const question = `${a} ${b}`
  const correctAnswer = String(findGCD(a, b))
  return { question, correctAnswer }
}

export default () => {
  const description = 'Find the greatest common divisor of given numbers.'
  runGame(description, generateRound)
}