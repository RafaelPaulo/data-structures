const test = require('ava')

const HashTable = require('./HashTable')

test('HashTable must be a function', t => {
    t.is(typeof HashTable, 'function')
})

test('should add a value into the hash table', t => {
    const hashTable = new HashTable()
    const result = hashTable.put('name', 'Rafael Paulo da Silva Queiroz')

    t.is(result, true)
    t.is(hashTable.get('name'), 'Rafael Paulo da Silva Queiroz')
})

test('should get value in the hash table', t => {
    const hashTable = new HashTable()
    hashTable.put('name', 'Rafael')
    hashTable.put('age', 100)

    t.is(hashTable.get('name'), 'Rafael')
    t.is(hashTable.get('age'), 100)
})

test('should remove value from hash table', t => {
    const hashTable = new HashTable()
    hashTable.put('name', 'Rafael')

    t.is(hashTable.get('name'), 'Rafael')
    t.is(hashTable.remove('name'), true)
    t.is(hashTable.get('name'), undefined)
})
