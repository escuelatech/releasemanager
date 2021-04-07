import React from 'react';
import Layout from '../common/Layout';
import TextField from '@material-ui/core/TextField';
import useForm from '../customHook/useForm';
import '../../styles.css';

const  AppRegistrationPage  = () => {

const {inputs, handleWizardChange, handleAppRegistrationSubmit, cancelRegistration, errors, history, styles} = useForm ({
            applicationId : '',
            applicationName : '',
            releaseVersion:'',
            releaseOwner:'',
            devLead:'',
            testLead:'',
            projectManager:'',
})

    return(
        <div>
            <Layout>
            <div>
                <h2>Release Manager</h2><br/>
            </div>
              <div className="card"  style={{"width": "50rem", "margin": "0 auto"}}>
                <div className="card-body">
                <TextField 
                    id="application_id" 
                    label="Application ID" 
                    variant="outlined"  
                    name="applicationId" 
                    value={inputs.applicationId}
                    onChange={handleWizardChange}
                    style={styles}
                />
                { errors.applicationId.length > 0 && <span className="error">{ errors.applicationId}</span>}

                <TextField 
                    id="application_Name" 
                    label="Application Name" 
                    variant="outlined"  
                    name="applicationName" 
                    value={inputs.applicationName}
                    onChange={handleWizardChange}
                    style={styles}
                />
                {errors.applicationName.length > 0 && <span className="error">{errors.applicationName}</span>}

                <TextField 
                    id="release_version" 
                    label="Release Version" 
                    variant="outlined"  
                    name="releaseVersion" 
                    value={inputs.releaseVersion}
                    onChange={handleWizardChange}
                    style={styles} 
                />
                {errors.releaseVersion.length >0 && <span className="error">{errors.releaseVersion}</span>}

                 <TextField 
                    id="release_owner" 
                    label="Release Owner" 
                    variant="outlined"  
                    name="releaseOwner" 
                    value={inputs.releaseOwner}
                    onChange={handleWizardChange}
                    style={styles}
                />
                {errors.releaseOwner.length > 0 && <span className="error">{errors.releaseOwner}</span>}

                <TextField 
                    id="dev_lead" 
                    label="Dev Lead" 
                    variant="outlined"  
                    name="devLead" 
                    value={inputs.devLead}
                    onChange={handleWizardChange}
                    style={styles}
                />
                 {errors.devLead.length > 0 && <span className ="error">{errors.devLead}</span>}
               
                 <TextField 
                    id="test_lead" 
                    label="Test Lead" 
                    variant="outlined"  
                    name="testLead" 
                    value={inputs.testLead}
                    onChange={handleWizardChange}
                    style={styles}
                />
                 {errors.testLead.length > 0 && <span className="error">{errors.testLead}</span>}

                 <TextField 
                    id="project_manager" 
                    label="Project Manager" 
                    variant="outlined"  
                    name="projectManager" 
                    value={inputs.projectManager}
                    onChange={handleWizardChange}
                    style={styles}
                />
                 {errors.projectManager.length > 0 && <span className ="error">{errors.projectManager}</span>}

                <div className="btns">
                    <button className="btn prevBtn" onClick={cancelRegistration}>Cancel</button>            
                    <button className="btn btn-primary nextBtn"  onClick={handleAppRegistrationSubmit}>Register Application</button>
                </div> 

                </div>
          </div>
          </Layout>
    </div>
       )
   }


export default AppRegistrationPage