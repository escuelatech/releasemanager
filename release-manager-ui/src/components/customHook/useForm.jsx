import React, { useState } from 'react';
import { useHistory } from 'react-router';

const useForm = (initialValues) => {
    const [inputs, setInputs] = useState(initialValues);
    const [errors, setErrors] = useState({
        email: '',
        password: '',
        applicationId:'',
        applicationName: '',
        releaseName: '',
        releaseVersion: '',
        releaseOwner: '',
        // releaseDate: '',
        devLead: '',
        testLead: '',
        projectManager: '',
        releaseLabel:'',
        releaseDesc:''
    })

    let [step, setStep] = useState(1);

    const nextStep = () => {
        setStep(step + 1);
    }
    
    const prevStep = () => {
        setStep(step - 1);
    }

    const history = useHistory();

    const cancelRegistration =(e) => {
        history.push('/');
    }

    const styles = {
        width: '100%',
        marginBottom: '10px'
    }

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        console.log('logged in');
        history.push('/dashboard');
    }

    const handleAppRegistration = (e) => {
        e.preventDefault();
        history.push('/appregister');
    }
    const handleAppRegistrationSubmit= (e) => {
        e.preventDefault();
        const appregistration = {
            applicationId : inputs.applicationId,
            applicationName: inputs.applicationName, 
            releaseVersion: inputs.releaseVersion, 
            releaseOwner: inputs.releaseOwner, 
            devLead: inputs.devLead,
            testLead: inputs.testLead,
            projectManager: inputs.projectManager,
            releaseLabel:inputs.releaseLabel,
            releaseDesc:inputs.releaseDesc
        }
        console.log('App Registration details', appregistration);
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

    const handleReleaseChange = (e) => {
        const {name, value} = e.target;
        switch(name) {
            case 'applicationId':
                setErrors({...errors, applicationId: value == "" ? 'Application id Required' : ""});
                break;
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
            case 'releaseLabel':
                setErrors({...errors, releaseLabel: value == "" ? 'Release Label required' : ""});
                break;
            case 'releaseDesc':
                setErrors({...errors, releaseDesc: value == "" ? 'Release Description required' : ""});
                break;
        }
        setInputs({...errors, ...inputs, [name]: value})
    }

    return {handleLoginChange, handleLoginSubmit, handleReleaseChange, handleAppRegistration, handleAppRegistrationSubmit, cancelRegistration,inputs, errors, step, nextStep, prevStep, history,styles};
};

export default useForm;