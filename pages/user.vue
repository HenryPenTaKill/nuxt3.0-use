<script setup>
const router = useRouter()

// 跳转动态路由
const jumpActive = () => {
  const params = {
    nameInfo : 'annaWhite'
  }
  router.push({ name: 'user-nameInfo', params })
}

// 修改名字页面
const changeName = () =>{
  router.push('/setUser')
}

</script>

<template>
    <div>
      <div @click="jumpActive">用户信息 <span>{{$route.params.nameInfo || 'userName'}}</span></div>
      <NuxtLink @click="changeName" >设置</NuxtLink>
      <nuxt-link to="/user/boy">显示a页面</nuxt-link>
      <nuxt-link to="/user/girl">显示b页面</nuxt-link>

      <NuxtPage></NuxtPage>
    </div>

</template>

<style lang="scss">
@import "common/common.scss";

</style>
