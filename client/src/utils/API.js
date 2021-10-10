import axios from 'axios';

const BASEURL = process.env.REACT_APP_BASEURL;


export default {
  search(query) {
    return axios.get(`${BASEURL}${query}`);
  },
};
