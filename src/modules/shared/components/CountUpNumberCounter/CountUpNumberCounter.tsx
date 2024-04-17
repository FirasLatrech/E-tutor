import React, { useState, useEffect } from 'react';

const NumberCounter = ({ value }: { value: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const increment = () => {
      if (count < value) {
        setCount((prevCount) => prevCount + 1);
      }
    };

    const interval = setInterval(increment, 0.5);

    return () => clearInterval(interval);
  }, [count, value]);

  return <span className="ease-linear duration-500">{count}</span>;
};

export default NumberCounter;
