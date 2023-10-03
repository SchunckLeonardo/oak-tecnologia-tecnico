<template>
  <nav class="navbar navbar-expand-lg bg-dark px-5">
  <div class="container-fluid d-flex justify-content-center align-items-center">
        <img class="img-fluid" src="./assets/images/oak-logo.png" alt="Logo da Oak Tecnologia">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <router-link class="nav-link text-light" to="/">Lista de Produtos</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link text-light" to="/cadastrar">Cadastro de Produtos</router-link>
        </li>
      </ul>
  </div>
</nav>
  <router-view/>
</template>

<script>

</script>

<style scoped>
.img-fluid {
  width: 130px;
  height: 100%;
}
</style>
