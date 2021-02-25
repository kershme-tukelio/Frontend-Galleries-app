export const mutations = {
    setGalleries(state, galleries) {
        state.galleries = galleries;
    },

    deleteGallery(state, gallery) {
        state.galleries = state.galleries.filter((g) => g.id !== gallery.id);
    }
};