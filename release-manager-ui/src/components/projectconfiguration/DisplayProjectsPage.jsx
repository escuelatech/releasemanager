import React, { useState, useEffect } from 'react';
import Layout from '../common/Layout';
import { useHistory } from 'react-router';
import ProjectService from '../../services/ProjectServices';
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom'
import './CreateProject.css'

const DisplayProjects = () => {
  const history = useHistory();
  const style = { width: '18rem' };
  const [projects, setProjects] = useState([]);

  useEffect(()=>{
    ProjectService.getAllProjects().then((response) =>{
      console.log("inside useeffect", response.data)
      setProjects(response.data);
    });
  },[])

  console.log('projects', projects)

  return (
    <div>
      <Layout>
        <h3>Projects in your account</h3> 
       
        <div className="display__projects__container">
            {projects && projects.map((project) => {
              return (
                <div className="display__project">
                  <Card key={project.id} style={style}>
                    <Card.Body >
                      <Card.Title >{project.projectName}</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                      </Card.Text>
                      <Link to = {`/releases/${project.projectName}`}><Button variant="primary">Release</Button></Link>
                    </Card.Body>
                  </Card>
                </div>
                );
            })}
         </div>   
       </Layout>
    </div>   
  ); 
};

export default DisplayProjects;
