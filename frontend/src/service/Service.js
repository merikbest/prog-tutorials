import axios from 'axios';

const API_BASE_URL = "http://localhost:8080/api/v1";

class Service {

    getLanguages() {
        return axios.get(API_BASE_URL + "/language");
    }

    getLanguage(language) {
        return axios.get(API_BASE_URL + `/language/${language}`);
    }

    addLanguage(language) {
        return axios.post(API_BASE_URL + "/language", language);
    }

    addTopic(topic) {
        return axios.post(API_BASE_URL + "/topic", topic);
    }

    getTopic(id) {
        return axios.get(API_BASE_URL + `/topic/${id}`);
    }

    editTopic(topic) {
        return axios.put(API_BASE_URL + "/topic/edit", topic);
    }
}

export default new Service();
