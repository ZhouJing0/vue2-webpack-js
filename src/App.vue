<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/my">My</router-link> |
      <router-link to="/you">You</router-link> |
      <router-link to="/tree">Tree</router-link> |
      <router-link to="/detail">Detail</router-link> |
      <router-link to="/area">Arae</router-link> |
      <router-link to="/map">Map</router-link> |
      <router-link to="/baidu">baidu</router-link> |
      <router-link to="/mapchart">MapChart</router-link> |
      <router-link to="/organization">OrganizationChart</router-link> |
      <router-link to="/enterprise">Enterprise</router-link> |
      <router-link to="/table">Table</router-link> |
      <router-link to="/right">RightClick</router-link> |
      <router-link to="/traffic">交通</router-link> |
      <router-link to="/mobile">适配</router-link> |
      <router-link to="/flow">流程图</router-link> |
      <router-link to="/upload">upload</router-link> |
      <router-link :to="{ name: 'pdf', params: { name: '1' } }"
        >PDF预览</router-link
      >
      |
    </nav>
    <keep-alive include="MyView">
      <router-view />
    </keep-alive>
  </div>
</template>
<script>
export default {
  name: "App",
  methods: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
