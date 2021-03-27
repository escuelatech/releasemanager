import React, { useState } from 'react';
import { useHistory } from 'react-router';

const useForm = (initialValues) => {
    const [inputs, setInputs] = useState(initialValues);
    const [errors, setErrors] = useState({
        email: '',
        password: '',
        applicationName: '',
        releaseName: '',
        releaseVersion: '',
        releaseOwner: '',
        // releaseDate: '',
        devLead: '',
        testLead: '',
        projectManager: ''
    })

    let [step, setStep] = useState(1);

    const nextStep = () => {
        setStep(step + 1);
    }
    
    const prevStep = () => {
        setStep(step - 1);
    }

    const history = useHistory();

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        console.log('logged in');
        history.push('/dashboard');
    }

    const handleLoginChange = (e) => {
        const {name, value} = e.target;
        switch(name) {
            case 'email':
                setErrors({...errors, email: value == "" ? 'Email Required' : ""});
                break;
            case 'password':
                setErrors({...errors, password: value == "" ? 'Password required' : ""});
                break;
        }
        setInputs({...errors, ...inputs, [name]: value})
    }

    const handleWizardChange = (e) => {
        const {name, value} = e.target;
        switch(name) {
            case 'applicationName':
                setErrors({...errors, applicationName: value == "" ? 'Application Name Required' : ""});
                break;
            case 'releaseName':
                setErrors({...errors, releaseName: value == "" ? 'Release Name required' : ""});
                break;
            case 'releaseVersion':
                setErrors({...errors, releaseVersion: value == "" ? 'Release Version Required' : ""});
                break;
            case 'releaseOwner':
                setErrors({...errors, releaseOwner: value == "" ? 'Release Owner required' : ""});
                break;
            case 'devLead':
                setErrors({...errors, devLead: value == "" ? 'Dev Lead Required' : ""});
                break;
            case 'testLead':
                setErrors({...errors, testLead: value == "" ? 'Test Lead required' : ""});
                break;
            case 'projectManager':
                setErrors({...errors, projectManager: value == "" ? 'Project Manager required' : ""});
                break;
        }
        setInputs({...errors, ...inputs, [name]: value})
    }

    return {handleLoginChange, handleLoginSubmit, handleWizardChange, inputs, errors, step, nextStep, prevStep, history};
};

export default useForm;