import React, { useMemo } from 'react';
type Props = {
  count: number;
};

const MyComponent: React.FC<Props> = ({ count }) => {
  const doubled = useMemo(() => count * 2, [count]);

  return (
    <div>
      <p>Doubled: {doubled}</p>
    </div>
  );
};

export default MyComponent;
