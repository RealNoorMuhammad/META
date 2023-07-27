import React, { useState, useEffect } from 'react';

const Timer = () => {
  const calculateTimeRemaining = () => {
    const now = new Date();
    const targetTime = new Date(now);
    targetTime.setHours(now.getHours() + 4, 0, 0, 0); // Change 6 to 4 for a 4 hours timer

    const timeDiff = targetTime.getTime() - now.getTime();
    const secondsRemaining = Math.max(0, Math.floor(timeDiff / 1000));
    return secondsRemaining;
  };

  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (timeInSeconds) => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;
    return `${hours.toString().padStart(2, '0')} : ${minutes.toString().padStart(2, '0')} : ${seconds.toString().padStart(2, '0')}`;
  };

  return <div className='toks_head'>{formatTime(timeRemaining)}</div>;
};

export default Timer;
