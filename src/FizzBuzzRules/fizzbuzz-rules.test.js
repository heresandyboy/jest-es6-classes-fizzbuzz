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
        expect(_fizzBuzzRules.rulesInput).toEqual(_rulesInput)
    })
})


describe('fizzbuzz rules json file spec', () => {
    
    test('rules input is defined', () => {       
        expect(_rulesInput).toBeDefined()
    })

    test('JSON.parse throws error if input is not valid json', () => {
        _rulesInput = "not valid json"
        expect(() => {
            JSON.parse(_rulesInput)
        }).toThrow()
    })

    test('rules input is valid json', () => {       
        expect(isJSON(_rulesInput)).toBe(true)
    })

})

const isJSON = (str) => {
    try {
        const json = JSON.parse(str);
        if (Object.prototype.toString.call(json).slice(8,-1) !== 'Object') {
        return false
        }
    } catch (e) {
        return false
    }
    return true
}