# Singly Linked List
A linked list is typically used for collecting sequences of objects requiring the need for efficient addition and removal of elements from the middle of the sequence.

## Challenge
Create a Linked List class
Within your Linked List class, include a head property.
Upon instantiation, an empty Linked List should be created.
also 3 methods that are insert, includes, and toString


## Approach & Efficiency
while loop because this kind of loop does't have starting and ending values so it will be flixable with the condition untill the condition is fale. insert --> BigO O(1). include --> BigO O(n). toString --> BigO O(n). append --> BigO O(1).

Linked lists hold two main pieces of information (the value and pointer) per node. This means that the amount of data stored increases linearly with the number of nodes in the list. Therefore, the space complexity of the linked list is linear:

**Space - O(n)** for all of them
