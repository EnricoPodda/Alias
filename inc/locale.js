var View = require("ui/core/view")
var Themes = require("./themes")

/**
 * Lo scopo di questa classe è di occuparsi di tutte le sostituzioni dovute al variare della lingua
 * Viene richiamata ad ogni evento "loaded" di ogni pagina,
 * I dati vengono caricati da languages.js
 */

 //Queste sono le varie proprietà che verrano controllate per il rimpiazzo delle lingua
 let tags = [
     "text",
     "src",
     "title"
 ]

class Locale  {

    applyLocale(view) {
        let locale = Themes[this.getCurrentTheme()][this.getCurrentLanguage()]

        this.getChildren(view).map((child) => {
            tags.filter((tag) => {
                return (
                    child[tag] !== undefined
                )
            }).map((tag) => {
                let tmp = child[tag]
                while (tmp.includes("[[") && tmp.includes("]]")) {
                    var varName = tmp.substring(tmp.indexOf("[[")+2,tmp.indexOf("]]"))
                    if (locale[varName.trim()] !== undefined) {
                        tmp = tmp.replace("[["+varName+"]]",locale[varName.trim()])
                    }
                    else
                        tmp = tmp.replace("[[","").replace("]]")
                }
                child[tag] = tmp
            })
        })
    }

    getCurrentLanguage() {
        //TODO
        return "it"
    }

    getCurrentTheme() {
        //TODO
        return "avalon"
    }

    getChildren(view) {
        let result = []
        view.eachChild((child) => {
            result.push(child)
            result.push(...this.getChildren(child))
        })
        return result
    }
}

exports.Locale = new Locale()