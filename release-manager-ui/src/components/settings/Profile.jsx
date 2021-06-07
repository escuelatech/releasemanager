import React from 'react';
import Settings from './Settings' 
import TextField from '@material-ui/core/TextField';

function Profile(props) {

    const styles = {
        width: '100%',
        marginBottom: '10px'
    }

    const pStyles = {
        color: 'gray',
        fontSize: '.8em',
        marginTop: '-.8em'
    }

    return (
        <>
            <Settings>
            
                <div className="card settings__card">
                  <div className="card-body">
                   <h4>Project Profile</h4><br/>
                   <TextField 
                    id="project_Name" 
                    label="Project Name" 
                    variant="outlined"  
                    name="projectName"  
                    style={styles}
                    autoComplete ="off"
                   />
                   <p style={pStyles}>Project Name will be use only inside this application. </p>

                   <TextField 
                    id="company_Email" 
                    label="Company Email" 
                    variant="outlined"  
                    name="companyEmail"                     
                    style={styles}
                    autoComplete ="off"
                   />
                    <p  style={pStyles}>We can use it for any further communication if needed.</p>
                    
                    <TextField 
                    id="company_Name" 
                    label="Company Name" 
                    variant="outlined"  
                    name="companyName"                  
                    style={styles}
                    autoComplete ="off"
                   />
                    <p  style={pStyles}>All the above information can be delete/remove at any point of time. Information will be used when the project is logged in. All this info will be safe and protected.</p>
                   
                   <div className="btns">
                   <button className="btn btn-primary nextBtn" style={{width:"100%"}}>Update Project Profile</button>
                   </div> 
                 </div>
                </div><br/>

                <div className="card settings__card">
                  <div className="card-body">
                  <h4>Appearance</h4>
                  <input type="radio" value="DarkTheme" name="theme" /> Dark Theme <br/>
                  <input type="radio" value="LightTheme" name="theme" /> Light Theme
                  </div>
                </div>
             
            </Settings> 
           
        </>
    );
}

export default Profile;