<template>
    <div class="container">
        <div class="row mt-5">
            <div class="col-sm-4">
                <img 
                class="img-fluid masterSongCover" 
                :src="artistData != null ? artistData.picture_big : ''"/>
            </div>
            <div class="col-xs-12 col-md-4">
                <div class="row">
                    <h1 class="text-left font-weight-bold">{{artistData != null ? artistData.name : ''}}</h1>
                </div>
                <div class="row">
                    <span class="text-left font-weight-bold">
                        Number of Albums: {{artistData != null ? artistData.nb_album : ''}}
                    </span>
                </div>
                <div class="row">
                    <span class="text-left font-weight-bold">
                        Number of Deezer Fans: {{artistData != null ? artistData.nb_fan : ''}}
                    </span>
                </div>
                <div class="row">
                    <span class="text-left font-weight-bold">
                        Type: {{artistData != null ? artistData.type : ''}}
                    </span>
                </div>
            </div>
        </div>
        <div class="row mt-5">
            <h1 v-show="artistData != null"
                class="text-left font-weight-bold"> 
                {{artistData != null ? artistData.name : ''}}'s Top Songs:
            </h1>
        </div>
        <div class="row" v-show="artistData != null">
            <SongList
                :songsPerPage="20"
                :data="topTracks"
                :name="`Here's ` + (artistData != null ? artistData.name : '') + `'s` + ' top songs of all time!'"
                :caption="(artistData != null ? artistData.name : '') + `'s` + ' top songs'"/>
        </div>
    </div>
</template>

<script>
import { fetchAPIData } from '@/APIHandler';
import SongList from '@/components/SongList.vue'

export default {
    name: 'ArtistMasterPanel',
    props: {
        artistId: String 
    },
    components: {
        SongList
    },
    data: function() {
        return {
            artistData: null,
            topTracks: []
        }
    },
    beforeMount() {
        fetchAPIData(`/artist/${this.artistId}`, (data) => {
            this.artistData = data;
            fetchAPIData(`/artist/${this.artistId}/top?limit=100`, (tracks) => {
                this.topTracks = tracks.data;
            });
        });
    }
}
</script>

<style>
.masterArtistPic {
    border-radius: 60px;
}
</style>