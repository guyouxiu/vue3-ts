<template>

    <div class="tags">
        <div class="tags-item" :class="[$route.path===item.path ? 'active' : '']" v-for="(item,index) in tagsList"
            :key="index" @click="handleTags(item)" @contextmenu.stop="handleContextMenu($event,index)">
            <span>{{item.title}}</span>
            <el-icon :size="8" @click.stop="handleremove(index)">
                <Close />
            </el-icon>
        </div>
        <ul v-show="contextMenuStatus" :style="{left : x + 'px', top :y + 'px' }" class="menu">
            <li @click.stop="handleRefresh">刷新</li>
            <li @click.stop="handleClose">关闭</li>
            <li @click.stop="handleCloseOther">关闭其他</li>
            <li @click.stop="handleCloseAll">关闭所有</li>
        </ul>
    </div>

</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useStore } from '@/store';
import { Close } from '@element-plus/icons-vue'
const store = useStore()
const router = useRouter()
const route = useRoute()
const tagsList = computed(() => {
    return store.getters.getTags
})


watch(() => route.path, () => {
    const tagsItem = {
        title: route.meta.title,
        path: route.path
    }
    console.log(tagsItem)
    store.commit("setTags", tagsItem)
}, {
    deep: true,
    immediate: true
})

const contextMenuStatus = ref(false)
let x = ref(0)
let y = ref(0)
let TagIndex = ref(0)
let activeIndex = ref(0)

const i = localStorage.getItem("activeIndex")
if (i) activeIndex.value = Number(i)

// 点击刷新按钮执行的方法
const handleRefresh = () => {
    router.go(0)
}
// 点击关闭按钮执行的方法
const handleClose = () => {
    handleremove(TagIndex.value)
    contextMenuStatus.value = false
}
// 点击关闭其他按钮执行的方法
const handleCloseOther = () => {
    store.commit("removeTagsOther", activeIndex.value)
    contextMenuStatus.value = false
}
// 点击关闭所有按钮执行的方法
const handleCloseAll = () => {
    store.commit("removeTagsAll")
    contextMenuStatus.value = false
    handleremove({ path: '/dashboard' }, 0)
}

// 点击鼠标右键执行的方法
const handleContextMenu = (e: any, index: number) => {
    e.preventDefault()
    const { clientX, clientY } = e
    x.value = clientX - 230
    y.value = clientY - 50
    TagIndex.value = index
    contextMenuStatus.value = true
}


document.addEventListener("click", () => {
    contextMenuStatus.value = false
})

const handleTags = (item: any, index: number) => {
    activeIndex.value = index
    localStorage.setItem('activeIndex', index.toString())
    router.push({ path: item.path })
    contextMenuStatus.value = false
}

const handleremove = (index: number) => {
    if (index === 0) return
    store.commit("removeTags", index)
    if (index === tagsList.value.length) {
        const path = tagsList.value[index - 1].path
        if (path) {
            router.push({ path: path })
        }
    } else {
        const path = tagsList.value[tagsList.value.length - 1].path
        if (path) {
            router.push({ path: path })
        }
    }

}
</script>

<style lang="scss" scoped>
.tags {
    position: relative;
    padding: 2px 0;
    height: 34px;
    width: 100%;
    background: #fff;
    border-bottom: 1px solid #d8dce5;
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 12%), 0 0 3px 0 rgb(0 0 0 / 4%);
    display: flex;

    .tags-item:first-of-type {
        margin-left: 15px;
    }

    .tags-item.active {
        background-color: #42b983;
        color: #fff;
        border-color: #42b983;

        &:before {
            content: "";
            display: block;
            width: 8px;
            height: 8px;
            background: #fff;
            border-radius: 50%;
            margin: 0 5px 0 3px;
        }
    }


    .tags-item {
        font-size: 12px;
        cursor: pointer;
        height: 26px;
        line-height: 26px;
        border: 1px solid #d8dce5;
        padding: 0 5px 0 8px;
        margin-top: 4px;
        margin-left: 5px;
        color: #495060;
        background: #fff;
        display: flex;
        align-items: center;


        .el-icon {
            margin-left: 5px;
            padding: 3px;
            border-radius: 50%;
        }

        .el-icon:hover {
            background-color: #ccc;

        }
    }
}

.menu {
    padding: 5px 0;
    position: absolute;
    list-style: none;
    border-radius: 4px;
    font-size: 12px;
    font-weight: 400;
    color: #333;
    //left: 100px;
    //top: 100px;
    background: #fff;
    box-shadow: 2px 2px 3px 0 rgb(0 0 0 / 30%);

    li {
        padding: 5px 20px;
        cursor: pointer;

        &:hover {
            background-color: #eee;
        }
    }

}
</style>

