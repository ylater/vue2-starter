import request from "axios";
import qs from "qs";
import { useUserStore } from "@/stores/index.js";
import router from "@/router";
// import { msg } from "@/utils/msg.js";
import ErrorCode from "@/utils/errorCode.js";

const axios = request.create();
axios.defaults.paramsSerializer = (params) =>
  qs.stringify(params, {
    arrayFormat: "repeat",
  });
axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

axios.defaults.timeout = 30000;
axios.interceptors.request.use(
  (config) => {
    const store = useUserStore();
    if (store.token) {
      config.headers["Authorization"] = "Bearer " + `${store.token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
// response interceptor
axios.interceptors.response.use(
  (response) => {
    const res = response.data;
    console.log(res);
    if (res.code !== 0) {
      let msg = ErrorCode[res.code] || res.msg || "网络异常，请稍后再试";
      // msg(msg, "error");
      return Promise.reject(new Error(msg));
    }
    return res.data;
  },
  (error) => {
    if (error.message.match("timeout of")) {
      // msg("requestOvertime", "error");
    }
    let code = error.response.status;

    switch (code) {
      case 424:
        if (router.history.current.path !== "/login") {
          router.push({
            path: "/login",
            query: {
              redirect: router.history.current.fullPath,
            },
          });
        }
        break;

      default:
        // msg(error.response.data.msg || "网络异常，请稍后再试", "error");
        break;
    }

    return Promise.reject(error.response.data);
  }
);

export default axios;
