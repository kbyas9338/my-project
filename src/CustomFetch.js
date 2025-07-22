import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function CustomFetch(url) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(url);
        setData(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, [url]);

  return (
    <div>
      {data && data.length > 0 ? (
        data.map((item, index) => (
          <div key={index}>{JSON.stringify(item)}</div>
        ))
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
