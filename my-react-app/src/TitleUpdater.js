import React, { useState, useEffect } from 'react';

const CombinedComponent = () => {
  const [data, setData] = useState([]);
  const [Position, setPosition] = useState({ x: null, y: null });
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${count}`)
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error(error));

      const handleMouseMove = (event) => {
        setPosition({ x: event.clientX, y: event.clientY });
      };
  
      document.addEventListener('mousemove', handleMouseMove);

      document.title = `Clicked ${count} times`;
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
      };

  }, [count]);

  // Handle click event to update count
  const handleClick = (event) => {
    event.preventDefault();
    setCount(count + 1);
  };

  return (
    <div>
      
      <h4>Mouse Position:</h4>
      <p>X: {Position.x}, Y: {Position.y}</p>
      
      <h1>{data.title}</h1>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default CombinedComponent;
