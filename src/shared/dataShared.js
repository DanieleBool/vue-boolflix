import Vue from 'vue';

export default Vue.observable({ 

// search() {
//     const parametri= {
//          params: {
//             api_key:'515732d0a27d8bccd26d3d6e621748d8',
//             query: dataShared.searchValue,
//             language:'it-IT'
//          }
//     }
//     axios.get('https://api.themoviedb.org/3/movie/550?', parametri)
//     .then(response => {
//         data.risultatoFilm= response.data.results
//     });
// },

    searchValue: "",
    films: [],
});
