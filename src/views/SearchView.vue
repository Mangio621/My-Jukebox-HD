<template>
  <div class="container search">
    <div class="row">
      <h1 class="font-weight-bold">Search for a song!</h1>
    </div>
    <SongSearch/>
  </div>
</template>

<script>
import SongSearch from '@/components/SongSearch.vue'
export default {
  name: 'SearchView',
  components: {
    SongSearch
  }
}
</script>