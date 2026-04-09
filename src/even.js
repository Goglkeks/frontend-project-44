import { runGame } from '../index.js'

const generateRound = () => {
  const rand = Math.floor(Math.random() * 100) // NOSONAR
  const question = String(rand)
  const correctAnswer = rand % 2 === 0 ? 'yes' : 'no'

  return { question, correctAnswer }
}

export default () => {
  const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".'
  runGame(gameDescription, generateRound)
}
