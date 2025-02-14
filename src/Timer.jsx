// Timer.jsx
import React, { useState, useRef } from 'react';


function Timer() {
  const [time, setTime] = useState(0);
  const intervalRef = useRef(null);

  const startTimer = () => {
    if (intervalRef.current !== null) return;
    intervalRef.current = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
  };

  const pauseTimer = () => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const resetTimer = () => {
    pauseTimer();
    setTime(0);
  };

  return (
    <div className="timer-container">
      <h1 className="timer-display">Таймер: {time} сек</h1>
      <div className="button-group">
        <button className="timer-button start" onClick={startTimer}>Старт</button>
        <button className="timer-button pause" onClick={pauseTimer}>Пауза</button>
        <button className="timer-button reset" onClick={resetTimer}>Нулиране</button>
      </div>
    </div>
  );
}

export default Timer;
