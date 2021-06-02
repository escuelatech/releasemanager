import React,{useState,useEffect} from 'react';
import Layout from '../common/Layout.jsx';
import TextField from '@material-ui/core/TextField';
import useForm from '../customHook/useForm';
import { useHistory } from 'react-router';
import Autocomplete from "@material-ui/lab/Autocomplete"
import UserService from "../../services/UserService";
// import ProjectService from "../../services/ProjectServices.jsx";
import './UserRegistration.css';
import {Link} from 'react-router-dom';
// import { CollectionsOutlined } from '@material-ui/icons';


const UserRegistration = () =>{
    const [show, setShow] = useState(false)
    const [value,setValue] = useState("");
    const history = useHistory();
    const [projects, setProjects] = useState([]);  
    const [responsestatus,setResponsestatus] = useState(""); 
    const successMessage="Registration completed Successfully";

    const {inputs,handleReleaseChange, errors, styles, handleuserRegistrationChange} = useForm ({
        employeeEmail: '',
        employeeId: '',
        projectsName : 'value',
        
})

useEffect(()=>{
      UserService.getAllprojectNames().then((response) =>{
        const {data} = response;
        setProjects(data);
      });
  },[])

useEffect(() => {
    if(show) {
        setTimeout(() => {
            history.push('/');         
        }, 5000)        
    }    
    return () => clearTimeout()
    }, [show]);

const handleSubmit = (e) =>{
    e.preventDefault();
       const userDetails = {
           employeeEmail: inputs.employeeEmail,
           employeeId:inputs.employeeId,
           projectName:value,
        }
        console.log('User Details',userDetails);
        UserService.userRegistration(userDetails).then((response)=>{
            console.log("Register Details" ,response)
            setShow(true);    
        }).catch(error => console.log('Error', error))
}
 console.log(value)
      return(
        <Layout>
            {!show ?<div>
                <h2>User Registration</h2><br/>
                <div className="card-contains"  >
                  <div className="card-body" >
                      <TextField 
                          id="employee_email" 
                          label="Employee Email" 
                          variant="outlined"  
                          name="employeeEmail" 
                          value={inputs.employeeEmail}
                          onChange={handleuserRegistrationChange}
                          style={styles}
                          autoComplete ="off"
                      />
                      { errors.employeeEmail.length > 0 && <span className="error">{ errors.employeeEmail}</span>}
                     <TextField 
                         id="employee_id" 
                         label="Employee ID" 
                         variant="outlined"  
                         name="employeeId" 
                         value={inputs.employeeId}
                         onChange={handleuserRegistrationChange}
                         style={styles}
                         autoComplete ="off"
                     />
                       <Autocomplete
                             id = "id"
                             options={projects}
                             getOptionLabel= {(option)=> option.projectName}
                             onChange={(e, v) => setValue(v.projectName)}   
                             renderInput={(params) => <TextField {...params}  label="Project Name"                          
                             variant="outlined" />}
                       /> 
                        <br/>
                         {/* <div className="btns">  */}
                         <Link to={'/'}><button className="btn prevBtn " > Cancel</button></Link>       
                         <button className="btn btn-primary nextBtn " 
                         onClick={handleSubmit} 
                        >Register
                         </button>
                        {/* </div> */}
                   </div>
                 </div>
                  </div>:
                    <div className="card releaseForm">
                       <h3  className="success__message__header">{successMessage}</h3>
                    </div>}
            
        </Layout>
       
    )

}
export default UserRegistration