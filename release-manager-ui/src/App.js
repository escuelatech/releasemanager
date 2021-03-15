import "./App.css";

import Header from './components/header/header'
import SideBar from './components/sidebar/sidebar'

import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'


import {useEffect, useState} from "react";

function App() {
  const [show, setShow] = useState(false)
  
  return (
	  <>
		<Row>
		  <Col className={`sidebar bg-light ${!show ? 'hideSideBar' : 'showSideBar'}`}>
			<SideBar/>
		  </Col>
		  <Col className={"content"}>
			<Header setShow={setShow} show={show}/>
			<Container fluid>
			  <h1 className={"mt-4"}>Simple Sidebar</h1>
			  <p>The starting state of the menu will appear collapsed on smaller screens, and will appear non-collapsed
				on larger screens. When toggled using the button below, the menu will change.</p>
			  <p>Make sure to keep all page content within the <code>#page-content-wrapper</code>. The top navbar is
				optional, and just for demonstration. Just create an element with the <code>#menu-toggle</code> ID which
				will toggle the menu when clicked.</p>

			</Container>
		  </Col>
		</Row>
	  </>
  );
}

export default App;
