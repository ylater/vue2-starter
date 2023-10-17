import Cookies from "js-cookie";
const platform = "hsfa-admin-";
export default {
  get(key) {
    let val = localStorage.getItem(platform + key);
    if (/^\{.*\}$/.test(val)) val = JSON.parse(val);
    return val;
  },
  set(key, val) {
    if (typeof val === typeof {}) val = JSON.stringify(val);
    return localStorage.setItem(platform + key, val);
  },
  remove(key) {
    return localStorage.removeItem(platform + key);
  },
  clear() {
    let len = localStorage.length;
    console.log(len);
    for (let i = 0; i < len; i++) {
      let key = localStorage.key(i);
      if (key.match(platform)) {
        localStorage.removeItem(key);
      }
    }
    // return localStorage.clear()
  },
  getSession(key) {
    let val = sessionStorage.getItem(platform + key);
    if (/^\{.*\}$/.test(val)) val = JSON.parse(val);
    return val;
  },
  setSession(key, val) {
    if (typeof val === typeof {}) val = JSON.stringify(val);
    return sessionStorage.setItem(platform + key, val);
  },
  removeSession(key) {
    return sessionStorage.removeItem(platform + key);
  },
  getCookies(key) {
    return Cookies.get(platform + key);
  },
  setCookies(key, value) {
    Cookies.set(platform + key, value);
  },
  removeCookies(key) {
    Cookies.remove(platform + key);
  },
  clearCookies() {
    Object.keys(Cookies.get()).forEach(function (cookie) {
      Cookies.remove(cookie);
    });
  },
};
