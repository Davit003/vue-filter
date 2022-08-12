import { createStore } from "vuex";
import jsonData from "../../public/catalog.json";
// 'https://myfakeapi.com/api/cars/'
export default createStore({
  state: {
    catalog: jsonData,
    menu: [
      {
        name: "Get Started",
        value: "/started",
        dropMenu: [
          {
            name: "Catalog",
            value: "/catalog",
          },
          {
            name: "Home",
            value: "/",
          },
        ],
      },
      {
        name: "How It Works",
        value: "/hworks",
        dropMenu: [],
      },
      {
        name: "For Providers",
        value: "/providers",
        dropMenu: [],
      },
      {
        name: "About Alma",
        value: "/about",
        dropMenu: [],
        
      },
    ],
    filters: [
      {
        id: 1,
        name: "bmw",
        model: false,
      },
      {
        id: 2,
        name: "nissan",
        model: false,

      },
    ],
    filtersCor: [
      {
        id: 3,
        name: "sedan",
        model: false,

      },
      {
        id: 4,
        name: "crossover",
        model: false,
      },
    ]
  },
  getters: {
  },
  mutations: {
    setCatalog(state,v) {
      state.catalog = v;
    }
  },
  actions: {},
  modules: {},
});
