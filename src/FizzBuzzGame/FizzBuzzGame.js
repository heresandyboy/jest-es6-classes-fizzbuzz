export default class FizzBuzzGame {
    constructor(input) {
        this.rules = input.rules
    }
    say(number) {
        console.log(this.rules)
        // for (rule of this.rules) {
        //     console.log(rule)
        // }

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