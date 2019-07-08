const Set = function () {
    let set = {}

    return {
        add (value) {
            if (value && !this.has(value)) {
                set[value] = value
                return true
            }
            return false
        },

        has (value) {
            if (Object.prototype.hasOwnProperty.call(set, value)) return true
            return false
        },

        clear () {
            set = {}
            return true
        },

        delete (value) {
            if (this.has(value)) {
                delete set[value]
                return true
            }

            return false
        },

        get size () {
            return Object.keys(set).length
        },

        values () {
            return Object.values(set)
        },

        union (secondSet) {
            const unionSet = new Set()

            this.values(set).forEach(value => unionSet.add(value))
            secondSet.values().forEach(value => unionSet.add(value))

            return unionSet
        },

        intersection (secondSet) {
            const resultSet = new Set()
            const innerSetValues = this.values()
            const secondSetValues = secondSet.values()

            let biggerSet = secondSetValues
            let smallerSet = innerSetValues

            if (innerSetValues.length > secondSetValues.length) {
                biggerSet = innerSetValues
                smallerSet = secondSetValues
            }

            smallerSet.forEach(value => biggerSet.includes(value) ? resultSet.add(value) : false)

            return resultSet
        },

        difference (secondSet) {
            const resultSet = new Set()
            const innerSetValues = this.values()

            innerSetValues.forEach(value => (!secondSet.has(value)) ? resultSet.add(value) : false)

            return resultSet
        },

        isSubsetOf (secondSet) {
            let isSubset = true
            const innerSetValues = this.values()

            if (this.size > secondSet.size) {
                return false
            }

            innerSetValues.forEach(value => {
                if (!secondSet.has(value)) {
                    isSubset = false
                }
            })

            return isSubset
        },
    }
}

module.exports = Set
