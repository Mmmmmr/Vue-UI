<template>
  <div id="app">
    <guluButton icon="setting" @click="fatherMethod">设置</guluButton>
    <guluButton icon="down">点我启动</guluButton>
  </div>
</template>

<script>
import guluButton from '../src/components/button/button'

export default {
  name: 'app',
  components: {
    guluButton
  },
  methods: {
 
  }
}
</script>

<style lang="scss">

</style>
