import React from 'react'
import Layout from '../common/Layout'
import './Settings.css'
import {Link, useHistory} from 'react-router-dom'

function Settings({children}) {

    const history = useHistory()
    return (
        <div>
            <Layout>
            <div className="settings__large-container">
                    <div className="settings__sidebar-container">
                        <div className="border-right" id="sidebar-wrapper">
                            <div className="sidebar-heading">Settings</div>
                                <div className="list-group list-group-flush">
                                <Link className="list-group-item list-group-item-action bg-light" to='/settings/profile'>Profile</Link>
                                <Link className="list-group-item list-group-item-action bg-light" to='/settings/integration'>Integrations</Link>
                                 <Link className="list-group-item list-group-item-action bg-light" to='/settings/releaseartifact'>Release Artifact</Link>
                                <Link className="list-group-item list-group-item-action bg-light" to='/settings/approvals'>Approvals</Link>
                                
                            </div>
                        </div>
                    </div>  

                    <div className="settings__description-container">   
                    {children} 
                    </div>
                    </div>
            </Layout>
            
        </div>
    )
}

export default Settings