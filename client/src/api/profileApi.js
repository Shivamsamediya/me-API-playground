import axios from "axios";

const API = "https://me-api-playground-new-eta.vercel.app/api/profile";

export const getProfile = () => axios.get(API);
export const searchBySkill = (skill) =>
  axios.get(`${API}/projects?skill=${skill}`);
export const createProfile = (profile) =>
  axios.post(`${API}/create`, profile);
export const updateProfile = (profile) =>
  axios.post(`${API}/update`, profile);
