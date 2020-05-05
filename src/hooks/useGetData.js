import { useState, useEffect } from 'react';
import getData from '../utils/getData';

const apiUrl = 'http://localhost:3000/data';

const useGetData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData(apiUrl).then(response => setData(response));
  }, []);

  return data;
};

export default useGetData;
