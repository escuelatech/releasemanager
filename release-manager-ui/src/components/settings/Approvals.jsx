import React, { useState } from 'react';
import Settings from './Settings' 
import Switch from '@material-ui/core/Switch';

function Approvals(props) {
    const [switchState, setSwitchState] = useState({
        jira: true,
        github: false,
        jenkins: true,
        aws: true,
        azure: false,
        codeCoverage: false,
        codeScanning: false,
        cicd: true
    })

    const styles = {
        width: '100%',
        marginBottom: '10px'
    }

    const pStyles = {
        color: 'gray',
        fontSize: '.8em',
        marginTop: '-.8em'
    }

    const handleChange = (event) => {
        setSwitchState({ ...switchState, [event.target.name]: event.target.checked });
    }

    console.log('switchState', switchState)
    return (
        <div>
            <Settings>
            <div className="card settings__card">
                  <div className="card-body">
                   <h4>Approvals needed for the application release</h4><br/>
                   <div className="artifact__options">
                    <p>Alice Cooper</p>
                        <Switch
                            checked={switchState.jira}
                            onChange={handleChange}
                            color="primary"
                            name="jira"
                            className="artifact__switch"
                            inputProps={{ 'aria-label': 'primary checkbox' }}
                        />
                   </div>

                    
                   
                    <div className="artifact__options">
                        <p>Alex Parrish</p>
                        <Switch
                            checked={switchState.github}
                            onChange={handleChange}
                            color="primary"
                            name="github"
                            className="artifact__switch"
                            inputProps={{ 'aria-label': 'primary checkbox' }}
                        />
                    </div>

                    
                    <div className="artifact__options">
                        <p>John Snow</p>
                        <Switch
                            checked={switchState.jenkins}
                            onChange={handleChange}
                            color="primary"
                            name="jenkins"
                            className="artifact__switch"
                            inputProps={{ 'aria-label': 'primary checkbox' }}
                        />
                   </div>

                   
                    <div className="artifact__options">
                        <p>Jake Ryan</p>
                        <Switch
                            checked={switchState.aws}
                            onChange={handleChange}
                            color="primary"
                            name="aws"
                            className="artifact__switch"
                            inputProps={{ 'aria-label': 'primary checkbox' }}
                        />
                   </div>
                   
                   <div className="btns">
                   <button className="btn btn-primary nextBtn" style={{width:"100%"}}>Save Options</button>
                   </div> 
                 </div>
                </div>
            </Settings> 
        </div>
    );
}

export default Approvals;