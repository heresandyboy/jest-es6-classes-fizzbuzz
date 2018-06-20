import FizzBuzzRules from './FizzBuzzRules'

let _fizzBuzzRules= undefined
let _rulesInput = "rule"

beforeEach(() => {
    _fizzBuzzRules = new FizzBuzzRules(_rulesInput)
})

describe('fizzbuzz rules spec', () => {
    
    test('is defined', () => {       
        expect(_fizzBuzzRules).toBeDefined()
    })

    test('is an instance of FizzBuzzRules', () => {       
        expect(_fizzBuzzRules).toBeInstanceOf(FizzBuzzRules)
    })

    test('rules can be input', () => {      
        expect(_fizzBuzzRules.constructor.classProperty.rulesInput).toEqual(_rulesInput)
    })
})
