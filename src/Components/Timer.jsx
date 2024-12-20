import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  incrementSeconds,
  incrementMinutes,
  incrementHours,
  toggleTimer,
  resetTimer,
} from '../Store/TimerSlice';

const Timer = () => {
  const dispatch = useDispatch();
  const { hours, minutes, seconds, isRunning } = useSelector((state) => state.timer);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        dispatch(incrementSeconds(1));
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning, dispatch]);

  return (
    <div>
      <h1>
        {String(hours).padStart(2, '0')}:{String(minutes).padStart(2, '0')}:
        {String(seconds).padStart(2, '0')}
      </h1>
      <div>
        <button onClick={() => dispatch(incrementHours(1))}>+1 Saat</button>
        <button onClick={() => dispatch(incrementMinutes(1))}>+1 Dəqiqə</button>
        <button onClick={() => dispatch(incrementSeconds(30))}>+30 Saniyə</button>
      </div>
      <div>
        <button onClick={() => dispatch(toggleTimer())}>
          {isRunning ? 'Dayandır' : 'Başla'}
        </button>
        <button onClick={() => dispatch(resetTimer())}>Sıfırla</button>
      </div>
    </div>
  );
};

export default Timer;









