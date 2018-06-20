import FizzBuzzGame from './FizzBuzzGame'

let _fizzBuzzGame = undefined

const setupGame = (i) => {    
    _fizzBuzzGame = new FizzBuzzGame()
}

describe('a game of fizzbuzz', () => {
    
    test('is defined', () => {
        setupGame()
        expect(_fizzBuzzGame).toBeDefined()
    })
  
})