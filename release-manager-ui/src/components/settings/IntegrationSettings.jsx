import React, {setState, useEffect,useState } from 'react';
import Layout from '../common/Layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJira, faGithub, faJenkins } from '@fortawesome/free-brands-svg-icons'

import {Link} from 'react-router-dom'
import { useHistory } from 'react-router'

const IntegrationSettings = (props) => {
    const [showintegration,setShowintegration] = useState(false);
    const [showdescription,setShowdecription] = useState(true);
    const history = useHistory();

    const showHide = () => {
        setShowintegration(true);
        
    }

    const description = () =>{
        setShowdecription(false);
    }
    const handleClick = () => {
      history.push('/profilesettings');
    }
    
    return (
        <div>
            <Layout>
                <div className="large-container">
                    <div className="sidebar-container">
                        <div className="border-right" id="sidebar-wrapper">
                            <div className="sidebar-heading">Settings</div>
                                <div className="list-group list-group-flush">
                                <a href="#" className="list-group-item list-group-item-action bg-light" onClick={handleClick}>Profile</a>
                                <a href="#" className="list-group-item list-group-item-action bg-light" onClick={()=>{showHide();description()}}>Integrations</a>
                                {/* <a href="#" className="list-group-item list-group-item-action bg-light">Overview</a>
                                <a href="#" className="list-group-item list-group-item-action bg-light">Events</a>
                                <a href="#" className="list-group-item list-group-item-action bg-light">Profile</a>
                                <a href="#" className="list-group-item list-group-item-action bg-light">Status</a> */}
                            </div>
                        </div>
                    </div><br/>
                        {showdescription?<div className="description-container">
                        <div className = "sidebar-description">               
                            <img src="SystemIntegration.jpg" alt="" className="image" />  
                            <h3>Project Integration</h3>   
                            <p>
                              As a Project Manager or as a Developer you know that we need different types of software together to accomplish many important task related to  your project.Here you can integrate your different projects thats in your account  to a various services like Jira,GitHub and Jenkins.As a Project Manager or as a Developer you know that we need different types of software together to accomplish many important task related to  your project.Here you can integrate your different projects thats in your account  to a various services like Jira,GitHub and Jenkins.As a Project Manager or as a Developer you know that we need different types of software together to accomplish many important task related to  your project.Here you can integrate your different projects thats in your account  to a various services like Jira,GitHub and Jenkins.</p>    
                        </div>   
                     </div>:null}
                    </div> <br/>                                      
                      { showintegration ?<div className="container-widget">      
                      <div className="container-body">
                          <h2 className="settings-heading">Get Started with Integrations</h2>
                          <h4 className="settings-subheading">Integrate your project with various services</h4>
                          {/* <Link to ="/dashboard"><button className="btn btn-primary align-right ">Cancel</button></Link> */}
                          <div className="integration-group">
                            <div className="integration-container">
                                <FontAwesomeIcon icon={faJira} size="2x" />
                                <h4>Jira</h4>
                                <p>Jira is a proprietary issue tracking product developed by Atlassian that allows bug tracking and agile project management. </p>
                                
                                <button className="btn-integrate btn-primary">Integrate with Jira</button>    
                            </div>
                            <div className="integration-container">
                                <FontAwesomeIcon icon={faGithub} size="2x" />
                                <h4>GitHub</h4>
                                <p>GitHub, Inc. is a provider of Internet hosting for software development and version control using Git.  </p>
                                <br />
                                <br />
                                <button className="btn-integrate btn-primary">Integrate with GitHub</button>
                            </div>  
                            <div className="integration-container">
                                <FontAwesomeIcon icon={faJenkins} size="2x" />
                                <h4>Jenkins</h4>
                                <p>Jenkins is a free and open source automation server. It helps automate the parts of software development related to building, testing, and deploying. </p>
                                <button className="btn-integrate btn-primary">Integrate with Jenkins</button>
                            </div>                    
                        </div>
                    </div>  
                    </div> : null }                  
            </Layout>
        </div>
    );
};

export default IntegrationSettings;