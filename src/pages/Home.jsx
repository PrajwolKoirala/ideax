// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Link, useNavigate, useParams } from 'react-router-dom';
// import Insta from "../assets/images/insta.svg";
// import twit from "../assets/images/twitterx.svg";
// import logo from "../assets/images/logo.png";
// import Fb from "../assets/images/fb.svg";

// import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";

// const Home = () => {
//     const [isReportOpen, setIsReportOpen] = useState(false);
//     const [reportType, setReportType] = useState(""); // Define reportType state
// const navigate = useNavigate();

//     const toggleReportCard = () => {
//         setIsReportOpen(!isReportOpen);
//     };

//     const handleReportSubmit = async (postId, reportType) => {
//         try {
//             // Send the report to the server
//             // await axios.post(`http://localhost:8020/api/report`, {
//             //     postId,
//             //     reportType,
//             // });

//             // Show alert on successful reporting
//             alert('Report posted successfully');
//         } catch (error) {
//             console.error('Error posting report:', error);
//         } finally {
//             // Close the modal
//             setIsReportOpen(false); // Close the modal using setIsReportOpen
//         }
//     };
//   const [data, setdata] = useState({
//     title: "",
//     description: "OK",
//     content: "",
//     images: [],
//     selectedImage: null,
//   });

//   const [posts, setPosts] = useState([]);
//   function handleChange(e) {
//     if (e.target.name === "images") {
//       setdata({
//         ...data,
//         selectedImage: e.target.files[0], // Store the selected image
//       });
//     } else {
//       setdata({
//         ...data,
//         [e.target.name]: e.target.value,
//       });
//     }
//   }
//   function handleSubmit(e) {
//     e.preventDefault();
//     let url = "http://localhost:8020/api/posts";
//     let form_Data = new FormData();
//     form_Data.append("title", data.title);
//     form_Data.append("description", data.description);
//     form_Data.append("content", data.content);
//     form_Data.append("images", data.selectedImage);

//     axios({
//       url,
//       method: 'POST',
//       data: form_Data,
//       headers: {
//         Authorization: `Bearer ${localStorage.getItem("access_token")}`
//       }
//     })
//       .then(response => {
//         console.log('Post created successfully:', response.data);
//       })
//       .catch(error => {
//         console.error('Error creating post:', error);
//       });
//   }

//   useEffect(() => {
//     const fetchPosts = async () => {
//       try {
//         const response = await axios.get('http://localhost:8020/api/getposts');
//         setPosts(response.data.data);
//       } catch (error) {
//         console.error('Error fetching posts:', error);
//       }
//     };

//     fetchPosts();
//   }, []);

//   return (
//     <>
//     <div className="home-container">
//     <h1 className="post-heading">Create a Post</h1>
//     <form className="post-form" onSubmit={handleSubmit}>
//       <input
//         type="text"
//         className="post-input"
//         placeholder="Title"
//         value={data.title}
//         name="title"
//         onChange={handleChange}
//         required
//       />
//       <input
//         type="text"
//         className="post-input"
//         placeholder="Description"
//         value={data.description}
//         name="description"
//         onChange={handleChange}
//         required
//       />
//       <input
//         type="file"
//         accept="image/*"
//         className="post-file-input"
//         name="images"
//         onChange={handleChange}
//       />
//       <textarea
//         placeholder="Content"
//         value={data.content}
//         className="post-textarea"
//         onChange={handleChange}
//         name="content"
//         required
//       ></textarea>
//       <button type="submit" className="post-button">Post</button>
//     </form>


// <h1 className="post-heading">Posts</h1>
// {posts.map((post) => (

//   <div key={post._id} className="post-card">
//     <h2>{post.title}</h2>
//     <p>{post.description}</p>
//     <p>{post.content}</p>
//     {post.images &&
//       post.images.map((image, index) => (
//         <img
//           key={index}
//           src={`http://localhost:8020/uploads/${image}`}
//           alt={`Image ${index}`}
//         />
//       ))}
//     {post.created_by && (
//       <p>Created By: prajwol</p>
//     )}

//     <div className="button-container">
// <Link to={`/post/${post._id}`}>
//       <button className="rate-button">Rate this post</button>
// </Link>
//       {/* <button className="report-button">Report</button> */}
//       <button className="report-button" onClick={toggleReportCard}>Report</button>

