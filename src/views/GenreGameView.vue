<template>
    <div class="container genre-game">
      <h1 class="text-center font-weight-bold">
        The Genre Game!
      </h1>
      <GenreGamePanel/>
    </div>
</template>
  
<script>
import GenreGamePanel from '@/components/GenreGamePanel.vue';

export default {
  name: "GenreGameView",
  components: {
    GenreGamePanel
  }
}

</script>
