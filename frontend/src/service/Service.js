import axios from 'axios';

const API_BASE_URL = "http://localhost:8080/api/v1";

class Service {
    getLanguages() {
        return axios.get(API_BASE_URL + "/language");
    }

    addLanguage(language) {
        return axios.post(API_BASE_URL + "/language", language);
    }

    addTopic(topic) {
        return axios.post(API_BASE_URL + "/topic", topic);
    }
}

export default new Service();
