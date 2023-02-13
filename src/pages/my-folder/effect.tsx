import React, { useEffect } from 'react';

interface Props {
  message: string;
}

const ExampleComponent: React.FC<Props> = ({ message }) => {
  useEffect(() => {
    console.log(message);
  }, [message]);

  return <div>{message}</div>;
};

export default ExampleComponent;
