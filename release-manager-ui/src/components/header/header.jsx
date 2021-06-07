import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
import { ThemeContextConsumer } from '../contextApi/ThemeContext';
import { useHistory } from 'react-router';

function Header(props) {

	const history = useHistory();
	const handleSettingsClick = () => {
		history.push('/settings');
	}
	
  return (
	  <>
	  <ThemeContextConsumer>
		{context => (
		<Navbar  bg="light" expand="lg" className={"border-bottom"}>
		  <Button variant="primary" onClick={() => props.setShow(p => !p)}>Menu</Button>
		  <Navbar.Toggle aria-controls="basic-navbar-nav"/>
		  <Navbar.Collapse id="basic-navbar-nav">
			<Nav className="ml-auto">
			 <Link to='/dashboard'> <Nav.Link href="#home" className={"active"}>Dashboard</Nav.Link></Link>
			 <Link><Nav.Link href="#link">Help</Nav.Link></Link> 
			  <NavDropdown title="QuickLink" id="basic-nav-dropdown" alignRight>
				<NavDropdown.Item></NavDropdown.Item>
				<NavDropdown.Item>
				  Profile
				</NavDropdown.Item>
				<NavDropdown.Item onClick={context.toggleTheme}>
						{context.theme === "light" ? "Dark Theme" : "Light Theme"}
					</NavDropdown.Item>
				<NavDropdown.Divider/>
				<NavDropdown.Item onClick={handleSettingsClick}>
					Settings
				</NavDropdown.Item>
				<Link to="/"><NavDropdown.Item>
				  Sign Out
				</NavDropdown.Item></Link>
			  </NavDropdown>
			</Nav>
		  </Navbar.Collapse>
		</Navbar>
		)}
		</ThemeContextConsumer>
	  </>
	
  );
}

export default Header;
