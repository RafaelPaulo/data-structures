const Dictionary = function () {
    let dictionary = {}

    return {
        set (key, value) {
            if (!key || !value || this.hasKey(key)) {
                return false
            }

            dictionary[key] = value

            return true
        },

        hasKey (key) {
            if (Object.prototype.hasOwnProperty.call(dictionary, key)) {
                return true
            }

            return false
        },

        delete (key) {
            if (key && this.hasKey(key)) {
                delete dictionary[key]
                return true
            }

            return false
        },

        get size () {
            return Object.keys(dictionary).length
        },

        clear () {
            dictionary = {}
            return true
        },

        keys () {
            return Object.keys(dictionary)
        },

        values () {
            if (this.size) {
                return this.keys().map(key => dictionary[key])
            }

            return false
        },

        get (key) {
            if (this.hasKey(key)) {
                return dictionary[key]
            }

            return false
        },
    }
}

module.exports = Dictionary
