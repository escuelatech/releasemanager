import React from 'react';
import Layout from '../common/Layout';
import useForm from '../customHook/useForm';
import {Link} from 'react-router-dom';  
import { ThemeContextConsumer } from '../contextApi/ThemeContext';

const LoginPage = () => {

    const {inputs, errors, handleLoginChange, handleLoginSubmit,handleAppRegistration} = useForm({
        email: '',
        password: ''
    })
    
    return (
        <div>
            {/* <ThemeContextConsumer>
            {context => (
                <div className={`${context.theme}-theme`}> */}
            <Layout>
                <br />
                <div class="card">
                    <h5 class="card-header">Login</h5>
                    <div class="card-body">
                        <form onSubmit={handleLoginSubmit}>
                            <div class="mb-3">
                                <label for="email" class="form-label">Email address</label>
                                <input 
                                    type="email" 
                                    class="form-control" 
                                    id="email" 
                                    name="email" 
                                    value={inputs.email}
                                    onChange={handleLoginChange}
                                />
                            </div>
                            {errors.email.length > 0 && <span className="error">{errors.email}</span>}
                            <div class="mb-3">
                                <label for="password" class="form-label">Password</label>
                                <input 
                                    type="password" 
                                    class="form-control" 
                                    id="password" 
                                    name="password"
                                    value={inputs.password}
                                    onChange={handleLoginChange}
                                />
                            </div>
                            {errors.password.length > 0 && <span className="error">{errors.password}</span>}
                            <br />
                            <button type="submit" class="btn btn-primary">Login</button>
                        </form>
                    </div><br />
                       <button type="submit" className="btn btn-success" onClick={handleAppRegistration}>Register Application Here</button>
                </div>
            </Layout>
            {/* </div>
            )}    
        </ThemeContextConsumer> */}
        </div>
    );
};

export default LoginPage;