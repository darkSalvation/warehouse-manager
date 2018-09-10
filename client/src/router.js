import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home.vue';
import Products from '@/views/Products.vue';
import Users from '@/views/Users.vue';
import EditProduct from '@/components/Products/EditProduct.vue';
import CreateProduct from '@/components/Products/CreateProduct.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/products/edit/:id',
      name: 'EditProducts',
      component: EditProduct,
    },
    {
      path: '/products/new',
      name: 'CreateProduct',
      component: CreateProduct,
    },
    {
      path: '/products',
      name: 'products',
      component: Products,
    },
    {
      path: '/users',
      name: 'users',
      component: Users,
    },

  ],
});