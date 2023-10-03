<template>
  <form class="my-5 border border-2 border-dark p-5 rounded">
    <h2 class="display-5 text-center mb-5">Cadastre o seu produto</h2>
    <label class="form-label" for="name">Nome do produto</label>
    <input
      type="text"
      class="form-control"
      name="name"
      placeholder="Digite o nome do produto"
    />
    <label class="form-label mt-3" for="description"
      >Descrição do produto</label
    >
    <input
      type="text"
      class="form-control"
      name="description"
      placeholder="Digite a descrição do produto"
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
    <select class="form-control" name="disponible">
      <option selected disabled>Selecione uma opção</option>
      <option>Sim</option>
      <option>Não</option>
    </select>
    <button class="btn btn-success w-100 mt-5">Cadastrar</button>
  </form>
</template>

<script>
import { Money3Directive } from 'v-money3'

export default {
  data() {
    return {
      amount: 0.0,
      config: {
        prefix: "R$",
        suffix: "",
        thousands: ",",
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
  directives: { money3: Money3Directive }
};
</script>

<style scoped>
</style>