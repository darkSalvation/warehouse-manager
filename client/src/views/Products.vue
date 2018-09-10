<template>
    <v-layout wrap>
        <v-flex class="xs12 sm6 offset-sm3">
            <v-btn right to="products/new/" flat color="info">Add Product</v-btn>
        </v-flex>
        <v-flex class="xs12 sm6 offset-sm3" v-for="item in items" :key="item.id">
            <v-card class="mt-1">
                <v-img :src="item.imageURL" height="200" contain></v-img>
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
export default {
  computed: {
    items() {
      return this.$store.getters.products;
    }
  },
  created() {
    console.log("called created!!");
    this.$store.dispatch("getProducts");
  }
};
</script>

