const loseloseHashCode = require('./hashes/loseLose')

const HashTable = function () {
    const table = []

    return {
        put (key, value) {
            const position = loseloseHashCode(key)
            table[position] = value
            return true
        },

        get (key) {
            const position = loseloseHashCode(key)
            return table[position]
        },

        remove (key) {
            const position = loseloseHashCode(key)
            if (!table[position]) return false
            table[position] = undefined
            return true
        },

        print () {
            return table.forEach((item, index) => {
                console.log(`${index}: ${item}`)
            })
        },
    }
}

module.exports = HashTable
