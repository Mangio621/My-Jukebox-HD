<template>
    <ArtistMasterPanel :artistId="this.$route.query.id"/>
</template>

<script>
import ArtistMasterPanel from '@/components/ArtistMasterPanel.vue'

export default {
    name: 'ArtistView',
    components: {
        ArtistMasterPanel
    }
}
</script>
  