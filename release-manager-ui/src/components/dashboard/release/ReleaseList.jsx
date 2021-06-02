import React, { useState, useEffect } from 'react';
import Layout from '../../common/Layout';
import { useHistory } from 'react-router';
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';
import AllReleaseServices from '../../../services/AllReleaseServices';
import axios from 'axios';

const DisplayReleases = () => {
    
    const style = { width: '18rem' };
    const [releases, setReleases] = useState([]);
  
    useEffect(()=>{
        
        AllReleaseServices.getAllReleases().then((response) =>{
        // destructuring
        const {list} = response.data;
        setReleases(response.data);
        console.log(list);
        console.log(response.data);
      });
  
    },[])
  console.log(releases)
    return (
      <div className='col'>
        <Layout>
          <h3>Releases for the project</h3>     
          <div className="container-widget">
              {releases && releases.map((release) => {
                return (
             <Card key={release.releaseId} style={style}>
             <Card.Body style={{"padding-bottom":"10px"}}>
             <Card.Title >{release.releaseName}</Card.Title>
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
  
  export default DisplayReleases;