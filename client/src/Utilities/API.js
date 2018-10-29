import axios from 'axios';

export default {
    // getAllApplication: function() {
    //     return axios.get
    // }

    createApplication: function(application) {
        console.log("In API.createApplication");
        return axios.post('/application', application);
    }
}