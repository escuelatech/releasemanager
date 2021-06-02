import apiClient from "../shared/axios.js";
import apimapping from "../shared/apimapping.js";

class AllReleaseServices { 
    getAllReleases = () => {
        return apiClient.get(apimapping.GET_RELEASES);
    }
}

export default new AllReleaseServices;