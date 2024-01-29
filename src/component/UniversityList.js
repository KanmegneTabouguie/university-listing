// UniversityList.js

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './UniversityList.css'; // Import your CSS file

function UniversityList() {
  const { country } = useParams();
  const [universities, setUniversities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://universities.hipolabs.com/search?country=${country}`);
        setUniversities(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [country]);

  return (
    <div className="university-list-container">
      <h2 className="heading-3d">Universities in {country}</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {universities.map((university) => (
            <li key={university.name} className="university-item">
              <strong>{university.name}</strong> - {university.country}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default UniversityList;
