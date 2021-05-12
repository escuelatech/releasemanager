import React, {setState, useEffect } from 'react';
import Layout from '../common/Layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJira, faGithub, faJenkins } from '@fortawesome/free-brands-svg-icons'

const IntegrationSettings = (props) => {
    
    return (
        <div>
            <Layout>
                <div className="large-container">
                    <div className="sidebar-container">
                        <div className="border-right" id="sidebar-wrapper">
                            <div className="sidebar-heading">Settings</div>
                            <div className="list-group list-group-flush">
                                <a href="#" className="list-group-item list-group-item-action bg-light">Profile</a>
                                <a href="#" className="list-group-item list-group-item-action bg-light">Integrations</a>
                                {/* <a href="#" className="list-group-item list-group-item-action bg-light">Overview</a>
                                <a href="#" className="list-group-item list-group-item-action bg-light">Events</a>
                                <a href="#" className="list-group-item list-group-item-action bg-light">Profile</a>
                                <a href="#" className="list-group-item list-group-item-action bg-light">Status</a> */}
                            </div>
                        </div>
                    </div>

                    <div className="container-body">
                        <h2 className="settings-heading">Get Started with Integrations</h2>
                        <h4 className="settings-subheading">Integrate your project with various services</h4>
                        <div className="integration-group">
                            <div className="integration-container">
                                <FontAwesomeIcon icon={faJira} size="2x" />
                                <h4>Jira</h4>
                                <p>Jira is a proprietary issue tracking product developed by Atlassian that allows bug tracking and agile project management. </p>
                                <br />
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
                    
                </div>
            </Layout>
        </div>
    );
};

export default IntegrationSettings;