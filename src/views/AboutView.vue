<template>
  <div class="about">
    <h1>About My Jukebox!</h1>
    <p>
      My Jukebox is a High Distinction web application project that 
      in a way, acts a bit like spotify. Via the Deezer API, this app
      can allow the user to search for songs via the provided user interface.
    </p>
    <p>
      On top of that, the user may view a song, and actually listen to it
      as this application is capable of scraping youtube search query URLs for
      video ID's. This app then feeds the fetched video ID and places it into a
      youtube iframe. So the user can listen and scrub through the queried song!
    </p>
    <p>
      On top of that, the user can view artists and view their master information
      including another list of their top songs.
    </p>
    <p>
      On top of that, the user can play a song game, called the "genre game"
      where the user is prompted with a random song, and they have to guess
      its genre based on how the song sounds.
    </p>
    <h1> CORS Issues </h1>
    <p>
      The reason you may be receiving CORS errors, is because unfortunately,
      the host is held on a http certificate, not a https certificate. This
      app makes requests to the Deezer API which all of its endpoints are of
      https certificates.
    </p>
    <p>
      To fix this issue, please install the cors unblock plugin on your chrome
      browser and make sure it is activated: <a href="https://chrome.google.com/webstore/detail/cors-unblock/lfhmikememgdcahcdlaciloancbhjino"> https://chrome.google.com/webstore/detail/cors-unblock/lfhmikememgdcahcdlaciloancbhjino </a>
    </p>
    <p>
      Otherwise, the CORS issues are out of my control, and are actually based
      on the host configuration's certificate (which I have no control of). The host
      must be of the https certificate. 
    </p>
    <h1> Device Size Compatibility </h1>
    <p>
      This application is compatiable for xs, sm, md and above screens, where the
      code explicitly references xs, sm and md sizes (three sizes).
    </p>
  </div>
</template>

<script>
export default {
  name: "AboutView",
  mounted() {
  }
}
</script>

<style>
.about p {
  margin:auto;
  text-align: left;
  max-width: 600px;
}
</style>