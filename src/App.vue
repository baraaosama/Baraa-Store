<template>
  <nav>
    <!--<router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>-->
    <HeaderComponent/>
  </nav>
  <router-view />
  <footer>
    <FooterComponent/>
  </footer>
</template>
<script>
import HeaderComponent from "@/components/Header.vue";
import FooterComponent from "@/components/Footer.vue"
export default {
  components:{
    HeaderComponent,
    FooterComponent,
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  width: 100%;
  position: sticky;
    top: 0;
    background-color: transparent;
    z-index: 100;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
