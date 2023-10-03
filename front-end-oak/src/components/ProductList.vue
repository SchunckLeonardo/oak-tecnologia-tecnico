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
        <tr>
          <th>1</th>
          <td>Mark</td>
        </tr>
      </tbody>
    </table>
    <router-link to="/cadastrar" class="btn btn-success w-100 mt-5">Cadastrar novo produto</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>