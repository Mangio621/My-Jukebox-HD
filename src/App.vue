<template>
  <header>
    <h1> 🎧 My Jukebox</h1>
    <p> Created by Cole P. Mangio 103602247</p>
  </header>
  <nav>
      <router-link class="navItem" to="/">🏠Home</router-link>
      <router-link class="navItem" to="/search">🔍Search</router-link>
      <router-link class="navItem" to="/genreGame"> 🎮 Genre Game </router-link>
      <router-link class="navItem" to="/about">❓About/Help</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 20px;
  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.2);
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  border-style: solid;
  border-width: 1px;
  padding: 10px;
  text-decoration: none;
  margin-right: 3px;
}

nav a.router-link-exact-active {
  color: #7b7dff;
}

header h1 {
  font-family: "title";
  font-size: 40pt;
}

@media (max-width: 530px) {
  .navItem {
    display:block; 
  }
}

@font-face {
  font-family: 'title';
  src: url('./assets/title.ttf') format("truetype");
}
</style>
