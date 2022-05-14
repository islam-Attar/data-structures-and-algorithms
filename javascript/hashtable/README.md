# Hashtables
hash table, also known as hash map, is a data structure that implements a set abstract data type, a structure that can map keys to values. A hash table uses a hash function to compute an index, also called a hash code, into an array of buckets or slots, from which the desired value can be found

## Challenge
Implement a Hashtable Class with the following methods: `set`, `get`, `hash`, `keys`, and `contains`.

## Approach & Efficiency
`Time complexity is O(1)`.

The hash key is calculated in `O(1)` time complexity as always, and the required location is accessed in `O(1)`.
Insertion: In the best case, the key indicates a vacant location and the element is directly inserted into the hash table.

`space complexity of O(n)`.

Because it depends on the number of elements it currently stores and in real world also on the actual implementation.