import { get, post } from "../request";
export default {
  login: post("/api/user/login"),
  getUserInfo: get("/api/user/info"),
};
