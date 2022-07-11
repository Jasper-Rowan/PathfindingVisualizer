import Node from "./Node";
import "./PathfindingVisualizer.css"

const GRID_ROWS = 20
const GRID_COLS = 20


const PathfindingVisualizer = () => {
  // const [grid, setGrid] = useState([]);
  const gridRows = [];
  const gridCols = [];
  for (let i = 0; i < GRID_ROWS; i++) 
    gridRows.push(i)
  for (let j = 0; j < GRID_COLS; j++) 
      gridCols.push(j);
  
    

  return (
    <div className="gridContainer">
    {gridRows.map((i) => {
    return (
      <div style={{ display: "flex", width: "100%" }}>
        {gridCols.map((i) => (
          <Node></Node>
        ))}
      </div>
    );
    } )}
    
    
    </div>
  );
}
 
export default PathfindingVisualizer;