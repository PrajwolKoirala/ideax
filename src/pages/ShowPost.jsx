import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import star from "../assets/images/star.png"
import emptyStar from "../assets/images/empty.png"
import {useNavigate,} from 'react-router-dom';

import Rating from "react-rating"

export default function ShowPost() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [isLoadingProduct, setIsLoadingProduct] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8020/api/post/${id}`);
        setPost(response.data.product);
        setIsLoadingProduct(false);
      } catch (error) {
        console.error("Error fetching product:", error);
        setIsLoadingProduct(false);
      }
    };

    fetchProductDetails();
  }, [id]);

  const updateReview = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `http://localhost:8020/api/${id}/reviews`,
        {
          rating: rating,
          comment: comment,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        }
        
      );
      setPost(response.data.product);
      navigate('/')
    } catch (error) {
      console.error("Error updating review:", error);
    }
  };

  if (isLoadingProduct) {
    return <div className='homepagespinner'> 
      <div className="spinner-border" role="status">
        <span className="sr-only"></span>
      </div>
    </div>
  }

  return (
    <div>
      <div className='row'>
        <div className='col md-6 '>
          <div id="carouselExampleControls" className="carousel slide w-50 h-50" data-bs-ride="carousel">
            <div className="carousel-inner">
              {post && post.images.map((image, index) => (
                <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={index}>
                  <img src={`http://localhost:8020/uploads/${image}`} className="d-block w-100" alt={`Image ${index}`} />
                </div>
              ))}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div className='col md-6'>
          <h1>{post.title}</h1>
          <p>Content: {post.content}</p>
        </div>
      </div>
      <hr />
      <h3>Reviews</h3>
      {post.reviews.map((review, index) => (
        <div className='p-4' style={{
          boxShadow: "1px 1px 10px 0px grey"
        }} key={index}>
          <p>
            prj {[...Array(review.rating)].map((_, i) => (
              <img width={20} src={star} alt={`Star ${i}`} key={i} />
            ))}
          </p>
          <p>{review.comment}</p>
        </div>
      ))}
      <form onSubmit={updateReview}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Rating</label>
          <Rating
            initialRating={rating}
            onChange={setRating}
            emptySymbol={<img width={20} src={emptyStar} className="icon" alt="Empty Star" />}
            fullSymbol={<img width={20} src={star} className="icon" alt="Star" />}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Comment</label>
          <textarea
            name='comment'
            className="form-control"
            id="exampleInputPassword1"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}
