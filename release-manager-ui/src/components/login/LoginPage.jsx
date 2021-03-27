import React from 'react';
import Layout from '../common/Layout';
import useForm from '../customHook/useForm';

const LoginPage = () => {

    const {inputs, errors, handleLoginChange, handleLoginSubmit} = useForm({
        email: '',
        password: ''
    })
    return (
        <div>
            <Layout>
                <br />
                <div class="card"  style={{"width": "28rem", "margin": "0 auto"}}>
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
                    </div>
                </div>
            </Layout>
        </div>
    );
};

export default LoginPage;