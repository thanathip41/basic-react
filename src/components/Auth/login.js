import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCountx] = useState(0);

  useEffect(() => {
    console.log(document.title)
  });

  return (
    <div>
      login
    </div>
  );
}
export default Example