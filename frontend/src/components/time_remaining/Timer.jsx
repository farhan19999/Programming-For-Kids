// Arif

import { useState, useEffect } from 'react';

const Timer = ({start_time}) => {
  const remainingTimeInSeconds = Math.max(start_time, 0);
  const [remainingTime, setRemainingTime] = useState(remainingTimeInSeconds); // Initial remaining time in seconds

  useEffect(() => {
    const interval = setInterval(() => {
      if (remainingTime > 0) {
        setRemainingTime(prevTime => prevTime - 1);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [remainingTime]);

  const formatTime = (timeInSeconds) => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;

    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  return (
    <div style={timerContainerStyle}>
      Time Remaining: {formatTime(remainingTime)}
    </div>
  );
};


const timerContainerStyle = {
  position: "absolute",
  top: "calc(60px )", // Adjust as needed to position below the heading. just copy-paste and adjust the value
  right: "20px",
  padding: "6px",
  border: "1px solid #ccc",
  borderRadius: "5px",
  backgroundColor: "#f8f8f8",
};

export default Timer;
