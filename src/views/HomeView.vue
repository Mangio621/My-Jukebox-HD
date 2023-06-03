<template>
  <div class="container">
    <TopChart limit="100"/>
  </div>
</template>

<script>
// @ is an alias to /src
import TopChart from '@/components/TopChart.vue'

export default {
  name: 'HomeView',
  components: {
    TopChart
  }
}
</script>
