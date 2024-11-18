// src/features/counter/Counter.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from './counterSlice';

export default function CounterDifferPage() {
  const count = useSelector((state) => state.counter.value);

  return (
    <div>
      <h1>Counter value is reserved: {count}</h1>
    </div>
  );
}
