<template>
  <v-app>
    <nav>
      <v-toolbar dark class="mb-5">
        <v-toolbar-title> <router-link :to="{name: 'home'}">{{app_title}}</router-link>  </v-toolbar-title>
          <v-spacer></v-spacer>

          <v-toolbar-items v-for="item in items" :key="item.title">
            <v-btn flat class="ml-1" :to="{name: item.route }"><v-icon>{{item.icon}}</v-icon> {{item.title}}</v-btn>
          </v-toolbar-items>
        </v-toolbar>
    </nav>
    <main>
      <router-view/>
    </main>

  </v-app>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "App",
  data() {
    return {
      items: [
        {
          icon: "reorder",
          title: "Products",
          route: "products"
        },
        {
          icon: "accessibility",
          title: "Users",
          route: "users"
        }
      ]
    };
  },
  computed: mapState({
    app_title: state => state.app_title
  }),
  mounted() {
    this.$store.dispatch("getProducts");
  }
};
</script>

<style scoped>
.application a {
  text-decoration: none;
  color: white;
}
</style>



