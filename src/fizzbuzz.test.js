import FizzBuzzGame from './FizzBuzzGame'

let _fizzBuzzGame = undefined

beforeEach(() => {
    _fizzBuzzGame = new FizzBuzzGame()
})

describe('a game of fizzbuzz', () => {
    
    test('is defined', () => {       
        expect(_fizzBuzzGame).toBeDefined()
    })

    describe('for the number 1', () => {
        test('says "1"', () => {          
            expect(_fizzBuzzGame.say(1)).toEqual("1")
        })
    })

    describe('for multiples of three says "Fizz"', () => {
        test('for the number 3 says "Fizz"', () => {
            expect(_fizzBuzzGame.say(3)).toEqual("Fizz")
        })
    })
  
})