import React, { useState, useEffect } from 'react';
import Layout from '../common/Layout';
import { useHistory } from 'react-router';
import ProjectService from '../../services/ProjectServices';
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom'


const DisplayProjects = () => {
  const history = useHistory();
  const style = { width: '18rem' };
  const [projects, setProjects] = useState([]);

  useEffect(()=>{
    ProjectService.getAllProjects().then((response) =>{
      // destructuring
      const {data} = response.data;
      setProjects(data);
    });
  },[])

  return (
    <div>
      <Layout>
        <h3>Projects in your account</h3>     
        <div className="container-widget">
            {projects && projects.map((project) => {
              return (
           <Card key={project.id} style={style}>
           <Card.Body style={{"padding-bottom":"10px"}}>
           <Card.Title >{project.name}</Card.Title>
           <Card.Text>
             Some quick example text to build on the card title and make up the bulk of
             the card's content.
           </Card.Text>
             <Link to = {'/releases'}><Button variant="primary">Release</Button></Link>
          </Card.Body>
          </Card>
              );
           })}
         </div>   
       </Layout>
    </div>   
  ); 
};

export default DisplayProjects;
