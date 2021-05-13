import apiClient from "../shared/axios.js";
import apimapping from "../shared/apimapping.js";
  
class IssuesService {
    getProjectIssues = (project, label) => {
        return apiClient.get(apimapping.GET_PROJECT_ISSUES, project, label);
    }
}


export default new IssuesService;