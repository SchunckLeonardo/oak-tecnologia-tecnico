<template>
  <form
    @submit.prevent="validationForm()"
    class="my-5 border border-2 border-dark p-5 rounded"
    method="POST"
    action="/"
  >
    <h2 class="display-5 text-center mb-5">Cadastre o seu produto</h2>
    <label class="form-label" for="name">Nome do produto</label>
    <input
      type="text"
      class="form-control"
      name="name"
      placeholder="Digite o nome do produto"
      v-model="nameProduct"
    />
    <label class="form-label mt-3" for="description"
      >Descrição do produto</label
    >
    <input
      type="text"
      class="form-control"
      name="description"
      placeholder="Digite a descrição do produto"
      v-model="descriptionProduct"
    />
    <label class="form-label mt-3" for="price">Valor do produto</label>
    <input
      type="text"
      class="form-control"
      name="price"
      placeholder="R$00,00"
      v-model.lazy="amount"
      v-money3="config"
    />
    <label class="form-label mt-3" for="disponible"
      >Disponível para compra?</label
    >
    <select class="form-control" v-model="disponibleProduct" name="disponible">
      <option>Sim</option>
      <option>Não</option>
    </select>
    <div v-if="err" class="alert alert-danger mt-3" role="alert">
      {{ errMsg }}
    </div>
    <button class="btn btn-success w-100 mt-5">Cadastrar</button>
  </form>
</template>

<script>
import { Money3Directive } from "v-money3";
import axios from "axios";

export default {
  data() {
    return {
      err: false,
      nameProduct: "",
      descriptionProduct: "",
      errMsg: "",
      amount: 0.0,
      disponibleProduct: "",
      config: {
        prefix: "R$",
        suffix: "",
        thousands: "",
        decimal: ".",
        precision: 2,
        disableNegative: false,
        disabled: false,
        min: null,
        max: null,
        allowBlank: false,
        minimumNumberOfCharacters: 0,
        shouldRound: true,
        focusOnRight: false,
      },
    };
  },
  directives: { money3: Money3Directive },
  methods: {
    async validationForm() {
      if (
        this.nameProduct === "" ||
        this.descriptionProduct === "" ||
        this.amount === "" ||
        this.disponibleProduct === ""
      ) {
        this.errMsg = "Os campos não podem estar vazios!";
        this.err = true;
        return;
      } else {
        this.errMsg = "";
        this.err = false;
        if (this.disponibleProduct === "Sim") {
          this.disponibleProduct = true;
        } else {
          this.disponibleProduct = false;
        }

        let product = {
          name: this.nameProduct,
          description: this.descriptionProduct,
          price: this.amount.split("R$")[1],
          disponible: this.disponibleProduct,
        };

        try {
          await axios.post("http://localhost:5000/product", product);
          this.errMsg = "Produto cadastrado com sucesso!";
          this.err = false;
          window.location.href = "http://localhost:8080/"
        } catch (error) {
          console.error(error);
          this.errMsg = "Ocorreu um erro ao enviar o formulário.";
          this.err = true;
        }
      }
    },
  },
};
</script>

<style scoped>
</style>