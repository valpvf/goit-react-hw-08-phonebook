const { useEffect, useState } = require('react');

export const useLocalStorage = (key, initialState) => {
  const [data, setData] = useState(() =>
    JSON.parse(localStorage.getItem(key) || [initialState])
  );

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(data));
  }, [data, key]);

  return [data, setData];
};
