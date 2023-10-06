import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ClassCard from './ClassCard';
import { useNavigate } from 'react-router-dom';

const AvailableClasses = () => {
    const navigate = useNavigate();

  const [classes, setClasses] = useState([]);
  const token = localStorage.getItem('access_token');
  useEffect(() => {
    axios.get('http://localhost:8020/api/fetchclasses',{
        headers: {
            Authorization: `Bearer ${token}`
          }
    })
      .then(response => {
        setClasses(response.data);
      })
      .catch(error => {
        console.error('Error fetching classes:', error);
      });
  }, []);

  const handleApplyClick = (classItem) => {
 
  };
  

  return (
    <div>
      {classes.map(classItem => (
        <ClassCard
          key={classItem._id}
          classItem={classItem}
        />
      ))}
    </div>
  );
};

export default AvailableClasses;
