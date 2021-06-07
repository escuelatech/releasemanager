import React, { useState } from 'react';
import Settings from './Settings' 
import Switch from '@material-ui/core/Switch';

function ReleaseArtifact(props) {

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

    console.log('jira', switchState)
    return (
        <div>
            <Settings>
            <div className="card settings__card">
                  <div className="card-body">
                   <h4>Release Artifacts</h4><br/>
                   <div className="artifact__options">
                    <p>Integrate with Jira</p>
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
                        <p>Integrate with GitHub</p>
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
                        <p>Integrate with Jenkins</p>
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
                        <p>Deploy using AWS</p>
                        <Switch
                            checked={switchState.aws}
                            onChange={handleChange}
                            color="primary"
                            name="aws"
                            className="artifact__switch"
                            inputProps={{ 'aria-label': 'primary checkbox' }}
                        />
                   </div>

                    
                    <div className="artifact__options">
                        <p>Deploy using Azure</p>
                        <Switch
                            checked={switchState.azure}
                            onChange={handleChange}
                            color="primary"
                            name="azure"
                            className="artifact__switch"
                            inputProps={{ 'aria-label': 'primary checkbox' }}
                        />
                   </div>

                    
                    <div className="artifact__options">
                        <p>Requires Code Coverage</p>
                        <Switch
                            checked={switchState.codeCoverage}
                            onChange={handleChange}
                            color="primary"
                            name="codeCoverage"
                            className="artifact__switch"
                            inputProps={{ 'aria-label': 'primary checkbox' }}
                        />
                   </div>

                   
                    <div className="artifact__options">
                        <p>Requires Code Scanning</p>
                        <Switch
                            checked={switchState.codeScanning}
                            onChange={handleChange}
                            color="primary"
                            name="codeScanning"
                            className="artifact__switch"
                            inputProps={{ 'aria-label': 'primary checkbox' }}
                        />
                   </div>

                    <div className="artifact__options">
                        <p>Requires CI/CD</p>
                        <Switch
                            checked={switchState.cicd}
                            onChange={handleChange}
                            color="primary"
                            name="cicd"
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

export default ReleaseArtifact;