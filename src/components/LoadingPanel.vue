<template>
    <div class="row">
        <v-img
            :src="require('../assets/loading.gif')"
            class="my-3"
            contain
            height="100"
        />
    </div>
</template>
<script>
export default {
    name: 'LoadingPanel',
}
</script>
