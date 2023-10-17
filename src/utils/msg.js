import { Message } from "element-ui";
// 信息弹窗
function msg(data, type) {
  type = type || "success";
  return Message({
    message: data,
    // center: true,
    customClass: "rm-msg " + `${type}`,
    type: `${type}`,
    offset: 100,
    duration: 3000,
  });
}
export default msg;
