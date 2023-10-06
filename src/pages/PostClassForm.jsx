import React, { useState } from 'react';
import axios from 'axios';

export default function PostClassForm() {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    maxParticipants: '',
    startDate: '',
    endDate: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `http://localhost:8020/api/postclass`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('access_token')}`,
          },
        }
      );
      console.log(response.data);
      alert('Class posted successfully!'); // Show alert here
    } catch (error) {
      console.error('Error posting class:', error);
    }
  };
  

  return (
    <div>
      <h2>Post a New Class</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Group Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter class name"
            value={formData.name}
            onChange={handleChange}
            name="name"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Group description</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter description"
            value={formData.description}
            onChange={handleChange}
            name="description"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">maxParticipants</label>
          <input
            type="number"
            className="form-control"
            placeholder="Enter maximum no of participants"
            value={formData.maxParticipants}
            onChange={handleChange}
            name="maxParticipants"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">startDate</label>
          <input
            type="date"
            className="form-control"
            placeholder="Enter maximum no of participants"
            value={formData.startDate}
            onChange={handleChange}
            name="startDate"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">endDate</label>
          <input
            type="date"
            className="form-control"
            placeholder="Enter maximum no of participants"
            value={formData.endDate}
            onChange={handleChange}
            name="endDate"
            required
          />
        </div>
        
        <button type="submit" className="btn btn-primary">
          Post Class
        </button>
      </form>
    </div>
  );
}
