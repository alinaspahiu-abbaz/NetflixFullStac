import React from 'react'
import { Navbar, Nav, Form, Container,Image } from "react-bootstrap"
import {Link} from "react-router-dom"


export default class Navigation extends React.Component {
 render() {
   return (
    <Navbar variant='dark' expand="lg">
       <Navbar.Brand href="#home">
       <Image src='../assets/logo.png' style={{width:'100px', height:'55px'}}></Image></Navbar.Brand>
       <Navbar.Toggle aria-controls="basic-navbar-nav" />
       <Navbar.Collapse id="basic-navbar-nav">
       <Nav className="mr-auto">
      <Link className="nav-link" to = "/">Home</Link>
      <Link className="nav-link" to = "/backoffice">BackOffice</Link>
      
    </Nav>
    <div className="d-flex my-3 my-lg-0">
        <i className="fa fa-search icons mr-3"></i>
        <div id="kids">KIDS</div>
        <i className="fa fa-bell icons mx-3"></i>
        <i className="fa fa-user icons mx-3"></i>
      </div>

    
  </Navbar.Collapse>
</Navbar>
        )
    }
}

