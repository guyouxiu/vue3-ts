<template>
    <div class="logo" :class="[isCollapse ? 'pl-15' : '']">
        <img src="https://wpimg.wallstcn.com/69a1c46c-eb1c-4b46-8bd4-e9e686ef5251.png" alt="logo">
        <span v-if="!isCollapse" class="title layout-logo">Vue3+TypeScript实战</span>
    </div>
</template>

<script setup lang="ts">
import MenuBar from './MenuBar.vue'
import {computed} from 'vue'
import {useStore} from '@/store'
const store =useStore()

const isCollapse =computed (()=>{
    return store.getters.getMenuStatus
})

</script>
<style lang="scss" scoped>
.pl-15 {
  padding-left: 15px !important;
}

.logo {
  background-color: #2b2f3a;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  //padding-left: 15px;

  img {
    width: 32px;
    height: 32px;
    margin-right: 12px;
  }

  span {
    font-weight: 600;
    font-size: 14px;
    font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
    vertical-align: middle;
  }
}

@keyframes logoAnimation {
    0% {
        transform: scale(0);
    }

    50% {
        transform: scale(1);
    }

    100% {
        transform: scale(1);
    }
}

.layout-logo {
    animation: logoAnimation 1s ease-out;
}
</style>