const test = require('ava')

const Set = require('./Set')

test('should add a value to the Set', t => {
    const foodSet = new Set()
    const value = 'poutine'
    const result = foodSet.add(value)

    t.is(result, true)
    t.is(foodSet.has(value), true)
})

test('should not allow a value to be added twice in a Set', t => {
    const foodSet = new Set()
    const value = 'poutine'
    foodSet.add(value)
    const result = foodSet.add(value)

    t.is(result, false)
})

test('should not allow to add empty (falsy) values', t => {
    const foodSet = new Set()
    foodSet.add('poutine')

    t.is(foodSet.add(), false)
    t.is(foodSet.add(''), false)
    t.is(foodSet.add(NaN), false)
    t.is(foodSet.add(null), false)
    t.is(foodSet.add(undefined), false)
})

{
    // should verify if a value exists in a Set

    const foodSet = new Set()

    foodSet.add('poutine')

    if (foodSet.has('poutine') !== true) {
        throw new Error('should return true')
    }

    if (foodSet.has('banana') !== false) {
        throw new Error('should return false when value is no in the Set')
    }
}

{
    const foodSet = new Set()

    foodSet.add('poutine')

    if (foodSet.clear() !== true) { throw new Error('should return true') }

    if (foodSet.has('poutine') !== false) {
        throw new Error('should return false when value is no in the Set')
    }
}

{
    const foodSet = new Set()

    foodSet.add('poutine')
    foodSet.add('ribs')

    foodSet.delete('poutine')

    if (
        foodSet.has('poutine') !== false ||
        foodSet.has('ribs') !== true
    ) {
        throw new Error('should successfully delete item')
    }
}

{
    const foodSet = new Set()

    if (foodSet.size !== 0) {
        throw new Error('the Set should be empty')
    }

    foodSet.add('poutine')
    foodSet.add('ribs')
    foodSet.add('hamburger')
    foodSet.add('maple')
    foodSet.add('maple')

    if (foodSet.size !== 4) {
        throw new Error('should have 4 items in the Set')
    }
}

{
    const foodSet = new Set()

    foodSet.add('poutine')
    foodSet.add('ribs')
    foodSet.add('hamburger')
    foodSet.add('maple')
    foodSet.add('maple')

    const expected = [
        'poutine',
        'ribs',
        'hamburger',
        'maple'
    ]
    console.log(foodSet.values())
    if (JSON.stringify(foodSet.values()) !== JSON.stringify(expected)) {
        throw new Error('should the number of items in the Set')
    }
}

{
    const aSet = new Set()

    aSet.add(1)
    aSet.add(2)
    aSet.add(3)

    const bSet = new Set()

    bSet.add(2)
    bSet.add(3)
    bSet.add(4)

    const abSet = aSet.union(bSet)

    const expected = [1, 2, 3, 4]

    if (JSON.stringify(abSet.values()) !== JSON.stringify(expected)) {
        throw new Error('should be the union of the set A and B')
    }
}

{
    const aSet = new Set()

    aSet.add(1)
    aSet.add(2)
    aSet.add(3)
    aSet.add(4)
    aSet.add(8)

    const bSet = new Set()

    bSet.add(2)
    bSet.add(3)
    bSet.add(4)
    bSet.add(8)

    const abSet = aSet.intersection(bSet)

    const expected = [2, 3, 4, 8]

    if (JSON.stringify(abSet.values()) !== JSON.stringify(expected)) {
        throw new Error('should be the intersection of the set A and B')
    }
}

{
    const aSet = new Set()

    aSet.add(1)
    aSet.add(2)
    aSet.add(3)

    const bSet = new Set()

    bSet.add(2)
    bSet.add(3)
    bSet.add(4)

    const aDiffSet = aSet.difference(bSet)
    const bDiffSet = bSet.difference(aSet)

    let expected = [1]

    if (JSON.stringify(aDiffSet.values()) !== JSON.stringify(expected)) {
        throw new Error('should return the difference of the set A and B')
    }

    expected = [4]

    if (JSON.stringify(bDiffSet.values()) !== JSON.stringify(expected)) {
        throw new Error('should return the difference of the set A and B')
    }
}

{
    const aSet = new Set()

    aSet.add(2)
    aSet.add(3)

    const bSet = new Set()

    bSet.add(1)
    bSet.add(2)
    bSet.add(3)
    bSet.add(4)

    const cSet = new Set()

    cSet.add(3)
    cSet.add(4)

    const isASubOfB = aSet.isSubsetOf(bSet)
    const isASubOfC = aSet.isSubsetOf(cSet)
    const isCSubOfB = cSet.isSubsetOf(bSet)

    if (!isASubOfB) {
        throw new Error('A should be subset of B')
    }

    if (isASubOfC) {
        throw new Error('A should NOT be subset of C')
    }

    if (!isCSubOfB) {
        throw new Error('C should be subset of B')
    }
}
