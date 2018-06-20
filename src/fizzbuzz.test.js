import FizzBuzzGame from './FizzBuzzGame'

let _fizzBuzzGame = undefined

const setupGame = (i) => {    
    _fizzBuzzGame = new FizzBuzzGame()
}

describe('a game of fizzbuzz', () => {
    setupGame()
    test('is defined', () => {
        expect(_fizzBuzzGame).toBeDefined()
    })    
})