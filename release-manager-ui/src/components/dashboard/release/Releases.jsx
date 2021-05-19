import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Layout from '../../common/Layout';
import { useHistory } from 'react-router';
import IssuesService from '../../../services/IssuesService';
import axios from 'axios';
import './Releases.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRocket, faClipboardCheck, faUsers, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import CreateRelease from './CreateRelease'; 
import ViewRelease from './ViewRelease';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '50%',
    margin: '0 auto',
    padding: '4em 0',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  
}));



const Releases = () => {
    const classes = useStyles();
    const history = useHistory();
    const [issues, setIssues] = useState([]);
    const [createRelease, setCreateRelease] = useState(false);
    // const [viewRelease, setViewRelease] = useState(false);

    // const handleClick = () => {
    //     history.push("/wizard");
    // }

    const handleRelease = () => {
        setCreateRelease(true)
    }
    
    // useEffect(() => {
    //     // IssuesService.getProjectIssues()
    //     axios.get('http://escuelatech.com/release-manager/jira/getall/issues?project=Cakify-app&labels=test-release-1')
    //     // axios.get('https://jsonplaceholder.typicode.com/users')    
    //     .then(response => setIssues(response.data.issues))
    // }, [])

//   const accordion =     <div className={classes.root}>
//                             {issues.map(issue => (
//                             <Accordion>
//                                 <AccordionSummary
//                                 expandIcon={<ExpandMoreIcon />}
//                                 aria-controls="panel1a-content"
//                                 id="panel1a-header"
//                                 >
//                                 <Typography className={classes.heading}>{issue.issueKey}</Typography>
//                                 </AccordionSummary>
//                                 <AccordionDetails>
//                                 <Typography>
//                                    <h5>Issue Type: {issue.issueType}</h5>
//                                    <h5>Issue Summary: {issue.issueSummary}</h5>
//                                 </Typography>
//                                 </AccordionDetails>
//                             </Accordion>
//                             ))}
//                         </div>
                    
    return (
        <>
            <Layout>
                <div className="release-header">
                    <h2>My Releases</h2>
                    {/* <button className="btn btn-primary" onClick={handleRelease}>Create A New Release</button> */}
                </div>
                {/* {accordion} */}
                <div className="release__container">
                    <div className="release__widgets">
                        <div className="release__info">
                            <h2>Welcome</h2>
                            <p>The project you have selected has 0 releases.</p>
                        </div>
                        <div className="release__widget__container">
                            <div className="release__widget1">
                                <div className="release__widget">
                                    <div className="release__widget__header">
                                        <div className="icon">
                                            <FontAwesomeIcon icon={faRocket} size="2x" className="release__widget__icon"/>
                                        </div>
                                        
                                        <h4>Releases</h4>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquet eros vel diam semper mollis.</p>
                                    <button className="btn btn-primary" onClick={() => history.push('/releaselist')}>View Releases</button>
                                    
                                </div>
                                <div className="release__widget">
                                    <div className="release__widget__header">
                                        <div className="icon">
                                            <FontAwesomeIcon icon={faEnvelope} size="2x" className="release__widget__icon"/>
                                        </div>
                                        
                                        <h4>Notifications</h4>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquet eros vel diam semper mollis.</p>
                                    <button className="btn btn-primary">View Notifications</button>
                                    
                                </div>
                            </div>
                            <div className="release__widget1">
                            <div className="release__widget">
                                    <div className="release__widget__header">
                                        <div className="icon">
                                            <FontAwesomeIcon icon={faUsers} size="2x" className="release__widget__icon"/>
                                        </div>
                                        
                                        <h4>Team</h4>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquet eros vel diam semper mollis.</p>
                                    <button className="btn btn-primary">View Team</button>
                                    
                                </div>
                                <div className="release__widget">
                                    <div className="release__widget__header">
                                        <div className="icon">
                                            <FontAwesomeIcon icon={faClipboardCheck} size="2x" className="release__widget__icon" style={{paddingBottom: '5px'}} />
                                        </div>
                                        
                                        <h4>Pending Approvals</h4>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquet eros vel diam semper mollis.</p>
                                    <button className="btn btn-primary">View Approvals</button>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className="release__createRelease">
                        <div className="release__createReleaseHeader">
                            <h2>Want to create a new Release?</h2>
                            <p>Create a release for your project</p>
                            <button className="btn btn-primary" onClick={handleRelease}>Create A New Release</button>
                        </div>
                        <img src="https://www.kindpng.com/picc/m/124-1247334_web-design-illustration-png-transparent-png.png"
                            alt="illustration" />
                    </div>
                </div>

            
                {createRelease ? <CreateRelease onHide={() => setCreateRelease(false)}/> : ''}
                {/* {viewRelease ? <ViewRelease onHide={() => setViewRelease(false)} /> : ''} */}
            </Layout>
       </>
    );
};

export default Releases;