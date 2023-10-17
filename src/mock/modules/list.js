import Mock from "mockjs";
import qs from "query-string";
import setupMock, { successResponseWrap } from "../setup.js";
const mockList = (req, res) => {
  const { page, pageSize } = qs.parse(req.url.split("?")[1]);
  const data = Mock.mock({
    [`list|${pageSize}`]: [
      {
        id: "@id",
        date: '@date("yyyy-MM-dd")',
        name: "@cname",
        address: "@county(true) @cword(5, 10) @natural(1, 999) 号",
        "sex|1": ["男", "女"],
        "age|18-60": 1,
        phone: /^1\d{10}$/,
        "cost|50-200": 1,
        time: '@datetime("yyyy-MM-dd HH:mm:ss")',
        diagnosis: "@cword(2, 4)",
      },
    ],
    total: 100,
  });
  return res.json(successResponseWrap(data));
};
const List = Mock.mock({
  "list|120": [
    {
      id: "@id",
      date: '@date("yyyy-MM-dd")',
      name: "@cname",
      address: "@county(true) @cword(5, 10) @natural(1, 999) 号",
      "sex|1": ["男", "女"],
      "age|18-60": 1,
      phone: /^1\d{10}$/,
      "cost|50-200": 1,
      time: '@datetime("yyyy-MM-dd HH:mm:ss")',
      diagnosis: "@cword(3, 6)",
    },
  ],
});
const detail = Mock.mock({
  id: "@id",
  date: '@date("yyyy-MM-dd")',
  name: "@cname",
  address: "@county(true) @cword(5, 10) @natural(1, 999) 号",
  "sex|1": ["男", "女"],
  "age|18-60": 1,
  phone: /^1\d{10}$/,
  "cost|50-200": 1,
  time: '@datetime("yyyy-MM-dd HH:mm:ss")',
  diagnosis: "@cword(3, 6)",
});
setupMock({
  mock: true,
  setup: () => {
    Mock.mock(/\/list/, (params) => {
      const { pageNum = 1, pageSize = 10 } = qs.parseUrl(params.url).query;
      const p = Number(pageNum);
      const ps = Number(pageSize);
      return successResponseWrap({
        list: List.list.slice((p - 1) * ps, p * ps),
        total: 120,
        pageNum: p,
        pageSize: ps,
        size: ps,
      });
    });
    Mock.mock(/\/detail/, (params) => {
      return successResponseWrap(detail);
    });
  },
});
