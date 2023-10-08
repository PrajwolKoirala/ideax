// import React, { useState } from 'react';
// import { Form, Button } from 'react-bootstrap';
// import axios from 'axios'; 

// export default function PostJob() {
//   const [formData, setFormData] = useState({
//     name: '',
//     category: '',
//     language: '',
//     end_date: '',
//     vacancy: '',
//     contact: '',
//     location: '',
//     images: [],
//     // Add any other fields you need here
//   });

//   // Define the handleChange function to update the formData state
//   const handleChange = (e) => {
//     const { name, value, type, files } = e.target;

//     setFormData((prevFormData) => {
//       if (type === 'file') {
//         return { ...prevFormData, [name]: files };
//       }
//       return { ...prevFormData, [name]: value };
//     });
//   };
//   const token = localStorage.getItem('token');
// console.log('Token:', token);


//   // Define the handleSubmit function to submit the form
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Create FormData object to send files
//     const formDataToSend = new FormData();
//     Object.entries(formData).forEach(([key, value]) => {
//       if (key === 'images') {
//         for (let i = 0; i < value.length; i++) {
//           formDataToSend.append(`images`, value[i]);
//         }
//       } else {
//         formDataToSend.append(key, value);
//       }
//     });

//     const token = localStorage.getItem('token'); // Assuming you store the token in local storage

//     axios.post('http://localhost:8020/api/postjob', formData, {
//       headers: {
//         Authorization: `Bearer ${localStorage.getItem('access_token')}`
//       }
//     })
//     .then(response => {
//       console.log('Job posted successfully:', response.data);
//     })
//     .catch(error => {
//       console.error('Error posting job:', error);
//     });
    
//   };

//   return (
//     <div>
//         <Form onSubmit={handleSubmit}>
//         <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Name</Form.Label>
//         <Form.Control type="name" placeholder="Enter name"  value={formData.name} onChange={handleChange} name='name' required/>
//         <Form.Text className="text-muted">
//         </Form.Text>
//       </Form.Group>
//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Category</Form.Label>
//         <Form.Control type="" placeholder="Enter categoey"  value={formData.category} onChange={handleChange} name='category' required/>
//         <Form.Text className="text-muted">
//         </Form.Text>
//       </Form.Group>
//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Language</Form.Label>
//         <Form.Control type="" placeholder="Enter language"  value={formData.language} onChange={handleChange} name='language' required/>
//         <Form.Text className="text-muted">
//         </Form.Text>
//       </Form.Group>
//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>End Date</Form.Label>
//         <Form.Control type="date" placeholder="Enter end date"  value={formData.end_date} onChange={handleChange} name='end_date' required/>
//         <Form.Text className="text-muted">
//         </Form.Text>
//       </Form.Group>
//       <Form.Group className="mb-3" controlId="formBasicPassword">
//         <Form.Label>Vacancy</Form.Label>
//         <Form.Control type="Number" placeholder="enter vacency"  value={formData.vacancy} onChange={handleChange} name='vacancy' required/>
//       </Form.Group>
//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Contact</Form.Label>
//         <Form.Control type="number" placeholder="Enter your phn number"  value={formData.contact} onChange={handleChange} name='contact' />
//         <Form.Text className="text-muted">
//         </Form.Text>
//       </Form.Group>
//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Location</Form.Label>
//         <Form.Control type="" placeholder="Enter location"  value={formData.location} onChange={handleChange} name='location' required/>
//         <Form.Text className="text-muted">
//         </Form.Text>
//       </Form.Group>
//       <Form.Group className="mb-3" controlId="formBasicEmail">
        
//         <div className="mb-3">
//     <label htmlFor="exampleInputEmail1" className="form-label">images</label>
//     <input type="file" multiple className="form-control" value={formData.images} id="exampleInputEmail1" name = "images"  aria-describedby="emailHelp" onChange={handleChange} />
    
    
//   </div>
  
