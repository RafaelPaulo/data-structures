/**
 * set
 * delete
 * has
 * get
 * clear
 * size
 * keys
 * values
 */

const Dictionary = function () {
    const dictionary = {}

    return {
        set (key, value) {
            if (!key || !value || dictionary[key]) {
                return false
            }

            dictionary[key] = value

            return true
        },

        hasKey (key) {
            if (dictionary[key]) {
                return true
            }

            return false
        },
    }
}

module.exports = Dictionary
