import DashboardLayout from "@/pages/Layout/DashboardLayout.vue";

import Dashboard from "@/pages/Dashboard.vue";
import Devices from "@/pages/Devices.vue";
import Alarms from "@/pages/Alarms.vue";
import Templates from "@/pages/Templates.vue";

// Auth Views

import Login from "@/pages/Login.vue";
import Register from "@/pages/Register.vue";


const routes = [
  {
    path: "/login",
    component: Login,
    name: "Login",
  },
  {
    path: "/register",
    component: Register,
    name: "Register",
  },
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/login",
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        component: Dashboard,
      },
      {
        path: "devices",
        name: "Devices",
        component: Devices,
      },
      {
        path: "alarms",
        name: "Alarms",
        component: Alarms,
      },
      {
        path: "templates",
        name: "Templates",
        component: Templates,
      },
     
    ],
  },
];

export default routes;
