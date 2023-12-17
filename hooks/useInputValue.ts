import { useState, ChangeEvent } from 'react';

// Hook para manejar/controlar la info de los inputs
export const useInputValue = (initialValue: string) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (e: ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);

  return { value, onChange, setValue };
};
