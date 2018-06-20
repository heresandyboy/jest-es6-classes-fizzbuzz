import FizzBuzzGame from './FizzBuzzGame'

let _fizzBuzzGame = undefined

beforeEach(() => {
    _fizzBuzzGame = new FizzBuzzGame()
})

describe('a game of fizzbuzz', () => {
    test('is defined', () => {
        expect(_fizzBuzzGame).toBeDefined()
    })
})