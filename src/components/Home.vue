<template>
  <form id="home">
    <AppTitle />
    <SearchBar />
  </form>
  <Result />
</template>

<script>
import axios from "axios";

import AppTitle from "./AppTitle";
import SearchBar from "./SearchBar";
import Result from "./Result";

export default {
  data() {
    return {
      res: null,
    };
  },
  components: {
    AppTitle,
    SearchBar,
    Result,
  },
  mounted() {
    axios
      .get("https://api.github.com/users/emanueldms")
      .then((response) => (this.res = response));
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