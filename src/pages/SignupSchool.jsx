// import React, { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import download from '../assets/images/sigup.jpg'

// function SignupSchool() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     contact: '',
//     post: '',
//     language: '',
//     salary: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Send the form data to your backend
//     fetch('http://localhost:8020/api/signupschool', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(formData),
//     })
//       .then(response => response.json())
//       .then(data => {
//         console.log('Success:', data);
//         // Handle success (e.g., show a success message)
//       })
//       .catch((error) => {
//         console.error('Error:', error);
//         // Handle error (e.g., show an error message)
//       });
//   };

//   return (
//     // <Form onSubmit={handleSubmit}>
//     //   <Form.Group className="mb-3" controlId="formBasicName">
//     //     <Form.Label>Name</Form.Label>
//     //     <Form.Control
//     //       type="text"
//     //       placeholder="Enter name"
//     //       name="name"
//     //       value={formData.name}
//     //       onChange={handleChange}
//     //       required
//     //     />
//     //   </Form.Group>
//     //   <Form.Group className="mb-3" controlId="formBasicEmail">
//     //     <Form.Label>Email address</Form.Label>
//     //     <Form.Control
//     //       type="email"
//     //       placeholder="Enter email"
//     //       name="email"
//     //       value={formData.email}
//     //       onChange={handleChange}
//     //       required
//     //     />
//     //   </Form.Group>
//     //   <Form.Group className="mb-3" controlId="formBasicPassword">
//     //     <Form.Label>Password</Form.Label>
//     //     <Form.Control
//     //       type="password"
//     //       placeholder="Password"
//     //       name="password"
//     //       value={formData.password}
//     //       onChange={handleChange}
//     //       required
//     //     />
//     //   </Form.Group>
//     //   <Form.Group className="mb-3" controlId="formBasicContact">
//     //     <Form.Label>Contact</Form.Label>
//     //     <Form.Control
//     //       type="number"
//     //       placeholder="Enter your phone number"
//     //       name="contact"
//     //       value={formData.contact}
//     //       onChange={handleChange}
//     //     />
//     //   </Form.Group>
//     //   <Form.Group className="mb-3" controlId="formBasicPost">
//     //     <Form.Label>Post</Form.Label>
//     //     <Form.Control
//     //       type="text"
//     //       placeholder="Enter your post"
//     //       name="post"
//     //       value={formData.post}
//     //       onChange={handleChange}
//     //     />
//     //   </Form.Group>
//     //   <Form.Group className="mb-3" controlId="formBasicLanguage">
//     //     <Form.Label>Language</Form.Label>
//     //     <Form.Control
//     //       type="text"
//     //       placeholder="Enter the language you teach"
//     //       name="language"
//     //       value={formData.language}
//     //       onChange={handleChange}
//     //     />
//     //   </Form.Group>
//     //   <Form.Group className="mb-3" controlId="formBasicSalary">
//     //     <Form.Label>Salary</Form.Label>
//     //     <Form.Control
//     //       type="number"
//     //       placeholder="Enter your salary"
//     //       name="salary"
//     //       value={formData.salary}
//     //       onChange={handleChange}
//     //     />
//     //   </Form.Group>
//     //   <Button variant="primary" type="submit">
//     //     Submit
//     //   </Button>
//     // </Form>
//     <>
//     <div>
//       <div className="container">
//         <div className="row m-5 no-gutters shadow-lg">
//           <div className="col-md-6 d-none d-md-block">
//             <img
//               src={download}
//               className="img-fluid"
//               style={{ minHeight: "100%" }}
//               alt="Login Background"
//             />
//           </div>
//           <div className="col-md-6 bg-white p-5">
//             <h3 className="pb-3">Signup Form</h3>
//             <div className="form-style"  onSubmit={handleSubmit}>
//               <form method="post" action="/register">
               

