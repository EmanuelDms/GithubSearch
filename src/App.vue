<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/result">Result</router-link> |
    <router-link to="/api">Git API</router-link>
  </div>
  <router-view />
</template>

<style>
#app {
  font-family: "Rubik", sans-serif;
  text-align: center;
  color: #2c3e50;

  display: flex;
  flex-flow: column wrap;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
