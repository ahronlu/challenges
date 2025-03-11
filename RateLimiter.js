import { useState, useCallback, useEffect } from 'react';

function useRateLimiter(limit, interval) {
  const [queue, setQueue] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount(0); // Reset the count every interval
      while (count < limit && queue.length > 0) {
        const fn = queue.shift();
        fn(); // Execute function from queue
        setCount(prev => prev + 1);
      }
    }, interval);

    return () => clearInterval(intervalId); // Clean up on unmount
  }, [queue, count, limit, interval]);

  const rateLimitedFn = useCallback(
    (fn) => {
      if (count < limit) {
        fn(); // Execute immediately if within limit
        setCount(prev => prev + 1);
      } else {
        setQueue(prevQueue => [...prevQueue, fn]); // Add to queue if limit exceeded
      }
    },
    [count, limit]
  );

  return rateLimitedFn;
}

export const MyComponent = () => {
  const [message, setMessage] = useState('');
  const rateLimit = useRateLimiter(3, 1000); // Limit to 3 calls per second

  const handleClick = () => {
    rateLimit(() => {
      setMessage(prev => prev + 'Clicked! ');
    });
  };

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
      <p>{message}</p>
    </div>
  );
};

