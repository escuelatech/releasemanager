import apiClient from "../shared/axios.js";
import apimapping from "../shared/apimapping.js";

class ProjectService { 
    getAllProjects = () => {
        return apiClient.get(apimapping.GET_PROJECTS);
    }

    addProject = (params) => {
        return apiClient.post(apimapping.CREATE_PROJECT, params)
    }
}

export default new ProjectService;