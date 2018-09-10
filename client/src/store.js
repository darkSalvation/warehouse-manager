import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    app_title: 'Warehouse - Manager',
    products: []
  },
  mutations: {
    getProducts(state) {
      state.products = [{
          id: 0,
          name: 'Drucker',
          quantity: 10,
          description: 'Ein toller Drucker'
        },
        {
          id: 1,
          name: 'Monitor',
          quantity: 10,
          description: 'Ein toller Monitor'
        },
      ]
    }

  },
  actions: {
    getProducts(context) {
      context.commit('getProducts')
    }
  },
  getters: {
    products: state => state.products
  }
});