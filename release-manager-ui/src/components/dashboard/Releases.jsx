import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Layout from '../common/Layout';
import { useHistory } from 'react-router';
import IssuesService from '../../services/IssuesService';
import axios from 'axios';


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

    const handleClick = () => {
        history.push("/wizard");
    }
    
    useEffect(() => {
        // IssuesService.getProjectIssues()
        axios.get('http://escuelatech.com/release-manager/jira/getall/issues?project=Cakify-app&labels=test-release-1')
        // axios.get('https://jsonplaceholder.typicode.com/users')    
        .then(response => setIssues(response.data.issues))
    }, [])

  const accordion =     <div className={classes.root}>
                            {issues.map(issue => (
                            <Accordion>
                                <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                >
                                <Typography className={classes.heading}>{issue.issueKey}</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                <Typography>
                                   <h5>Issue Type: {issue.issueType}</h5>
                                   <h5>Issue Summary: {issue.issueSummary}</h5>
                                </Typography>
                                </AccordionDetails>
                            </Accordion>
                            ))}
                        </div>
                    
    return (
        <>
            <Layout>
                <div className="release-header">
                    <h2>My Releases</h2>
                    <button className="btn btn-primary" onClick={handleClick}>Create A New Release</button>
                </div>
                {accordion}
            </Layout>
       </>
    );
};

export default Releases;