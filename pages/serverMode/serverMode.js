var View = require("ui/core/view")
var Locale = require("~/inc/locale").Locale
var Frame = require("ui/frame")

exports.startup = (args) => {
    let parent = args.object
    Locale.applyLocale(parent)
}

exports.createGameTap = (args) => {
    var navigationOptions={
        moduleName:'pages/createGame/createGame',
        context:{}
    }
    Frame.topmost().navigate(navigationOptions);
}