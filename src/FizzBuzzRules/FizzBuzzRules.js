import FizzBuzzRule from "./FizzBuzzRule";

class FizzBuzzRules {
    constructor(rulesInput) {
        this.rulesInput = rulesInput
        this.rules = this._mapRules(rulesInput.rules)
    }

    _mapRules(rules) {
        let arr = []

        for (let rule of rules) {
            arr.push(new FizzBuzzRule(rule.number, rule.phrase))        
        }
        return arr
    }

    forNumber = (number) => ({        
        says: () => {
            let str = ""
            for (const rule of this.rules) {
                if (rule.matches(number)) {
                    str += rule.phrase
                }              
            }
            if (str === "") str = number
            return str
        }
    }) 
}

export default FizzBuzzRules
