import apiClient from "../shared/axios.js";
import apimapping from "../shared/apimapping.js";

class ReleaseService { 
    postReleases = (params) => {
        return apiClient.post(apimapping.POST_RELEASES,params);
    }
}

export default new ReleaseService;