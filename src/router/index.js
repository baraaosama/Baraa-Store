import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ListingPage from "../views/ListingPage.vue";
import ProductDetails from "../views/ProductDetails.vue";
import CartComponent from "../views/CartComponent.vue";
import SearchComponent from "../views/SearchComponent.vue";
import NotFound from "../views/NotFound";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/categories/:categoryName",
    name: "listing",
    component: ListingPage,
  },
  {
    path: "/categories/:categoryName/:id",
    name: "product-details",
    component: ProductDetails,
  },
  {
    path: "/cart",
    name: "cart",
    component: CartComponent,
  },
  {
    path: "/search/:searchTerm",
    name: "Search",
    component: SearchComponent,
  },
  {
    path: "/:catchAll(.*)",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
