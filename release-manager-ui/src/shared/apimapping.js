const GET_JIRA_ISSUES = "jira/getall";
const GET_PROJECT_ISSUES = 'jira/getall/issues?project=Cakify-app&labels=test-release-1';
const GET_PROJECTS = "project/getall";
const CREATE_PROJECT = "project/register";
const POST_RELEASES='jira/create/release'
const GET_RELEASES='jira/get/all/releases'
// const GET_PROJECT_ISSUES = `jira/getall/issues?project=${project}&labels=${label}`;

export default {
    GET_PROJECTS,
    GET_PROJECT_ISSUES,
    GET_JIRA_ISSUES, 
    CREATE_PROJECT,
    POST_RELEASES,
    GET_RELEASES
}