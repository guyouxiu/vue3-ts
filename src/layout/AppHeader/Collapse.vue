<template>
    <div class="dv">
        <el-icon @click="handleChangeStatus" class="icon" size="mini">
            <Icon :icon="iconStatus ? 'Fold' : 'Expand' "></Icon>
        </el-icon>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import {useStore} from '@/store'
const store=useStore()


// 初始化按钮的状态
const iconStatus = ref(true)


// 点击切换按钮
const handleChangeStatus = () => {
    iconStatus.value = !iconStatus.value
    store.commit('setMenuStatus',!iconStatus.value)
}

</script>


<style lang="scss" scoped>

.icon {
    cursor: pointer;
    display: flex;
    align-items: center;
    margin-right: 10px;
}
</style>