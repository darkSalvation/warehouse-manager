import Vue from "vue";
import Vuex from "vuex";
import db from './db'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    app_title: "Warehouse - Manager",
    products: [],
    currentProduct: ""
  },
  mutations: {
    setCurrentProduct(state, payload) {
      state.currentProduct = payload;
    },
    getProducts(state) {
      db.collection("products")
        .get()
        .then(snapshot => {
          state.products = [];

          snapshot.forEach(doc => {
            const product = {
              id: doc.id,
              name: doc.data().name,
              quantity: doc.data().quantity,
              description: doc.data().description,
              imageURL: doc.data().imageURL
            };

            state.products.push(product);
          });
        })
        .catch(err => {
          console.log("Error getting products", err);
        });
    },

    addProduct(state, payload) {
      const product = {
        id: payload.id,
        name: payload.name,
        description: payload.description,
        quantity: payload.quantity,
        imageURL: payload.imageURL
      };

      state.products.push(product);
    },

    updateProduct(state, payload) {
      state.products.forEach((product, i) => {
        if (product.id.toString() === payload.id.toString()) {
          state.products[i] = payload;
          return;
        }
      });
    }
  },
  actions: {
    getProducts(context) {
      context.commit("getProducts");
    },

    getProductById(context, id) {
      context.commit("setCurrentProduct", "");
      let ref = db.collection("products");
      let doc = ref
        .doc(id)
        .get()
        .then(doc => {
          const product = {
            id: doc.id,
            name: doc.data().name,
            quantity: doc.data().quantity,
            description: doc.data().description,
            imageURL: doc.data().imageURL
          };
          context.commit("setCurrentProduct", product);
        });
    },

    addProduct(context, paylaod) {
      db.collection('products').add(paylaod)
        .then(doc => {
          const product = {
            id: doc.id,
            name: doc.data().name,
            quantity: doc.data().quantity,
            description: doc.data().description,
            imageURL: doc.data().imageURL
          };
          context.commit("addProduct", product);
        });
    },

    updateProduct(context, paylaod) {
      let ref = db.collection('products').doc(paylaod.id);
      ref.update(paylaod).then(() => {
        context.commit("updateProduct", paylaod);
      })
    }
  },
  getters: {
    products: state => state.products,
    currentProduct: state => state.currentProduct
  }
});