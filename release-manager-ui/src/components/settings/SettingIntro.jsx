import React from 'react';
import Settings from './Settings' 

function SettingIntro(props) {
    return (
        <>
            <Settings>
                 {/* <div className="description-container"> */}
                        <div className = "settings__sidebar-description">               
                            <img src="SystemIntegration.jpg" alt="" className="image" />  
                            <div>
                                <h3>Project Integration</h3>   
                                <p>
                                As a Project Manager or as a Developer you know that we need different types of software together to accomplish many important task related to  your project.Here you can integrate your different projects thats in your account  to a various services like Jira,GitHub and Jenkins.As a Project Manager or as a Developer you know that we need different types of software together to accomplish many important task related to  your project.Here you can integrate your different projects thats in your account  to a various services like Jira,GitHub and Jenkins.As a Project Manager or as a Developer you know that we need different types of software together to accomplish many important task related to  your project.Here you can integrate your different projects thats in your account  to a various services like Jira,GitHub and Jenkins.</p>    
                            </div>
                        </div>   
                     {/* </div> */}
            </Settings> 
        </>
    );
}

export default SettingIntro;