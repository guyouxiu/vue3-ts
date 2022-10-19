import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'

export interface State {
    menuStatus: boolean,

}
export const key: InjectionKey<Store<State>> = Symbol()
export const store = createStore<State>({
    state: {
        menuStatus:false
    },
    mutations: {
       setMenuStatus(state,status){
            state.menuStatus=status
       }
    },
    getters: {
       getMenuStatus(state){
            return state.menuStatus
       }
    }
})
// 定义自己的 `useStore` 组合式函数
export function useStore() {
    return baseUseStore(key)
}