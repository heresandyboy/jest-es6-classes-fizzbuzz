export default class FizzBuzzGame {
    say(number) {
        if (number % 3 === 0)
            return "Fizz"
        else if (number === 5)
        return "Buzz"
        else
            return "1"
    }
}