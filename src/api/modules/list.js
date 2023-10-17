import { get, post } from "../request";
export default {
  getMockList: get("/api/list"),
  getMockDetail: get("/api/detail"),
};
