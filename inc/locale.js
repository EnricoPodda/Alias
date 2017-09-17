var View = require("ui/core/view")
var Themes = require("./themes")
var Utilities = require("~/inc/utilities").Utilities

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
        Utilities.getChildren(view).map((child) => {
            tags.filter((tag) => {
                return child[tag] !== undefined
            }).map((tag) => {
                this.applyLocaleForTag(child,tag)
            })
        })
    }

    applyLocaleForTag(view,tag) {
        let tmp = view[tag]
        let locale = this.getCurrentLocale()
        while (tmp.includes("[[") && tmp.includes("]]")) {
            var varName = tmp.substring(tmp.indexOf("[[")+2,tmp.indexOf("]]"))
            if (locale[varName.trim()] !== undefined) {
                tmp = tmp.replace("[["+varName+"]]",locale[varName.trim()])
            }
            else
                tmp = tmp.replace("[[","").replace("]]")
        }
        view[tag] = tmp
    }

    localeToVar(text) {
        let locale = this.getCurrentLocale()
        return Utilities.invertObject(locale)[text]
    }

    getCurrentLocale() {
        return Themes[this.getCurrentTheme()][this.getCurrentLanguage()]
    }

    getCurrentLanguage() {
        //TODO
        return "it"
    }

    getCurrentTheme() {
        //TODO
        return "avalon"
    }
}

exports.Locale = new Locale()