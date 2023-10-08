import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Insta from "../assets/images/insta.svg";
import twit from "../assets/images/twitterx.svg";
import logo from "../assets/images/logo.png";
import Fb from "../assets/images/fb.svg";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const PostSomething = () => {
    const [isReportOpen, setIsReportOpen] = useState(false);
    const [reportType, setReportType] = useState(""); // Define reportType state
const navigate = useNavigate();

    const toggleReportCard = () => {
        setIsReportOpen(!isReportOpen);
    };

    const handleReportSubmit = async (postId, reportType) => {
        try {
            // Send the report to the server
            // await axios.post(`http://localhost:8020/api/report`, {
            //     postId,
            //     reportType,
            // });

            // Show alert on successful reporting
            alert('Report posted successfully');
        } catch (error) {
            console.error('Error posting report:', error);
        } finally {
            // Close the modal
            setIsReportOpen(false); // Close the modal using setIsReportOpen
        }
    };
  const [data, setdata] = useState({
    title: "",
    description: "OK",
    content: "",
    images: [],
    selectedImage: null,
  });

  const [posts, setPosts] = useState([]);
  function handleChange(e) {
    if (e.target.name === "images") {
      setdata({
        ...data,
        selectedImage: e.target.files[0], // Store the selected image
      });
    } else {
      setdata({
        ...data,
        [e.target.name]: e.target.value,
      });
    }
  }
  function handleSubmit(e) {
    e.preventDefault();
    let url = "http://localhost:8020/api/posts";
    let form_Data = new FormData();
    form_Data.append("title", data.title);
    form_Data.append("description", data.description);
    form_Data.append("content", data.content);
    form_Data.append("images", data.selectedImage);

    axios({
      url,
      method: 'POST',
      data: form_Data,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`
      }
    })
      .then(response => {
        console.log('Post created successfully:', response.data);
        // navigate("/")
        alert("Post created successfully. Please refresh")
      })
      .catch(error => {
        console.error('Error creating post:', error);
      });
  }

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost:8020/api/getposts');
        setPosts(response.data.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <>
    <div className="home-container">
        
    <h1 className="post-heading">Create a Post</h1>
    <form className="post-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="post-input"
        placeholder="Title"
        value={data.title}
        name="title"
        onChange={handleChange}
        required
      />
      <input
        type="text"
        className="post-input"
        placeholder="Description"
        value={data.description}
        name="description"
        onChange={handleChange}
        required
      />
      <input
        type="file"
        accept="image/*"
        className="post-file-input"
        name="images"
        onChange={handleChange}
      />
      <textarea
        placeholder="Content"
        value={data.content}
        className="post-textarea"
        onChange={handleChange}
        name="content"
        required
      ></textarea>
      <button type="submit" className="post-button">Post</button>
    </form>
    </div>
<div>
<h1 className="post-heading">Posts</h1>
{posts.map((post) => (

  <div key={post._id} className="post-card">
    <h1>{post.title}</h1>
    <h6>{post.description}</h6>
    <p>{post.content}</p>
    {post.images &&
      post.images.map((image, index) => (
        <img
          key={index}
          src={`http://localhost:8020/uploads/${image}`}
          alt={`Image ${index}`}
        />
      ))}
    {post.created_by && (
      <p>Created By: prajwol</p>
    )}

    <div className="button-container">
<Link to={`/post/${post._id}`}>
      <button className="rate-button">Rate this post</button>
</Link>
      {/* <button className="report-button">Report</button> */}
      <button className="report-button" onClick={toggleReportCard}>Report</button>

      {isReportOpen && (
        <div className="report-card">
          <h2>Report Post</h2>
          <label>
            Select report type:
            <select value={reportType} onChange={(e) => setReportType(e.target.value)}>
              <option value="">Select...</option>
              <option value="vulgar">Vulgar</option>
              <option value="sexual">Sexual Content</option>
              {/* Add more options as needed */}
            </select>
          </label>
          <button onClick={handleReportSubmit}>OK</button>
        </div>
      )}
    </div>
    <hr />
    
  </div>
))}
     </div> 
    {/* </div> */}
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
             style={{ width: "7rem", margin: "auto" }}
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
   </>
  );
};

export default PostSomething;
