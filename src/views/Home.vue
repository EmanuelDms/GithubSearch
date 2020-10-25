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
#home {
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
}
</style>