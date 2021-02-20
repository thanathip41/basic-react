import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCountx] = useState(0);

  useEffect(() => {
    console.log(document.title)
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCountx(count+2)}>
        Click me
      </button>
    </div>
  );
}
export default Example