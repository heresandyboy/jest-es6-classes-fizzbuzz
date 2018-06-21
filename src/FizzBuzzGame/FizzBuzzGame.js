export default class FizzBuzzGame {
    constructor(rules) {
        this.rules = rules
    }
    
    say(number) {
        return this.rules.forNumber(number).says()    
    }
}