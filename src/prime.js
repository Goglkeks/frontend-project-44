import { runGame } from '../index.js'

const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min //NOSONAR
}

const isPrime = (num) => {
  if (num < 2) return false
  if (num === 2) return true
  if (num % 2 === 0) return false
  
  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) return false
  }
  return true
}

const generateRound = () => {
  const question = getRandomNumber(1, 100)
  const correctAnswer = isPrime(question) ? 'yes' : 'no'
  return { question: String(question), correctAnswer }
}

export default () => {
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".'
  runGame(description, generateRound)
}