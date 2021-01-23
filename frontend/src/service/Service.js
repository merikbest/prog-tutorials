import axios from 'axios';

const API_BASE_URL = "http://localhost:8080/api/v1/language";

class Service {
    addLanguage(language){
        return axios.post(API_BASE_URL, language);
    }
}

export default new Service();
