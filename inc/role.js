var Utilities = require("~/inc/utilities").Utilities

class Role {
    rolesToText(role) {
        let rawText = Utilities.invertObject(this.RoleType)[role]
    }

    constructor(role) {
        this.role = parseInt(role)
    }

    isGood() {
        switch (this.role) {
            case RoleType.SEER:
            case RoleType.POWERLESS_GOOD:
            case RoleType.SEER_HELPER:
                return true
            default:
                return false
        }
    }

    isEvil() {
        return !isGood()
    }
}

RoleType = {
    SEER: 0,
    POWERLESS_EVIL: 1,
    POWERLESS_GOOD: 2,
    OCCULTED_ONE: 3,
    ANTI_SEER: 4,
    SEER_HELPER: 5,
    ASSASSIN: 6,
    CONFUSED_ONE: 7
}

exports.Role = Role
exports.RoleType = RoleType
