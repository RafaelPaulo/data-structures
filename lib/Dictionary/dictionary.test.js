const test = require('ava')

const Dictionary = require('./Dictionary')

test('Dictionary must be a function', t => {
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

test('should verify if a key exists in the Dictionary', t => {
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

test('should remove element by key', t => {
    const numberDictionary = new Dictionary()

    numberDictionary.set('one', 1)

    t.is(numberDictionary.hasKey('one'), true)
    t.is(numberDictionary.delete('one'), true)
    t.is(numberDictionary.hasKey('one'), false)
})

test('should verify when trying to remove a nonexistent element', t => {
    const numberDictionary = new Dictionary()

    t.is(numberDictionary.delete('one'), false)
})

test('should return the number of elements in the Dictionary', t => {
    const numberDictionary = new Dictionary()

    t.is(numberDictionary.size, 0)

    numberDictionary.set('one', 1)
    numberDictionary.set('two', 2)
    numberDictionary.set('three', 3)
    numberDictionary.set('four', 4)

    t.is(numberDictionary.size, 4)
})

test('should remove all elements from Dictionary', t => {
    const numberDictionary = new Dictionary()

    numberDictionary.set('one', 1)
    numberDictionary.set('two', 2)
    numberDictionary.set('three', 3)
    numberDictionary.set('four', 4)

    t.is(numberDictionary.size, 4)
    t.is(numberDictionary.clear(), true)
})

test('should return all keys in the Dictionary', t => {
    const numberDictionary = new Dictionary()
    const expected = ['one', 'two', 'three', 'four']

    numberDictionary.set('one', 1)
    numberDictionary.set('two', 2)
    numberDictionary.set('three', 3)
    numberDictionary.set('four', 4)

    t.deepEqual(numberDictionary.keys(), expected)
})

test('should return all values in the Dictionary', t => {
    const numberDictionary = new Dictionary()
    const expected = [1, 2, 3, 4]

    t.is(numberDictionary.values(), false)

    numberDictionary.set('one', 1)
    numberDictionary.set('two', 2)
    numberDictionary.set('three', 3)
    numberDictionary.set('four', 4)

    t.deepEqual(numberDictionary.values(), expected)
})

test('should get a value in the Dictionary', t => {
    const numberDictionary = new Dictionary()

    numberDictionary.set('one', 1)
    numberDictionary.set('two', 2)
    numberDictionary.set('three', 3)
    numberDictionary.set('four', 4)

    t.is(numberDictionary.get('four'), 4)
})
