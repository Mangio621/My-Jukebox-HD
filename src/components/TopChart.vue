<template>
    <div class="row">
        <h1 class="text-start font-weight-bold"> Discover The Top Tunes! </h1>
        <div class="col">
          <SongList :songsPerPage="20" :data="topTracks"/>
        </div>
    </div>
</template>

<script>
//const chartUrl = 'https://api.deezer.com/chart'
import SongList from '@/components/SongList.vue'
import {fetchAPIData} from '@/APIHandler.js'

export default {
  name: 'TopChart',
  props: {
    limit: String
  },
  components: {
    SongList
  },
  data: function() {
    return {
      topTracks: []
    }
  },
  beforeMount() {
    fetchAPIData(`/chart&limit=${this.limit}`, (data) => {
      this.topTracks = data.tracks.data;
    });
  }
}
</script>