<template>
    <v-layout>
        <v-flex xs12 sm6 offset-sm3>
            <h3>Create Product</h3>
            <v-form ref="form" @submit.prevent="onSubmit">
                <v-text-field
                v-model="name"
                label="Name"
                required
                ></v-text-field>
                <v-textarea
                v-model="description"
                multi-line
                label="Description"
                required
                ></v-textarea>
                <v-text-field
                v-model="imageURL"
                label="Image"
                ></v-text-field>
                <v-img :src="imageURL" height="100" contain></v-img>
                <v-text-field
                v-model="quantity"
                label="Quantity"
                mask="###"
                required
                ></v-text-field>
                <v-btn
                type="submit"
                :disabled="!valid"
                >
                submit
                </v-btn>
            </v-form>
        </v-flex>
    </v-layout>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      id: "",
      name: "",
      description: "",
      quantity: "",
      imageURL: ""
    };
  },

  computed: {
    valid() {
      return (
        this.name !== "" && this.description !== "" && this.quantity !== ""
      );
    }
  },
  methods: {
    ...mapActions({
      addProduct: "addProduct"
    }),

    onSubmit() {
      const payload = {
        id: this.id,
        name: this.name,
        quantity: this.quantity,
        description: this.description,
        imageURL: this.imageURL
      };
      this.addProduct(payload);
      this.$router.push("/products");
    }
  }
};
</script>

