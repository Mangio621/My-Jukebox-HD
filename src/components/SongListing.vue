<template>
    <div class="row songListing">
        <div class="col-sm-1">
            <img class="songListingImg" :src="coverUrl"/>
        </div>
        <div class="col-sm-9">
            <div class="row">
                <a :href="getSongLink" class="text-left font-weight-bold songListingName"> {{ songTitle }} </a>
            </div>
            <div class="row">
                <a :href="getArtistLink" class="text-left artistListing">{{ artistName }}</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'SongListing',
  props: {
    songId: Number,
    songTitle: String,
    artistId: Number,
    artistName: String,
    coverUrl: String,
  },
  computed: {
    getSongLink: function() {
        return `/song?id=${this.songId}`;
    },
    getArtistLink: function() {
        return `/artist?id=${this.artistId}`
    }
  },
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

.songListingName {
    font-size: 14pt;
    text-decoration: none;
}
.songListingName:hover {
    background-color: rgb(240, 240, 240);
}

.artistListing {
    color: grey;
    text-decoration: none;
    font-style: italic;    
}
</style>