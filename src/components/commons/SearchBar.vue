<template>
    <section>
        <div class="search-bar">
            <input v-model="dataShared.searchValue" type="text" placeholder="Search">
            <button @click="search">CERCA</button>
        </div>
    </section>
</template>


<script>
import dataShared from '../../shared/dataShared.js';
import axios from 'axios';
export default {
    name: 'SearchBar',
    data() {
        return {
            dataShared
        }
    },
    methods: {
        search() {

            axios.get('https://api.themoviedb.org/3/movie/550?', {
                params: {
                    api_key: '515732d0a27d8bccd26d3d6e621748d8',
                    query: dataShared.searchValue,
                    // query: this.searchValue,
                    language: 'it-IT'
                }
            })

            .then((response) => {
                this.dataShared.films = response.data.results;
                console.log(response.data.results);
            })

            .catch(function (error) {
                console.log(error);
            })

        }
    }
}
</script>


<style lang="scss" scoped>
// @import '../../assets/style/partials/variables.scss';
</style>