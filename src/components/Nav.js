import React,{useState,useEffect} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {Link} from 'react-router-dom';


function NavigationBar({state:{Login,role},dispatch}){
	return(
		<>
			<Navbar expand="lg" bg="primary" variant="dark" >
				<Navbar.Brand href="#">MentoMeet Internship!</Navbar.Brand>
				<Nav className="navlink navstyle" >
				 {!Login?<Link to="/signup" >Signup</Link>:null}
				 {!Login?<Link to="/login" >Login</Link>:null}
				 {Login?<Link to="/login" onClick={() => dispatch({'type':'LOGOUT',userName:''})}>Logout</Link>:null}
				</Nav>
			</Navbar>
		</>
	)
}

export default NavigationBar