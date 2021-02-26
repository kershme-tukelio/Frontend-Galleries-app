<template>
	<div>
        <div class="nav-box">
            <input @input="search" placeholder="Search..." />
        </div>

        <div>
            <table>
                <th></th>
            </table>
        </div>
    </div>
</template>

<script>
import { mapActions, mapMutations } from 'vuex'

export default {
    methods: {
        search(searchEntry) {
            this.setSearchTerm(searchEntry.target.value);
            this.getGalleries();
        },
        ...mapActions('galleries', ['getGalleries']),
        ...mapMutations('galleries', ['setSearchTerm']),
        ...mapActions('auth', ['logout'])
    }
}
</script>

<style>

</style>
