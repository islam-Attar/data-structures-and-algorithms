'use strict';

const LinkedList = require('../linked-list/index.js');
const Node = require('./node');
const Edge = require('./edge');

class Graph {
    constructor() {
        this.adjacencyList = new LinkedList();
    }

    addNode(vertex) {
        vertex = new Node(vertex);
        this.adjacencyList.append(vertex);
    }

    addEdge(vertex1, vertex2, weight = 0) {
        let node = this.adjacencyList.head;

        while (node) {

            if (node.value.value === vertex1) {

                node.value.edges.push(new Edge(vertex2, weight));
            }
            node = node.next;
        }
    }
    getNodes() {
        let node = this.adjacencyList.head;
        let vertices = [];
        while (node) {
            vertices.push(node.value.value);
            node = node.next;
        }
        return vertices;
    }

    getNeighbors(vertex) {

        if (!this.adjacencyList.head) return null;
        let node = this.adjacencyList.head;
        
        while (node) {
            if (node.value.value === vertex) {
                return node.value.edges;
            }
            node = node.next;
        }
    }

    size() {
        let node = this.adjacencyList.head;
        let size = 0;
        while (node) {
            size++;
            node = node.next;
        }
        return size;
    }
}
module.exports = Graph;