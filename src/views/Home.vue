<template>
  <form id="home">
    <AppTitle />
    <SearchBar />
  </form>
</template>

<script>
import AppTitle from "./AppTitle";
import SearchBar from "./SearchBar";

export default {
  components: {
    AppTitle,
    SearchBar,
  },
};
</script>

<style>
#app {
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
}

#home {
  background: brown;
}

#result {
  margin-top: 10px;
}
</style>