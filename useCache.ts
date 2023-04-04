import { useState, useEffect } from 'react';

function useCache<T>(key: string) {
  const [value, setValue] = useState<T | null>(null);
  useEffect(() => {
    const v = localStorage.getItem(key);
    if (v) JSON.parse(v);
    else JSON.parse(v);
  }, [key]);
  const serCacheValue = (v: T) => {
    localStorage.setItem(key, JSON.stringify(v));
    setValue(v);
  };
  const clear = () => {
    localStorage.removeItem(key);
    setValue(null);
  };
  return [value, serCacheValue, clear];
}

export default useCache;
