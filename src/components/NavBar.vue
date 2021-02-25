<template>
    <div class="nav">
        <div class="nav-box">
            <router-link to="/"> Galleries </router-link>
        </div>
        <div class="nav-box">
            <template v-if="!isAuthenticated">
                <router-link to="/register" > Register </router-link> | 
                <router-link to="/login" > Login </router-link>
            </template>
            <template v-else>
                <a class="button" @click="logout"> Logout </a>
            </template>
        </div>
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