//                 <div className="form-group pb-3">
//                   <input
//       type="text"
//        placeholder="Enter name"
//        name="name"
//        value={formData.name}
//        onChange={handleChange}
//        className="form-control"
//        required                  />
//                    {/* {
//      !formData.name &&
//     <  ErrorMessage msg = "required "/>
//     } */}
//                 </div>

//                 <div className="form-group pb-3">
//                   <input
//                   className="form-control"  type="email" placeholder="Enter email"  value={formData.email} onChange={handleChange} name='email' required
//                   />
//                     {/* {
//        !formData.email &&
//     <  ErrorMessage msg = "required "/>
//     } */}
//     {/* {
//       apiError && <ErrorMessage msg = "email already exsists"/>
//     } */}
//                 </div>

//                 <div className="form-group pb-3">
//                   <input
//                  className="form-control"   type="" placeholder="Enter the language yo want to learn about"  value={formData.language} onChange={handleChange}  name='language'required
//                   />
//                 </div>

//                 <div className="form-group pb-3">
//                   <input
//                  className="form-control"    type="password" placeholder="Password"  value={formData.password} onChange={handleChange} name='password' required
                  
//                   />
//                 </div>

//                 <div className="form-group pb-3">
//                   <input
//                 className="form-control"     type="number" placeholder="Enter your phn number"  value={formData.contact} onChange={handleChange} name='contact'
//                   />
//                    {/* {
//        !formData.password &&
//     <  ErrorMessage msg = "required "/>
//     } */}
//                 </div>

//                 <div className="pb-2">
//                   <button
//                     type="submit"
//                     className="btn btn-dark w-100 font-weight-bold mt-2"
//                     style={{
//                       width: "100%",
//                       fontWeight: "bold",
//                       marginTop: "2em",
//                     }}
//                   >
//                     Create Account
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//                     </>
//   );
// }

// export default SignupSchool;
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import signupschl from '../assets/images/signupschool.jpeg'
// import download from "../assets/images/sigup.jpg";

function SignupSchool() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "XYZ school",
    email: "xyz12@xyz",
    password: "12345678",
    contact: "12345",
    post: "Teacher",
    language: "Maithili language",
    salary: "2000",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send the form data to your backend
    fetch("http://localhost:8020/api/signupschool", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        navigate('/login')
        // Handle success (e.g., show a success message)
      })
      .catch((error) => {
        console.error("Error:", error);
        // Handle error (e.g., show an error message)
      });
  };

  return (
    <>
      <div>
        <div className="container">
          <div className="row m-5 no-gutters shadow-lg">
            <div className="col-md-6 d-none d-md-block">
              <img
                src={signupschl}
                className="img-fluid"
                style={{ minHeight: "100%" }}
                alt="Login Background"
              />
            </div>
            <div className="col-md-6 bg-white p-5">
              <h3 className="pb-3">Signup Form For School</h3>
              <div className="form-style" onSubmit={handleSubmit}>
                <form method="post" action="/register">
                  <div className="form-group pb-3">
                    <input
                      type="text"
                      placeholder="Enter name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="form-control"
                      required
                    />
                  </div>

                  <div className="form-group pb-3">
                    <input
                      className="form-control"
                      type="email"
                      placeholder="Enter email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group pb-3">
                    <input
                      className="form-control"
                      type="password"
                      placeholder="Password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group pb-3">
                    <input
                      className="form-control"
                      type="number"
                      placeholder="Enter your phone number"
                      name="contact"
                      value={formData.contact}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group pb-3">
                    <input
                      className="form-control"
                      type="name"
                      placeholder="Enter your experience"
                      name="post"
                      value={formData.post}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group pb-3">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Enter the language"
                      name="language"
                      value={formData.language}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group pb-3">
                    <input
                      className="form-control"
                      type="Number"
                      placeholder="Enter the salary"
                      name="salary"
                      value={formData.salary}
                      onChange={handleChange}
                    />
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

export default SignupSchool;

