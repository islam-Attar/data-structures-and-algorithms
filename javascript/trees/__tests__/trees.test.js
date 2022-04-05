'use strict'
const { it } = require('eslint/lib/rule-tester/rule-tester');
const { BT, BST } = require('../binaryTree');
const node = require('../node');

const KArrayTree = require('../kArrayTree')
const kArrTreeNode = require('../kArrTreeNode');

let tree = null;
let binarySearchTree = null;
let KArrTree = null;
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

        let firstKa = new kArrTreeNode(1);
        let secondKa = new kArrTreeNode(2);
        let thirdKa = new kArrTreeNode(3);
        let fourthKa = new kArrTreeNode(4);
        let fifthKa = new kArrTreeNode(5);
        let sixthKa = new kArrTreeNode(6);
        let seventhKa = new kArrTreeNode(7);
        let eighthKa = new kArrTreeNode(9);
        

        firstKa.child[0] = secondKa;
        firstKa.child[1] = thirdKa;
        secondKa.child[0] = fourthKa;
        secondKa.child[1] = fifthKa;
        thirdKa.child[0] = sixthKa;
        thirdKa.child[1] = seventhKa;
        thirdKa.child[2] = eighthKa;

        KArrTree = new KArrayTree(firstKa);
    })

    it('testing treeFizzBuzz function',()=>{
        let output = ['1','2','Fizz','4','Buzz','Fizz','7','Fizz'];
        expect(KArrTree.treeFizzBuzz()).toEqual(output)
    })

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

    it('testing the breadth method',()=>{
        
        let output = [1,2,3,4,5,6,7];
        expect(tree.breadthFirst()).toEqual(output)
    }) 

    it('testing empty breadth method',()=>{
        let breadthTree = new BT()
        expect(breadthTree.breadthFirst()).toEqual('Empty tree')

    })
     //------------------------------------------------------------------------------ 

    
    


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

