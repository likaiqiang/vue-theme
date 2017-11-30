import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        curTheme:''
    },
    mutations: {
        changeTheme(state,theme){
            if(theme){
                this.state.curTheme = theme
            }
        }
    }
})
export default store