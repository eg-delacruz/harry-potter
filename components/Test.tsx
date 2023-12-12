'use client';

//Redux
import { useAppSelector } from '@redux/hooks';
import { selectCounterState } from '@redux/slices/counterSlice';

const Test = () => {
  const counterReducer = useAppSelector(selectCounterState);

  console.log({ counterReducer });

  return <div>Test</div>;
};

export default Test;
