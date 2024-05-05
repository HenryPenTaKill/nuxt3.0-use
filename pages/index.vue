<script setup lang="ts">
import {useRouter} from "nuxt/app";

const router = useRouter()
const nuxtApp = useNuxtApp()
// 调用本地接口 获取数据
const {data:typeLists} = await useFetch('/api/stationTypes')
console.log(typeLists,'444444')

</script>

<template>
  <div class="page">
    <ul class="tab-list">
      <li v-for="(item,index) in typeLists" :key="index" class="tab-list-pane">
        {{item.name}}
      </li>
    </ul>
    <img src="../assets/images/bilibili-icons.png"></img>
  </div>
</template>

<style lang="scss">
@import "common/common.scss";
.tab-list {
  display: flex;
  align-items: center;

  .tab-list-pane {
    margin: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

</style>
