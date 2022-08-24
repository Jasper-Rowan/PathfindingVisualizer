import React, { useState } from 'react';
import { useEffect } from 'react';
import Node from "./Node";
import "./PathfindingVisualizer.css"
import {dijkstra} from '../algorithms/dijkstra';


const GRID_ROWS = 2;
const GRID_COLS = 2;

const START_ROW = 0;
const START_COL = 0;

const END_ROW = 1;
const END_COL = 1;


const PathfindingVisualizer = () => {

  const [mousePressed, setMousePressed] = useState(false);
  const [grid, setGrid] = useState([]);


  const mouseDownFunction = (row, col) => {
    const newGrid = toggleWall(grid, row, col);
    setGrid(newGrid);
    setMousePressed(true);
    
    console.log(`row ${row} col ${col}`);
  }
  const mouseEnterFunction = (row, col) => {
    if (!mousePressed) return;
    const newGrid = toggleWall(grid, row, col);
    setGrid(newGrid);
    console.log(`row ${row} col ${col}`);
  }
  const mouseUpFunction = () => {
    setMousePressed(false);
  }

  useEffect(() => {
    setGrid(createInitialGrid());
   },[]);

   function visualizeDijkstras() {
    dijkstra(grid, grid[START_ROW][START_COL], grid[END_ROW][END_COL]);
   }

  
  console.log("this code was run");

  

  return (
    <>
      <button style={{width:80, height:40}}
        onClick={() => {
          visualizeDijkstras();
        }}
      >dijkstra</button>

      <div className="gridContainer">
        {grid.map((currentRow) => {
          return (
            <div style={{ display: "flex", width: "100%" }}>
              {currentRow.map((node) => (
                <Node
                  row={node.row}
                  col={node.col}
                  handleMouseDown={mouseDownFunction}
                  handleMouseEnter={mouseEnterFunction}
                  handleMouseUp={mouseUpFunction}
                  isEnd={node.isEnd}
                  isStart={node.isStart}
                  isWall={node.isWall}
                />
              ))}
            </div>
          );
        })}
      </div>
    </>
  );
}
 
  const createNode = (row, col) => {
    return {
      row,
      col,
      isStart: row == START_ROW && col == START_COL,
      isEnd: row == END_ROW && col == END_COL,
      isWall: false
    }
  }

  const createInitialGrid = () => {
    const grid = [];
    for (let i = 0; i < GRID_ROWS; i++) {
      const currentRow = [];
      for (let j = 0; j < GRID_COLS; j++) {
        currentRow.push(createNode(i, j));
      }
      grid.push(currentRow);
    } 
    return grid;
  }

  const toggleWall = (grid, row, col) => {
    const newGrid = grid.slice();
    const node = newGrid[row][col];
    const newNode = {
      ...node,
      isWall: !node.isWall,
    }
    newGrid[row][col] = newNode;
    return newGrid;
  } 

export default PathfindingVisualizer;