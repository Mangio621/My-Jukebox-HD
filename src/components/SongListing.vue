<template>
    <div class="row songListing">
        <div class="col-sm-1">
            <img class="songListingImg" :src="coverUrl"/>
        </div>
        <div class="col-sm-9">
            <div class="row">
                <h4 class="text-left font-weight-bold"> {{ songTitle }} </h4>
            </div>
            <div class="row">
                <a class="text-left artistListing">{{ artistName }}</a>
            </div>
        </div>
        <div class="col-sm-2">
            <router-link :to="getSongLink()">
                <v-btn class="bg-info"> View Song </v-btn>
            </router-link>
            
        </div>
    </div>
</template>

<script>
export default {
  name: 'SongListing',
  props: {
    songId: String,
    songTitle: String,
    artistName: String,
    coverUrl: String,
  },
  methods: {
    getSongLink: function() {
        return `/song?id=${this.songId}`;
    }
  }
}
</script>

<style>
.songListing {
    background-color: rgb(252, 252, 252);
    margin-top: 5px;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.2);
}

.songListingImg {
    border-radius: 60px;
    width: 60px;
}

.artistListing {
    color: grey;
    text-decoration: none;
    font-style: italic;    
}
</style>