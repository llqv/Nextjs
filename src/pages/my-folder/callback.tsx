import React, { useCallback } from 'react';

type Callback = (count: number) => void;

const MyComponent: React.FC = () => {
  const handleClick = useCallback((count: number) => {
    console.log(count);
  }, []);

  return (
    <div>
      <button onClick={() => handleClick(10)}>Click me</button>
    </div>
  );
};

export default MyComponent;
