<template>
  <form id="result">
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
#result {
  background: blueviolet;
  display: flex;
  flex-flow: row nowrap;
}
</style>