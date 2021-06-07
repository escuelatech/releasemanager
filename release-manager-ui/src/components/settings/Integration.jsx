import React from 'react';
import Settings from './Settings' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJira, faGithub, faJenkins } from '@fortawesome/free-brands-svg-icons'

function Integration(props) {
    return (
        <>
            <Settings>
              
                    <h2 className="settings-heading">Get Started with Integrations</h2>
                    <h4 className="settings-subheading">Integrate your project with various services</h4>
                    <div className="integration-group">
                        <div className="integration-container">
                            <FontAwesomeIcon icon={faJira} size="2x" />
                            <h4>Jira</h4>
                            <p>Jira is a proprietary issue tracking product developed by Atlassian that allows bug tracking and agile project management. </p>
                            <br />
                            <div className="settings__button">
                                <button className="btn-integrate btn-primary">Integrate with Jira</button>    
                            </div>
                        </div>

                        <div className="integration-container">
                            <FontAwesomeIcon icon={faGithub} size="2x" />
                            <h4>GitHub</h4>
                            <p>GitHub, Inc. is a provider of Internet hosting for software development and version control using Git.  </p>
                            <br />
                            <div className="settings__button">
                                <button className="btn-integrate btn-primary">Integrate with GitHub</button>
                            </div>
                        </div>  

                        <div className="integration-container">
                            <FontAwesomeIcon icon={faJenkins} size="2x" />
                            <h4>Jenkins</h4>
                            <p>Jenkins is a free and open source automation server. It helps automate the parts of software development related to building, testing, and deploying. </p>
                            
                            <div className="settings__button">
                                <button className="btn-integrate btn-primary">Integrate with Jenkins</button>
                            </div>
                        </div>                    
                    </div>
            
            </Settings> 
        </>
    );
}

export default Integration;