const routeConfig = [
  {
    key: "statistics-manages",
    title: "数据统计",
    subs: [
      {
        key: "/sdkDataSearch",
        title: "SDK数据查询",
        rightCode: "sdkDataSearch-manages",
        subs: [
          {
            key: "/sdkDataSearch/list",
            component: "sdkDataSearchList",
            rightCode: "sdkDataSearch-manage",
            breadcrumb: ["数据统计", "SDK数据查询"],
          },
        ],
      },
     
    ],
  },
  {
    key: "system-manages",
    title: "系统设置",
    subs: [
      {
        key: "/password",
        title: "修改密码",
        rightCode: "system-manages",
        subs: [
          {
            key: "/password/list",
            component: "Password",
            breadcrumb: ["系统设置", "修改密码"],
            rightCode: "password-manage",
          },
        ],
      },
    ],
  },
];

export default routeConfig;
