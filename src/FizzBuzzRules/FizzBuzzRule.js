class FizzBuzzRule {
    constructor(number, phrase) {
        this.number = number ? number : 0
        this.phrase = phrase ? phrase : ""
    }

    matches(number) {
        return number % this.number ===0
    }   
}
export default FizzBuzzRule