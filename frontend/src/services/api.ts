import axios from "axios";

export const api = axios.create({
    baseURL: "https://super-duper-adventure-rvq7wqq6r5pcwq7-3000.app.github.dev"
});

api.interceptors.request.use(config => {
  const token = localStorage.getItem('token')
  if (token) config.headers.Authorization = `Bearer ${token}`
  return config
})
