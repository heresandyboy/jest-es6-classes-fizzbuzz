import FizzBuzzRules from './FizzBuzzRules'
import * as data from '../rules.json'

let _fizzBuzzRules= undefined
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
})


describe('fizzbuzz rules json file spec', () => {
    
    test('rules input is defined', () => {       
        expect(_rulesInput).toBeDefined()
    })

    // test('JSON.parse throws error if input is not valid json', () => {
    //     _rulesInput = "not valid json"
    //     expect(() => {
    //         JSON.parse(_rulesInput)
    //     }).toThrow()
    // })

    test('rules input is an array of rules', () => {       
        console.log(data)
        console.log(_rulesInput)
    
        expect(_rulesInput.rules).toBeInstanceOf(Array)
    })

})

function isJson(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        console.log("error", e)
        return false;
    }
    return true;
}