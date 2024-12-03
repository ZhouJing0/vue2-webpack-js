import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/my",
    name: "my",
    component: () => import("../views/MyView.vue"),
  },
  {
    path: "/home",
    name: "home",
    component: HomeView,
  },
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/you",
    name: "you",
    component: () => import("../views/YouView.vue"),
  },
  {
    path: "/tree",
    name: "tree",
    component: () => import("../views/TreeView.vue"),
  },
  {
    path: "/table",
    name: "table",
    component: () => import("../views/TableView.vue"),
  },
  {
    path: "/tabs",
    name: "tabs",
    component: () => import("../views/TabsView.vue"),
  },
  {
    path: "/detail",
    name: "detail",
    component: () => import("../views/DetailView.vue"),
  },
  {
    path: "/area",
    name: "area",
    component: () => import("../views/AreaSelectMultiple.vue"),
  },
  {
    path: "/mobile",
    name: "mobile",
    component: () => import("@/views/Mobile.vue"),
  },
  {
    path: "/map",
    name: "map",
    component: () => import("../views/MapView.vue"),
  },
  {
    path: "/organization",
    name: "organization",
    component: () => import("../views/OrganizationChart.vue"),
  },
  {
    path: "/baidu",
    name: "baidu",
    component: () => import("../views/BaiduMap.vue"),
  },
  {
    path: "/mapchart",
    name: "mapchart",
    component: () => import("../views/MapChartView.vue"),
  },
  {
    path: "/right",
    name: "right",
    component: () => import("../views/RightClick.vue"),
  },
  {
    path: "/enterprise",
    name: "enterprise",
    component: () => import("../views/EnterpriseView.vue"),
  },
  {
    path: "/traffic",
    name: "traffic",
    component: () => import("../views/TrafficView.vue"),
  },
  {
    path: "/pdf",
    name: "pdf",
    component: () => import("../views/PdfView.vue"),
    meta: {
      name: "3213",
    },
  },
  {
    path: "/flow",
    name: "flow",
    component: () => import("../views/FlowView.vue"),
  },
  {
    path: "/upload",
    name: "upload",
    component: () => import("../views/UploadView.vue"),
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
