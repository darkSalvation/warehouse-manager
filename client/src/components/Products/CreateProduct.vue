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
      const payload = {
        id: this.id,
        name: this.name,
        quantity: this.quantity,
        description: this.description
      };
      this.$store.commit("addProduct", payload);
      this.$router.push("/products");
    }
  }
};
</script>

