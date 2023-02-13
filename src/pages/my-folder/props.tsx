import React from 'react';

type Props = {
  name: string;
  age: number;
};

const MyComponent: React.FC<Props> = ({ name, age }) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>{age} years old</p>
    </div>
  );
};

export default MyComponent;
