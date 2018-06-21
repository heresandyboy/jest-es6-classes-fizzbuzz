import FizzBuzzRules from './FizzBuzzRules'
import FizzBuzzRule from './FizzBuzzRule'
import * as data from '../rules.json'

let _fizzBuzzRules = undefined
let _fizzBuzzRule = undefined
let _rulesInput = data



describe('FizzBuzzRules spec', () => {
    beforeEach(() => {
        _fizzBuzzRules = new FizzBuzzRules(_rulesInput)    
    })
    
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


describe('FizzBuzzRule spec', () => {
    beforeEach(() => {
        _fizzBuzzRule = new FizzBuzzRule()
    })

    test('has a number propety of type number and phrase of type string', () => {
        expect(typeof _fizzBuzzRule.number).toBe("number")
        expect(typeof _fizzBuzzRule.phrase).toBe("string")
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