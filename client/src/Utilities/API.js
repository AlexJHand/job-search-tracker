import axios from 'axios';

export default {
    getAllApplications: function(userId) {
        console.log("In API.getAllApplications");
        return axios.get("/application/" + userId);
    },
    createApplication: function(application) {
        console.log("In API.createApplication");
        return axios.post('/application', application);
    }
}