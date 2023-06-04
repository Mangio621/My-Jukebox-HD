<template>
  <v-table>
    <caption> {{caption}} </caption>
    <thead>
      <tr>
        <th id="songListings" scope="col"> {{name}} </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="song in getSongs" v-bind:key="song">
        <td header="songListings">
          <SongListing 
            :songId="song.id"
            :songTitle="song.title" 
            :artistId="song.artist.id"
            :artistName="song.artist.name" 
            :coverUrl="song.album.cover"/>
        </td>
      </tr>
    </tbody>
  </v-table>
  

  <div class="row">
    <v-pagination 
      v-model=currentPage
      :length=getPageCount
      >
    </v-pagination>
  </div>
</template>

<script>
import SongListing from '@/components/SongListing.vue'

export default {
  name: 'SongList',
  props: {
    songsPerPage: Number,
    data: Array,
    name: String,
    caption: String,
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