import axios from "axios";

const api = axios.create({
  baseURL: "https://users-manager.onrender.com",
});

export { api };
