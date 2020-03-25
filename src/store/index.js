import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        downloadedImages: {
            apart: false,
            customerManagement: false,
            cv: false,
            faceRecognition: false,
            lightcandle: false,
            rainnyBoomerang: false,
            voldmort: false,
            wayKnower: false
        }
    },
    mutations: {
        downloadComplete: (state, payload) => {
            state.downloadedImages[payload] = true
        }
    },
    actions: {

    },
    getters: {
        // imageDownloadComplete: state => Object.values(state.downloadedImages).every(item => item)
        imageDownloadComplete: state => state.downloadedImages.rainnyBoomerang
    },
    modules: {}
})
