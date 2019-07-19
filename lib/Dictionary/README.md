# Dictionary

## Definition

A Dictionary (or Map) is an unordered collection of elements, stored in `[key, value]` fashion, with no duplicate keys.

Dictionaries are very similar to [Sets](../Set); however, whilst a Set treats _values_ as the main element `[key, key]`, Dictionaries stores `[key, value]` pairs using the `key` to find elements.

_key words_: **unique keys**, **unordered**, **`[key, value]`**

## When should I use it?

- situations where a key can be viewed as a unique identifier for the object
- can be faster to find elements depending on the implementation (e.g. Hash Tables)

## Implementation

[click here](./Dictionary.js) to see the implementation in JavaScript.

### Methods implemented:

- `set`
- `hasKey`
- `get`: get element by key
- `clear`: remove *all* elements from the Dictionary.
- `delete`: remove *an* element from the Dictionary.
- `size`
- `keys`
- `values`

## Related Data Structures

- [Set](../Set)
- [HashTable](../HashTable)
