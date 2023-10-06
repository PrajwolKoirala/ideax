import React, { useState, useEffect } from 'react';
import axios from 'axios';
import JobCard from './JobCard';

const SearchJobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8020/api/fetchjob')
      .then((response) => {
        setJobs(response.data.data);
      })
      .catch((error) => {
        console.error('Error fetching jobs:', error);
      });
  }, []);

  return (
    <div>
      <h1>List of Jobs</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {jobs.map((job) => (
          <JobCard key={job._id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default SearchJobs;
