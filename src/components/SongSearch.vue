<template>
    <div class="row">
        <v-text-field 
            label="Search Query" 
            v-model="searchQuery"
            type="input"
            hint="Enter the name of an artist, song or both for your search query!">
        </v-text-field>
    </div>
    <div class="row-sm-1">
        <v-btn class="bg-info" v-on:click="onSearchClick"> Search!</v-btn>
    </div>
    <hr>
    <LoadingPanel v-if="attemptedToSearch && this.searchResults.length == 0"/>
    <div v-show="searchResults.length > 0">
        <SongList
        :songsPerPage="20" 
        :data="searchResults"
        :name="`Your query: '${searchQuery}' returned ${searchResults.length} results`"
        caption="Songs found from your search query"
        />
    </div>
</template>

<script>
import SongList from '@/components/SongList.vue'
import { fetchAPIData } from '@/APIHandler';

import LoadingPanel from '@/components/LoadingPanel.vue';

export default {
  name: 'SongSearch',
  components: {
    SongList,
    LoadingPanel
  },
  data: function() {
    return {
        attemptedToSearch: false,
        searchQuery: "",
        searchResults: []
    }
  },
  methods: {
    onSearchClick: function() {
        // Perform API search query
        this.attemptedToSearch = true;
        fetchAPIData(`/search?q="${this.searchQuery}"&limit=300`, (results) => {
            this.searchResults = results.data;
        });
    }
  }
}
</script>