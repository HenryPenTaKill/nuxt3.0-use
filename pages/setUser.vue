<script setup>
// handler proxy劫持 订阅/监听者模式,
let target = {
  name:'john'
}

let handler = {
  get: (target,prop,receiver)=>{
    console.log(`Getting property "${prop}"`);
    return target[prop];
  },
  set: (target, prop, value, receiver) => {
    console.log(`Setting property "${prop}" to ${value}`);

    // 使用reflect可以处理用户的默认设置行为
    return Reflect.set(target, prop, value,receiver)

  }
}

let proxy = new Proxy(target,handler)

proxy.name = 'Tomi'

console.log(proxy.name,'ssssssssssss')


// 适配器模式
const origin = () =>{
  return {
    a:()=>{return '原始数据源 适配器'},
    b:()=>{return {name:'hjk'}}
  }
}

const dealOrigin = () => {
  let deal = origin().b()
  return `${deal.name} 转换 适配器代码被调用`

}

console.log(dealOrigin())

</script>

<template>
  <div>
   个人设置页面
  </div>

</template>

<style lang="scss">


</style>
