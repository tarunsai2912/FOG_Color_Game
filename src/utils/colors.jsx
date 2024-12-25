const COLORS = [
    '#3498db', // blue
    '#2ecc71', // green
    '#9b59b6', // purple
    '#e74c3c', // red
    '#f1c40f', // yellow
    '#1abc9c', // turquoise
  ];
  
  export const getRandomColor = () => {
    return COLORS[Math.floor(Math.random() * COLORS.length)];
  };