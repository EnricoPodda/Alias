class Utilities {
    invertObject(collection) {
        return Object.keys(collection).reduce((accumulator, current) => {
            accumulator[collection[current]] = current
            return accumulator
        },{})
    }
    
    getChildren(view) {
        let result = []
        view.eachChild((child) => {
            result.push(child)
            result.push(...this.getChildren(child))
        })
        return result
    }

    switchCase(string) {
        string = string.split("") //Trasforma la stringa in un array
        return string.reduce((output,character) => {
            if (character == character.toUpperCase())
                output += character.toLowerCase()
            else
                output += character.toUpperCase()
            return output
        },"")
    }
}

exports.Utilities = new Utilities()