<template>
  <form>
    <AppTitle />
    <SearchBar />
  </form>
</template>

<script>
import axios from "axios";

import AppTitle from "./AppTitle";
import SearchBar from "./SearchBar";

export default {
  data() {
    return {
      res: null,
    };
  },
  components: {
    AppTitle,
    SearchBar,
  },
  mounted() {
    axios
      .get("https://api.github.com/users/emanueldms")
      .then((response) => (this.res = response));
  },
};
</script>

<style>
.container {
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
}
</style>