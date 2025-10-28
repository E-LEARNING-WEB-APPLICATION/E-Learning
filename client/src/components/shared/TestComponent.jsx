// Fails ESLint
import React, { useEffect, useState } from "react";

const TestComponent = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Count:", count);
  }, []);

  const unusedVar = 123;

  function innerComponent() {
    return <div>Inner</div>;
  }

  return (
    <div>
      <h1>Test Component</h1>
      {[1, 2, 3].map((n) => (
        <span>{n}</span>
      ))}
      <innerComponent />
    </div>
  );
};

export default TestComponent;
