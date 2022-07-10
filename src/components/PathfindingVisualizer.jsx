import Node from "./Node";

const PathfindingVisualizer = () => {
  // const [grid, setGrid] = useState([]);
  const grid = [];
  for (let row = 0; row < 5; row++)
    for (let col = 0; col < 5; col++) 
        grid.push([row, col]);

  return (
    <>
     {grid.map((i) => <Node></Node>)} 
    </>
  );
}
 
export default PathfindingVisualizer;