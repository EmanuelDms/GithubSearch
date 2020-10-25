<template>
  <div class="container">
    <Home />
  </div>
</template>

<script>
import Home from "./components/Home";

export default {
  name: "app",
  components: {
    Home,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;1,300&display=swap");

* {
  font-family: "Rubik", sans-serif;
  margin: 0;
  padding: 0;
  color: #000000;
}

#app {
  text-align: justify;
}
</style>
