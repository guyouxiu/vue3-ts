<template>
  <p>{{ showcount }}</p>
  <button @click="addBtn">增加</button>
  <el-button type="primary">Primary</el-button>
  <el-button type="success">Success</el-button>
  <el-button type="info">Info</el-button>
  <el-button type="warning">Warning</el-button>
  <el-button type="danger">Danger</el-button>
</template>


<script setup lang="ts">
import { ref, computed, } from 'vue'
// 引入useStore
import { useStore } from '@/store/index';
// 初始化store
const store = useStore();

// 获取vuex getters 里面的count
const showcount = computed(() => {
  return store.getters['getCount']
});
//  点击按钮触发的方法
const addBtn = () => {
  store.commit('setCount', ++count.value)
}

// defineProps<{ msg: string }>()

const count = ref(0)

</script>


<style scoped>
.read-the-docs {
  color: #888;
}
</style>
