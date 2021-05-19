import React from 'react';
import Layout from '../common/Layout';
import useForm from '../customHook/useForm'
import StepOne from './StepOne';

const MainPage = () => {

    // const {inputs, errors, handleWizardChange, step, nextStep, prevStep, history} = useForm({
    //     applicationName: '',
    //     releaseName: '',
    //     releaseVersion: '',
    //     releaseOwner: '',
    //     // releaseDate: '',
    //     devLead: '',
    //     testLead: '',
    //     projectManager: ''
    // })

    // const styles = {
    //     width: '100%',
    //     marginBottom: '10px'
    // }

    // const showStep = () => {
    //     if(step === 1)
    //         return (
    //             <StepOne
    //                 inputs={inputs} 
    //                 handleChange={handleWizardChange} 
    //                 errors={errors} 
    //                 nextStep={nextStep}  
    //                 styles={styles}
    //                 history={history}
    //             />
    //         )
            
    // }

    return (
        <div>
            <Layout>
                <h2>Release Manager</h2>
                {/* <h3>Step {step}</h3>
                {showStep()} */}
            </Layout>
        </div>
    );
};

export default MainPage;