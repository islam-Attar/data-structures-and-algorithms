'use strict';

const Graph = require('./graph');


describe('Graph', () => {
  it('Node can be successfully added to the graph', () => {
    const graph = new Graph();
    graph.addNode('A');
    expect(graph.adjacencyList.head.value.value).toBe('A');
  });

  it('An edge can be successfully added to the graph', () => {
    const graph = new Graph();
    graph.addNode('A');
    graph.addNode('B');
    graph.addEdge('A', 'B');
    console.log(graph.adjacencyList.head.value.edges[0].vertex);
    expect(graph.adjacencyList.head.value.edges[0].vertex).toBe('B');
  });


  it('A collection of all nodes can be properly retrieved from the graph', () => {
    const graph = new Graph();
    graph.addNode('A');
    graph.addNode('B');
    graph.addNode('C');
    expect(graph.getNodes()).toEqual(['A', 'B', 'C']);
  });


  it('All appropriate neighbors can be retrieved from the graph and returned with the weight between nodes included', () => {
    const graph = new Graph();
    graph.addNode('A');
    graph.addNode('B');
    graph.addNode('C');
    graph.addEdge('A', 'B');
    graph.addEdge('A', 'C');
    expect(graph.getNeighbors('A')).toEqual([
      { vertex: 'B', weight: 0 },
      { vertex: 'C', weight: 0 },
    ]);
  });


  it('The proper size is returned, representing the number of nodes in the graph', () => {
    const graph = new Graph();
    graph.addNode('A');
    graph.addNode('B');
    graph.addNode('C');
    expect(graph.size()).toBe(3);
  });


  it('A graph with only one node and edge can be properly returned', () => {
    const graph = new Graph();
    graph.addNode('A');
    graph.addEdge('A', 'B');
    expect(graph.getNodes()).toEqual(['A']);
    expect(graph.getNeighbors('A')).toEqual([{ vertex: 'B', weight: 0 }]);
  });


  it('An empty graph properly returns null', () => {
    const graph = new Graph();
    expect(graph.getNeighbors('A')).toBe(null);
  });

  it('breadth first', () => {
    const graph = new Graph();

    graph.addNode('A');
    graph.addNode('B');
    graph.addNode('C');
    graph.addNode('D');
    graph.addNode('E');

    graph.addEdge('A', 'B');
    graph.addEdge('A', 'C');
    graph.addEdge('B', 'D');
    graph.addEdge('C', 'E');

    expect(graph.breadthFirst('A')).toEqual(['A', 'B', 'C', 'D', 'E']);
  });

  it('businessTrips that returns the cost or null', () => {
    const graph = new Graph();
    graph.addNode('Pandora');
    graph.addNode('Arendelle');
    graph.addNode('Metroville');
    graph.addNode('Monstropolis');
    graph.addNode('Naboo');
    graph.addNode('Narnia');
    graph.addEdge('Pandora', 'Arendelle', 150);
    graph.addEdge('Pandora', 'Metroville', 82);
    graph.addEdge('Arendelle', 'Monstropolis', 42);
    graph.addEdge('Arendelle', 'Metroville', 99);
    graph.addEdge('Metroville', 'Monstropolis', 105);
    graph.addEdge('Metroville', 'Naboo', 26);
    graph.addEdge('Monstropolis', 'Naboo', 73);
    graph.addEdge('Naboo', 'Narnia', 250);
    graph.addEdge('Monstropolis', 'Narnia', 37);

    expect(graph.businessTrip(graph, ['Pandora', 'Metroville'])).toBe(82);
    expect(graph.businessTrip(graph, ['Arendelle', 'Monstropolis', 'Naboo'])).toBe(115);
    expect(graph.businessTrip(graph, ['Pandora', 'Arendelle', 'Metroville', 'Naboo'])).toBe(275);
    expect(graph.businessTrip(graph, ['Pandora', 'Narnia'])).toBe(null);
  });
  
  it('Return A collection of nodes in their pre-order depth-first traversal order', ()=>{
    const graph = new Graph();
    graph.addNode('A');
    graph.addNode('B');
    graph.addNode('C');
    graph.addNode('D');
    graph.addNode('E');
    graph.addEdge('A', 'B');
    graph.addEdge('A', 'C');
    graph.addEdge('B', 'D');
    graph.addEdge('C', 'E');
    expect(graph.depthFirst('A')).toEqual(['A', 'B', 'D', 'C', 'E']);
  });
});