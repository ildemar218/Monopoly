<template>
    <div class="container-custom">
      <!-- Imagen -->
      <img src="../assets/monopoly.png" alt="Logo" class="img-fluid mb-4" style="max-width: 150px;">
    
      <!-- Botones -->
      <div class="botones">
        <button class="btn btn-primary w-100 mb-2" @click="login">Login</button>
        <button class="btn btn-secondary w-100" @click="register">Registro</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      login() {
        console.log("Redirigir a login");
        this.$router.push("/login");
      },
      register() {
        console.log("Redirigir a registro");
        this.$router.push("/registro");
      }
    }
  };
  </script>
  
  <style scoped>
  /* Asegurar que ocupe toda la pantalla sin scroll ni márgenes */
  .container-custom {
    background-color: #89CFFB;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }
  
  /* Ajuste de los botones */
  .botones {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 300px;
  }
  
  .botones button {
    margin-top: 10px;
  }
  </style>
  