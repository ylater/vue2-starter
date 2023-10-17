import Request from './axios'
const link = (url) => `${url}`
export const get = (url) => (params: {}) =>
  Request.get(link(url), { params })
export const post = (url) => (params: {}) =>
  Request.post(link(url), params)
export const put = (url) => (params: {}) =>
  Request.put(link(url), params)
export const del = (url) => (params: {}) =>
  Request.delete(link(url), { params })
export const patch = (url) => (params: {}) =>
  Request.patch(link(url), params)