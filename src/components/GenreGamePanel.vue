<template>
    <LoadingPanel v-if="track == null"/>
    <div class="row-sm-1" v-show="track != null">
        <h2 class="font-weight-bold">{{track != null ? track.title : ''}}</h2>
        <p> By {{track != null ? track.artist.name : ''}} </p>
        <img :src="track != null ? track.album.cover_medium : ''"/>
    </div>
    <div class="row mt-5" v-if="videoId != ''">
        <youtube-iframe height="300" :video-id="videoId"/>
    </div>
    <div class="row" v-show="videoId != ''">
        <h2 class="font-weight-bold"> Can you Guess the Genre? </h2>
    </div>
    <div class="row mb-5" v-if="!guessMade" v-show="videoId != ''">
        <div class="col guessingPanel">
            <div class="row-sm-1">
                <v-text-field
                    label="Make Your Guess:"
                    v-model="guess"
                    type="input"
                    hint="Enter your guess to see whether you are right or wrong!">
                </v-text-field>
            </div>
            <div class="row-sm-1">
                <v-btn
                    class="bg-success"
                    v-on:click="makeGuess"
                    >
                    Guess!
                </v-btn>
            </div>
        </div>
    </div>
    <div class="row mb-5" v-if="guessMade">
        <div class="col">
            <div class="row">
                <h1 class="text-success" v-show="guessCorrect"> {{guessCorrect ? "Correct!" : "Wrong!"}} </h1>
                <h1 class="text-danger" v-show="!guessCorrect"> {{guessCorrect ? "Correct!" : "Wrong!"}} </h1>
                <h4 v-show="guessCorrect"> The Genre is indeed {{guess}} </h4>
                <h4 v-show="!guessCorrect"> Sorry... The Genre was {{genres[0]}} </h4>
            </div>
            <div class="row-sm-1">
                <v-btn class="bg-info" v-on:click="initializeGame"> Play Again? </v-btn>
            </div>
        </div>
    </div>
</template>
<script>
import { fetchAPIData } from '@/APIHandler';
import { GetYTVideoLink } from '@/YoutubeLinkGrabber';
import { YoutubeIframe } from '@vue-youtube/component';
import LoadingPanel from '@/components/LoadingPanel.vue';

export default {
    name: 'GenreGamePanel',
    components:{
        YoutubeIframe,
        LoadingPanel
    },
    data: function() {
        return {
            track: null,
            genres: [],
            videoId: "",
            guess: "",
            guessMade: false,
            guessCorrect: false
        }
    },
    methods: {
        initializeGame: function() {
            this.track = null;
            this.genres = [];
            this.videoId = "";
            this.guess = "";
            this.guessMade = false;
            this.guessCorrect = false;
            const getRandomTrackID = () => {
                return Math.floor(Math.random() * 299);
            }
            const getRandomSongInAlbum = (tracks) => {
                const track = tracks[getRandomTrackID()];
                fetchAPIData(`/album/${track.album.id}`, (album) => {
                    let genres = [];
                    this.track = track;
                    album.genres.data.map((genre) => {
                        genres.push(genre.name.toLowerCase());
                    });
                    this.genres = genres;
                    GetYTVideoLink(`${track.title} - ${track.artist.name}`, (id) => {
                        this.videoId = id;
                    });
                });
            }
            fetchAPIData(`/chart/0?limit=300`, (chartData) => {
                const tracks = chartData.tracks.data;
                getRandomSongInAlbum(tracks);
            });
        },

        makeGuess: function() {
            let correct = false;
            if(this.guess != '') {
                this.genres.map((genre) => {
                    if(genre.includes(this.guess)) {
                        correct = true;
                    }
                });
                this.guessMade = true
                this.guessCorrect = correct;
            } else {
                alert('You have to type something in the guessing field!');
            }
        }
    },
    beforeMount() {
        this.initializeGame();
    }
}

</script>

<style>
.guessingPanel {
    background-color: rgb(241, 241, 241);
    padding: 25px;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
}
</style>