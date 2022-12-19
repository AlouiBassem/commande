import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from "react-router-dom"

import { FiMail } from 'react-icons/fi'
import { BiWorld } from 'react-icons/bi'
import { HiPhone } from 'react-icons/hi'
export default function Menu() {
  return (
    <div>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">L'AGORA RESTAURANT </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link   as={Link} to ="/" >Acceuil </Nav.Link>
          <Nav.Link href="#pricing">Carte</Nav.Link>
          <NavDropdown title="Liste" id="collasible-nav-dropdown">
            <NavDropdown.Item as={Link} to ={"/categorie"} >Categories</NavDropdown.Item>
            <NavDropdown.Item  as={Link} to ="/article"> Article </NavDropdown.Item>
            <NavDropdown.Item  as={Link} to ="/hotel"> HOTEL </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3"> Another action</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item as={Link} to ="/ticket">
             Liste Tickets
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to ="/ticket1">
             Liste Tickets En cours
            </NavDropdown.Item>            
            <NavDropdown.Item as={Link} to ="/formulaire">
             Contactez Nous
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link href="#deets">Route Lafrane km 3, Imm Lafrane Centre 2 </Nav.Link>
          <Nav.Link eventKey={2} href="#memes">
          11:00 - 23:30
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>

  <Navbar collapseOnSelect bg="light" fixed="bottom">
            <Container>
                <div>
                    <a href='http://www.logicom-dev.com.tn' style={{ margin: "5px" }}><BiWorld />WebSite</a>{' '}
                    <a href='mailto:sf.logicom@tunet.com' style={{ margin: "5px" }}><FiMail />Mail</a>{' '}

                    <a href="tel:+21674416010" style={{ margin: "5px" }}><HiPhone /><sub>+216</sub>74416010</a>

                </div>
                {/*<Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        <img alt="company-logo" width="50px" height="50px" src="company-logo.png" />
                    </Navbar.Text>
                </Navbar.Collapse>*/}
            </Container>
  </Navbar>
  </div>
  )
}
