'use strict'
const { it } = require('eslint/lib/rule-tester/rule-tester');
const { BT, BST } = require('../binaryTree');
const node = require('../node');

let tree = null;
let binarySearchTree = null;
describe('testing BT',()=>{
    beforeAll( ()=>{
        let first = new node(1);
        let second = new node(2);
        let third = new node(3);
        let fourth = new node(4);
        let fifth = new node(5);
        let sixth = new node(6);
        let seventh = new node(7);

        first.left = second;
        first.right = third;
        second.left = fourth;
        second.right = fifth;
        third.left = sixth;
        third.right = seventh;

        tree = new BT(first);
    }

    )
    it('testing the root value',()=>{
        expect(tree.root.value).toEqual(1)
    })
    it('testing the preOrder method',()=>{
        let output = [1,2,4,5,3,6,7];
        expect(tree.preOrder()).toEqual(output)

    })
    it('testing the inOrder method',()=>{
        let output = [4,2,5,1,6,3,7];
        expect(tree.inOrder()).toEqual(output)
    })
    it('testing the postOrder method',()=>{
        let output = [4,5,2,6,7,3,1];
        expect(tree.postOrder()).toEqual(output)
    })

    //------------------------------------------------------------------------------
    it('testing findMax in BT',()=>{
        expect(tree.findMax()).toEqual(7)
    })

    // testing edge cases

    it('testing findMax on empty tree',()=>{
        tree = new BT();
        expect(tree.findMax()).toEqual(null)
    })

    it('testing findMax on non numeric tree',()=>{
        tree = new BT(new node('test'));
        expect(tree.findMax()).toEqual('not a number')
    })

    
})

describe('testing BST',()=>{
       beforeAll( ()=>{

        binarySearchTree = new BST();

        binarySearchTree.add(100);
        binarySearchTree.add(60);
        binarySearchTree.add(150);
        binarySearchTree.add(50);
        binarySearchTree.add(80);
        binarySearchTree.add(140);
        binarySearchTree.add(160);
     

    })

    it('testing empty tree',()=>{

         let emptyTree = new BST();
        expect(emptyTree.contains(44)).toBe(false)
    })

    it('testing the root value',()=>{
        expect(binarySearchTree.root.value).toEqual(100)
    })
    it('testing the preOrder method',()=>{
        let output = [100,60,50,80,150,140,160];
        expect(binarySearchTree.preOrder()).toEqual(output)

    })
    it('testing the inOrder method',()=>{
        let output = [50,60,80,100,140,150,160];
        expect(binarySearchTree.inOrder()).toEqual(output)
    })
    it('testing the postOrder method',()=>{
        let output = [50,80,60,140,160,150,100];
        expect(binarySearchTree.postOrder()).toEqual(output)
    })  
    it('testing the contains method',()=>{
        expect(binarySearchTree.contains(160)).toBe(true);
        expect(binarySearchTree.contains(90)).toBe(false);

    })
    it('testing findMax in BST',()=>{
        expect(binarySearchTree.findMax()).toEqual(160)
    })
})
