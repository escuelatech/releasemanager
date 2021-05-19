import React from 'react';
import Layout from '../common/Layout';
import TextField from '@material-ui/core/TextField';

const Settings = () =>{

    const styles = {
        width: '100%',
        marginBottom: '10px'
    }

    return(
        <div>
            <Layout>
             <div>
                <h2>Release Manager</h2><br/>
                <div className="profile-container">
                <div className="card card-contains"  style={{"width": "60rem", "margin": "0 auto" }}>
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
                   <label>Project Name will be use only inside this application. </label>

                   <TextField 
                    id="company_Email" 
                    label="Company Email" 
                    variant="outlined"  
                    name="companyEmail"                     
                    style={styles}
                    autoComplete ="off"
                   />
                    <label>We can use it for any further communication if needed.</label>
                    <TextField 
                    id="company_Name" 
                    label="Company Name" 
                    variant="outlined"  
                    name="companyName"                  
                    style={styles}
                    autoComplete ="off"
                   />
                    <label>All the above information can be delete/remove at any point of time.Information will be used when the project is logged in.All this info will be safe and protected.</label>
                   
                   <div className="btns">
                   <button className="btn btn-primary nextBtn">Update Project Profile</button>
                   </div> 
                 </div>
                </div><br/>

                <div className="card card-contains"  style={{"width": "60rem", "margin": "0 auto"}}>
                  <div className="card-body">
                  <h4>Appearance</h4>
                  <input type="radio" value="DarkTheme" name="theme" /> Dark Theme <br/>
                  <input type="radio" value="LightTheme" name="theme" /> Light Theme
                  </div>
                </div>
             </div>
             </div>
           </Layout>
        </div>
    )

}

export default Settings;