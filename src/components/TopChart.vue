<template>
  <div class="row">
      <h1 class="text-start font-weight-bold"> Discover The Top Tunes! </h1>
      <div class="col" v-show="topTracks.length != 0">
        <SongList 
          :songsPerPage="20" 
          :data="topTracks"
          name="Here are the hottest tunes right now!"
          caption="List Top Tunes"/>
      </div>
  </div>
  <LoadingPanel v-if="topTracks.length == 0"/>
</template>

<script>
//const chartUrl = 'https://api.deezer.com/chart'
import SongList from '@/components/SongList.vue'
import {fetchAPIData} from '@/APIHandler.js'

import LoadingPanel from './LoadingPanel.vue';

export default {
  name: 'TopChart',
  props: {
    limit: String
  },
  components: {
    SongList,
    LoadingPanel
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