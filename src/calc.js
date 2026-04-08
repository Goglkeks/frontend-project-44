import { runGame } from '../index.js'

const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const getRandomOperation = () => {
  const operations = ['+', '-', '*']
  const index = Math.floor(Math.random() * operations.length)
  return operations[index]
}

const calculate = (a, b, operation) => {
  if (operation === '+') return a + b
  if (operation === '-') return a - b
  return a * b
}

const generateRound = () => {
  const a = getRandomNumber(1, 30)
  const b = getRandomNumber(1, 30)
  const operation = getRandomOperation()
  const question = `${a} ${operation} ${b}`
  const correctAnswer = String(calculate(a, b, operation))
  return { question, correctAnswer }
}

export default () => {
  const description = 'What is the result of the expression?'
  runGame(description, generateRound)
}
