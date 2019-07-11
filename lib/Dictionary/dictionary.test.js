const test = require('ava')

const Dictionary = require('./Dictionary')

test('Dictionary must be an function', t => {
    t.is(typeof Dictionary, 'function')
})

test('should include values to a Dictionary', t => {
    const numberDictionary = new Dictionary()

    const result1 = numberDictionary.set('one', 1)
    const result2 = numberDictionary.set('two', 2)

    t.is(result1, true)
    t.is(result2, true)
    t.is(numberDictionary.hasKey('one'), true)
    t.is(numberDictionary.hasKey('two'), true)
})

test('should not allow to include repeated values to a Dictionary', t => {
    const numberDictionary = new Dictionary()

    const result1 = numberDictionary.set('one', 1)
    const result2 = numberDictionary.set('one', 1)
    const result3 = numberDictionary.set('one', 2)

    t.is(result1, true)
    t.is(result2, false)
    t.is(result3, false)
    t.is(numberDictionary.hasKey('one'), true)
})

test('should verify if a key exist in the Dictionary', t => {
    const numberDictionary = new Dictionary()

    numberDictionary.set('one', 1)
    numberDictionary.set('two', 2)
    numberDictionary.set('three', 3)
    numberDictionary.set('four', 4)

    t.is(numberDictionary.hasKey('one'), true)
    t.is(numberDictionary.hasKey('two'), true)
    t.is(numberDictionary.hasKey('three'), true)
    t.is(numberDictionary.hasKey('four'), true)
})
