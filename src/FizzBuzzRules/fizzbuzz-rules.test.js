import FizzBuzzRules from './FizzBuzzRules'
import FizzBuzzRule from './FizzBuzzRule'
import * as data from '../rules.json'

let _fizzBuzzRules = undefined
let _rulesInput = data

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
        expect(_fizzBuzzRules.rulesInput).toEqual(_rulesInput)
    })

    test('rules can be retrieved', () => {
        expect(_fizzBuzzRules.rules).toBeDefined()
    })
    
    test('rules are an array of FizzBuzzRule', () => {
        expect(_fizzBuzzRules.rules).toEqual(     
            expect.arrayContaining([      
              expect.any(FizzBuzzRule)
            ])
          )
    })


})


describe('fizzbuzz rules json file spec', () => {

    test('rules input is defined', () => {
        expect(_rulesInput).toBeDefined()
    })

    test('rules input is an array of rules', () => {
        expect(_rulesInput.rules).toBeInstanceOf(Array)
    })

    test('rules input items have a number and a phrase property', () => {
        expect(_rulesInput.rules).toEqual(     
            expect.arrayContaining([      
              expect.objectContaining({ 
                number: expect.any(Number),
                phrase: expect.any(String),
              })
            ])
          )
    })

})