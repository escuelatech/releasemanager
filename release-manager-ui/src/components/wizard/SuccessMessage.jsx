import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import Layout from '../common/Layout';

const SuccessMessage = () => {

    const history = useHistory();
    
    useEffect(() => {
        setTimeout(() => {
            history.push('/dashboard')
        }, 5000)
    }, []);

    return (
        <div>
            <Layout>
                <div className="container">
                    <h3>Release Manager has been successfully created.</h3>
                    <p>You will be redirected to the Dashboard Shortly.</p>
                </div>
            </Layout>
        </div>
    );
};

export default SuccessMessage;