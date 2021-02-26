<template>

    <div class="row">
    <div class="cell">{{ gallery.title }}</div>
    <div class="cell" v-if="gallery.images[0]" >{{ gallery.images[0].url }}</div>
    <div class="cell" v-else > No images </div>
    <div class="cell">{{ gallery.user.first_name }}</div>
    <div class="cell">{{ gallery.user.last_name }}</div>
    <div class="cell">{{ gallery.created_at }}</div>
    <div class="cell" v-if="gallery.user_id == activeUser.id">
        <button @click="handleEdit" > Edit gallery </button>
        <button @click="handleDelete"> Delete gallery </button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'table-row',
    props: ['gallery'],
    computed: {
        ...mapGetters('auth', ['activeUser'])
    },
    methods: {
        handleDelete() {
            this.$emit('gallery-delete', this.gallery);
        },
        handleEdit() {
            this.$router.push('/edit-gallery/' + this.gallery.id)
        }
    }
};
</script>

<style scoped>
.row {
    display: flex;
    min-height: 40px;
    border-bottom: 1px solid gray;
}
.cell {
    flex: 4;
    justify-content: center;
    align-items: center;
    padding: 5px;
    box-sizing: border-box;
}
</style>