import React, { useState } from 'react';
import Node from "./Node";
import "./PathfindingVisualizer.css"

const GRID_ROWS = 20
const GRID_COLS = 20


const PathfindingVisualizer = () => {
  // const [grid, setGrid] = useState([]);
  const gridRows = [];
  const gridCols = [];
  for (let i = 0; i < GRID_ROWS; i++) 
    gridRows.push(i);
  for (let j = 0; j < GRID_COLS; j++) 
    gridCols.push(j);

  const [mousePressed, setMousePressed] = useState(false);

  const mouseDownFunction = function handleMouseDown(row, col) {
    setMousePressed(true);
    console.log(`row ${row} col ${col}`);
  }
  const mouseEnterFunction = function handleMouseEnter(row, col) {
    if (!mousePressed) return;
    console.log(`row ${row} col ${col}`);
  }
  const mouseUpFunction = function handleMouseUp() {
    setMousePressed(false);
  }

  return (
    <div className="gridContainer">
    {gridRows.map((i) => {
    return (
      <div style={{ display: "flex", width: "100%" }}>
        {gridCols.map((j) => (
          <Node 
          row={i} 
          col={j} 
          handleMouseDown={mouseDownFunction} 
          handleMouseEnter={mouseEnterFunction} 
          handleMouseUp={mouseUpFunction} />
        ))}
      </div>
    );
    } )}
    
    
    </div>
  );
}
 
export default PathfindingVisualizer;