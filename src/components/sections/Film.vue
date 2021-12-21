<template>
    <section>
        <ul>
            <li v-for="(film, i) in dataShared.films " :key="i">
                
                <p>{{film.genres.original_title}}</p>
                <p>{{film.genres.original_language}}</p>
                <p>{{film.overview.popularity}}</p>
            </li>
        </ul>
    </section>
</template>

<script>
import dataShared from '../../shared/dataShared.js';

export default {
    name: 'Films',
    components: {

    },

    data() {
        return {
            dataShared,
        }
    }
}
</script>

<style scoped>

</style>