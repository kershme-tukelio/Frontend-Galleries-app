<template>
	<div>
        <div class="nav-box">
            <input @input="search" placeholder="Search..." />
        </div>

        <div>
            <table-slot :items="galleries" :columns="['Title', 'Images', 'First Name', 'Last Name', 'Creation date', 'Options']">
                <template slot-scope="slotProps">
                    <table-row :gallery="slotProps.item" @gallery-delete="handleGalleryDelete"  />
                </template>
            </table-slot>
            <div v-if="galleries == {}" > There are no galleries that match your search terms. </div>
        </div>

    </div>
</template>

<script>
import { mapActions, mapMutations, mapGetters } from 'vuex'
import TableRow from '../components/TableRow.vue'
import TableSlot from '../components/TableSlot.vue'
import store from '../store'

export default {
    name: 'galleries',
    components: {
        TableSlot,
        TableRow
    },
    computed: {
        ...mapGetters('galleries', ['galleries']),
        ...mapGetters('auth', ['activeUser'])
    },
    async created() {
        await store.dispatch('galleries/getGalleries');
    },
    
    methods: {
        search(searchEntry) {
            this.setSearchTerm(searchEntry.target.value);
            this.getGalleries();
        },
        handleGalleryDelete(gallery) {
            this.deleteGallery(gallery);
        },
        // redirectToEditPage() {
        //     this.$router.push('/edit-gallery/' + this.gallery.id)
        // },
        ...mapActions('galleries', ['getGalleries']),
        ...mapActions('auth', ['logout']),
        ...mapMutations('galleries', ['setSearchTerm']),
    }
}
</script>

<style>

</style>