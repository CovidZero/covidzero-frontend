export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

export const handleIncrement = () => {
  return { type: INCREMENT }
}

export const handleDecrement = () => {
  return { type: DECREMENT }
}