<template>
  {{ res }}
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      res: null,
    };
  },
  mounted() {
    axios
      .get("https://api.github.com/users/emanueldms")
      .then((response) => (this.res = response));
  },
};
</script>

<style>
</style>