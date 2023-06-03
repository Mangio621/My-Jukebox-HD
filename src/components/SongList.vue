<template>
  <div v-for="song in getSongs" v-bind:key="song">
    <SongListing 
    :songId="song.id"
    :songTitle="song.title" 
    :artistName="song.artist.name" 
    :coverUrl="song.album.cover"/>
  </div>

  <div class="row">
    <v-pagination 
      v-model=currentPage
      :length=getPageCount
      >
    </v-pagination>
  </div>
  <div>
    {{ console.log(songsPerPage) }}
    {{console.log(songs)}}
  </div>
</template>

<script>
import SongListing from '@/components/SongListing.vue'

export default {
  name: 'SongList',
  props: {
    songsPerPage: String,
    data: Array
  },
  components: {
    SongListing
  },
  data: function() {
    return {
      songs: [],
      currentPage: 1
    }
  },
  watch: {
    data: function(newVal) {
      this.songs = newVal;
    }
  },
  computed: {
    getSongs: function() {
      let current = this.currentPage * this.songsPerPage;
      let start = current - this.songsPerPage;
      return this.songs.slice(start, current);
    },
    getPageCount: function() {
      return Math.ceil(this.songs.length / this.songsPerPage);
    }
  }
}
</script>