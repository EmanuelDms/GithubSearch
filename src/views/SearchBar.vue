<template>
  <div class="form-group">
    <input type="text" id="searchBar" placeholder="Type a username..." />
    <router-link to="/result" id="linkResult">
      <img src="../assets/search.svg" alt="search image" />
    </router-link>
  </div>
</template>

<style>
.form-group {
  display: flex;
  flex-flow: row nowrap;
}

#searchBar {
  width: 600px;
  height: 50px;

  padding: 15px;
  border: 2px solid black;
}

#linkResult {
  background-color: black;
  width: 100px;
  height: 50px;

  display: flex;
  justify-content: center;
  align-items: center;
}
</style>