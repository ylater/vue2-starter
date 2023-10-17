const modules = import.meta.glob("./modules/*.js", { eager: true });
let api = {};
for (const path in modules) {
  const name = path.replace(/^\.\/modules\/(.*)\.js$/, "$1");
  api = {
    ...api,
    ...modules[path].default,
  };
  // api[name] = modules[path].default
}
export default api;
