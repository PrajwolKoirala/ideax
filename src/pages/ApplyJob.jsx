import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export default function ApplyJob({ jobId }) {

    const navigate = useNavigate()
  const [formData, setFormData] = useState({
    school_name: '',
    application_date: new Date().toISOString().substr(0, 10), // Set default date to today
    status: 'pending',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `http://localhost:8020/api/apply/${jobId}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('access_token')}`,
          },
        }
      );
      console.log(response.data);
      alert('Job applied successfully!');
      navigate('/')
    } 
    catch (error) {
      console.error('Error applying for job:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Preferences</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter school name"
            value={formData.school_name}
            onChange={handleChange}
            name="school_name"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Application Date</label>
          <input
            type="date"
            className="form-control"
            value={formData.application_date}
            onChange={handleChange}
            name="application_date"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Apply
        </button>
      </form>
    </div>
  );
}
