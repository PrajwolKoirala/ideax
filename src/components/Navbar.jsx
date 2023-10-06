import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { setUser } from '../redux/slice/UserSlice'


export default function Navbar1() {
    const user = useSelector((redux_state) => redux_state.user.data)
    const isTeacher = user && user.role === 'Teacher';
    const isSchool = user && user.role === 'School';
    const isLearner = user && user.role === 'Learner';


    console.log("Is Teacher:", isTeacher);

    const dispatch = useDispatch()

    const handleLogout = () => {
        localStorage.clear()
        dispatch(setUser(null))
    }

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand as={Link} to="">LOGO</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                       
                            {
                                !user
                                &&
                                    <>
                                <Nav.Link as={Link} to="login">Login</Nav.Link>
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
                                    <Nav.Link as={Link} onClick={handleLogout}>logout</Nav.Link>

                                }
                                {
                                isTeacher && (
                                    <>
                                    <Nav.Link as={Link} to="/searchjob">Search Job</Nav.Link>
                                    <Nav.Link as={Link} to="/startclass">start class</Nav.Link>
                                    </>

                                )}
                                
                                 {
                                isSchool && (
                                      <Nav.Link as={Link} to="/postjob">Post Job</Nav.Link>
                                )}
                                   {
                                isLearner && (
                                      <Nav.Link as={Link} to="/availableclasses">search classes</Nav.Link>
                                )}
                           
                        
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
