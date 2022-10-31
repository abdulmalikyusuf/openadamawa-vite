import React from 'react'
import {Container, Navbar, Nav} from 'react-bootstrap';
import { useNavigate, useLocation } from "react-router-dom"

const Header = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation();
  
  return (
    <header>
      {/* bg-granny-smith-appple bg-viridian-green  */}
      <Navbar bg="state2state" className="" variant='dark' expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand href="#home">Open Adamawa</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav activeKey={pathname} className="ms-auto">
              <Nav.Link onClick={()=>navigate("/")} className={`${pathname==='/'&& "text-white"}`}>Home</Nav.Link>
              <Nav.Link onClick={()=>navigate("/about")} className={`${pathname==='/about'&& "text-white"}`}>About</Nav.Link>
              <Nav.Link onClick={()=>navigate("/budgets")} className={`${pathname==='/budgets'&& "text-white"}`}>Budgets</Nav.Link>
              <Nav.Link onClick={()=>navigate("/community-dev-plan")} className={`${pathname==='/community-dev-plan'&& "text-white"}`}>Community Dev. Plan</Nav.Link>
              <Nav.Link onClick={()=>navigate("/projects")} className={`${pathname==='/projects'&& "text-white"}`}>Projects</Nav.Link>
              {/* <Nav.Link onClick={()=>navigate("/visualization")} className={`${pathname==='/visualization'&& "text-white"}`}>Visualization</Nav.Link> */}
              <Nav.Link onClick={()=>navigate("/contact")} className={`${pathname==='/contact'&& "text-white"}`}>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header