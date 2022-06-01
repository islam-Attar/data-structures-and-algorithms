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
    breadthFirst(start) {


        let queue = [];
        let visited = {};
        let result = [];
        let current;

        queue.push(start);
        while (queue.length) {
            current = queue.shift();
            result.push(current);
            let neighbors = this.getNeighbors(current);

            for (let i = 0; i < neighbors.length; i++) {
                if (!visited[neighbors[i].vertex]) {
                    queue.push(neighbors[i].vertex);
                }
            }
        }
        return result;
    }

    businessTrip(graph, cities) {
        let cost = 0;
        for (let i = 0; i < cities.length; i++) {
            let neighbors = graph.getNeighbors(cities[i]);
            for (let j = 0; j < neighbors.length; j++) {
                if (neighbors[j].vertex === cities[i + 1]) {
                    cost += neighbors[j].weight;
                }
            }
        }
        if (cost === 0) return null
    
        return cost;
    }

}
module.exports = Graph;