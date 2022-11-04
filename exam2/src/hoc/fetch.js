import axios from "axios";

const fetchClient = (url) => {
  return axios.create({
    baseURL: url,

    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
  });
};

export default fetchClient;
