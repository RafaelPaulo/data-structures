# Hash Table

## Definition

Hash Table is data structure that maps keys to values (`[key, value]`). It uses a hash function to compute an index into an array of buckets or slots, from which the desired value can be found.

![Hash table in a illustrative way](./img/hash-table.png)

There are two key parts in the making of hash tables: hashing and collisions.

### Hashing

A `hashing` consist of finding a value in a data structure as fast as possible, without having to search through everything. Constant time or `O(n)` in Big O Notation.

Giving the fact that we already know the key to access a value in a hash table.

_key words_:

## When should I use it?

Hash tables are good for doing a quick search on things.

## Implementations

As previously seen [above](#definition), there're many ways to implement the Hash algorithm. In this project you'll find the following implementations:

- [hash lose lose](./HashTable.js)
- [separate chaining](./HashTable.js)
- [linear probing](./HashTable.js)
- [double hashing](./HashTable.js)

### Methods implemented:

- `put`
- `get`
- `remove`

## Fun Facts

## Related Data Structures

- [Dictionary](../Dictionary)
- [Set](../Set)
