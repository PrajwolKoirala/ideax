// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const ApplyForClass = ({ classId }) => {
//     // console.log(classId)
//   const [formData, setFormData] = useState({
//     cvv: '',
//     expirationDate: '',
//     cardNumber: '',
//     paymentMethod: '',
//     amount: 0,
//   });

//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post(
//         `http://localhost:8020/api/onlineClassParticipation/applyclass/${classId}`,
//         formData,
//         {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem('access_token')}`,
//           },
//         }
//       );
//       console.log("hello");
//       alert('Applied for class successfully!');
//       navigate(`/messaging/${classId}`);
//     } catch (error) {
//       console.error('Error applying for class:', error);
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         {/* Render input fields for payment information */}
//         <div className="mb-3">
//           <label className="form-label">paymentMethod</label>
//           <input
//             type="text"
//             className="form-control"
//             value={formData.paymentMethod}
//             onChange={handleChange}
//             name="paymentMethod"
//             required
//           />
//         </div>
//         <div className="mb-3">
//           <label className="form-label">cardNumber</label>
//           <input
//             type="number"
//             className="form-control"
//             value={formData.cardNumber}
//             onChange={handleChange}
//             name="cardNumber"
//             required
//           />
//         </div>
//         <div className="mb-3">
//           <label className="form-label">expirationDate</label>
//           <input
//             type="date"
//             className="form-control"
//             value={formData.expirationDate}
//             onChange={handleChange}
//             name="expirationDate"
//             required
//           />
//         </div>
//         <div className="mb-3">
//           <label className="form-label">amount</label>
//           <input
//             type="number"
//             className="form-control"
//             value={formData.amount}
//             onChange={handleChange}
//             name="amount"
//             required
//           />
//         </div>
//         <div className="mb-3">
//           <label className="form-label">CVV</label>
//           <input
//             type="text"
//             className="form-control"
//             value={formData.cvv}
//             onChange={handleChange}
//             name="cvv"
//             required
//           />
//         </div>
//         {/* Add similar input fields for other payment information */}
//         <button type="submit" className="btn btn-primary">
//           Apply for Class
//         </button>
//       </form>
//     </div>
//   );
// };

// export default ApplyForClass;


import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';

const ApplyForClass = () => {
    // const classId = location.state ? location.state.classId : null;

  const location = useLocation();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    cvv: '',
    expirationDate: '',
    cardNumber: '',
    paymentMethod: '',
    amount: 0,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(location);
    try {
        // const classId = location.state ? location.state.classId : null;
        const classId = location.state ? location.state.classId : null;

      // Apply for class
      const response = await axios.post(
        `http://localhost:8020/api/applyclass/${classId}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('access_token')}`,
          },
        }
      );

      // Send message after successful application
    //   const messageResponse = await axios.post(
    //     `http://localhost:8020/api/messagingGroup/${classId}/sendMessage`,
    //     {
    //       content: `Applied for class with ID ${classId}`,
    //     },
    //     {
    //       headers: {
    //         Authorization: `Bearer ${localStorage.getItem('access_token')}`,
    //       },
    //     }
    //   );

      console.log("hello");
      alert('Applied for class successfully!');
      navigate(`/messaging/${classId}`);
    } catch (error) {
      console.error('Error applying for class:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
      


        <div className="mb-3">
          <label className="form-label">paymentMethod</label>
           <input
            type="text"
            className="form-control"
            value={formData.paymentMethod}
            onChange={handleChange}
            name="paymentMethod"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">cardNumber</label>
          <input
            type="number"
            className="form-control"
            value={formData.cardNumber}
            onChange={handleChange}
            name="cardNumber"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">expirationDate</label>
          <input
            type="date"
            className="form-control"
            value={formData.expirationDate}
            onChange={handleChange}
            name="expirationDate"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">amount</label>
          <input
            type="number"
            className="form-control"
            value={formData.amount}
            onChange={handleChange}
            name="amount"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">CVV</label>
          <input
            type="text"
            className="form-control"
            value={formData.cvv}
            onChange={handleChange}
            name="cvv"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Apply for Class
        </button>
      </form>
    </div>
  );
};

export default ApplyForClass;
