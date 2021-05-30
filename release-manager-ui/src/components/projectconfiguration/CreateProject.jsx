import React, { useState } from 'react'
import { useHistory } from 'react-router';
import Layout from '../common/Layout'
import '../dashboard/release/Releases.css'
import './CreateProject.css'
import CreateProjectForm from './CreateProjectForm';

function CreateProject() {
    const [createProject, setCreateProject] = useState(false);
    const history = useHistory()

const handleRelease = () => {
    setCreateProject(true)
}

  return (
    <div>
        <Layout>
            <div className="release__createRelease project__createProject">
                <div className="release__createReleaseHeader">
                    <h2>Want to create a Project?</h2>
                    <br />
                    {/* <p>Create a new project here</p> */}
                    <button className="btn btn-primary" onClick={handleRelease}>Create Project</button>
                    <p style={{fontSize: '1em', fontWeight: '700', margin: '0 auto', padding: '1em'}}>OR</p>
                    <button className="btn btn-primary" onClick={() => history.push('/displayproject')}>Go to existing projects</button>
                </div>
                <img src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?size=338&ext=jpg"
                    alt="illustration" />
                    
            </div>

            {createProject ? <CreateProjectForm onHide={() => setCreateProject(false)} /> : ''}
        </Layout>
    </div>
  )
}

export default CreateProject
