<template>
    <v-layout>
        <v-flex xs12 sm6 offset-sm3 v-if="currentProduct">
            <h1>Update Product</h1>
            <v-form ref="form" @submit.prevent="onSubmit(currentProduct)">
                <v-text-field
                v-model="currentProduct.name"
                label="Name"
                required
                ></v-text-field>
                <v-textarea
                v-model="currentProduct.description"
                multi-line
                label="Description"
                required
                ></v-textarea>
                <v-text-field
                v-model="currentProduct.imageURL"
                label="Image"
                ></v-text-field>
                <v-img :src="currentProduct.imageURL" height="100" contain></v-img>
                <v-text-field
                v-model="currentProduct.quantity"
                label="Quantity"
                mask="###"
                required
                ></v-text-field>
                <v-btn
                type="submit"
                :disabled="!valid"
                right
                >
                submit
                </v-btn>
            </v-form>
        </v-flex>
    </v-layout>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["currentProduct"]),
    valid() {
      return (
        this.name !== "" && this.description !== "" && this.quantity !== ""
      );
    }
  },
  methods: {
    ...mapActions({
      getProductById: "getProductById",
      updateProduct: "updateProduct"
    }),
    onSubmit(currentProduct) {
      this.updateProduct(currentProduct);
      this.$router.push("/products");
    },
    onLoad() {
      const id = this.$route.params.id;
      this.getProductById(id);
    }
  },
  created() {
    this.onLoad();
  }
};
</script>

