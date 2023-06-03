<template>
    <SongMasterPanel :songId="this.$route.query.id"/>
</template>

<script>
import SongMasterPanel from '@/components/SongMasterPanel.vue'

export default {
    name: 'SongView',
    components: {
        SongMasterPanel
    }
}
</script>
  