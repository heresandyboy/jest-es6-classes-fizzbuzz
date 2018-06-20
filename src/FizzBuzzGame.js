export default class FizzBuzzGame {
    say(number) {
        if (number % 3 === 0)
            return "Fizz"
        else if (number % 5 === 0)
        return "Buzz"
        else if (number === 7)
            return "FizzBuzz"
        else
            return "1"
    }
}