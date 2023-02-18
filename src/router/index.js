import VueRouter from "vue-router";
import HomePage from "@/pages/HomePage";
import TermsPage from "@/pages/TermsPage";

export default new VueRouter({
  routes: [
    {
      path: "HomePage",
      component: HomePage,
    },
    {
      path: "Terms&Conditions",
      component: TermsPage,
    },
  ],
});
