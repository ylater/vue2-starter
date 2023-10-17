import Mock from "mockjs";
import setupMock, { successResponseWrap, failResponseWrap } from "./setup";
const isLogin = () => {
  const token = window.localStorage.getItem("token");
  return token && token !== "undefined";
};

setupMock({
  setup() {
    // 用户信息
    Mock.mock(new RegExp("/api/user/info"), () => {
      if (isLogin()) {
        const role = window.localStorage.getItem("userRole") || "admin";
        return successResponseWrap({
          name: "Murphy",
          avatar: "//lf1-xgcdn-tos.pstatp.com/obj/vcloud/vadmin/start.8e0e4855ee346a46ccff8ff3e24db27b.png",
          email: "murphy@ylater.com",
          job: "Frontend",
          jobName: "前端打杂的",
          organization: "Frontend",
          organizationName: "前端",
          location: "XiaMen",
          locationName: "厦门",
          introduction: "人潇洒，性温存",
          personalWebsite: "https://www.meui.design",
          phone: "159****0000",
          registrationDate: "2013-05-10 12:10:00",
          accountId: "15012312300",
          certification: 1,
          role,
        });
      }
      return failResponseWrap(null, "未登录", 50008);
    });

    // 登录
    Mock.mock(new RegExp("/api/user/login"), (params) => {
      const { username, password } = JSON.parse(params.body);
      if (!username) {
        return failResponseWrap(null, "用户名不能为空", 50000);
      }
      if (!password) {
        return failResponseWrap(null, "密码不能为空", 50000);
      }
      if (username === "admin" && password === "admin") {
        window.localStorage.setItem("userRole", "admin");
        return successResponseWrap({
          token: "be873fbf94a22798e77cb0874722dc5a",
        });
      }
      if (username === "user" && password === "user") {
        window.localStorage.setItem("userRole", "user");
        return successResponseWrap({
          token: "be873fbf94a22798e77cb0874722dc5a",
        });
      }
      return failResponseWrap(null, "账号或者密码错误", 50000);
    });

    // 登出
    Mock.mock(new RegExp("/api/user/logout"), () => {
      return successResponseWrap(null);
    });

    // 用户的服务端菜单
    Mock.mock(new RegExp("/api/user/menu"), () => {
      const menuList = [
        {
          path: "/dashboard",
          name: "dashboard",
          meta: {
            locale: "menu.dashboard",
            requiresAuth: true,
            icon: "DataBoard",
            order: 1,
          },
          children: [
            {
              path: "/dashboard/index",
              name: "Workplace",
              meta: {
                locale: "menu.dashboard.workplace",
                requiresAuth: true,
              },
            },
            {
              path: "/dashboard/data",
              name: "DataBoard",
              meta: {
                locale: "menu.dashboard.databoard",
                requiresAuth: true,
              },
            },
          ],
        },
        {
          path: "/list",
          name: "list",
          meta: {
            locale: "menu.list",
            requiresAuth: true,
            icon: "Files",
            order: 3,
          },
          children: [
            {
              path: "/list/table",
              name: "ListTable",
              meta: {
                locale: "menu.list.table",
                requiresAuth: true,
              },
            },
            {
              path: "/list/card",
              name: "ListCard",
              meta: {
                locale: "menu.list.card",
                requiresAuth: true,
              },
            },
          ],
        },
        {
          path: "/content",
          name: "content",
          meta: {
            locale: "menu.content",
            requiresAuth: true,
            icon: "Reading",
            order: 3,
          },
          children: [
            {
              path: "/content/article",
              name: "ArticleList",
              meta: {
                locale: "menu.content.article",
                requiresAuth: true,
              },
            },
            {
              path: "/content/news",
              name: "NewsList",
              meta: {
                locale: "menu.content.news",
                requiresAuth: true,
              },
            },
            {
              path: "/content/notice",
              name: "NoticeList",
              meta: {
                locale: "menu.content.notice",
                requiresAuth: true,
              },
            },
          ],
        },
        {
          path: "/exception",
          name: "exception",
          meta: {
            locale: "menu.exception",
            requiresAuth: true,
            icon: "Warning",
            order: 5,
          },
          children: [
            {
              path: "/exception/403",
              name: "403",
              meta: {
                locale: "menu.exception.403",
                requiresAuth: true,
              },
            },
            {
              path: "/exception/404",
              name: "404",
              meta: {
                locale: "menu.exception.404",
                requiresAuth: true,
              },
            },
            {
              path: "/exception/500",
              name: "500",
              meta: {
                locale: "menu.exception.500",
                requiresAuth: true,
              },
            },
          ],
        },
        {
          path: "/user",
          name: "user",
          meta: {
            locale: "menu.user",
            requiresAuth: true,
            icon: "User",
            order: 2,
          },
          children: [
            {
              path: "/user/center",
              name: "UserCenter",
              meta: {
                locale: "menu.user.center",
                requiresAuth: true,
              },
            },
            {
              path: "/user/settings",
              name: "UserSettings",
              meta: {
                locale: "menu.user.settings",
                requiresAuth: true,
              },
            },
          ],
        },
        {
          path: "/configs",
          name: "configs",
          meta: {
            locale: "menu.configs",
            requiresAuth: true,
            icon: "Tools",
            order: 4,
          },
          children: [
            {
              path: "/configs/permission",
              name: "Permission",
              meta: {
                locale: "menu.configs.permission",
                requiresAuth: true,
              },
            },
            {
              path: "/configs/role",
              name: "Role",
              meta: {
                locale: "menu.configs.role",
                requiresAuth: true,
              },
            },
            {
              path: "/configs/user",
              name: "User",
              meta: {
                locale: "menu.configs.user",
                requiresAuth: true,
              },
            },
            {
              path: "/configs/menu",
              name: "Menu",
              meta: {
                locale: "menu.configs.menu",
                requiresAuth: true,
              },
            },
            {
              path: "/configs/notice",
              name: "Notice",
              meta: {
                locale: "menu.configs.notice",
                requiresAuth: true,
              },
            },
          ],
        },
        {
          path: "/dev",
          name: "dev",
          meta: {
            locale: "menu.dev",
            requiresAuth: true,
            icon: "SetUp",
            order: 4,
          },
          children: [
            {
              path: "/dev/dict",
              name: "Dict",
              meta: {
                locale: "menu.dev.dict",
                requiresAuth: true,
              },
            },
            {
              path: "/dev/log",
              name: "Log",
              meta: {
                locale: "menu.dev.log",
                requiresAuth: true,
              },
            },
          ],
        },
        {
          path: "/help",
          name: "help",
          meta: {
            locale: "menu.faq",
            requiresAuth: true,
            icon: "Help",
            order: 6,
          },
        },
      ];
      return successResponseWrap(menuList);
    });
  },
});
