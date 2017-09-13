var View = require("ui/core/view")
var Locale = require("~/inc/locale").Locale
var Frame = require("ui/frame")

exports.startup = (args) => { 
    let parent = args.object
    Locale.applyLocale(parent)
}

exports.addCharacter = (args) => {
    let sender = args.object
    let view = sender.parent.parent.parent
    let removeGrid = View.getViewById(view,"removeGrid")
    getChildren(removeGrid).filter((cell) => {
        return (cell.col == sender.col && cell.row == sender.row)
    }).map((cell) => {
        let text = cell.text
        text = text.substring(text.indexOf(":")+1).trim()
        let number = parseInt(text)+1
        cell.text = cell.text.replace(text,number)
    })
}

exports.removeCharacter = (args) => {
    let cell = args.object
    let text = cell.text
    text = text.substring(text.indexOf(":")+1).trim()
    let number = parseInt(text)
    if (number != 0)
        number--
    cell.text = cell.text.replace(text,number)
}

function getChildren(view) {
    let result = []
    view.eachChild((child) => {
        result.push(child)
        result.push(...getChildren(child))
    })
    return result
}

