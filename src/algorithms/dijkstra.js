/**
 * This function will take in a grid, start node and end node
 * and return a list of nodes visited by dijkstras alg shown below.
 *
 * function Dijkstra(Graph, source):
 *      2      
 *      3      for each vertex v in Graph.Vertices:
 *      4          dist[v] ← INFINITY
 *      5          prev[v] ← UNDEFINED
 *      6          add v to Q
 *      7      dist[source] ← 0
 *      8      
 *      9      while Q is not empty:
 *     10          u ← vertex in Q with min dist[u]
 *     11          remove u from Q
 *     12          
 *     13          for each neighbor v of u still in Q:
 *     14              alt ← dist[u] + Graph.Edges(u, v)
 *     15              if alt < dist[v]:
 *     16                  dist[v] ← alt
 *     17                  prev[v] ← u
 *     18
 *     19      return dist[], prev[]
 *
 * @param {*} grid 
 * @param {*} startNode 
 * @param {*} endNode 
 */
export function dijkstra(grid, startNode, endNode) {
    
    const visitedNodes = [];
    const unvisitedNodes = grid.flat();
    
    for (let node of unvisitedNodes) {
      node.distance = Infinity;
      node.prev = undefined;
    }
    
    startNode.distance = 0;
    console.log(grid);
    console.log(unvisitedNodes);
    

    // while(unvisitedNodes && unvisitedNodes.length) {
        
    // }
    
}

