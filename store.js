import Vue from 'vue';
import Vuex from 'vuex';

import firebase from "firebase";
import 'firebase/firestore';

var config = {
  apiKey: "AIzaSyA454D1TFp7nR5nclod1JHr2v5EVH5Yebw",
  authDomain: "warehose-manager.firebaseapp.com",
  databaseURL: "https://warehose-manager.firebaseio.com",
  projectId: "warehose-manager",
  storageBucket: "warehose-manager.appspot.com",
  messagingSenderId: "270886533063"
};

firebase.initializeApp(config);

const db = firebase.firestore();
const settings = { /* your settings... */
  timestampsInSnapshots: true
};
db.settings(settings);

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentItem: '',
    items: []
  },
  mutations: {
    addItem: (state, item) => {
      state.items.push(item)
    }
  },
  getters: {
    currentItem: state => state.currentItem,
    items: state => state.items,
  },
  actions: {
    getItem: ({
      state
    }, id) => {
      state.currentItem = '',
        db.collection('products').doc(id).get().then(x => {
          console.log(x);
          const item = {
            id: x.id,
            name: x.data().name,
            imageURL: x.data().imageURL,
            quantity: x.data().quantity
          };
          state.currentItem = item
        })
    },

    getItems: ({ state, commit }) => {
      state.items = [];
      db.collection('products').get().then(snapshot => {
        snapshot.forEach(doc => {
          const item = {
            id: doc.id,
            name: doc.data().name,
            imageURL: doc.data().imageURL,
            quantity: doc.data().quantity
          }
          commit('addItem', item)
        })
      })
    },
    updateItem: ({state, commit}, payload) => {
      var cityRef = db.collection('products').doc(payload.id);
      cityRef.update(payload);
    }
  },

  

});
