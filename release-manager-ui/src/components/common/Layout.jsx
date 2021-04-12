// import "../../App.css";


import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import {useEffect, useState} from "react";
// import LoginPage from "./components/login/LoginPage";
import SideBar from '../sidebar/sidebar';
import Header from '../header/header';
import { ThemeContextConsumer } from '../contextApi/ThemeContext';

function Layout(props) {
  const [show, setShow] = useState(false)
  
  return (
	  <>
	   <ThemeContextConsumer>
            {context => (
                <div className={`${context.theme}-theme`}>
		<Row>
		  <Col className={`sidebar bg-light ${!show ? 'hideSideBar' : 'showSideBar'}`}>
			<SideBar />
		  </Col>
		  <Col className={"content"}>
			<Header setShow={setShow} show={show}/>
			<Container fluid>
				
				{/* <LoginPage /> */}
                {props.children}

			</Container>
		  </Col>
		</Row>
		</div>
            )}    
        </ThemeContextConsumer>
	  </>
  );
}

export default Layout;
