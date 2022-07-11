import Node from "./Node";
import "./PathfindingVisualizer.css"

const GRID_ROWS = 10
const GRID_COLS = 10


const PathfindingVisualizer = () => {
  // const [grid, setGrid] = useState([]);
  const grid = [];
  for (let i = 0; i < GRID_ROWS; i++)
    for (let j = 0; j < GRID_COLS; j++) 
        grid.push([i, j]);

  return (
    <div className="gridContainer">
     {grid.map((i) => <Node></Node>)} 
    </div>
  );
}
 
export default PathfindingVisualizer;