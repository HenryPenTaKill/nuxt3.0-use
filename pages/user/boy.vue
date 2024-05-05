<script setup>
// 适配器
const origin = () =>{
  return ["B3","D2","F1","A9","D12","A2","C1","Z0","B1"]
}
// 代理
const list = ref(origin()) //测试数据
const array = origin()

const sortFun = (t) => {
   list.value.sort((a,b) => {
   if(t === 'type'){
      return  a.slice(0,1) > b.slice(0,1) ? 1 : -1
    }else if(t === 'num') {
     return a.slice(1,a.length) - b.slice(1,b.length)
   }
  })
}

</script>

<template>
  <div>
    <div>MikeCrm:数据排列</div>
    <div>源数组：{{array}}</div>
    <button @click="sortFun('type')">按数据类型排序</button>
    <button @click="sortFun('num')">按数据序号排序</button>
    <div>结果：{{list}}</div>
  </div>
</template>

<style>
</style>
