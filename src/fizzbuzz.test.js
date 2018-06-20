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

    describe('for the number 1', () => {
        test('says "1"', () => {
            setupGame(1)
            expect(_fizzBuzzGame.say()).toEqual("1")
        })
    })
  
})