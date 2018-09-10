import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    app_title: 'Warehouse - Manager',
    products: [],
    currentProduct: null
  },
  mutations: {
    getProducts(state) {
      if (state.products.length === 0) {
        state.products = [{
            id: 0,
            name: 'Drucker',
            quantity: 10,
            description: 'Ein toller Drucker',
            imageURL: 'https://upload.wikimedia.org/wikipedia/de/f/ff/Druckerchannel-Bild_Hp_officejet_pro_l7780_aio_drucker.jpg'
          },
          {
            id: 1,
            name: 'Monitor',
            quantity: 10,
            description: 'Ein toller Monitor',
            imageURL: 'https://www.publicdomainpictures.net/pictures/20000/velka/blank-monitor-112996054549vN.jpg'
          },
        ];
      }

    },

    getProductById(state, id) {
      state.currentProduct = state.products.find(x => {
        return x.id.toString() === id.toString()
      })
    },

    addProduct(state, payload) {
      const product = {
        id: Math.floor((Math.random() * 10) + 10), //payload.id,
        name: payload.name,
        description: payload.description,
        quantity: payload.quantity,
        imageURL: payload.imageURL
      }

      state.products.push(product);
    }

  },
  actions: {
    getProducts(context) {
      context.commit('getProducts')
    },

    getProductById(context, id) {
      context.commit('getProductById', id)
    },

    addProduct(context, paylaod) {
      context.commit('addProduct', paylaod)
    }
  },
  getters: {
    products: state => state.products,
    currentProduct: state => state.currentProduct
  }
});