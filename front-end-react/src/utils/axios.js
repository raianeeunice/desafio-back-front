import axios from "axios";

export const UserRandomAPI = axios.create({
  baseURL: "https://randomuser.me/api/",
});

export const RandomDogAPI = axios.create({
  baseURL: "https://random.dog/woof.json?include=jpg,gif",
});

export const UserAPI = axios.create({
  baseURL: "http://localhost:3500",
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});
