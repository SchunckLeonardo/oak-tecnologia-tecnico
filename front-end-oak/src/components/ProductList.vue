<template>
  <div class="container my-5">
    <h2 class="display-2 text-center">Todos os produtos</h2>
    <table class="table mt-5">
      <thead>
        <tr>
          <th>Nome do produto</th>
          <th>Valor do produto</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id">
          <td>{{ product.name }}</td>
          <td>R${{ product.price.toFixed(2) }}</td>
        </tr>
      </tbody>
    </table>
    <router-link to="/cadastrar" class="btn btn-success w-100 mt-5"
      >Cadastrar novo produto</router-link
    >
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      products: [],
    };
  },
  created() {
    this.getAllProducts();
  },
  methods: {
    async getAllProducts() {
      let allProducts = await axios.get("http://localhost:5000/");
      let allProductsData = allProducts.data.allProducts;
      allProductsData.forEach((product) => {
        this.products.push(product);
      });
    },
  },
};
</script>

<style>
</style>