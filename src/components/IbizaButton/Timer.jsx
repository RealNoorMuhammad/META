import React, { useState, useEffect } from 'react';

const Timer = () => {
  const calculateTimeRemaining = () => {
    const now = new Date();
    const targetTime = new Date(now);
    targetTime.setHours(now.getHours() + 6, 0, 0, 0); // Set target time to 4 hours from now

    const timeDiff = targetTime.getTime() - now.getTime();
    const secondsRemaining = Math.max(0, Math.floor(timeDiff / 1000));
    return secondsRemaining;
  };

  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(prevTime => {
        if (prevTime === 0) {
          clearInterval(interval); // Stop the interval when time reaches 00:00:00
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (timeInSeconds) => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;
    return `${hours.toString().padStart(2, '0')} : ${minutes.toString().padStart(2, '0')} : ${seconds.toString().padStart(2, '0')}`;
  };

  return <div className='toks_head'>{timeRemaining === 0 ? "THE END" : formatTime(timeRemaining)}</div>;
};

export default Timer;
