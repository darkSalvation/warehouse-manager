<template>
    <v-layout>
        <v-flex xs12 sm6 offset-sm3>
            <h1>Update Product</h1>
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
                right
                >
                submit
                </v-btn>
            </v-form>
        </v-flex>
    </v-layout>
</template>

<script>
export default {
  data() {
    return {
      id: "",
      name: "",
      description: "",
      quantity: ""
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
    onSubmit() {
      console.log({
        id: this.id,
        name: this.name,
        quantity: this.quantity,
        description: this.description,
        imageURL: this.imageURL
      });
    }
  },
  created() {
    const id = this.$route.params.id;
    this.$store.dispatch("getProductById", id);

    const item = this.$store.getters.currentProduct;

    this.name = item.name;
    this.description = item.description;
    this.quantity = item.quantity;
    this.id = item.id;
    this.imageURL = item.imageURL;
  }
};
</script>

