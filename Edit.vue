<template>
 <v-layout>
    <v-flex xs12 sm6 offset-sm3>
        <h1>Edit Product</h1>
  <v-form @submit.prevent="onSubmit(currentItem)">
    <v-text-field type="text" name="name" id="name" v-model="currentItem.name" label="Name"/>
    <v-text-field type="text" name="imageURL" id="imageURL" v-model="currentItem.imageURL" label="imageURL"/>
    <v-img :src="currentItem.imageURL" height="100" contain></v-img>
    <v-text-field type="text" name="quantity" id="quantity" v-model="currentItem.quantity" label="quantity"/>
    <v-btn type="submit">Edit</v-btn>
  </v-form>
    </v-flex>
 </v-layout>
</template>

<script>
import { mapActions, mapState, mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["currentItem"])
  },
  methods: {
    ...mapActions({
        getItem: 'getItem',
        updataItem: 'updateItem'
    }),

    onSubmit(x) {
        this.updataItem(x);
    }
  },
  mounted() {
    const id = this.$route.params.id;
    this.getItem(id);
  }
};
</script>


