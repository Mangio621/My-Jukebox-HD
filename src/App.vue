<template>
  <header>
    <h1> 🎧 My Jukebox</h1>
    <p> Created by Cole P. Mangio 103602247</p>
  </header>
  <nav>
    <router-link to="/">🏠Home</router-link>
    <router-link to="/search">🔍Search</router-link>
    <router-link to="/about">❓About</router-link>
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
  margin-right: 3px
}

nav a.router-link-exact-active {
  color: #7b7dff;
}

header h1 {
  font-family: "title";
  font-size: 40pt;
}

@font-face {
  font-family: 'title';
  src: url('./assets/title.ttf') format("truetype");
}
</style>
