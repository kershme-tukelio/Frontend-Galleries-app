import galleriesService from '../../services/GalleriesService.js'

export const actions = {
    async getGalleries(store) {
        const galleries = await galleriesService.getGalleries(store.state.searchTerm);
        store.commit('setGalleries', galleries);
    },

    async deleteGallery(store, gallery) {
        await galleriesService.deleteGallery(gallery.id);
        store.commit('deleteGallery', gallery);
    }
};