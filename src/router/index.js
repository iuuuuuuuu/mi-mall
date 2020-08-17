import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [{
    path: "/",
    name: "home",
    component: () => import("../pages/home.vue"),
    redirect: "/index",
    children: [{
        path: "/index",
        path: "index",
        component: () => import("../pages/index.vue"),
      },
      {
        path: "product/:id",
        path: "product",
        component: () => import("../pages/product.vue"),
      },
      {
        path: "detail/:id",
        path: "detail",
        component: () => import("../pages/detail.vue"),
      },
    ],
  },
  {
    path: "/order",
    name: "order",
    component: () => import("../pages/Order.vue"),
    children: [{
        path: "list",
        name: "order-list",
        component: () => import("../pages/orderList.vue"),
      },
      {
        path: "confirm",
        name: "order-confirm",
        component: () => import("../pages/orderConfirm.vue"),
      },
      {
        path: "pay",
        name: "order-pay",
        component: () => import("../pages/orderPay.vue"),
      },
      {
        path: 'alipay',
        name: 'alipay',
        component: () => import("../pages/alipay.vue")
      }
    ],
  }, {
    path: '/cart',
    name: 'cart',
    component: () => import("../pages/Cart.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;