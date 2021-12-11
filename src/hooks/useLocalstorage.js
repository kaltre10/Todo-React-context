import { useState, useEffect } from 'react';

const useLocalStarege = (itemName, initialStorage) => {

    const [ loading, setLoading ] = useState(true);
    const [ error, setError ] = useState(false);
    const [ storageItem, setStorageItem ] = useState( initialStorage );
  
    useEffect(() => {
      setTimeout(() => {
        try {
          const getItem = JSON.parse(localStorage.getItem(itemName)) || initialStorage;
          setStorageItem([...getItem]);
          setLoading(false);
        } catch (error) {
          setError(error);
        }
      }, 1000);
      //eslint-disable-next-line
    }, []);
  
    const setLocal = items => {
      try {
        localStorage.setItem(itemName, JSON.stringify(items));
        setStorageItem([...items]);
      } catch (error) {
        setError(error);
      }
    }
  
    return [
      storageItem,
      setLocal,
      loading,
      error
    ];
  
  }

export default useLocalStarege;