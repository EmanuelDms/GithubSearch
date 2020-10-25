<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/api">Git API</router-link>
  </div>
  <div class="container">
    <router-view />
  </div>
</template>

<style>
/* Fonts */
@import url("https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@500&display=swap");

* {
  font-family: "Rubik", sans-serif;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.container {
  height: 90vh;

  display: flex;
  justify-content: center;
  align-items: center;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
