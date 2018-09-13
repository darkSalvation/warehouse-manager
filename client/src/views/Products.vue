<template>
    <v-layout row wrap>
        <v-flex class="xs12 sm6 offset-sm3">
            <v-btn center to="products/new/" flat class="info">Add Product</v-btn>
        </v-flex>
        <v-flex class="xs12 sm6 offset-sm3" v-for="item in items" :key="item.id">
            <v-card class="mt-1" :to="'/products/edit/' + item.id">
                <v-img :src="item.imageURL" height="100" contain></v-img>
                <v-card-title primary-title>
                    <div>
                        <h3 class="headline mb-0">{{item.name}}</h3>
                        <div>{{item.description}}</div>
                        <div><b>{{item.quantity}}</b> available</div>
                    </div>
                </v-card-title>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn :to="'/products/edit/' + item.id" color="orange">Edit</v-btn>
                    <v-btn :to="'/products/delete/' + item.id" color="error">Delete</v-btn>
                </v-card-actions>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
import { mapActions } from "vuex";
import { mapGetters } from "vuex";
export default {
  methods: {
    ...mapActions({
      getProducts: "getProducts"
    })
  },
  computed: {
    ...mapGetters({
      items: "products"
    })
  },
  mounted() {
    this.getProducts();
  }
};
</script>