//       {isReportOpen && (
//         <div className="report-card">
//           <h2>Report Post</h2>
//           <label>
//             Select report type:
//             <select value={reportType} onChange={(e) => setReportType(e.target.value)}>
//               <option value="">Select...</option>
//               <option value="vulgar">Vulgar</option>
//               <option value="sexual">Sexual Content</option>
//               {/* Add more options as needed */}
//             </select>
//           </label>
//           <button onClick={handleReportSubmit}>OK</button>
//         </div>
//       )}
//     </div>
//     <hr />
//   </div>
// ))}
      
//     </div>
//      <footer className=" text-dark py-4">
//      <div className="container">
//        <div className="row">
//          <div className="col-md-4 col ">
//            <h3>Contact Us</h3>
//            <p>Have questions or want to get involved? Reach out to us!</p>
//            <button className="btn">Contact Us</button>
//          </div>
//          <div className="col-md-4 col">
//            <img
//              src={logo}
//              alt="logo"
//              className="logo"
//              style={{ width: "7rem", margin: "auto" }}
//            />
//          </div>
//          <div className="col-md-4 ">
//            <h3 className="mb-5">Follow Us</h3>
//            <ul className="list-unstyled follow ">
//              <li>
//                <svg
//                  xmlns="http://www.w3.org/2000/svg"
//                  width="50"
//                  height="50"
//                  viewBox="0 0 50 50"
//                >
//                  <image
//                    width="50"
//                    height="50"
//                    href={Fb} // Use the imported SVG image
//                  />
//                </svg>
//              </li>

//              <li>
//                <svg
//                  xmlns="http://www.w3.org/2000/svg"
//                  width="45"
//                  height="45"
//                  viewBox="0 0 45 45"
//                >
//                  <image
//                    width="45"
//                    height="45"
//                    href={twit} // Use the imported SVG image
//                  />
//                </svg>
//              </li>

//              <li>
//                <svg
//                  xmlns="http://www.w3.org/2000/svg"
//                  width="45"
//                  height="45"
//                  viewBox="0 0 45 45"
//                >
//                  <image
//                    width="45"
//                    height="45"
//                    href={Insta} // Use the imported SVG image
//                  />
//                </svg>
//              </li>
//            </ul>
//          </div>
//        </div>
//      </div>
//      <div className="text-center mt-3">
//        &copy; {new Date().getFullYear()} Your Scholarship Donation Project
//      </div>
//    </footer>
//    </>
//   );
// };

// export default Home;


import React from "react";
import scholorship from "../assets/images/ok.jpg";
// import Footer from "../components/Footer";
import Fb from "../assets/images/fb.svg";
import Insta from "../assets/images/insta.svg";
import twit from "../assets/images/twitterx.svg";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";

