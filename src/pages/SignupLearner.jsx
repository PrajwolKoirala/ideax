
import React, { useState } from 'react';
import download from '../assets/images/sigup.jpg'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

function SignupLearner() {

const [formData, setFormData] = useState({
    name: 'prajwol',
    email: 'pr12@pr',
    password: '12345678',
    contact: '9840462211',
    language: 'tharu',
    agreeTerms: false
  });
const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('http://localhost:8020/api/signuplearner', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      navigate('/login')
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error:', error);
    }
  }
  

  return (
    // <Form onSubmit={handleSubmit}>
    //     <Form.Group className="mb-3" controlId="formBasicEmail">
    //     <Form.Label>Name</Form.Label>
    //     <Form.Control type="name" placeholder="Enter name"  value={formData.name} onChange={handleChange} name='name' required/>
    //     <Form.Text className="text-muted">
    //     </Form.Text>
    //   </Form.Group>
    //   <Form.Group className="mb-3" controlId="formBasicEmail">
    //     <Form.Label>Email address</Form.Label>
    //     <Form.Control type="email" placeholder="Enter email"  value={formData.email} onChange={handleChange} name='email' required/>
    //     <Form.Text className="text-muted">
    //     </Form.Text>
    //   </Form.Group>
    //   <Form.Group className="mb-3" controlId="formBasicPassword">
    //     <Form.Label>Password</Form.Label>
    //     <Form.Control type="password" placeholder="Password"  value={formData.password} onChange={handleChange} name='password' required/>
    //   </Form.Group>
    //   <Form.Group className="mb-3" controlId="formBasicEmail">
    //     <Form.Label>Contact</Form.Label>
    //     <Form.Control type="number" placeholder="Enter your phn number"  value={formData.contact} onChange={handleChange} name='contact' />
    //     <Form.Text className="text-muted">
    //     </Form.Text>
    //   </Form.Group>
    //   <Form.Group className="mb-3" controlId="formBasicEmail">
    //     <Form.Label>Language</Form.Label>
    //     <Form.Control type="" placeholder="Enter the language yo want to learn about"  value={formData.language} onChange={handleChange}  name='language'required/>
    //     <Form.Text className="text-muted">
    //     </Form.Text>
    //   </Form.Group>
    //   <Form.Group className="mb-3" controlId="formBasicCheckbox">
    //     <Form.Check type="checkbox" label="I agree all terms and conditions" />
    //   </Form.Group>
    //   <Button variant="primary" type="submit">
    //     Submit
    //   </Button>
    // </Form>


    <>
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
            <h3 className="pb-3">Signup Form</h3>
            <div className="form-style"  onSubmit={handleSubmit}>
              <form method="post" action="/register">
               

                <div className="form-group pb-3">
                  <input
                  className="form-control"   type="name" placeholder="Enter Name"  value={formData.name} onChange={handleChange} name='name' required
                  />
                   {/* {
     !formData.name &&
    <  ErrorMessage msg = "required "/>
    } */}
                </div>

                <div className="form-group pb-3">
                  <input
                  className="form-control"  type="email" placeholder="Enter email"  value={formData.email} onChange={handleChange} name='email' required
                  />
                    {/* {
       !formData.email &&
    <  ErrorMessage msg = "required "/>
    } */}
    {/* {
      apiError && <ErrorMessage msg = "email already exsists"/>
    } */}
                </div>

                <div className="form-group pb-3">
                  <input
                 className="form-control"   type="" placeholder="Enter the language yo want to learn about"  value={formData.language} onChange={handleChange}  name='language'required
                  />
                </div>

                <div className="form-group pb-3">
                  <input
                 className="form-control"    type="password" placeholder="Password"  value={formData.password} onChange={handleChange} name='password' required
                  
                  />
                </div>

                <div className="form-group pb-3">
                  <input
                className="form-control"     type="number" placeholder="Enter your phn number"  value={formData.contact} onChange={handleChange} name='contact'
                  />
                   {/* {
       !formData.password &&
    <  ErrorMessage msg = "required "/>
    } */}
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
                    Create Account
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
                    </>
  );
}

export default SignupLearner;