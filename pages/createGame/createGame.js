var View = require("ui/core/view")
var Locale = require("~/inc/locale").Locale
var Utilities = require("~/inc/utilities").Utilities
var Role = require("~/inc/role").Role
var Frame = require("ui/frame")

var players = []

exports.startup = (args) => { 
    let parent = args.object
    Locale.applyLocale(parent)
}

exports.addCharacter = (args) => {
    let sender = args.object
    let view = sender.parent.parent.parent
    let removeGrid = View.getViewById(view,"removeGrid")
    Utilities.getChildren(removeGrid).filter((cell) => {
        return (cell.col == sender.col && cell.row == sender.row) //Seleziona la cella corrispondente
    }).map((cell) => {
        let text = cell.text
        text = text.substring(text.indexOf(":")+1).trim() //Seleziona il counter
        let number = parseInt(text)+1 //Lo incrementa di uno
        cell.text = cell.text.replace(text,number) //Inserisce il nuovo counter
    })
    players.push(new Role(sender.character))
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

function modSideCounter(view,character,value) {
    if (isGood(character))
        var target = View.getViewById(view,"blueSide")
    else
        var target = View.getViewById(view,"redSide")
    
}
