<template>
    <div class="container">
        <div class="row mt-5">
            <div class="col-sm-6">
                <img 
                class="img-fluid masterSongCover" 
                :src="songData != null ? songData.album.cover_big : ''"/>
            </div>
            <div class="col-xs-12 col-md-4">
                <div class="row">
                    <h1 class="text-left font-weight-bold">{{songData != null ? songData.title: ''}}</h1>
                </div>
                <div class="row">
                    <span class="text-left font-weight-bold">
                        Duration: {{ getFormattedDuration(songData != null ? songData.duration : 0) }}
                    </span>
                </div>
                <div class="row">
                    <span class="text-left font-weight-bold">
                        Release Date: {{ songData != null ? songData.release_date : 0 }}
                    </span>
                </div>
                <div class="row">
                    <span class="text-left font-weight-bold">
                        Type: {{ songData != null ? songData.type : 0 }}
                    </span>
                </div>
                <div class="row">
                    <h4 class="text-left font-weight-bold mt-5"> Artist </h4>
                </div>
                <div class="row song-artist-panel">
                    <div class="col-sm-4">
                        <img class="img-fluid masterSongArtistPic" :src="songData != null ? songData.artist.picture_medium : ''"/>
                    </div>
                    <div class="col-sm-8 text-left ps-0">
                        <h4 class="font-weight-bold mt-4">
                            {{ songData != null ? songData.artist.name : 0 }}
                        </h4>
                        <router-link v-if="songData != null" :to="getArtistLink">
                            <v-btn class="bg-success mt-2"> Visit Artist </v-btn>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
        <div class="row mt-5" v-if="videoId != ''">
            <youtube-iframe height="300" :video-id="videoId"/>
        </div>
    </div>
</template>

<script>
import { fetchAPIData } from '@/APIHandler';
import { GetYTVideoLink } from '@/YoutubeLinkGrabber';
import { YoutubeIframe } from '@vue-youtube/component';

export default {
    name: 'SongMasterPanel',
    props: {
        songId: String
    },
    components: {
        YoutubeIframe
    },
    data: function() {
        return {
            songData: null,
            videoId: ""
        }
    },
    computed: {
        getArtistLink: function() {
            return `/artist?id=${this.songData.artist.id}`;
        }
    },
    methods: {
        getFormattedDuration: function(seconds) {
            let minutes = Math.floor(seconds / 60); // Get the whole minutes
            let remainingSeconds = seconds % 60; // Get the remaining seconds
            let minutesString = minutes.toString(); // Convert minutes to string
            let secondsString = remainingSeconds.toString().padStart(2, '0'); // Convert remaining seconds to string and pad with leading zero if necessary
            let formattedTime = minutesString + ':' + secondsString; // Combine minutes and seconds with a colon separator
            return formattedTime;
        }
    },
    beforeMount() {
        fetchAPIData(`/track/${this.songId}`, (data) => {
            this.songData = data;
            console.log(data);
            GetYTVideoLink(`${data.title} - ${data.artist.name}`, (id) => {
                this.videoId = id;
            });
        });
    }
}
</script>

<style>
.masterSongArtistPic {
    border-radius: 60px;
}
.song-artist-panel {
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
    padding: 5px;
    margin-top: 5px;
    background-color: rgb(240, 240, 240);
}
</style>