import axios from 'axios';
import Cookies from 'js-cookie';

const API_BASE_URL = 'http://localhost:8080/api';

const api = axios.create({
  baseURL: API_BASE_URL,
});

// Add token to requests
api.interceptors.request.use((config) => {
  const token = Cookies.get('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const authAPI = {
  login: (username: string, password: string) =>
    api.post('/auth/login', { username, password }),
};

export const userAPI = {
  getUsers: (page = 0, size = 10) =>
    api.get(`/users?page=${page}&size=${size}`),
  createUser: (user: { name: string; email: string }) =>
    api.post('/users', user),
  getUserById: (id: number) => api.get(`/users/${id}`),
};

export const taskAPI = {
  getTasks: (page = 0, size = 10) =>
    api.get(`/tasks?page=${page}&size=${size}`),
  createTask: (task: any) => api.post('/tasks', task),
  updateTask: (id: number, task: any) => api.put(`/tasks/${id}`, task),
  updateTaskStatus: (id: number, status: string) =>
    api.patch(`/tasks/${id}/status`, { status }),
  deleteTask: (id: number) => api.delete(`/tasks/${id}`),
  getTaskById: (id: number) => api.get(`/tasks/${id}`),
};

export default api;