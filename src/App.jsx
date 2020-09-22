import React, { useState } from 'react';

import ClickMeButton from './components/ClickMeButton';
import Button from './components/Button';

function App() {
  const [state, setState] = useState({ count: 0 });
  const { count } = state;

  function handleClick(value) {
    setState({ count: count + value });
  }

  return (
    <div>
      <p>Counter</p>
      <p>
        <ClickMeButton
          value={count}
          onClick={() => handleClick(1)}
        />
      </p>
      <p>
        {
          [1, 2, 3, 4, 5].map((i) => (
            <Button
              value={i}
              key={i}
              onClick={() => handleClick(i)}
            />
          ))
        }
      </p>
    </div>
  );
}

export default App;
