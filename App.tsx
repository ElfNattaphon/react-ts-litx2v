import * as React from 'react';
import useCache from './useCache';

export default function App() {
  const [value, setValue, clear] = useCache<string>('accessToken');
  return (
    <div>
      <label>{JSON.stringify(value)}</label>
      <button onClick={() => setValue('my-access-token')}>setValue</button>
      <button onClick={() => clear()}>clear</button>
    </div>
  );
}

// function useCache(key, defaultValue) {
//   const [value, setValue,clear] = useState(() => {
//     const cachedValue = localStorage.getItem(key);
//     return cachedValue !== null ? JSON.parse(cachedValue) : defaultValue;
//   });

//   useEffect(() => {
//     localStorage.setItem(key, JSON.stringify(value));
//   }, [key, value]);

//   return [value, setValue,clear];
// }
