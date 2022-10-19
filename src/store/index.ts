import { stat } from 'fs'
import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'

export interface State {
    menuStatus: boolean,
    tags: any

}
export const key: InjectionKey<Store<State>> = Symbol()
export const store = createStore<State>({
    state: {
        menuStatus: false,
        tags: [
            {
                title: '首页',
                path: "/dashboard"
            },
            
        ]
    },
    mutations: {
        setMenuStatus(state, status) {
            state.menuStatus = status
        },
        setTags(state: State, tags: any[]): void {
            const index = state.tags.findIndex((item: any) => item.path === tags.path)
            if (index !== -1) return
            state.tags.push(tags)
        },
        removeTags(state: State, index: number): void {
            state.tags.splice(index, 1)
        },
        removeTagsOther(state: State, index: number): void {
            state.tags.splice(index + 1) // 删除后面
            state.tags.splice(1, index - 1)
        },
        removeTagsAll(state: State) {
            state.tags.splice(1)
        }
    },
    getters: {
        getMenuStatus(state) {
            return state.menuStatus
        },
        getTags(state: State): any {
            return state.tags
        }
    },

})
// 定义自己的 `useStore` 组合式函数
export function useStore() {
    return baseUseStore(key)
}