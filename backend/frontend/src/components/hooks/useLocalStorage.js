import { useState, useEffect } from "react";

// Custom hook for keeping state data synced with localStorage.

function useLocalStorage(key, firstValue = null) {
  const initialValue = localStorage.getItem(key) || firstValue;

  const [item, setItem] = useState(initialValue);

  useEffect(function setKeyInLocalStorage() { // rerun effect when key or item change
    console.debug("hooks useLocalStorage useEffect", "ITEM::", item);

    if (item === null) { // if nothing exist remove key
      localStorage.removeItem(key);
    } else { // if exist set key and value to item
      localStorage.setItem(key, item);
    }
  }, [key, item]);

  return [item, setItem]; // return state and setter function
}

export default useLocalStorage;