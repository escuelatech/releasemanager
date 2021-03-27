import React from 'react';
import Layout from '../common/Layout';
import '../../styles.css';
import { useHistory } from 'react-router';

const Dashboard = () => {

    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        history.push("/wizard");
    }

    return (
        <div>
            <Layout>
                <h2>Dashboard</h2>
                <div className="container">
                    
                    <form onSubmit={handleSubmit}>
                        <h3>Welcome to The Release Manager</h3>
                        <p>To get started, please click on Create Release Manager.</p>
                        <button class="btn btn-primary">Create Release Manager</button>
                    </form>
                    
                </div>
                
            </Layout>
            
        </div>
    );
};

export default Dashboard;