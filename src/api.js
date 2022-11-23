import {useState, useEffect} from 'react';
import axios from 'axios';

const api = () => {

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  function detData() {
    setIsLoading(true);
    axios
      .get('https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2021-06-14&endtime=2021-06-16')
      .then(response => {
        setIsLoading(false);
        setData(response.data.features);
        console.log(data)
      })
      .catch(e => {
        setIsLoading(false);
        setError(e);
      });
  }
  useEffect(function () {
    detData();
  });

  return {isLoading, data, error};
};

export default api;