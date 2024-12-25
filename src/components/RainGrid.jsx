import React, { useState, useEffect } from 'react';
import { getRandomColor } from '../utils/colors';

const Drop = ({ color, isActive }) => (
  <div
    className={`w-full h-full transition-all duration-300 rounded-sm ${
      isActive ? 'opacity-100' : 'opacity-0'
    }`}
    style={{ backgroundColor: color }}
  />
);

const RainGrid = () => {
  const ROWS = 15;
  const COLS = 20;
  const [grid, setGrid] = useState([]);

  useEffect(() => {
    // Initialize grid
    const newGrid = Array(ROWS).fill(null).map(() =>
      Array(COLS).fill(null).map(() => ({
        color: getRandomColor(),
        active: false,
      }))
    );
    setGrid(newGrid);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setGrid(prevGrid => {
        const newGrid = [...prevGrid].map(row => [...row]);
        
        // Move existing drops down
        for (let i = ROWS - 1; i >= 0; i--) {
          for (let j = 0; j < COLS; j++) {
            if (i === 0) {
              // Create new drops at top row with 20% chance
              newGrid[i][j].active = Math.random() < 0.2;
              if (newGrid[i][j].active) {
                newGrid[i][j].color = getRandomColor();
              }
            } else {
              // Move drops down
              newGrid[i][j].active = prevGrid[i - 1][j].active;
              newGrid[i][j].color = prevGrid[i - 1][j].color;
            }
          }
        }
        return newGrid;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid" style={{ 
      display: 'grid',
      gridTemplateColumns: `repeat(${COLS}, 1fr)`,
      gap: '2px',
      width: '100%',
      maxWidth: '800px',
      aspectRatio: `${COLS}/${ROWS}`
    }}>
      {grid.map((row, i) =>
        row.map((cell, j) => (
          <Drop
            key={`${i}-${j}`}
            color={cell.color}
            isActive={cell.active}
          />
        ))
      )}
    </div>
  );
};

export default RainGrid;
