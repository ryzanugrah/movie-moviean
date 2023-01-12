import axios from 'axios';

const baseURL = process.env.REACT_APP_BASE_URL;
const apiKey = process.env.REACT_APP_API_KEY;

export const getPopularMovie = async () => {
  return await axios
    .get(`${baseURL}/movie/popular`, {
      params: {
        page: 1,
        api_key: apiKey,
      },
    })
    .then((response) => response.data.results)
    .catch((err) => console.log(err));
};

export const getSearchMovie = async (query) => {
  return await axios
    .get(`${baseURL}/search/movie`, {
      params: {
        page: 1,
        api_key: apiKey,
        query: query,
      },
    })
    .then((response) => response.data)
    .catch((err) => console.log(err));
};
