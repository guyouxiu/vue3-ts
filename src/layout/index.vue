<template>
    <el-container>
        <el-aside class="aside" width="auto">
            <app-aside></app-aside>
        </el-aside>
        <el-container>
            <el-header class="header">
                <app-header></app-header>
            </el-header> 
            <Tagsview></Tagsview>
            <el-main class="main">
                <app-main></app-main>
            </el-main>
        </el-container>
    </el-container>
</template>


<script setup lang="ts">
import AppHeader from "@/layout/AppHeader/index.vue"
import AppAside from "@/layout/AppAside/index.vue"
import AppMain from "@/layout/AppMain/index.vue"
import Tagsview from '@/layout/Tagsview/Tagsview.vue'
</script>

<style lang="scss">
.el-container {
  height: 100%;
  
  .aside {
    background-color: #304156;
  }

  .header {
    // background-color: chocolate;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #ccc;
  }

  .main {
    
  }

}
</style>