import React, { useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import '../../styles.css';
import '../dashboard/release/Releases.css'
import useForm from '../customHook/useForm'
import axios from 'axios'
import ProjectServices from '../../services/ProjectServices';

function CreateProjectForm({onHide}) {

    const [show, setShow] = useState(false)

    const {inputs, errors, handleReleaseChange: handleChange, history} = useForm({
        applicationId : '',
        applicationName : '',
        releaseVersion:'',
        releaseOwner:'',
        devLead:'',
        testLead:'',
        projectManager:'',
        // releaseLabel:'',
        releaseDesc:''
    })

    const styles = {
        width: '100%',
        marginBottom: '10px'
    }

    // const cancel = e => {
    //     e.preventDefault();
    //     // history.push('/dashboard');
    //     // setReleaseBtn(false)
    // }

    useEffect(() => {
        if(show) {
            setTimeout(() => {
                // onHide();
                history.push('/displayproject')
            }, 3000)
        }
        return () => clearTimeout()
        
    }, [show]);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const appDetails = {
            // applicationId: inputs.applicationId,
            projectName: inputs.applicationName,
            // releaseName: inputs.releaseName,
            // releaseVersion: inputs.releaseVersion,
            // releaseOwner: inputs.releaseName,
            devLead: inputs.devLead,
            testLead: inputs.testLead,
            projectManager: inputs.projectManager,
            // releaseLabel:inputs.releaseLabel,
            // releaseDescription:inputs.releaseDesc
        }
        console.log('appdetails before axios: ', appDetails)
        // axios.post("http://escuelatech.com/release-manager/project/register", appDetails)
        ProjectServices.addProject(appDetails)
        .then(response => {
            console.log('app details from backend', response.data)
            setShow(true)
        })
        .catch(error => console.log('Error', error))
        // console.log("Appdetails", appDetails);
        // setShow(true)
        // history.push('/displayproject');
    }

    const createProjectModal = 
           <>
                <h4>Create a new Project</h4>
                <div className="card-body">
                    <div className="card-body-container">
                        <div className="card-body1">
                            {/* <TextField 
                            id="application_id" 
                            label="Application ID" 
                            variant="outlined"  
                            name="applicationId" 
                            value={inputs.applicationId}
                            onChange={handleChange}
                            style={styles}
                            autoComplete ="off"
                            />
                            { errors.applicationId.length > 0 && <span className="error">{ errors.applicationId}</span>} */}

                            <TextField 
                                id="outlined-basic" 
                                label="Application Name" 
                                variant="outlined"  
                                name="applicationName" 
                                value={inputs.applicationName}
                                onChange={handleChange} 
                                style={styles}
                            />
                            {errors.applicationName.length > 0 && <span className="error">{errors.applicationName}</span>}
                
                        {/* <TextField 
                            id="outlined-basic" 
                            label="Release Name" 
                            variant="outlined"  
                            name="releaseName" 
                            value={inputs.releaseName}
                            onChange={handleChange} 
                            style={styles}
                        />
                        {errors.releaseName.length > 0 && <span className="error">{errors.releaseName}</span>} */}

                        {/* <TextField 
                            id="outlined-basic" 
                            label="Release Version" 
                            variant="outlined"  
                            name="releaseVersion" 
                            value={inputs.releaseVersion}
                            onChange={handleChange}
                            style={styles} 
                        />
                        {errors.releaseVersion.length > 0 && <span className="error">{errors.releaseVersion}</span>}

                        <TextField 
                            id="outlined-basic" 
                            label="Release Owner" 
                            variant="outlined"  
                            name="releaseOwner" 
                            value={inputs.releaseOwner}
                            onChange={handleChange} 
                            style={styles}
                        />
                        {errors.releaseOwner.length > 0 && <span className="error">{errors.releaseOwner}</span>}
                     */}

                        <TextField 
                            id="outlined-basic" 
                            label="Dev Lead" 
                            variant="outlined"  
                            name="devLead" 
                            value={inputs.devLead}
                            onChange={handleChange} 
                            style={styles}
                        />
                        {errors.devLead.length > 0 && <span className="error">{errors.devLead}</span>}
                        
                    </div>

                    <div className="card-body1">
                    

                        <TextField 
                            id="outlined-basic" 
                            label="Test Lead" 
                            variant="outlined"  
                            name="testLead" 
                            value={inputs.testLead}
                            onChange={handleChange} 
                            style={styles}
                        />
                        {errors.testLead.length > 0 && <span className="error">{errors.testLead}</span>}

                        <TextField 
                            id="outlined-basic" 
                            label="Project Manager" 
                            variant="outlined"  
                            name="projectManager" 
                            value={inputs.projectManager}
                            onChange={handleChange} 
                            style={styles}
                        />
                        {errors.projectManager.length > 0 && <span className="error">{errors.projectManager}</span>}

                        {/* <TextField 
                            id="outlined-basic" 
                            label="Release Label" 
                            variant="outlined"  
                            name="releaseLabel" 
                            value={inputs.releaseLabel}
                            onChange={handleChange} 
                            style={styles}
                        />
                        {errors.releaseLabel.length > 0 && <span className="error">{errors.releaseLabel}</span>} */}
                
                        {/* <TextField 
                            id="outlined-basic" 
                            label="Release Description" 
                            variant="outlined"  
                            name="releaseDesc" 
                            value={inputs.releaseDesc}
                            onChange={handleChange} 
                            style={styles}
                        />
                        {errors.releaseDesc.length > 0 && <span className="error">{errors.releaseDesc}</span>}
                     */}
                    </div>
                    </div>
                <br />
                <div class="btns">
                    <button class="btn prevBtn" onClick={onHide}>Cancel</button>            
                    <button class="btn btn-primary nextBtn" onClick={handleSubmit}>Create A Release</button>
                </div> 
                </div>
            </>
    
    const successMessage = 
        <>
            <h3 className="success__message__header">A New Release has been successfully created.</h3>
        </>

  return (
    <div>
        <div className="card releaseForm">
            {!show ? createProjectModal : successMessage}
        </div>
    </div>
  )
}

export default CreateProjectForm
