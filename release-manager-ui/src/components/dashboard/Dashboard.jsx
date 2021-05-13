import React from 'react';
import Layout from '../common/Layout';
import '../../styles.css';
import { useHistory } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRocket, faLaptop, faEnvelope, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { ThemeContextConsumer } from '../contextApi/ThemeContext';

const Dashboard = () => {

    const history = useHistory();

    const handleClick = () => {
        history.push('/releases');
    }
    const handleProjectDisplay =()=>{
        history.push('/displayproject');
    }

    return (
        <div>
            <Layout>
                <h2>Dashboard</h2>
                <div className="container-widget">
                    <div className="widget" onClick={handleClick}>
                        <FontAwesomeIcon icon={faRocket} size="5x" />
                        <div class="widget-main-content">
                            <p class="widget-title">Releases</p>
                            <h3>2</h3>
                        </div>
                        
                    </div>
                    <div className="widget" onClick={handleProjectDisplay}>
                        <FontAwesomeIcon icon={faLaptop} size="5x" />
                        <div class="widget-main-content">
                            <p class="widget-title">Projects</p>
                            <h3>1</h3>
                        </div>
                    </div>
                    <div className="widget">
                        <FontAwesomeIcon icon={faEnvelope} size="5x" />
                        <div class="widget-main-content">
                            <p class="widget-title">Notifications</p>
                            <h3>5</h3>
                        </div>
                    </div>
                    <div className="widget">
                        <FontAwesomeIcon icon={faUserCircle} size="5x" />
                        <div class="widget-main-content">
                            <p class="widget-title">Account</p>
                            <h3>2</h3>
                        </div>
                    </div>
                </div>
                
                {/* <div className="container">
                    <form onSubmit={handleSubmit}>
                        <h3>Welcome to The Release Manager</h3>
                        <p>To get started, please click on Create Release Manager.</p>
                        <button class="btn btn-primary">Create Release Manager</button>
                    </form>
                </div> */}
            </Layout>
        </div>
    );
};

export default Dashboard;