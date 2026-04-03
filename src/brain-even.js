import readlineSync from 'readline-sync'

export const even = (userName) => {
    console.log(`Answer "yes" if the number is even, otherwise answer "no".`)
    
    for (let i = 0; i < 3; i += 1) {
        const rand = Math.floor(Math.random() * 100)
        console.log(`Question:`, rand)
        const userAnswer = readlineSync.question('Your answer: ')
        
        const correctAnswer = rand % 2 === 0 ? 'yes' : 'no'
        
        if (userAnswer === correctAnswer) {
            console.log('Correct!')
        } else {
            console.log(`Let's try again, ${userName}!`)
            return
        }
    }
    
    console.log(`Congratulations, ${userName}!`)
}
