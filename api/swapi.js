import axios from 'axios';

const http = axios.create({
  baseURL: 'https://swapi.dev/api/',
});

export const searchStarWars = async (resource, page = 1, text = '') => {
  try {
    const params = { search: text, page };
    const response = await http.get(resource, { params });
    return response.data;
  } catch (e) {
    alert(e);
    return null;
  }
};
