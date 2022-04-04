<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand text-white fst-italic" href="#">
      <img src="./assets/logo.png" alt="" width="50" height="50">
      Explore
    </a>
    <button class="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav nav-pills ms-auto">
        <li class="nav-item">
          <router-link class="nav-link" aria-current="page" :to="{ name: 'Users' }">Users</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{ name: 'FavouritePhotos' }">Favourites</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  <div class="container-fluid">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import "https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css";
@import "./assets/styles/styling.css";
</style>
