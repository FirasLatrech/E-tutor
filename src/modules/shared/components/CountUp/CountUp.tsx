import React, { useState, useEffect } from 'react';

function CountUp({
  start,
  end,
  duration,
}: {
  start: number;
  end: number;
  duration: number;
}) {
  const [count, setCount] = useState(start || 0);
  const frames = Math.ceil((duration / 1000) * 60);
  const increment = (end - start) / frames;

  useEffect(() => {
    let currentFrame = 0;
    const interval = setInterval(() => {
      currentFrame++;
      setCount((prevCount) => {
        const nextCount = prevCount + increment;
        if (nextCount >= end || currentFrame >= frames) {
          clearInterval(interval);
          return end;
        }
        return nextCount;
      });
    }, 1000 / 60); 

    return () => clearInterval(interval);
  }, [start, end, increment, frames]);

  return <span>{Math.round(count)}</span>;
}

export default CountUp;
