import { useState, useEffect } from 'react';

const useLocalStarege = (itemName, initialStorage) => {

    const [ loading, setLoading ] = useState(true);
    const [ error, setError ] = useState(false);
    const [ storageItem, setStorageItem ] = useState( initialStorage );
    const [ sincronize, setSincronize ] = useState(true);
  
    useEffect(() => {
      setTimeout(() => {
        try {
          const getItem = JSON.parse(localStorage.getItem(itemName)) || initialStorage;
          setStorageItem([...getItem]);
          setLoading(false);
          setSincronize(true);
        } catch (error) {
          setError(error);
        }
      }, 1000);
      //eslint-disable-next-line
    }, [sincronize]);
  
    const setLocal = items => {
      try {
        localStorage.setItem(itemName, JSON.stringify(items));
        setStorageItem([...items]);
      } catch (error) {
        setError(error);
      }
    }

    const activeSincronize = () => {
      setLoading(true);
      setSincronize(false);
    }
  
    return [
      storageItem,
      setLocal,
      loading,
      error,
      sincronize,
      activeSincronize
    ];
  
  }

export default useLocalStarege;