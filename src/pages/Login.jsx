import React, { useState } from 'react';
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { setUser } from '../redux/slice/UserSlice'
import { useDispatch } from 'react-redux'
import download from "../assets/images/girlsx.jpg";

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
      {/* <form onSubmit={handleSubmit}>
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
      </form> */}

<>
  {
    error
    &&
    <div class="alert alert-danger" role="alert">
      {error}
</div>

  }

    <div>
      <div className="container">
        <div className="row m-5 no-gutters shadow-lg">
          <div className="col-md-6 d-none d-md-block">
            <img
              src={download}
              className="img-fluid"
              style={{ minHeight: "100%" }}
              alt="Login Background"
            />
          </div>
          <div className="col-md-6 bg-white p-5">
            <h3 className="pb-3">Login Form</h3>
            <div className="form-style">
              <form onSubmit={handleSubmit}>
                <div className="form-group pb-3">
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
                <div className="form-group pb-3">
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
                <div className="d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <input name="" type="checkbox" value="" />
                    <span className="pl-2 font-weight-bold">Remember Me</span>
                  </div>
                  
                </div>
                <div className="pb-2">
                  <button
                    type="submit"
                    className="btn btn-dark w-100 font-weight-bold mt-2"
                    style={{
                      width: "100%",
                      fontWeight: "bold",
                      marginTop: "2em",
                    }}
                  >
                    Submit
                  </button>
                </div>
              </form>
              <div className="sideline">OR</div>
              <div>
                {/* <button
                  type="submit"
                  className="btn btn-primary w-100 font-weight-bold mt-2"
                >
                  <i className="fa fa-facebook" aria-hidden="true"></i> Login With Facebook
                </button> */}
              </div>
              <div className="pt-4 text-center">
                Get Members Benefit.
                <Link
                  // className="nav-link active"
                  aria-current="page"
                  to="signup"
                >
                  Signup
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
    </div>
  );
}
