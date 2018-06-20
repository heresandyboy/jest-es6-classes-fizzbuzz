import FizzBuzzRules from './FizzBuzzRules'

let _fizzBuzzRules= undefined

beforeEach(() => {
    _fizzBuzzRules = new FizzBuzzRules()
})

describe('a game of fizzbuzz', () => {
    
    test('is defined', () => {       
        expect(_fizzBuzzRules).toBeDefined()
    })
})