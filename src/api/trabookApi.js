import axios from 'axios';
import { getEnvVariables } from '../helpers/getEnvVariables';

const { VITE_API_URL } = getEnvVariables();

const trabookApi = axios.create({
  baseURL: VITE_API_URL,
});

trabookApi.interceptors.request.use((config) => {
  config.headers = {
    ...config.headers,
  };

  return config;
});

export default trabookApi;