export default function HomePage() {

  return (
    <div>
      <div className="container">
        <section className="hero">
          <div className="hero-content">
            <h1>
            Indigenous Tongues: 
              <span
                style={
                  {
                    color: "rgb(4, 151, 209)",
                  }
                }
              >
                {" "}
                सांस्कृतिक धरोहरको पुनर्जीवन तथा संरक्षण
              </span>{" "}
              
            </h1>
            <p>Empowering Education for a Better Tomorrow</p>
           <Link to={'/postsomething'}><button className="btn">ADD SOMETHING</button></Link>
          </div>
          <div className="hero-image">
            <img
              className="scholor_img"
              src={scholorship}
              height={350}
              alt="Scholarship Fund"
              
            />
          </div>
        </section>
        <section className="about mb-6">
          <h2 style={{ padding: "20px 0", margin:"auto",color:"#1607e1", textAlign:"center" }}>किन त ?</h2>
          <p
            style={{
              fontFamily: "cursive",
              maxWidth: "50rem",
              fontSize: "1.2rem",
              lineHeight: "1.6",
              margin:"auto",
              // overflow: "wrap",
              textAlign:"justify"
            }}
          >
            नेपालमा आदिवासी भाषाको संरक्षण गर्नु तब धेरै कारणहरू छन्। यसले उनीहरूको सांस्कृतिक धरोहर, ज्ञान, र विचारको एक महत्त्वपूर्ण हिस्सा हो। यसले उनीहरूको समाज र संस्कृतिलाई विशेष बनाउने योगदान पुर्याउँछ र साथै उनीहरूको आत्म-मूल्यांकन र आत्म-सम्मानमा मद्दत पुर्याउँछ। यसले उनीहरूको स्वार्थ र समृद्धि सञ्चय गर्दछ र यसले समृद्धि र विकासका लागि योगदान पुर्याउँछ।

विविधता र समृद्धि: नेपालमा विभिन्न आदिवासी समुदायहरू बस्छन् र प्रवासी छन्। यसका कारण, विभिन्न आदिवासी भाषाहरू छन् जुन उनीहरूको समृद्ध सांस्कृतिक विविधता र समृद्धिको एक हिस्सा हुन्छन्। यसले समृद्धिको एक रहस्यमय रूपमा योगदान पुर्याउँछ।

संघर्ष र अधिकार: आदिवासी भाषाहरूको संरक्षणले उनीहरूको भूमिका, संघर्ष र अधिकारको सुरक्षा गर्दछ। यसले उनीहरूको समाजमा समानता र न्यायको लागि एक ठूलो योगदान पुर्याउँछ।

विकासमा सहायक: आदिवासी भाषाहरूको संरक्षणले सामाजिक र आर्थिक विकासमा मद्दत पुर्याउँछ। यसले उनीहरूलाई शिक्षा, स्वास्थ्य सेवा, तथा अन्य आवश्यक सेवाहरूमा पुर्याउँछ र उनीहरूलाई सकारात्मक रूपमा सामाजिक र आर्थिक संरक्षण प्रदान गर्दछ।

सांस्कृतिक धरोहरको संरक्षण: आदिवासी भाषाहरू सांस्कृतिक धरोहरको महत्त्वपूर्ण हिस्सा हुन्छन्। यसले उनीहरूको ऐतिहासिक र सांस्कृतिक धरोहरको संरक्षण गर्दछ र यसले उनीहरूको सम्मान र गरिमामा मद्दत पुर्याउँछ।

समृद्ध अनुसन्धान: नेपालमा विभिन्न आदिवासी भाषा भनेका अध्ययन र अनुसन्धानको विषयमा छन्। यसले विज्ञान, साहित्य, र सांस्कृतिक अनुसन्धानको लागि एक व्यापक आधार प्रदान गर्दछ।

समृद्ध भविष्य: आदिवासी भाषाहरूको संरक्षण भविष्यमा उनीहरूको समृद्ध भविष्यको निर्माणमा महत्त्वपूर्ण योगदान पुर्याउ
          </p>
        </section>
        
<section className="how-to-help mb-6">
          <h2 style={{ padding: "20px 0", margin:"auto",color:"#1607e1", textAlign:"center" }}>कसरी ?</h2>
          <div className="help-cards">
            <div className="help-card">
              <h3 style={{ fontSize: "1.75rem", color: "#1607e1" }}>School</h3>
              <p>Facilitate online and offline language learning in Schools</p>
              <p>
                {" "}
                <span>13</span> schools Till now{" "}
              </p>
            </div>
            <div className="help-card">
              <h3 style={{ fontSize: "1.75rem", color: "#1607e1" }}>
                Teacher
              </h3>
              <p>An interactive platform for language learning and practice.</p>
              <p>
                {" "}
                <span>207</span> Teachers Till now{" "}
              </p>
            </div>
            <div className="help-card">
              <h3 style={{ fontSize: "1.75rem", color: "#1607e1" }}>
              Beneficiaries
              </h3>
              <p>
              Gather and share posts and folklore.
                <p>
                  {" "}
                  <span>1309</span> Beneficiaries {" "}
                </p>
              </p>
            </div>
          </div>
        </section>
        <footer className=" text-dark py-4">
          <div className="container">
            <div className="row">
              <div className="col-md-4 col ">
                <h3>Contact Us</h3>
                <p>Have questions or want to get involved? Reach out to us!</p>
                <button className="btn">Contact Us</button>
              </div>
              <div className="col-md-4 col">
                <img
                  src={logo}
                  alt="logo"
                  className="logo"
                  style={{ width: "7rem", margin: "auto", borderRadius: "5rem" }}
                />
              </div>
              <div className="col-md-4 ">
                <h3 className="mb-5">Follow Us</h3>
                <ul className="list-unstyled follow ">
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="50"
                      height="50"
                      viewBox="0 0 50 50"
                    >
                      <image
                        width="50"
                        height="50"
                        href={Fb} // Use the imported SVG image
                      />
                    </svg>
                  </li>

                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="45"
                      height="45"
                      viewBox="0 0 45 45"
                    >
                      <image
                        width="45"
                        height="45"
                        href={twit} // Use the imported SVG image
                      />
                    </svg>
                  </li>

                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="45"
                      height="45"
                      viewBox="0 0 45 45"
                    >
                      <image
                        width="45"
                        height="45"
                        href={Insta} // Use the imported SVG image
                      />
                    </svg>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="text-center mt-3">
            &copy; {new Date().getFullYear()} Your Scholarship Donation Project
          </div>
        </footer>
      </div>
    </div>
  );
}