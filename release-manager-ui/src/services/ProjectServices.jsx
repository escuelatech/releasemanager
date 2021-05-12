import apiClient from "../shared/axios.js";
import apimapping from "../shared/apimapping.js";

class ProjectService { 
    getAllProjects = () => {
        return apiClient.get(apimapping.GET_PROJECTS);
    }
}

export default new ProjectService;