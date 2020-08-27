import * as axios from 'axios';

export const apiMovie = axios.create({
  baseURL: 'http://localhost:5000/api'
})