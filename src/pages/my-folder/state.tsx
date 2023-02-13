import React, { useState } from 'react';

type State = {
  count: number;
};

const MyComponent: React.FC = () => {
  const [state, setState] = useState<State>({ count: 0 });

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => setState({ count: state.count + 1 })}>
        Increase
      </button>
    </div>
  );
};

export default MyComponent;
