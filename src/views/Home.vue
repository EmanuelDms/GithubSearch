<template>
  <div class="container">
    <form>
      <AppTitle />
      <SearchBar />
    </form>
  </div>
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

<style scoped>
.container {
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

form {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
</style>