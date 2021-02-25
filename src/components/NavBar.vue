<template>
    <div>

    </div>
</template>

<script>
// import { mapActions, mapGetters, mapMutations } from 'vuex';
import { mapGetters } from 'vuex';

export default {
    name: 'nav-bar',
    computed: {
        ...mapGetters('auth', ['isAuthenticated'])
    }
}
</script>

<style scoped>
.nav {
    display: flex;
    padding: 30px;
}

.nav-box {
    flex: 1;
}
.nav a {
    font-weight: bold;
    color: #2c3e50;
}

.nav a.router-link-exact-active {
    color: #42b983;
}
.button {
    cursor: pointer;
}
</style>
