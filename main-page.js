var View = require("ui/core/view")
var Locale = require("~/inc/locale.js").Locale
var Frame = require("ui/frame")

exports.startup = (args) => {
    let parent = args.object
    Locale.applyLocale(parent)
}

exports.serverModeTap = (args) => {
    var navigationOptions={
        moduleName:'pages/serverMode/serverMode',
        context:{}
    }
    Frame.topmost().navigate(navigationOptions);
}

Role = {
    MERLINO: 0,
    NORMALE_CATTIVO: 1,
    NORMALE_BUONO: 2,
    MORDRED: 3,
    MORGANA: 4,
    PERCIVAL: 5,
    ASSASSINO: 6,
    OBERON: 7
}

