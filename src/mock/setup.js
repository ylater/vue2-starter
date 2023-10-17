const debug = process.env.NODE_ENV === "development";

export default ({ mock, setup }) => {
  if (mock !== false && debug) setup();
};

export const successResponseWrap = (data) => {
  return {
    data,
    type: "success",
    message: "请求成功",
    code: 0,
  };
};

export const failResponseWrap = (data, msg, code = 1) => {
  return {
    data,
    type: "error",
    message: msg,
    code,
  };
};
