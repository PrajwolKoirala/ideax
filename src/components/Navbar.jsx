import React from "react";
import { Dropdown, Button } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import logo from "../assets/images/logo.png"
import search from "../assets/images/search.png"

import "./Navbar.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../redux/slice/UserSlice";

export default function Navbar1() {
  const user = useSelector((redux_state) => redux_state.user.data);
  const isTeacher = user && user.role === "Teacher";
  const isSchool = user && user.role === "School";
  const isLearner = user && user.role === "Learner";

  console.log("Is Teacher:", isTeacher);
const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.clear();
    dispatch(setUser(null));
    navigate('/')
  };

  return (
    // <div className="nav-bar">
    //   <div className="logo">
    //     <NavLink to="/">Logo</NavLink>
    //   </div>
    //   <div className="about">About</div>
    //   <div className="buttons">
    //     {!user && (
    //       <>
    //         <Dropdown>
    //           <Dropdown.Toggle variant="primary" id="dropdown-basic">
    //             Register
    //           </Dropdown.Toggle>
    //           <Dropdown.Menu>
    //             <Dropdown.Item as={Link} to="/signupteacher">
    //               Teacher
    //             </Dropdown.Item>
    //             <Dropdown.Item as={Link} to="/signuplearner">
    //               Learner
    //             </Dropdown.Item>
    //             <Dropdown.Item as={Link} to="/signupschool">
    //               School
    //             </Dropdown.Item>
    //           </Dropdown.Menu>
    //         </Dropdown>
    //         <NavLink to="login">
    //           <Button className="login-button">Login</Button>
    //         </NavLink>
    //       </>
    //     )}
    //     {user && (
    //       <Link as={Link} onClick={handleLogout}>
    //         <button>logout</button>
    //       </Link>
    //     )}
    //     {isTeacher && (
    //       <>
    //         <NavLink to="/searchjob" className="link"><button>Search Job</button></NavLink>
    //         <NavLink as={Link} to="/startclass" className="link">
    //           <button>start class</button>
    //         </NavLink>
    //         <Link as={Link} to="/playgames" className="link"><button>Play Games</button></Link>
    //       </>
    //     )}
    //     {isSchool && (
    //       <Link as={Link} to="/postjob" className="link">
    //         <button>Post Job</button>
    //       </Link>
    //     )}
    //     {isLearner && (
    //         <>
    //       <Link as={Link} to="/availableclasses" className="link">
    //         <button>search classes</button>
    //       </Link>
    //        <Link as={Link} to="/playgames" className="link"><button>Play Games</button></Link>
    //         </>
    //     )}
    //   </div>
    // </div>
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary Navbar">
        <div className="container-fluid">
          {/* <a className="navbar-brand" href="#">Logo</a> */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item me-3">
                {" "}
                {/* Add me-3 class for extra margin to the right */}
                <Link className="nav-link active" aria-current="page" to="">
                  <img
                    src={logo}
                    alt="logo"
                    className="logo"
                    style={{ width: "3rem" }}
                  />
                </Link>
              </li>

              <li className="mr-5-rem">
                <form
                  className="d-flex"
                  role="search"
                  onSubmit={(e) => {
                    e.preventDefault();
                    // const searchTerm = e.target.search.value;
                    
                  }}
                >
                  {/* { 
    user
    &&
     <button className="btn btn-outline-success" type="button" onClick={handleLogOut}>logout</button>
} */}

                  <input
                    className="form-control me-2"
                    type="search"
                    name="search"
                    placeholder="Search"
                    aria-label="Search"
                    style={{
                      border: "2px solid #aaa",
                      borderRadius: "30px",
                      width: "20rem",
                      height: "3rem",
                    }}
                  />
                  <button className="btn" type="submit">
                    <img src={search} style={{ width: "1.9rem", }} />
                  </button>
                </form>
              </li>

              {/* {!user && (
                <>
                  <li className="nav-item me-3">
                    {" "}
                   
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      to="login"
                    >
                      Login
                    </Link>
                  </li>

                  <li className="nav-item dropdown me-3">
                    {" "}
                    
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      to="signup"
                      style={{
                        backgroundColor: "skyblue",
                        borderRadius: "5px",
                      }}
                    >
                      Signup
                    </Link>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          donor
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          receiver
                        </a>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Something else here
                        </a>
                      </li>
                    </ul>
                  </li>
                </>
              )} */}
                 {!user && (
          <>
            <Dropdown>
              <Dropdown.Toggle variant="primary" id="dropdown-basic"  className="nav-link active"
                      aria-current="page"
                      
                      style={{
                        backgroundColor: "skyblue",
                        borderRadius: "5px",
                      }}>
                Register
              </Dropdown.Toggle>
              <Dropdown.Menu >
                <Dropdown.Item as={Link}   to="/signupteacher"  style={{
            backgroundColor: "skyblue",
            marginLeft:"0px",
            border: "5px",
          }}>
                  Teacher
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="/signuplearner" style={{
            backgroundColor: "skyblue",
            marginLeft:"0px",
            marginBottom:"2px",
            marginTop:"2px",

            border: "5px",
          }}>
                  Learner
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="/signupschool" style={{
            backgroundColor: "skyblue",
            marginLeft:"0px",
            border: "5px",

          }}>
                  School
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <NavLink to="login" className="nav-link active"
                      aria-current="page"
                     >
              Login
            </NavLink>
          </>
        )}
      {user && (
          <Nav.Link as={Link} onClick={handleLogout} className="nav-link active"
          aria-current="page"
          
         >
            <button style={{
            backgroundColor: "red",
            borderRadius: "5px",
            marginLeft:"800px"
          }}>logout</button>
          </Nav.Link>
        )}
        {isTeacher && (
          <>
            <Link to="/searchjob"  className="nav-link active link"
                      aria-current="page" >
                        <button style={{
                        backgroundColor: "skyblue",
                        borderRadius: "5px",
                        border:"none",
                      }}>Search Job</button></Link>
            <Link as={Link} to="/startclass" className="nav-link active link"
                      aria-current="page">
              <button style={{
                        backgroundColor: "skyblue",
                        borderRadius: "5px",
                        border:"none",

                      }}>start class</button>
            </Link>
            <Link as={Link} to="/playgames"className="nav-link active link"
                      aria-current="page"
                      ><button   style={{
                        backgroundColor: "skyblue",
                        borderRadius: "5px",
                        border:"none",

                      }}>Play Games</button></Link>
          </>
        )}
        {isSchool && (
          <Link as={Link} to="/postjob" className="nav-link active link"
          aria-current="page"
        >
            <button   style={{
            backgroundColor: "skyblue",
            borderRadius: "5px",
            border:"none",

          }}>Post Job</button>
          </Link>
        )}
        {isLearner && (
            <>
          <Link as={Link} to="/availableclasses" className="nav-link active link"
                      aria-current="page"
                   >
            <button    style={{
                        backgroundColor: "skyblue",
                        borderRadius: "5px",
                        border: "none",
                      }}>search classes</button>
          </Link>
           <Link as={Link} to="/playgames" className="nav-link active link"
                      aria-current="page"
                     ><button  style={{
                        backgroundColor: "skyblue",
                        borderRadius: "5px",
                        border: "none",
                      }}>Play Games</button></Link>
            </>
        )}

              {/* {!user ? (
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/request/show"
                  >
                    Donate
                  </Link>
                </li>
              ) : user.role === "receiver" ? (
                <>
                  <li className="nav-item">
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      to="/request/create"
                    >
                      Request
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      to="/request/show"
                    >
                      List
                    </Link>
                  </li>
                </>
              ) : (
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/request/show"
                  >
                    Donate
                  </Link>
                </li>
              )} */}

{/* {user && (
          <Link as={Link} className="btn btn-outline-success" onClick={handleLogout}>
            <button>logout</button>
          </Link>
        )} */}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

/* <div  className="nav-bar">
    <div className="container">
        <a href="/" >LOGO</a>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">

                    {
                        !user
                        &&
                            <>
                        <Link as={Link} to="login">Login</Link>
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                Register
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item as={Link} to="/signupteacher">Teacher</Dropdown.Item>
                                <Dropdown.Item as={Link} to="/signuplearner">Learner</Dropdown.Item>
                                <Dropdown.Item as={Link} to="/signupschool">School</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                            </>
                        }
                        {
                            user
                            &&
                            <Link as={Link} onClick={handleLogout}>logout</Link>

                        }
                        {
                        isTeacher && (
                            <>
                            <Link as={Link} to="/searchjob">Search Job</Link>
                            <Link as={Link} to="/startclass">start class</Link>
                            </>

                        )}

                         {
                        isSchool && (
                              <Link as={Link} to="/postjob">Post Job</Link>
                        )}
                           {
                        isLearner && (
                              <Link as={Link} to="/availableclasses">search classes</Link>
                        )}

            </Nav>
        </Navbar.Collapse>
    </div>
</div> */



// import React from 'react';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import Dropdown from 'react-bootstrap/Dropdown';
// import { Link } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux'
// import { setUser } from '../redux/slice/UserSlice'


// export default function Navbar1() {
//     const user = useSelector((redux_state) => redux_state.user.data)
//     const isTeacher = user && user.role === 'Teacher';
//     const isSchool = user && user.role === 'School';
//     const isLearner = user && user.role === 'Learner';


//     console.log("Is Teacher:", isTeacher);

//     const dispatch = useDispatch()

//     const handleLogout = () => {
//         localStorage.clear()
//         dispatch(setUser(null))
//     }

//     return (
//         <Navbar expand="lg" className="bg-body-tertiary">
//             <Container>
//                 <Navbar.Brand as={Link} to="">LOGO</Navbar.Brand>
//                 <Navbar.Toggle aria-controls="basic-navbar-nav" />
//                 <Navbar.Collapse id="basic-navbar-nav">
//                     <Nav className="me-auto">
                       
//                             {
//                                 !user
//                                 &&
//                                     <>
//                                 <Link as={Link} to="login">Login</Link>
//                                 <Dropdown>
//                                     <Dropdown.Toggle variant="success" id="dropdown-basic">
//                                         Register
//                                     </Dropdown.Toggle>
//                                     <Dropdown.Menu>
//                                         <Dropdown.Item as={Link} to="/signupteacher">Teacher</Dropdown.Item>
//                                         <Dropdown.Item as={Link} to="/signuplearner">Learner</Dropdown.Item>
//                                         <Dropdown.Item as={Link} to="/signupschool">School</Dropdown.Item>
//                                     </Dropdown.Menu>
//                                 </Dropdown>
//                                     </>
//                                 }
//                                 {
//                                     user
//                                     &&
//                                     <Link as={Link} onClick={handleLogout}>logout</Link>

//                                 }
//                                 {
//                                 isTeacher && (
//                                     <>
//                                     <Link as={Link} to="/searchjob">Search Job</Link>
//                                     <Link as={Link} to="/startclass">start class</Link>
//                                     <Link as={Link} to="/playgames">Play Games</Link>

//                                     </>

//                                 )}
                                
//                                  {
//                                 isSchool && (
//                                       <Link as={Link} to="/postjob">Post Job</Link>
//                                 )}
//                                    {
//                                 isLearner && (
//                                     <>
//                                       <Link as={Link} to="/availableclasses">search classes</Link>
//                                       <Link as={Link} to="/playgames">Play Games</Link>

//                                     </>
                                      
//                                 )}
                           
                        
//                     </Nav>
//                 </Navbar.Collapse>
//             </Container>
//         </Navbar>
//     );
// }

