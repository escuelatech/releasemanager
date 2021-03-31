import React from 'react';
import Layout from '../common/Layout';
import TextField from '@material-ui/core/TextField';
import '../../styles.css';

class AppRegistrationPage extends React.Component {
    constructor(){
        super();
        this.state={
            applicationName : '',
            releaseVersion:'',
            releaseOwner:'',
            devLead:'',
            testLead:'',
            projectManager:'',
            errors:{
                applicationName : '',
                releaseVersion:'',
                releaseOwner:'',
                devLead:'',
                testLead:'',
                projectManager:'',
            }

        }
    };
    handleChange = (e) => {
        const {name, value} = e.target;
        let errors = this.state.errors;
    switch(name) {
        case 'applicationName':
            errors.applicationName = value == '' ? 'Application Name Required' : '';
            break;
        case 'releaseVersion':
            errors.releaseVersion = value == '' ? 'Release Version Required' : '';
            break;
        case 'releaseOwner':
            errors.releaseOwner = value == '' ? 'Release Owner required' : '';
            break;
        case 'devLead':
            errors.devLead = value == '' ? 'Dev Lead Required' : '';
            break;
        case 'testLead':
            errors.testLead = value == '' ? 'Test Lead required' : '';
            break;
        case 'projectManager':
            errors.projectManager = value == '' ? 'Project Manager required' : '';
            break;
           
            
    }
    this.setState({
        errors,
        [name]: value
    })
  
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        const appregistration = {
            applicationName: this.state.applicationName, 
            releaseVersion: this.state.releaseVersion, 
            releaseOwner: this.state.releaseOwner, 
            devLead: this.state.devLead,
            testLead: this.state.testLead,
           projectManager: this.state.projectManager,
        }
        console.log('App Registration details', appregistration);
        
    }
    cancel =(e) => {
        this.props.history.push('/');
    }

   render(){
    const {applicationName, releaseVersion, releaseOwner, devLead, testLead,projectManager,errors} = this.state;
    const styles = {
        width: '100%',
        marginBottom: '10px'
    }
       return(
        <div>
            <Layout>
            <div>
                <h2>Release Manager</h2><br/>
            </div>
           <div className="card"  style={{"width": "50rem", "margin": "0 auto"}}>
                <div className="card-body">
                <TextField 
                    id="outlined-basic" 
                    label="Application Name" 
                    variant="outlined"  
                    name="applicationName" 
                    value={applicationName}
                    onChange={this.handleChange}
                    style={styles}
                />
                {errors.applicationName.length > 0 && <span className="error">{errors.applicationName}</span>}
                <TextField 
                    id="outlined-basic" 
                    label="Release Version" 
                    variant="outlined"  
                    name="releaseVersion" 
                    value={releaseVersion}
                    onChange={this.handleChange}
                    style={styles} 
                />
                {errors.releaseVersion.length >0 && <span className="error">{errors.releaseVersion}</span>}
                 <TextField 
                    id="outlined-basic" 
                    label="Release Owner" 
                    variant="outlined"  
                    name="releaseOwner" 
                    value={releaseOwner}
                    onChange={this.handleChange}
                    style={styles}
                />
                {errors.releaseOwner.length > 0 && <span className="error">{errors.releaseOwner}</span>}
                <TextField 
                    id="outlined-basic" 
                    label="Dev Lead" 
                    variant="outlined"  
                    name="devLead" 
                    value={devLead}
                    onChange={this.handleChange}
                    style={styles}
                />
                 {errors.devLead.length > 0 && <span className ="error">{errors.devLead}</span>}
               
                 <TextField 
                    id="outlined-basic" 
                    label="Test Lead" 
                    variant="outlined"  
                    name="testLead" 
                    value={testLead}
                    onChange={this.handleChange}
                    style={styles}
                />
                 {errors.testLead.length > 0 && <span className="error">{errors.testLead}</span>}
                 <TextField 
                    id="outlined-basic" 
                    label="Project Manager" 
                    variant="outlined"  
                    name="projectManager" 
                    value={projectManager}
                    onChange={this.handleChange}
                    style={styles}
                />
                 {errors.projectManager.length > 0 && <span className ="error">{errors.projectManager}</span>}
                <div className="btns">
                    <button className="btn prevBtn" onClick={this.cancel}>Cancel</button>            
                    <button className="btn btn-primary nextBtn"  onClick={this.handleSubmit}>Register Application</button>
                </div> 

                </div>
          </div>
          </Layout>
    </div>
       )
   }

}
export default AppRegistrationPage