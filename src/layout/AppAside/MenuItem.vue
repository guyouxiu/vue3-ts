<template>
    <template v-for="item in menuList" :key="item.path">
        <el-sub-menu v-if="item.children && item.children.length > 0" :index="item.path">
            <template #title>
                <i v-if="item.meta.icon && item.meta.icon.includes('el-icon')" :class="item.meta.icon"></i>
                <Icon class="icons" v-else :icon='item.meta.icon'></Icon>
                <span>{{ item.meta.title }}</span>
            </template>
            <menu-item :menuList='item.children'></menu-item>
        </el-sub-menu>
        <el-menu-item style="color: #f4f4f5" v-else :index="item.path">
            <i v-if="item.meta.icon && item.meta.icon.includes('el-icon')" :class="item.meta.icon"></i>
            <Icon class="icons" v-else :icon='item.meta.icon'></Icon>
            <template #title>{{ item.meta.title }}</template>
        </el-menu-item>
    </template>
</template>

<script setup lang="ts">
import {
    Location,
    Setting,
} from '@element-plus/icons-vue'


defineProps(['menuList'])

</script>

<style scoped>
.icons {
    width: 24px;
    height: 18px;
    margin-right: 5px;
}
</style>