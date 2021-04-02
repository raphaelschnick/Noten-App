import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/pieces",
    name: "Pieces",
    component: () =>
      import(/* webpackChunkName: "pieces" */ "../views/piece/Pieces.vue")
  },
  {
    path: "/pieces/:id",
    name: "PieceDetail",
    component: () =>
      import(/* webpackChunkName: "PieceDetail" */ "../views/piece/PieceDetail.vue"),
    props: true
  },
  {
    path: "/pieces/add",
    name: "PieceAdd",
    component: () =>
      import(/* webpackChunkName: "pieces" */ "../views/piece/Add.vue")
  },
  {
    path: "/instruments",
    name: "Instruments",
    component: () =>
      import(/* webpackChunkName: "Instruments" */ "../views/instrument/Instruments.vue")
  },
  {
    path: "/instruments/:id",
    name: "InstrumentDetail",
    component: () =>
      import(/* webpackChunkName: "InstrumentDetail" */ "../views/instrument/InstrumentDetail.vue"),
    props: true
  },
  {
    path: "/instruments/add",
    name: "InstrumentAdd",
    component: () =>
      import(/* webpackChunkName: "Instruments" */ "../views/instrument/Add.vue")
  },
  {
    path: "/settings",
    name: "Settings",
    component: () =>
      import(/* webpackChunkName: "Settings" */ "../views/Settings.vue")
  },
  {
    path: "/account",
    name: "Account",
    component: () =>
      import(/* webpackChunkName: "Account" */ "../views/Account.vue")
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "Login" */ "../views/Login.vue")
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
