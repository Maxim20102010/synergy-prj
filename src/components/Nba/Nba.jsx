

import React, { useState, useEffect } from 'react';
import './Nba.css'
const FetchExample = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '7d2511f766msh5e0d40bb1091f4fp1611a8jsnad63766907f5',
        'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
      }
    };
    fetch('https://free-nba.p.rapidapi.com/players?page=0&per_page=25',options)
      .then(response => response.json())
      .then(response => setData(response.data));
      console.log(data)
  }, []);

  return (
    <div>
      <h1 className='h1-nba'>API Data:</h1>
      <ul>
        {data.map(item => (
          <li className = 'li-nba'key={item.id}>{item.first_name} {item.last_name}</li>
        ))}
      </ul>
    </div>
  );
};

export default FetchExample;