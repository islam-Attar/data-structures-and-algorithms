# Trees
Tree is a data structure that has many types Binary tree (k = 2) , binary search trees(left values are lesser than the root value,the right values are greater than the root value) and K-ary trees(k > 2).

## Challenge
The challenge asked us to create a binary tree class has preorder inOrder and postorder travers  methods and binary search trees which is a sub-class of the binary tree class with two newer methods ( add , contains)

## Approach & Efficiency
i used recursion for the traversal methods and while loop with if statement to rstrict all the odds.

## Time and space complexity


### **Time complexity**
T(n/2) for left sub-tree and T(n/2) for right sub-tree and '1' for verifying the base case.

On Simplifying (1) you can prove that the traversal(either `inOrder` or `preOrder` or `postOrder`) is **bigO(n)**.

`add` has time complexity of `BigΘ log(n)` because we every time we search n/2

`contains` has time complexity of **BigO (n)** as `worst case scenario` but on `average` it would be **Big O(h)** where h is the height of the tree


### **Space complexity**

The space complexity of `all of them` would be **BigO(n)** with 'n' being the depth of the tree


