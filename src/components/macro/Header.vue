<template>
    <header>
        <Logo/>
        <SearchBar/>

    </header>
</template>

<script>
import SearchBar from '../commons/SearchBar.vue';
import Logo from '../commons/Logo.vue';

export default {
    name: 'Header',
    components: {
        Logo,
        SearchBar,
    }
}
</script>

<style lang="scss" scoped>
// @import '../../assets/style/global.scss';
// @import '../../assets/style/partials/variables.scss';

    header {
        height: 80px;
        display: flex;
    }
</style>