<template>
  <div id="app">
    <br>
    <b-navbar type="dark" variant="dark">
    <b-navbar-nav align='center'>

      <!--Inclusion aqui de la vista para ser mostrada en el Navbar-->
      <b-nav-item to="/">Home</b-nav-item>
      <b-nav-item to="/longitud">longitud</b-nav-item>
      <b-nav-item to="/masa">masa </b-nav-item>
      <b-nav-item to="/Monedas">monedas </b-nav-item>
      <b-nav-item to="/Tiempo">Tiempo </b-nav-item>
      <b-nav-item to="/Almacenamiento">Almacenamiento </b-nav-item>

     
      </b-navbar-nav>
  </b-navbar>
    
    
    <!-- <div id="nav">
      <router-link to="/longitud">longitud </router-link>
      <router-link to="/masa">masa </router-link>
      <router-link to="/Monedas">monedas </router-link>
      <router-link to="/Tiempo">Tiempo </router-link>
      <router-link to="/Almacenamiento">Almacenamiento </router-link>
    </div> -->
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
