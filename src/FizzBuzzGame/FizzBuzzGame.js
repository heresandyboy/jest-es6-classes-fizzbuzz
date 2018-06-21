export default class FizzBuzzGame {
    constructor(rules) {
        this.rules = []
    }
    say(number) {
        if (number % 3 === 0 && number % 5 === 0)
            return "FizzBuzz"
        else if (number % 3 === 0)
            return "Fizz"
        else if (number % 5 === 0)
        return "Buzz"
        else
            return "1"
    }
}