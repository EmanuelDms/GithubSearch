<template>
  <div class="container">
    <form>
      <AppTitle />
      <SearchBar />
    </form>
    <aside>
      <img src="../assets/test.png" alt="github image" id="GithubImage" />
      <h3>Lindemberg</h3>
      <span>lindemberg</span>

      <!-- User Infos -->
      <div class="userInfo">
        <div class="singleInfo">
          <img src="../assets/organization.svg" alt="Organization" />
          <span>Lux One</span>
        </div>
        <div class="singleInfo">
          <img src="../assets/location.svg" alt="Organization" />
          <span>Fortaleza, CE</span>
        </div>
        <div class="singleInfo">
          <img src="../assets/star.svg" alt="Organization" />
          <span>0</span>
        </div>
        <div class="singleInfo">
          <img src="../assets/repo.svg" alt="Organization" />
          <span>4</span>
        </div>
        <div class="singleInfo">
          <img src="../assets/followers.svg" alt="Organization" />
          <span>1</span>
        </div>
      </div>
      <!-- // User Infos -->
    </aside>
    <article>
      <div class="repo">
        <h3>Angular-AdminLTE</h3>
        <span>
          AngularjsApp Implementation on top of renowned Admin-LTE theme
          (https://github.com/almasaeed2010/AdminLTE) now with many useful
          directives and features.
        </span>
        <div class="repo-stars">
          <img src="../assets/star.svg" alt="star" />
          <span>0</span>
        </div>
      </div>

      <div class="repo">
        <h3>Angular-AdminLTE</h3>
        <span>
          AngularjsApp Implementation on top of renowned Admin-LTE theme
          (https://github.com/almasaeed2010/AdminLTE) now with many useful
          directives and features.
        </span>
        <div class="repo-stars">
          <img src="../assets/star.svg" alt="star" />
          <span>0</span>
        </div>
      </div>
    </article>
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
/* Geral */
.container {
  display: grid;
  grid-template-areas: "s s" "b a";
  gap: 28px;
}

form {
  grid-area: s;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

h3 {
  font-size: 2.25rem;
  font-weight: 400;
}
/* // Geral */

/* ASIDE (Profile) */
aside {
  grid-area: b;
}

#GithubImage {
  height: 300px;
  width: 300px;
}

aside span {
  font-size: 1.25rem;
  color: rgba(117, 117, 117, 1);
  font-weight: 300;
}

.userInfo {
  margin-top: 44px;

  display: grid;
  grid-template-columns: auto auto;
  gap: 15px;
}

.singleInfo {
  display: flex;
  align-items: center;
}

.singleInfo img {
  padding-right: 12px;
}
/* // ASIDE (Profile) */

/* Repositórios */
article {
  grid-area: a;
  padding-left: 28px;
}

.repo {
  margin: 30px 0;
}

.repo:first-child {
  margin-top: 0;
}

.repo:last-child {
  margin-bottom: 0;
}

.repo span {
  font-size: 1.5rem;
  font-weight: 300;
  color: rgba(117, 117, 117, 1);
}

.repo-stars {
  margin-top: 10.74px;
  display: flex;
  align-items: center;
}

.repo-stars img {
  margin-right: 10.34px;
}
/* // Repositórios */
</style>