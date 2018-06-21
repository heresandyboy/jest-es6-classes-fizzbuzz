import FizzBuzzGame from './FizzBuzzGame'
import FizzBuzzRules from '../FizzBuzzRules/FizzBuzzRules'
import * as data from '../rules.json'

let _fizzBuzzGame = undefined

beforeEach(() => {
    _fizzBuzzGame = new FizzBuzzGame(new FizzBuzzRules(data))
})

describe('a game of fizzbuzz', () => {

    test('is defined', () => {
        expect(_fizzBuzzGame).toBeDefined()
    })

    describe('has the following basic rules', () => {

        describe('for the number 1', () => {
            test('says 1', () => {
                expect(_fizzBuzzGame.say(1)).toEqual(1)
            })
        })

        describe('for multiples of three says "Fizz"', () => {
            test('for the number 3 says "Fizz"', () => {
                expect(_fizzBuzzGame.say(3)).toEqual("Fizz")
            })
            test('for the number 6 says "Fizz"', () => {
                expect(_fizzBuzzGame.say(6)).toEqual("Fizz")
            })
        })

        describe('for multiples of five says "Buzz"', () => {
            test('for the number 5 says "Buzz"', () => {
                expect(_fizzBuzzGame.say(5)).toEqual("Buzz")
            })
            test('for the number 10 says "Buzz"', () => {
                expect(_fizzBuzzGame.say(10)).toEqual("Buzz")
            })
        })

        describe('for multiples of both 3 and 5 says "FizzBuzz"', () => {
            test('for the number 15 says "FizzBuzz"', () => {
                expect(_fizzBuzzGame.say(15)).toEqual("FizzBuzz")
            })
            test('for the number 30 says "FizzBuzz"', () => {
                expect(_fizzBuzzGame.say(30)).toEqual("FizzBuzz")
            })
        })

    })

    describe('has rules that can be set', () => {
        test('rules are defined', () => {
            expect(_fizzBuzzGame.rules).toBeDefined()
        })

        test('rules are of an Array of FizzBuzzRule', () => {
            expect(_fizzBuzzGame.rules).toBeInstanceOf(FizzBuzzRules)
        })
    })
})