//       </Form.Group>
//       <Form.Group className="mb-3" controlId="formBasicCheckbox">
//         <Form.Check type="checkbox" label="I agree all terms and conditions" />
//       </Form.Group>
//       <Button variant="primary" type="submit">
//         Submit
//       </Button>
//     </Form>
//     </div>
//   )
// }

import React, { useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import axios from 'axios'; 

export default function PostJob() {
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    language: '',
    end_date: '',
    vacancy: '',
    contact: '',
    location: '',
    images: [],
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    setFormData((prevFormData) => {
      if (type === 'file') {
        return { ...prevFormData, [name]: files };
      }
      return { ...prevFormData, [name]: value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (key === 'images') {
        for (let i = 0; i < value.length; i++) {
          formDataToSend.append(`images`, value[i]);
        }
      } else {
        formDataToSend.append(key, value);
      }
    });

    const token = localStorage.getItem('token');

    axios.post('http://localhost:8020/api/postjob', formDataToSend, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('access_token')}`
      }
    })
    .then(response => {
      console.log('Job posted successfully:', response.data);
      alert("Job posted Successfully.")
    })
    .catch(error => {
      console.error('Error posting job:', error);
    });
  };

  return (
    <Card>
      <Card.Body>
        <Card.Title>Post a Job</Card.Title>
        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
         <Form.Label>Name</Form.Label>
         <Form.Control type="name" placeholder="Enter name"  value={formData.name} onChange={handleChange} name='name' required/>
         <Form.Text className="text-muted">
         </Form.Text>
       </Form.Group>
       <Form.Group className="mb-3" controlId="formBasicEmail">
         <Form.Label>Category</Form.Label>
         <Form.Control type="" placeholder="Enter categoey"  value={formData.category} onChange={handleChange} name='category' required/>
         <Form.Text className="text-muted">
         </Form.Text>
       </Form.Group>       <Form.Group className="mb-3" controlId="formBasicEmail">
         <Form.Label>Language</Form.Label>
         <Form.Control type="" placeholder="Enter language"  value={formData.language} onChange={handleChange} name='language' required/>
         <Form.Text className="text-muted">
         </Form.Text>
       </Form.Group>
       <Form.Group className="mb-3" controlId="formBasicEmail">
         <Form.Label>End Date</Form.Label>
         <Form.Control type="date" placeholder="Enter end date"  value={formData.end_date} onChange={handleChange} name='end_date' required/>
         <Form.Text className="text-muted">
         </Form.Text>
       </Form.Group>
       <Form.Group className="mb-3" controlId="formBasicPassword">
         <Form.Label>Vacancy</Form.Label>
         <Form.Control type="Number" placeholder="enter vacency"  value={formData.vacancy} onChange={handleChange} name='vacancy' required/>       </Form.Group>
       <Form.Group className="mb-3" controlId="formBasicEmail">
         <Form.Label>Contact</Form.Label>
         <Form.Control type="number" placeholder="Enter your phn number"  value={formData.contact} onChange={handleChange} name='contact' />
         <Form.Text className="text-muted">
         </Form.Text>       </Form.Group>
       <Form.Group className="mb-3" controlId="formBasicEmail">
         <Form.Label>Location</Form.Label>
         <Form.Control type="" placeholder="Enter location"  value={formData.location} onChange={handleChange} name='location' required/>
         <Form.Text className="text-muted">
         </Form.Text>
       </Form.Group>
       <Form.Group className="mb-3" controlId="formBasicEmail">
        
         <div className="mb-3">
     <label htmlFor="exampleInputEmail1" className="form-label">images</label>
     <input type="file" multiple className="form-control" value={formData.images} id="exampleInputEmail1" name = "images"  aria-describedby="emailHelp" onChange={handleChange} />
    
    
/  </div>
  
       </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="I agree all terms and conditions" />
       </Form.Group>          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Card.Body>
    </Card>
  )
}
