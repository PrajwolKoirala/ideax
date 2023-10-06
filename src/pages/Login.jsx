import React, { useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { setUser } from '../redux/slice/UserSlice'
import { useDispatch } from 'react-redux'
export default function Login() {
  const dispatch = useDispatch()

  const [formData, setFormData] = useState({
    email: 'pr@pr',
    password: '12345678',
  });
  const [error, setError] = useState("")

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  function handleSubmit(e){
  
    e.preventDefault()
    let url = "http://localhost:8020/api/login"
    
    axios.post(url, formData)
    .then(res => {
      console.log("User Data:", res.data);
      console.log({res});
      dispatch(setUser(res.data));  
      localStorage.setItem("access_token",res.data.token)
  
      navigate("/")
    })
    
    .catch(err => {
      console.log(err.response.data.msg);
      setError(err.response.data.msg)
    });
  }
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   let url = "http://localhost:8020/api/login"
  //   try {
  //     const response = await fetch('', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(formData),
  //     });

  //     const data = await response.json();
  //     console.log(data);

  //     if (data.token) {
  //       // Save token in localStorage
  //       localStorage.setItem('token', data.token);

  //       // Redirect to home page
  //       navigate('/');
  //     }

  //     // You can handle other scenarios here if needed
  //   } catch (error) {
  //     console.error('Error:', error);
  //   }
  // };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            value={formData.email}
            onChange={handleChange}
            name="email"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            name="password"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
