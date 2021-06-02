import apiClient from "../shared/axios.js";
import apimapping from "../shared/apimapping.js";


class UserService {

   userRegistration = (params) =>{
       return apiClient.post(apimapping.POST_USER_DETAILS,params)
   }

   getAllprojectNames = () => {
    return apiClient.get(apimapping.GET_PROJECT_NAMES);
}

}

export default new UserService;