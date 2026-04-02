import readlineSync from 'readline-sync'


export const even = () =>{
    console.log(`Answer "yes" if the number is even, otherwise answer "no".`)
    const rand = Math.floor(Math.random() * 100)
    console.log("Question:", rand)
    const userAnswer = readlineSync.question('Your answer: ')
    let correctAnswer

    for (let i = 0; i < 3; i += 1){
        
        if (rand % 2 === 0) {
        correctAnswer = 'yes'
    }
    else
        correctAnswer = 'no'

    if (userAnswer === correctAnswer) {
        console.log('correct!')
    }
    else
        console.log('Ebat')
    }
    return
}