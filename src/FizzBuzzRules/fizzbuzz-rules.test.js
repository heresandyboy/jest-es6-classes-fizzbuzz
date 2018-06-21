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

    describe('when given rules', () => {

        test('the first rule input is the same as the first rule out', () => {
            expect(_rulesInput.rules[0].number).toEqual(_fizzBuzzRules.rules[0].number)
            expect(_rulesInput.rules[0].phrase).toEqual(_fizzBuzzRules.rules[0].phrase)
        })        
        
        describe('the rules can be checked against a given number', () => {
            test('when checked for a 3 the rules say "Fizz"', () => {
                expect(_fizzBuzzRules.forNumber(3).says()).toEqual("Fizz")
            })
        })
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

    describe('a rule for number 3 phrase Fizz', () => {
        const rule = new FizzBuzzRule(3, "Fizz")
        test('matches when given a three', () => {
            expect(rule.matches(3)).toBe(true)
        })

        test('the returned phrase is Fizz', () => {
            expect(rule.phrase).toEqual("Fizz")
        })
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