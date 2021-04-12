import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeContextConsumer } from '../contextApi/ThemeContext';
import { useHistory } from 'react-router';

function Header(props) {

	const history = useHistory();
	const handleSettingsClick = () => {
		history.push('/intsettings');
	}

  return (
	<>
		<ThemeContextConsumer>
		{context => (
			<Navbar bg="light" expand="lg" className={"border-bottom"}>
			<Button variant="primary" onClick={() => props.setShow(p => !p)}>Toggle Menu</Button>
			<Navbar.Toggle aria-controls="basic-navbar-nav"/>
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="ml-auto">
				<Nav.Link href="#home" className={"active"}>Home</Nav.Link>
				<Nav.Link href="#link">Link</Nav.Link>
				<NavDropdown title="Dropdown" id="basic-nav-dropdown" alignRight>
					<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
					<NavDropdown.Item href="#action/3.2" onClick={context.toggleTheme}>
						{context.theme === "light" ? "Dark Theme" : "Light Theme"}
					</NavDropdown.Item>
					<NavDropdown.Divider/>
					<NavDropdown.Item href="#action/3.4" onClick={handleSettingsClick}>
					Settings
					</NavDropdown.Item>
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
